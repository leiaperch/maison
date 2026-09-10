// Capture du salon avec le fauteuil sélectionné et son panneau de matières.
import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage(); await page.setViewport({ width: 1440, height: 810 });
await page.goto('http://localhost:5188/?capture', { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await new Promise((r) => setTimeout(r, 1500));
await page.evaluate(() => document.querySelector('#rooms-nav button[data-room="0"]').click());
await new Promise((r) => setTimeout(r, 4000));
await page.evaluate(() => scrollBy(0, 0.5 * 10 * 810));
await new Promise((r) => setTimeout(r, 2500));
await page.evaluate(() => document.querySelector('#room-index button[data-id="chair"]').click());
await new Promise((r) => setTimeout(r, 2500));
await page.evaluate(() => { const s = document.querySelectorAll('#panel-rows .swatch'); if (s[2]) s[2].click(); });
await new Promise((r) => setTimeout(r, 1200));
await page.screenshot({ path: 'tools/s_focus.jpg', type: 'jpeg', quality: 88 });
await browser.close(); console.log('ok');
