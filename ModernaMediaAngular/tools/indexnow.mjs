// Submits every URL in the sitemap to IndexNow (Bing, Yandex, Seznam, Naver, ...).
// Runs after a deploy; the key file is served from the site root.
import { readFileSync } from 'node:fs';

const HOST = 'modernamedia.no';
const KEY = '1435d8d3dc63085d1c3b85e5e52be65c';

const sitemap = readFileSync(new URL('../src/sitemap.xml', import.meta.url), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs, status ${response.status}`);
if (!response.ok && response.status !== 202) {
  console.log(await response.text());
  process.exit(1);
}
