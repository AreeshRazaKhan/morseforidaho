const { chromium, devices } = require('playwright')

const TARGET_URL = process.env.TARGET_URL || 'https://www.morseforidaho.com/'
const SETTLE_MS = 4000

const INIT_SCRIPT = `
  (() => {
    function describeNode(el) {
      if (!el || !el.tagName) return String(el || 'unknown')
      let s = el.tagName.toLowerCase()
      if (el.id) s += '#' + el.id
      if (el.classList && el.classList.length) {
        s += '.' + [...el.classList].slice(0, 4).join('.')
      }
      const txt = (el.innerText || '').trim().replace(/\\s+/g, ' ').slice(0, 60)
      if (txt) s += ' "' + txt + '"'
      return s
    }
    window.__perf = { lcp: 0, cls: 0, clsEntries: [] }
    try {
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) window.__perf.lcp = e.startTime
      }).observe({ type: 'largest-contentful-paint', buffered: true })
    } catch (err) {}
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.hadRecentInput) continue
          window.__perf.cls += entry.value
          const sources = (entry.sources || []).map((s) => ({
            node: describeNode(s.node),
            previousRect: s.previousRect
              ? { x: Math.round(s.previousRect.x), y: Math.round(s.previousRect.y),
                  w: Math.round(s.previousRect.width), h: Math.round(s.previousRect.height) }
              : null,
            currentRect: s.currentRect
              ? { x: Math.round(s.currentRect.x), y: Math.round(s.currentRect.y),
                  w: Math.round(s.currentRect.width), h: Math.round(s.currentRect.height) }
              : null,
          }))
          window.__perf.clsEntries.push({
            value: entry.value,
            startTime: Math.round(entry.startTime),
            sources,
          })
        }
      }).observe({ type: 'layout-shift', buffered: true })
    } catch (err) {}
  })()
`

const COLLECT = () => {
  const nav = performance.getEntriesByType('navigation')[0] || {}
  const paints = Object.fromEntries(
    performance.getEntriesByType('paint').map((p) => [p.name, p.startTime]),
  )
  const resources = performance.getEntriesByType('resource').map((r) => ({
    name: r.name,
    initiatorType: r.initiatorType,
    transferSize: r.transferSize || 0,
    encodedBodySize: r.encodedBodySize || 0,
    duration: r.duration,
  }))
  return {
    ttfb: nav.responseStart != null && nav.requestStart != null
      ? nav.responseStart - nav.requestStart : null,
    fcp: paints['first-contentful-paint'] || null,
    domContentLoaded: nav.domContentLoadedEventEnd || null,
    loadEvent: nav.loadEventEnd || null,
    docTransferSize: nav.transferSize || 0,
    lcp: window.__perf.lcp,
    cls: window.__perf.cls,
    clsEntries: window.__perf.clsEntries,
    resources,
  }
}

const categorize = (resources, docBytes) => {
  const groups = { document: docBytes, script: 0, stylesheet: 0, image: 0, font: 0, other: 0 }
  const counts = { document: 1, script: 0, stylesheet: 0, image: 0, font: 0, other: 0 }
  const fontRe = /\.(woff2?|ttf|otf|eot)(\?|$)/i
  const imgRe = /\.(png|jpe?g|gif|svg|webp|avif|ico)(\?|$)/i
  const cssRe = /\.css(\?|$)/i
  const jsRe = /\.m?js(\?|$)/i
  for (const r of resources) {
    const size = r.transferSize || 0
    const url = r.name
    let bucket = 'other'
    if (r.initiatorType === 'script' || jsRe.test(url)) bucket = 'script'
    else if (r.initiatorType === 'css' || cssRe.test(url)) bucket = 'stylesheet'
    else if (r.initiatorType === 'img' || imgRe.test(url)) bucket = 'image'
    else if (fontRe.test(url)) bucket = 'font'
    else if (r.initiatorType === 'link' && cssRe.test(url)) bucket = 'stylesheet'
    else if (r.initiatorType === 'link' && fontRe.test(url)) bucket = 'font'
    groups[bucket] += size
    counts[bucket] += 1
  }
  return { groups, counts }
}

const runProfile = async (name, contextOptions, applyThrottle) => {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext(contextOptions)
  const page = await context.newPage()
  await page.addInitScript({ content: INIT_SCRIPT })

  const client = await context.newCDPSession(page)
  await client.send('Network.enable')
  if (applyThrottle) await applyThrottle(client)

  const t0 = Date.now()
  let navError = null
  try {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 90000 })
  } catch (err) {
    navError = err.message
  }
  const navMs = Date.now() - t0

  await page.waitForTimeout(SETTLE_MS)
  const data = await page.evaluate(COLLECT)
  const title = await page.title()

  await browser.close()

  const { groups, counts } = categorize(data.resources, data.docTransferSize)
  const totalBytes = Object.values(groups).reduce((a, b) => a + b, 0)

  return { profile: name, navError, navMs, title, ...data, groups, counts, totalBytes }
}

const fmtMs = (v) => (v == null ? 'n/a' : `${Math.round(v)} ms`)
const fmtKb = (v) => `${(v / 1024).toFixed(1)} KB`
const pad = (s, n) => String(s).padEnd(n)

const printSummary = (mobile, desktop) => {
  console.log(`\nTarget: ${TARGET_URL}`)
  console.log(`\n======== CORE WEB VITALS (side-by-side) ========`)
  const rows = [
    ['Nav wall-clock', fmtMs(mobile.navMs), fmtMs(desktop.navMs)],
    ['TTFB', fmtMs(mobile.ttfb), fmtMs(desktop.ttfb)],
    ['FCP', fmtMs(mobile.fcp), fmtMs(desktop.fcp)],
    ['LCP', fmtMs(mobile.lcp), fmtMs(desktop.lcp)],
    ['DOMContentLoaded', fmtMs(mobile.domContentLoaded), fmtMs(desktop.domContentLoaded)],
    ['loadEvent', fmtMs(mobile.loadEvent), fmtMs(desktop.loadEvent)],
    ['CLS', mobile.cls.toFixed(4), desktop.cls.toFixed(4)],
  ]
  console.log(`${pad('Metric', 22)} ${pad('MOBILE (4G + 4x CPU)', 26)} ${pad('DESKTOP (no throttle)', 22)}`)
  console.log('-'.repeat(72))
  for (const [k, a, b] of rows) {
    console.log(`${pad(k, 22)} ${pad(a, 26)} ${pad(b, 22)}`)
  }

  console.log(`\n======== RESOURCE WEIGHT ========`)
  console.log(`${pad('Type', 14)} ${pad('MOBILE count/KB', 24)} ${pad('DESKTOP count/KB', 24)}`)
  console.log('-'.repeat(64))
  const types = ['document', 'script', 'stylesheet', 'image', 'font', 'other']
  for (const t of types) {
    const mLine = `${mobile.counts[t]} files / ${fmtKb(mobile.groups[t])}`
    const dLine = `${desktop.counts[t]} files / ${fmtKb(desktop.groups[t])}`
    console.log(`${pad(t, 14)} ${pad(mLine, 24)} ${pad(dLine, 24)}`)
  }
  console.log('-'.repeat(64))
  console.log(`${pad('TOTAL', 14)} ${pad(fmtKb(mobile.totalBytes), 24)} ${pad(fmtKb(desktop.totalBytes), 24)}`)

  for (const run of [mobile, desktop]) {
    console.log(`\n======== CLS SOURCES — ${run.profile} (total ${run.cls.toFixed(4)}) ========`)
    if (!run.clsEntries.length) {
      console.log('  (no layout shifts observed)')
      continue
    }
    for (const e of run.clsEntries) {
      console.log(`\n  shift=${e.value.toFixed(4)} @ ${e.startTime}ms`)
      for (const s of e.sources) {
        const pr = s.previousRect
        const cr = s.currentRect
        const move = pr && cr ? `(${pr.x},${pr.y} ${pr.w}x${pr.h}) → (${cr.x},${cr.y} ${cr.w}x${cr.h})` : ''
        console.log(`    ↳ ${s.node}`)
        if (move) console.log(`        ${move}`)
      }
    }
  }

  if (mobile.navError) console.log(`\n[!] Mobile nav error: ${mobile.navError}`)
  if (desktop.navError) console.log(`\n[!] Desktop nav error: ${desktop.navError}`)
}

;(async () => {
  console.log('Running MOBILE profile (iPhone 13, 4G throttling, 4x CPU slowdown)...')
  const mobile = await runProfile(
    'MOBILE',
    { ...devices['iPhone 13'] },
    async (client) => {
      await client.send('Network.emulateNetworkConditions', {
        offline: false,
        downloadThroughput: (1.6 * 1000 * 1000) / 8,
        uploadThroughput: (750 * 1000) / 8,
        latency: 150,
      })
      await client.send('Emulation.setCPUThrottlingRate', { rate: 4 })
    },
  )
  console.log(`  done — LCP ${Math.round(mobile.lcp)}ms, CLS ${mobile.cls.toFixed(4)}`)

  console.log('\nRunning DESKTOP profile (1920x1080, no throttle)...')
  const desktop = await runProfile(
    'DESKTOP',
    { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 },
    null,
  )
  console.log(`  done — LCP ${Math.round(desktop.lcp)}ms, CLS ${desktop.cls.toFixed(4)}`)

  printSummary(mobile, desktop)
})().catch((err) => {
  console.error('[perf.js]:', err)
  process.exit(1)
})
