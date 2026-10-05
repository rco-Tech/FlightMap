import './start.css';
import { AppMode, getMode, setMode, isStandaloneDisplay } from './mode';
import { APP_VERSION, APP_RELEASE_STRING } from './version';

interface ModeOption {
  id: AppMode;
  icon: string;
  name: string;
  desc: string;
  href: string;
}

const OPTIONS: ModeOption[] = [
  {
    id: 'map',
    icon: '🌐',
    name: 'Moving Map',
    desc: 'Render the full 3D in-flight moving map on this device using its own satellite GNSS. No laptop required.',
    href: `${import.meta.env.BASE_URL}index.html`
  },
  {
    id: 'relay',
    icon: '📡',
    name: 'GPS Relay',
    desc: 'Stream this device’s GNSS + gyro to a laptop running FlightMap as a live telemetry transmitter.',
    href: `${import.meta.env.BASE_URL}mobile.html`
  }
];

function launch(mode: ModeOption): void {
  setMode(mode.id);
  window.location.href = mode.href;
}

function render(): void {
  const root = document.getElementById('start-app');
  if (!root) return;

  const last = getMode();
  const installHint = isStandaloneDisplay()
    ? ''
    : 'Tip: use your browser menu → <strong>Add to Home Screen</strong> to install FlightMap as a standalone app.';

  root.innerHTML = `
    <div class="start-root">
      <header class="start-header">
        <div class="start-eyebrow">rTech Systems</div>
        <h1 class="start-title">FLIGHTMAP</h1>
        <p class="start-subtitle">Offline 3D In-Flight Moving Map • Select operating mode</p>
        <button class="version-pill" id="version-pill" type="button" title="Check for updates">
          <span class="version-dot"></span>${APP_RELEASE_STRING}
        </button>
        <div class="version-hint">Tap to check for updates</div>
      </header>

      <div class="mode-grid" id="mode-grid"></div>

      <footer class="start-footer">
        ${installHint}
        <div style="margin-top:10px;">
          Earth imagery © Solar System Scope, NASA-derived, CC BY 4.0.
        </div>
      </footer>
    </div>
  `;

  const grid = document.getElementById('mode-grid')!;
  for (const option of OPTIONS) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'mode-card' + (last === option.id ? ' is-last' : '');
    card.innerHTML = `
      ${last === option.id ? '<span class="mode-badge">Last used</span>' : ''}
      <span class="mode-icon">${option.icon}</span>
      <div class="mode-name">${option.name}</div>
      <p class="mode-desc">${option.desc}</p>
    `;
    card.addEventListener('click', () => launch(option));
    grid.appendChild(card);
  }

  initVersionPill();
}

/**
 * Release badge — shows the same release string as the map's About dialog so
 * the latest deployed version can be double-checked right from the PWA start
 * screen. Tapping forces a service-worker update check and refreshes.
 */
function initVersionPill(): void {
  const pill = document.getElementById('version-pill') as HTMLButtonElement | null;
  if (!pill) return;

  const restore = () => {
    pill.classList.remove('checking', 'uptodate');
    pill.innerHTML = `<span class="version-dot"></span>${APP_RELEASE_STRING}`;
  };

  pill.addEventListener('click', async () => {
    if (pill.classList.contains('checking')) return;
    pill.classList.add('checking');
    pill.textContent = 'CHECKING FOR UPDATES…';

    try {
      const reg = 'serviceWorker' in navigator ? await navigator.serviceWorker.getRegistration() : undefined;
      if (!reg) {
        // Dev / SW disabled (localhost guard): plain refresh.
        pill.textContent = 'REFRESHING…';
        window.setTimeout(() => window.location.reload(), 500);
        return;
      }

      let updateFound = false;
      reg.addEventListener('updatefound', () => {
        updateFound = true;
      });
      await reg.update();

      if (updateFound || reg.installing || reg.waiting) {
        // New worker installs with skipWaiting + clientsClaim; the SW layer
        // auto-reloads on controllerchange — nudge it along as a fallback.
        pill.textContent = 'UPDATE FOUND — REFRESHING…';
        window.setTimeout(() => window.location.reload(), 1800);
        return;
      }

      pill.classList.remove('checking');
      pill.classList.add('uptodate');
      pill.textContent = `✓ UP TO DATE — v${APP_VERSION}`;
      window.setTimeout(restore, 2400);
    } catch {
      restore();
    }
  });
}

render();
