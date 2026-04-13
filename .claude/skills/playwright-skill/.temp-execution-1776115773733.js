const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const ctx = await browser.newContext({ viewport: { width: 768, height: 1024 } })
  const page = await ctx.newPage()
  await page.goto('http://localhost:3002/', { waitUntil: 'networkidle' })
  const nav = await page.evaluate(() => {
    const logo = document.querySelector('header a[aria-label]')
    const links = document.querySelectorAll('header ul li a')
    const cta = document.querySelector('header a[href="/volunteer"]')
    const burger = document.querySelector('header button[aria-controls]')
    return {
      logo: logo && { ...logo.getBoundingClientRect().toJSON(), visible: logo.offsetWidth > 0 },
      linkCount: links.length,
      linkVisible: Array.from(links).map((a) => a.offsetWidth > 0),
      cta: cta && { right: cta.getBoundingClientRect().right, w: cta.offsetWidth },
      burger: burger && { visible: burger.offsetWidth > 0, right: burger.getBoundingClientRect().right },
      headerRight: document.querySelector('header nav').getBoundingClientRect().right,
    }
  })
  console.log(JSON.stringify(nav, null, 2))
  await page.screenshot({ path: 'C:/Users/Dev/AppData/Local/Temp/mfi-audit-close/t_nav_debug.png', clip: { x: 0, y: 0, width: 768, height: 80 } })
  await browser.close()
})()
