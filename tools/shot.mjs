// Capture d une pièce avec ses objets. Une pièce = 10 hauteurs de fenêtre de
// scroll (le pin fait 1000 % par pièce) : sous-estimer ce facteur fait juger les
// derniers objets « hors cadre » alors qu on ne les a pas encore atteints. : node tools/shot.mjs <room> <plusieurs pl>
import puppeteer from 'puppeteer';
const room = +(process.argv[2] || 0);
const pls = (process.argv[3] || '0.35,0.7').split(',').map(Number);
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 810 });
const errors = [];
page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
await page.goto('http://localhost:5188/?capture', { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await new Promise((r) => setTimeout(r, 1200));
await page.evaluate((n) => document.querySelector(`#rooms-nav button[data-room="${n}"]`).click(), room);
await new Promise((r) => setTimeout(r, 5000));
let at = 0.01;
for (const pl of pls) {
  await page.evaluate((d) => scrollBy(0, d), (pl - at) * 10 * 810); at = pl;
  await new Promise((r) => setTimeout(r, 3000));
  await page.screenshot({ path: `tools/s_${room}_${pl}.jpg`, type: 'jpeg', quality: 85 });
}
console.log(JSON.stringify({ room, errors }));
await browser.close();
