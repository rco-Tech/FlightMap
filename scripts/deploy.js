import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('[Deploy] Building FlightMap for GitHub Pages...');
execSync('npm run build', {
  cwd: rootDir,
  stdio: 'inherit',
  env: { ...process.env, GITHUB_PAGES: 'true' }
});

// Add .nojekyll and 404.html
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));

console.log('[Deploy] Publishing to gh-pages branch...');
execSync('git init', { cwd: distDir, stdio: 'inherit' });
execSync('git config user.name "rco-Tech"', { cwd: distDir, stdio: 'inherit' });
execSync('git config user.email "robert.oros@live.com"', { cwd: distDir, stdio: 'inherit' });
const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
execSync('git remote add origin https://github.com/rco-Tech/FlightMap.git', { cwd: distDir, stdio: 'inherit' });
execSync('git branch -M gh-pages', { cwd: distDir, stdio: 'inherit' });
execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
execSync(`git commit -m "deploy: release v${pkg.version}"`, { cwd: distDir, stdio: 'inherit' });
execSync('git push -u --force origin gh-pages', { cwd: distDir, stdio: 'inherit' });

fs.rmSync(path.join(distDir, '.git'), { recursive: true, force: true });
console.log('[Deploy] Successfully deployed to GitHub Pages!');
