import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'public', 'icons');

const BG_TOP = '#04101f';
const BG_BOTTOM = '#02060d';

/**
 * Emblem shared by all sizes: a cyan wireframe globe with a top-down jet.
 */
const EMBLEM = `
  <g>
    <circle cx="256" cy="256" r="152" fill="none" stroke="url(#globe)" stroke-width="17"/>
    <ellipse cx="256" cy="256" rx="152" ry="58" fill="none" stroke="url(#globe)" stroke-width="9" opacity="0.7"/>
    <ellipse cx="256" cy="256" rx="58" ry="152" fill="none" stroke="url(#globe)" stroke-width="9" opacity="0.7"/>
    <path d="M256 118
             C267 118 273 127 274 142
             L277 232 L366 280 L366 302 L277 280
             L277 340 L316 372 L316 392 L256 375
             L196 392 L196 372 L235 340
             L235 280 L146 302 L146 280 L235 232
             L238 142 C239 127 245 118 256 118 Z"
          fill="#ffffff"/>
  </g>
`;

function svg({ rounded = true, maskable = false } = {}) {
  const bg = rounded
    ? `<rect width="512" height="512" rx="116" fill="url(#bg)"/>`
    : `<rect width="512" height="512" fill="url(#bg)"/>`;
  const content = maskable
    ? `<g transform="translate(256 256) scale(0.62) translate(-256 -256)">${EMBLEM}</g>`
    : EMBLEM;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${BG_TOP}"/>
        <stop offset="1" stop-color="${BG_BOTTOM}"/>
      </linearGradient>
      <linearGradient id="globe" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#00e5ff"/>
        <stop offset="1" stop-color="#0284c7"/>
      </linearGradient>
    </defs>
    ${bg}
    ${content}
  </svg>`;
}

const targets = [
  { file: 'pwa-192x192.png', size: 192, opts: { rounded: true } },
  { file: 'pwa-512x512.png', size: 512, opts: { rounded: true } },
  { file: 'maskable-512x512.png', size: 512, opts: { rounded: false, maskable: true } },
  { file: 'apple-touch-icon.png', size: 180, opts: { rounded: false } },
  { file: 'favicon-48x48.png', size: 48, opts: { rounded: true } }
];

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  for (const t of targets) {
    const buffer = Buffer.from(svg(t.opts));
    await sharp(buffer)
      .resize(t.size, t.size)
      .png({ compressionLevel: 9 })
      .toFile(path.join(outDir, t.file));
    console.log(`[Icons] ${t.file.padEnd(24)} ${t.size}x${t.size}`);
  }

  console.log(`\n[Icons] Generated ${targets.length} icons in public/icons`);
}

main().catch((err) => {
  console.error('[Icons] Error:', err);
  process.exit(1);
});
