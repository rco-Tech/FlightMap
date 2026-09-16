import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const srcDir = path.join(rootDir, 'public', 'assets', 'textures');
const outDir = path.join(srcDir, 'mobile');

// Downscaled "mobile" tier: identical filenames to the full tier so the runtime
// can swap the base path transparently (see src/engine/TextureTier.ts).
// High-fidelity 4K "mobile" tier: 4096x2048 crisp textures with high JPEG quality (mozjpeg)
// and Lanczos3 anti-aliasing. Provides razor-sharp visuals on OLED/Retina mobile displays
// without 8K VRAM overhead.
const targets = [
  { file: 'earth_day.jpg', width: 4096, height: 2048, format: 'jpeg', quality: 90 },
  { file: 'earth_night.jpg', width: 4096, height: 2048, format: 'jpeg', quality: 92 },
  { file: 'earth_clouds.jpg', width: 4096, height: 2048, format: 'jpeg', quality: 88 },
  { file: 'earth_bump.jpg', width: 4096, height: 2048, format: 'jpeg', quality: 86 },
  { file: 'earth_specular.png', width: 2048, height: 1024, format: 'png' }
];

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  let totalBytes = 0;
  let built = 0;

  for (const t of targets) {
    const srcPath = path.join(srcDir, t.file);
    if (!fs.existsSync(srcPath)) {
      console.warn(`[Mobile Tier] Skipped ${t.file} (source not found)`);
      continue;
    }

    const destPath = path.join(outDir, t.file);
    let pipeline = sharp(srcPath).resize(t.width, t.height, {
      fit: 'fill',
      kernel: 'lanczos3'
    });

    if (t.format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality: t.quality, mozjpeg: true });
    } else {
      pipeline = pipeline.png({ compressionLevel: 9, palette: true });
    }

    await pipeline.toFile(destPath);

    const sizeKB = fs.statSync(destPath).size / 1024;
    totalBytes += fs.statSync(destPath).size;
    built++;
    console.log(
      `[Mobile Tier] ${t.file.padEnd(20)} -> ${t.width}x${t.height}  ${sizeKB.toFixed(1)} KB`
    );
  }

  console.log(
    `\n[Mobile Tier] Generated ${built} files (${(totalBytes / 1024 / 1024).toFixed(2)} MB) in public/assets/textures/mobile`
  );
}

main().catch((err) => {
  console.error('[Mobile Tier] Error:', err);
  process.exit(1);
});
