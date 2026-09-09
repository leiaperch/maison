import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage(); await page.setViewport({ width: 1440, height: 810 });
await page.goto('http://localhost:5188/', { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
const out = [];
for (const y of [0, 2600, 6200, 8600, 8900]) {
  await page.evaluate((y) => window.scrollTo(0, y), y); await new Promise((r) => setTimeout(r, 3000));
  out.push(await page.evaluate((y) => { const v = document.querySelector('.scrub-video'); return { y, scrollY, t: +v.currentTime.toFixed(2), busy: v.dataset.busy, seeking: v.seeking, dur: v.duration, H: document.documentElement.scrollHeight }; }, y));
}
console.log(JSON.stringify(out)); await browser.close();
