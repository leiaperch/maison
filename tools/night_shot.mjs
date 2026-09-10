// Capture jour puis nuit d'une pièce, au même point du parcours : node tools/night_shot.mjs <room> [pl]
import puppeteer from 'puppeteer';
const room = +(process.argv[2] || 0), pl = +(process.argv[3] || 0.5);
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage(); await page.setViewport({ width: 1440, height: 810 });
const errors = []; page.on('pageerror', (e) => errors.push(e.message));
await page.goto('http://localhost:5188/?capture', { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await page.waitForFunction(() => !document.getElementById('mode').disabled, { timeout: 180000 });
await page.evaluate((n) => document.querySelector(`#rooms-nav button[data-room="${n}"]`).click(), room);
await new Promise((r) => setTimeout(r, 4000));
await page.evaluate((d) => scrollBy(0, d), (pl - 0.01) * 10 * 810);
await new Promise((r) => setTimeout(r, 3000));
await page.screenshot({ path: `tools/n_${room}_day.jpg`, type: 'jpeg', quality: 85 });
await page.click('#mode');
await new Promise((r) => setTimeout(r, 3500));
await page.screenshot({ path: `tools/n_${room}_night.jpg`, type: 'jpeg', quality: 85 });
console.log(JSON.stringify({ room, errors, night: await page.evaluate(() => document.body.classList.contains('night')) }));
await browser.close();
