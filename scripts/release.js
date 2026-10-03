import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const pkgPath = path.join(rootDir, 'package.json');
const lockPath = path.join(rootDir, 'package-lock.json');
const versionTsPath = path.join(rootDir, 'src', 'version.ts');

const run = (cmd) => execSync(cmd, { cwd: rootDir, stdio: 'inherit' });

const bump = process.argv.slice(2).find((a) => ['patch', 'minor', 'major'].includes(a));

function nextVersion(version, type) {
  const [major, minor, patch] = version.split('.').map(Number);
  if (type === 'major') return `${major + 1}.0.0`;
  if (type === 'minor') return `${major}.${minor + 1}.0`;
  return `${major}.${minor}.${patch + 1}`;
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

if (bump) {
  const dirty = execSync('git status --porcelain', { cwd: rootDir }).toString().trim();
  if (dirty) {
    console.error('[Release] Working tree is dirty. Commit or stash changes before bumping.');
    process.exit(1);
  }

  const next = nextVersion(pkg.version, bump);
  pkg.version = next;
  fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

  const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
  lock.version = next;
  if (lock.packages && lock.packages['']) lock.packages[''].version = next;
  fs.writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`);

  const versionTs = fs.readFileSync(versionTsPath, 'utf8');
  fs.writeFileSync(versionTsPath, versionTs.replace(/APP_VERSION = '[^']+'/, `APP_VERSION = '${next}'`));

  run('git add package.json package-lock.json src/version.ts');
  run(`git commit -m "chore: release v${next}"`);
  console.log(`[Release] Bumped version to ${next}.`);
}

const { version } = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const tag = `v${version}`;

const existing = execSync('git tag -l', { cwd: rootDir }).toString().split('\n').map((t) => t.trim());
if (existing.includes(tag)) {
  console.error(`[Release] Tag ${tag} already exists.`);
  process.exit(1);
}

run(`git tag -a ${tag} -m "FlightMap ${tag}"`);
run('git push origin HEAD');
run(`git push origin ${tag}`);

console.log(`\n[Release] Pushed ${tag}. GitHub Actions is building and publishing the release.`);
