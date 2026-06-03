import { readFileSync } from 'node:fs'

const pct = (n) => (n == null ? 'n/a' : Math.round(n * 100))

const summarize = (label, path) => {
  const r = JSON.parse(readFileSync(path, 'utf8'))
  const cat = r.categories
  const a = r.audits

  console.log(`\n=== ${label} ===`)
  console.log(`URL:            ${r.finalDisplayedUrl || r.finalUrl}`)
  console.log(`Fetch time:     ${r.fetchTime}`)
  console.log(`LH version:     ${r.lighthouseVersion}`)
  console.log(`Form factor:    ${r.configSettings?.formFactor}`)
  console.log(`\n-- Category scores --`)
  console.log(`Performance:     ${pct(cat.performance?.score)}`)
  console.log(`Accessibility:   ${pct(cat.accessibility?.score)}`)
  console.log(`Best Practices:  ${pct(cat['best-practices']?.score)}`)
  console.log(`SEO:             ${pct(cat.seo?.score)}`)

  const metricKeys = [
    ['first-contentful-paint', 'FCP'],
    ['largest-contentful-paint', 'LCP'],
    ['total-blocking-time', 'TBT'],
    ['cumulative-layout-shift', 'CLS'],
    ['speed-index', 'Speed Index'],
    ['interactive', 'TTI'],
  ]
  console.log(`\n-- Core lab metrics --`)
  for (const [id, name] of metricKeys) {
    const x = a[id]
    if (!x) continue
    console.log(`${name.padEnd(14)} ${x.displayValue ?? x.numericValue} (score ${pct(x.score)})`)
  }

  console.log(`\n-- Top perf opportunities/diagnostics (by est. savings) --`)
  const refs = cat.performance?.auditRefs || []
  const opps = refs
    .filter((ref) => ref.group === 'load-opportunities' || ref.group === 'diagnostics')
    .map((ref) => a[ref.id])
    .filter((x) => x && x.score !== 1 && x.scoreDisplayMode !== 'notApplicable' && x.scoreDisplayMode !== 'informative')
    .map((x) => ({
      title: x.title,
      savingsMs: x.details?.overallSavingsMs ?? x.numericValue ?? 0,
      savingsBytes: x.details?.overallSavingsBytes ?? 0,
      displayValue: x.displayValue,
    }))
    .sort((p, q) => (q.savingsMs || 0) - (p.savingsMs || 0))
    .slice(0, 8)

  for (const o of opps) {
    const ms = o.savingsMs ? ` ~${Math.round(o.savingsMs)}ms` : ''
    const kb = o.savingsBytes ? ` / ${Math.round(o.savingsBytes / 1024)}KB` : ''
    const disp = o.displayValue ? ` (${o.displayValue})` : ''
    console.log(`- ${o.title}${ms}${kb}${disp}`)
  }
}

summarize('MOBILE', '.tmp/psi/mobile.json')
summarize('DESKTOP', '.tmp/psi/desktop.json')
