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
        <div class="update-check" id="update-check" data-state="checking">
          <div class="uc-row">
            <span class="uc-dot"></span>
            <span class="uc-text" id="uc-text">Checking for updates…</span>
          </div>
          <div class="uc-actions">
            <button type="button" class="uc-btn" id="btn-check-update">🔍 Check now</button>
            <button type="button" class="uc-btn uc-btn-force" id="btn-force-update">⚡ Force update</button>
          </div>
        </div>
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
  initUpdateChecker();
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
    void checkForUpdates(false); // keep the bottom bubble in sync

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

/* ------------------------------------------------------------------ */
/* Update checker — status bubble + force update on the start screen  */
/* ------------------------------------------------------------------ */

type UpdateCheckState = 'checking' | 'latest' | 'outdated' | 'error';

const UPDATE_RECHECK_MS = 5 * 60 * 1000;
let lastUpdateCheckAt = 0;
let updateCheckInFlight = false;

/** Semver-ish compare: returns 1 when a > b, -1 when a < b, 0 when equal. */
function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map((n) => parseInt(n, 10) || 0);
  const pb = b.split('.').map((n) => parseInt(n, 10) || 0);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0);
    if (diff !== 0) return diff > 0 ? 1 : -1;
  }
  return 0;
}

/** Fetch the deployed version manifest, bypassing all caches. */
async function fetchLatestVersion(): Promise<string | null> {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}version.json?t=${Date.now()}`, {
      cache: 'no-store'
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data?.version === 'string' ? data.version : null;
  } catch {
    return null;
  }
}

function setUpdateBubble(state: UpdateCheckState, opts: { latest?: string; note?: string } = {}): void {
  const box = document.getElementById('update-check');
  const text = document.getElementById('uc-text');
  if (!box || !text) return;
  box.dataset.state = state;

  switch (state) {
    case 'checking':
      text.textContent = 'Checking for updates…';
      break;
    case 'latest':
      text.textContent = `v${APP_VERSION} — you're on the latest version`;
      break;
    case 'outdated':
      text.textContent = `UPDATE AVAILABLE — v${APP_VERSION} → v${opts.latest}`;
      break;
    case 'error':
      text.textContent = opts.note ?? "Couldn't reach the update server — try Check now";
      break;
  }
}

async function checkForUpdates(manual: boolean, silent = false): Promise<void> {
  if (updateCheckInFlight) return;
  updateCheckInFlight = true;
  if (!silent) setUpdateBubble('checking');

  const latest = await fetchLatestVersion();

  // Also ask the service worker layer: a downloaded-but-idle update counts too.
  let swPending = false;
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg) {
        if (manual) {
          try {
            await reg.update();
          } catch {}
        }
        swPending = !!(reg.waiting || reg.installing);
      }
    } catch {}
  }

  lastUpdateCheckAt = Date.now();
  updateCheckInFlight = false;

  if (!latest) {
    if (!silent) {
      const isLocal =
        location.hostname === 'localhost' || location.hostname === '127.0.0.1';
      setUpdateBubble('error', {
        note: isLocal
          ? 'Update check runs on the deployed PWA (no service worker on localhost)'
          : undefined
      });
    }
    return;
  }

  if (compareVersions(latest, APP_VERSION) > 0 || swPending) {
    setUpdateBubble('outdated', { latest });
  } else {
    setUpdateBubble('latest');
  }
}

/** Sledgehammer: drop every service worker + cache entry, then reload fresh. */
async function forceUpdate(): Promise<void> {
  const forceBtn = document.getElementById('btn-force-update') as HTMLButtonElement | null;
  const text = document.getElementById('uc-text');
  if (forceBtn) {
    forceBtn.disabled = true;
    forceBtn.textContent = '⏳ Updating…';
  }
  if (text) text.textContent = 'Clearing caches & fetching the newest version…';

  try {
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
  } catch {}

  // Cache-buster query so the navigation itself bypasses stale CDN/HTTP caches.
  const url = new URL(window.location.href);
  url.searchParams.set('fresh', Date.now().toString(36));
  window.location.replace(url.toString());
}

function initUpdateChecker(): void {
  // Strip the cache-buster left behind by Force Update so the URL stays clean.
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.has('fresh')) {
      url.searchParams.delete('fresh');
      window.history.replaceState(null, '', url.pathname + (url.search || ''));
    }
  } catch {}

  document.getElementById('btn-check-update')?.addEventListener('click', () => {
    void checkForUpdates(true);
  });
  document.getElementById('btn-force-update')?.addEventListener('click', () => {
    void forceUpdate();
  });

  if ('serviceWorker' in navigator) {
    // Auto-reload once when a freshly deployed worker claims a controlled page,
    // so new assets appear without the user fighting the cache.
    const hadController = !!navigator.serviceWorker.controller;
    let reloadedForUpdate = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController || reloadedForUpdate) return;
      reloadedForUpdate = true;
      window.location.reload();
    });

    // Kick a worker update check on every start-screen visit.
    navigator.serviceWorker
      .getRegistration()
      .then((reg) => reg?.update().catch(() => {}))
      .catch(() => {});
  }

  // Quiet re-checks when returning to the screen, plus a slow interval.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return;
    if (Date.now() - lastUpdateCheckAt < 30_000) return;
    void checkForUpdates(false, true);
  });
  window.setInterval(() => {
    if (document.visibilityState === 'visible') void checkForUpdates(false, true);
  }, UPDATE_RECHECK_MS);

  // First check shortly after the screen settles.
  window.setTimeout(() => void checkForUpdates(false), 700);
}

render();
