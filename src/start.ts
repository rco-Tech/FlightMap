import './start.css';
import { AppMode, getMode, setMode, isStandaloneDisplay } from './mode';

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
    href: '/index.html'
  },
  {
    id: 'relay',
    icon: '📡',
    name: 'GPS Relay',
    desc: 'Stream this device\u2019s GNSS + gyro to a laptop running FlightMap as a live telemetry transmitter.',
    href: '/mobile.html'
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
    : 'Tip: use your browser menu \u2192 <strong>Add to Home Screen</strong> to install FlightMap as a standalone app.';

  root.innerHTML = `
    <div class="start-root">
      <header class="start-header">
        <div class="start-eyebrow">rTech Systems</div>
        <h1 class="start-title">FLIGHTMAP</h1>
        <p class="start-subtitle">Offline 3D In-Flight Moving Map \u2022 Select operating mode</p>
      </header>

      <div class="mode-grid" id="mode-grid"></div>

      <footer class="start-footer">
        ${installHint}
        <div style="margin-top:10px;">
          Earth imagery \u00a9 Solar System Scope, NASA-derived, CC BY 4.0.
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
}

render();
