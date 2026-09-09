// Calage par pièce : ouvre ?calib&room=N (+ overrides), va au début de la pièce
// via la liste des pièces, et capture tools/cal_<N>.jpg.
// node tools/cal2.mjs 1 "fov=76&height=1.4&pitch=2.2&yaw=16" [progressLocale]
import puppeteer from 'puppeteer';
const room = +(process.argv[2] || 0);
const q = process.argv[3] || '';
const pl = process.argv[4] === undefined ? 0.02 : +process.argv[4];
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 810 });
const errors = [];
page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
await page.goto(`http://localhost:5188/?capture&calib&room=${room}&${q}`, { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await new Promise((r) => setTimeout(r, 1200));
// début de la pièce : la liste des pièces sait où c'est
await page.evaluate((n) => document.querySelector(`#rooms-nav button[data-room="${n}"]`).click(), room);
await new Promise((r) => setTimeout(r, 5000));
// avance dans la pièce si demandé
if (pl > 0.02) {
  await page.evaluate((extra) => scrollBy(0, extra), (pl - 0.01) * 10 * 810);
  await new Promise((r) => setTimeout(r, 2500));
}
const on = await page.evaluate(() => document.querySelector('#rooms-nav button.on')?.textContent);
await page.screenshot({ path: `tools/cal_${room}.jpg`, type: 'jpeg', quality: 85 });
console.log(JSON.stringify({ room, on, errors }));
await browser.close();
