// Capture la transition entre deux pièces : se cale au début de la pièce <to>,
// remonte avant la frontière, puis avance par petits pas.
//   node tools/trans.mjs 1 [pas] [nombre]
import puppeteer from 'puppeteer';
const to = +(process.argv[2] || 1);
const step = +(process.argv[3] || 190);
const n = +(process.argv[4] || 12);
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 810 });
const errors = [];
page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
await page.goto('http://localhost:5188/?capture', { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await new Promise((r) => setTimeout(r, 1200));
await page.evaluate((i) => document.querySelector(`#rooms-nav button[data-room="${i}"]`).click(), to);
await new Promise((r) => setTimeout(r, 5000));
await page.evaluate((d) => scrollBy(0, -d), step * n * 0.55);
await new Promise((r) => setTimeout(r, 3000));
for (let k = 0; k < n; k++) {
  await page.screenshot({ path: `tools/t_${to}_${String(k).padStart(2, '0')}.jpg`, type: 'jpeg', quality: 82 });
  await page.evaluate((d) => scrollBy(0, d), step);
  await new Promise((r) => setTimeout(r, 1100));
}
console.log(JSON.stringify({ to, errors }));
await browser.close();
