#!/usr/bin/env node
/**
 * Download images from streamingfestival.it into _harvested/images/
 * Run: node scripts/download-assets.mjs
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const outDir = path.join(repoRoot, '_harvested', 'images');

function download(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'StreamingFestival-Harvest/1.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`${url} => ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
  });
}

function sanitizeFilename(urlPath) {
  const name = path.basename(urlPath.replace(/\?.*$/, ''));
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

async function main() {
  const dataPath = path.join(__dirname, 'image-urls.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const base = data.baseUrl.replace(/\/$/, '');

  for (const { url: urlPath, folder } of data.images) {
    const fullUrl = base + urlPath;
    const filename = sanitizeFilename(urlPath);
    const dir = path.join(outDir, folder);
    const filepath = path.join(dir, filename);

    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    try {
      process.stdout.write(`Downloading ${filename} -> ${folder}/ ... `);
      const buf = await download(fullUrl);
      fs.writeFileSync(filepath, buf);
      console.log('OK');
    } catch (err) {
      console.log('FAIL:', err.message);
    }
  }

  console.log('\nDone. Images in', outDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
