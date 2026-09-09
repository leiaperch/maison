// Balayage de calage : rend la mire pour plusieurs (pitch, height) et assemble
// une planche contact. node tools/sweep.mjs <room> "<p1,p2,..>" "<h1,h2,..>" [fov]
import puppeteer from 'puppeteer';
import fs from 'node:fs';
const room = +(process.argv[2] || 0);
const pitches = (process.argv[3] || '0').split(',').map(Number);
const heights = (process.argv[4] || '1.4').split(',').map(Number);
const fov = process.argv[5] || '76';
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 810 });
const names = [];
for (const h of heights) for (const p of pitches) {
  const q = `fov=${fov}&height=${h}&pitch=${p}&yaw=0`;
  await page.goto(`http://localhost:5188/?capture&calib&room=${room}&${q}`, { waitUntil: 'networkidle2', timeout: 180000 });
  await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
  await new Promise((r) => setTimeout(r, 1000));
  await page.evaluate((n) => document.querySelector(`#rooms-nav button[data-room="${n}"]`).click(), room);
  await new Promise((r) => setTimeout(r, 4500));
  const f = `tools/sw_${room}_${h}_${p}.jpg`;
  await page.screenshot({ path: f, type: 'jpeg', quality: 82 });
  names.push([f, `h=${h} pitch=${p}`]);
}
fs.writeFileSync('tools/sweep.json', JSON.stringify(names));
console.log(JSON.stringify(names.map((n) => n[1])));
await browser.close();
