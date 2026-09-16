import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const texturesDir = path.join(rootDir, 'public', 'assets', 'textures');
const dataDir = path.join(rootDir, 'public', 'assets', 'data');

fs.mkdirSync(texturesDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

const downloads = [
  // High-resolution surface imagery (8192x4096) from the Solar System Scope set,
  // based on NASA elevation/imagery data and published under CC BY 4.0.
  {
    url: 'https://raw.githubusercontent.com/cmaughan/draxul-satview/main/assets/textures/earth_day_8k.jpg',
    dest: path.join(texturesDir, 'earth_day.jpg')
  },
  {
    url: 'https://raw.githubusercontent.com/cmaughan/draxul-satview/main/assets/textures/earth_night_8k.jpg',
    dest: path.join(texturesDir, 'earth_night.jpg')
  },
  {
    url: 'https://raw.githubusercontent.com/cmaughan/draxul-satview/main/assets/textures/earth_clouds_8k.jpg',
    dest: path.join(texturesDir, 'earth_clouds.jpg')
  },
  {
    url: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg',
    dest: path.join(texturesDir, 'earth_normal.jpg')
  },
  {
    url: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg',
    dest: path.join(texturesDir, 'earth_specular.jpg')
  },
  {
    url: 'https://raw.githubusercontent.com/vasturiano/three-globe/master/example/country-polygons/ne_110m_admin_0_countries.geojson',
    dest: path.join(dataDir, 'countries.geojson')
  },
  {
    url: 'https://raw.githubusercontent.com/mwgg/Airports/master/airports.json',
    dest: path.join(dataDir, 'airports_raw.json')
  }
];

async function downloadFile(url, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log(`[Asset Ready] ${path.basename(dest)} already exists (${(fs.statSync(dest).size / 1024).toFixed(1)} KB)`);
    return;
  }
  console.log(`[Downloading] ${url} -> ${path.basename(dest)}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(arrayBuffer));
  console.log(`[Saved] ${path.basename(dest)} (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB)`);
}

async function processAirports() {
  const rawPath = path.join(dataDir, 'airports_raw.json');
  const processedPath = path.join(dataDir, 'airports.json');
  
  if (!fs.existsSync(rawPath)) return;
  console.log('[Processing] Optimizing airport database for flight planning...');
  const rawData = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
  
  const optimized = [];
  for (const [icao, apt] of Object.entries(rawData)) {
    // Only include airports that have IATA or significant runway/country presence
    if (apt.iata && apt.iata.length === 3 && apt.lat && apt.lon) {
      optimized.push({
        iata: apt.iata,
        icao: icao || apt.icao || '',
        name: apt.name || '',
        city: apt.city || '',
        country: apt.country || '',
        lat: parseFloat(apt.lat),
        lon: parseFloat(apt.lon),
        elevation: parseInt(apt.elevation || '0', 10),
        tz: apt.tz || 'UTC'
      });
    }
  }

  // Sort by IATA
  optimized.sort((a, b) => a.iata.localeCompare(b.iata));
  fs.writeFileSync(processedPath, JSON.stringify(optimized));
  console.log(`[Processed] Optimized ${optimized.length} commercial airports into airports.json (${(fs.statSync(processedPath).size / 1024).toFixed(1)} KB)`);
}

async function main() {
  try {
    for (const item of downloads) {
      await downloadFile(item.url, item.dest);
    }
    await processAirports();
    console.log('\nAll offline assets successfully downloaded and cached locally!');
    console.log('Next: run "npm run assets:mobile" and "npm run icons" (or "npm run assets:all") to build the mobile texture tier and PWA icons.');
  } catch (err) {
    console.error('Error during asset setup:', err);
    process.exit(1);
  }
}

main();
