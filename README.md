# ✈️ rTech Systems // FlightMap 3D
### Next-Generation Offline In-Flight Entertainment (IFE) Moving Map & Telemetry HUD

[![Version](https://img.shields.io/badge/version-1.0.9--stable-00e5ff.svg?style=flat-square)](https://github.com/rco-Tech/FlightMap)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Engine](https://img.shields.io/badge/3D_Engine-Three.js_WebGL2-green.svg?style=flat-square)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/Platform-Windows_%7C_macOS_%7C_Linux_%7C_iOS_%7C_Android-orange.svg?style=flat-square)](#)

---

**FlightMap** is an airline-grade, 3D WebGL in-flight moving map and flight telemetry HUD engineered by **rTech Systems**. Built for laptop cockpits, in-seat entertainment, and private aviation enthusiasts, it runs **100% offline at 35,000 feet** without requiring active internet connectivity.

---

## 🌟 Key Features & Capabilities

### 🌐 1. Adaptive 8K/4K Globe & Vector Cartography
- **8K Day & Night Textures**: `8192 × 4096` NASA-derived day cartography and nocturnal city-light illumination, with `4096 × 2048` specular ocean reflections and topographic elevation bump relief. Max anisotropic filtering.
- **Automatic Texture Tiering**: A runtime `TextureTier` selector serves the full 8K set to desktop GPUs and a `4096 × 2048` mobile set (~4 MB total) to phones and any GPU capped below 8192, with a `localStorage` override for QA.
- **Topographic Elevation Bump Map**: GPU perturbation shader rendering mountain ranges (Alps, Himalayas, Rockies) from the elevation map.
- **50m Natural Earth Geopolitical Borders**: 97,981 boundary line segments rendered in a single GPU draw call (`THREE.LineSegments`) for butter-smooth 60 FPS rendering.
- **242 Country Labels with Horizon Occlusion Culling**: Dynamic 3D canvas billboard text sprites that automatically hide behind the planetary curvature ($\vec{n} \cdot \vec{d}_{\text{cam}} < 0.18$) and scale with zoom levels (LOD).

### 📡 2. Multi-Source Geolocation & Cross-Device GNSS Relay
- **Zero-Install Phone GNSS Transmitter**: Connect your phone to your laptop Wi-Fi/Hotspot and scan the dynamic QR code (`https://<hotspot-ip>:3443/mobile.html`). The phone captures raw satellite fixes through the airplane window and streams live coordinates, altitude, speed, and heading to the laptop over WebSocket/HTTPS.
- **Dynamic Hotspot Subnet Detection**: Intelligent network resolution automatically binds to active Wi-Fi, iPhone/Android hotspot subnets (`172.20.10.x`, `192.168.43.x`), or local LAN.
- **Hardware NMEA GPS Receiver**: Connect external USB/Bluetooth GPS pucks (Garmin GLO, u-blox USB dongles) via the Web Serial API.
- **Native Browser Geolocation API**: Direct Windows / OS location telemetry.
- **Autonomous Flight Physics Simulator**: Realistic Great-Circle cruise physics with adjustable simulation multipliers ($1\times, 5\times, 10\times, 25\times, 50\times$).

### 🛩️ 3. Continuous 3D Aircraft Models & Dynamics
- **Aerodynamic 36-Segment Lathe Geometry**:
  - **Private Business Jet**: Sleek fuselage loft with swept wings, blended winglets, dual aft-mounted turbofans, and T-tail stabilizer (Gulfstream G650ER profile).
  - **Commercial Widebody Airliner**: Twin-aisle fuselage with raked wingtips, dual underwing high-bypass turbofans with chevron cowlings, and classic empennage (Boeing 787-9 Dreamliner profile).
- **Adaptive Camera Distance Scaling**: Dynamically scales the aircraft model in Globe Orbit view ($0.08 - 0.24$) so it never covers entire continents, while expanding to full size ($0.42$) in Chase and Cockpit views.
- **Spherical Linear Interpolation (Slerp)**: Seamless Great-Circle orthodromic heading, pitch, and roll calculation.

### 🎥 4. Five Dynamic Camera Perspectives
1. **Globe Orbit**: Full planetary overview with interactive mouse/touch panning and route auto-framing.
2. **Cockpit First-Person**: Forward pilot's eye perspective looking out over the nose cone.
3. **Wing Cam**: Passenger window angle looking across the wing and engine cowlings toward the ground below.
4. **Chase Cam**: Dynamic following camera positioned behind the tail stabilizer.
5. **2D Tactical Top-Down**: North-up tactical navigation display.

### 📊 5. Primary Flight Display (PFD) & HUD Telemetry
- **Airspeed & Altitude Tapes**: Calibrated vertical scroll tapes showing Indicated Airspeed (KTS), Mach Number, Altitude (FT), and Flight Level (FL).
- **Vertical Speed Indicator (VSI)**: Calibrated rate of climb / descent in Feet Per Minute (FPM).
- **Flight Progression Tracker**: Departure, Destination, Great-Circle route track, distance flown, distance remaining, and Estimated Time Enroute (ETE).
- **Triple Synchronized Clocks**: Origin local time, Destination local time, and universal In-Flight UTC.

### 🎨 6. Six Synchronized Aviation Theme Palettes
Match your cabin lighting, day/night cycles, or aircraft avionics with 6 official synchronized themes:
1. **Stealth Monochrome**: Ultra-crisp silver & pure white HUD.
2. **Cyberpunk Cyan HUD**: Laser electric cyan (`#00E5FF`) with oceanic depth glow.
3. **Amber CRT Phosphor**: Classic retro gold CRT phosphor (`#FFB000`).
4. **Emerald Matrix Green**: High-contrast tactical night avionics green (`#00FF66`).
5. **Ultraviolet Plasma**: Deep neon violet and purple glow (`#BD00FF`).
6. **Solar Crimson Red**: High-alert laser crimson red (`#FF2A55`).

### 🗺️ 7. 7,900+ Global Airport Database & Route Selector
- Built-in instant offline search for worldwide commercial airports by IATA code, ICAO code, city, or country name.
- Long-haul flight plan presets:
  - `RT101` : Birmingham (`BHX`) &rarr; Bucharest Otopeni (`OTP`) *(Default — Gulfstream G650ER)*
  - `BA117` : London Heathrow (`LHR`) &rarr; New York JFK (`JFK`) *(Boeing 787-9)*
  - `EK215` : Dubai (`DXB`) &rarr; Los Angeles (`LAX`) *(Airbus A380-800)*
  - `SQ22` : Singapore Changi (`SIN`) &rarr; New York Newark (`EWR`) *(Airbus A350-900ULR)*
  - `NH108` : Tokyo Haneda (`HND`) &rarr; San Francisco (`SFO`) *(Boeing 777-300ER)*
  - `AF006` : Paris Charles de Gaulle (`CDG`) &rarr; New York JFK (`JFK`) *(Airbus A350-900)*
  - `QF1` : Sydney (`SYD`) &rarr; London Heathrow (`LHR`) *(Boeing 787-9)*

---

## 🚀 Quick Start & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- Modern WebGL2-compatible browser (Chrome, Edge, Firefox, Safari, Orion)

### Installation
```bash
# Clone the repository
git clone https://github.com/rco-Tech/FlightMap.git
cd FlightMap

# Install dependencies
npm install
```

### Running Locally (Offline / In-Flight Mode)
```bash
# Start both HTTP (3000) and HTTPS (3443) telemetry server
npm start
```
- Open **`http://localhost:3000`** (or **`https://localhost:3443`**) on your laptop.
- Open **`start.html`** to choose between **Full 3D Flight Map** or **Mobile GPS Relay** mode.

---

## 📲 Standalone PWA (Two Operating Modes)

FlightMap installs as an offline **Progressive Web App** on Android and iOS. The launch screen (`start.html`, the manifest `start_url`) offers two modes:

1. **🌐 Moving Map** — the device renders the full 3D moving map itself using its own satellite GNSS. No laptop or network required; the screen is kept awake automatically.
2. **📡 GPS Relay** — the device streams its GNSS + gyroscope to a laptop running FlightMap (the original transmitter workflow).

### Installing
- **Android (Chrome/Edge)**: open the site → menu → **Install app / Add to Home screen** (the browser's native prompt).
- **iOS (Safari)**: open the site → **Share** → **Add to Home Screen**.

Once installed, the app launches offline from the home screen, precaching the app shell, airport/geo data, and the mobile (4K) texture tier only — the 8K desktop textures are intentionally excluded from the service-worker cache.

### Asset pipeline
```bash
npm run assets:all     # download textures/data, build the 4K mobile tier, and generate PWA icons
npm run assets:mobile  # rebuild only public/assets/textures/mobile
npm run icons          # rebuild only public/icons
```

### Releases
Tagged releases (`v*`) are built and published by GitHub Actions, with a ready-to-serve offline `dist` bundle attached as a release asset.

```bash
npm run release          # tag the current version and push (triggers the release workflow)
npm run release patch    # bump patch, commit, tag, and push
npm run release minor    # bump minor, commit, tag, and push
npm run release major    # bump major, commit, tag, and push
```

---

## 📱 Mobile In-Flight GPS Window Pairing

When sitting by an airplane window:
1. Enable **Personal Hotspot** or local Wi-Fi sharing on your smartphone / laptop.
2. Connect your laptop to the hotspot.
3. In FlightMap, click the **GPS Source** button (top right) to open the QR Pairing modal.
4. Scan the QR code with your smartphone camera to load `https://<hotspot-ip>:3443/mobile.html`.
5. Tap **Start GPS Broadcast** and place the phone on the window sill.
6. Your laptop will instantly receive satellite telemetry and track your aircraft in real-time!

---

## 🛠️ Tech Stack & Architecture

```
FlightMap/
├── public/
│   ├── assets/
│   │   ├── data/            # 7,900+ Airports JSON & 50m Natural Earth GeoJSON
│   │   └── textures/        # 8K day/night, 4K bump/specular/clouds
│   │       └── mobile/      # Auto-generated 4K tier for phones (~4 MB)
│   └── icons/               # PWA / maskable / apple-touch icons
├── scripts/
│   ├── setup_assets.js          # Download + optimise offline data & textures
│   ├── build_mobile_textures.js # Generate the downscaled mobile texture tier (sharp)
│   └── build_icons.js           # Generate PWA icons from the vector emblem (sharp)
├── server/
│   └── index.js             # Dual HTTP/HTTPS Express + WebSocket Telemetry Hub
│                            # (dynamic IP detection, self-signed TLS, auto re-bind)
├── src/
│   ├── engine/              # Three.js Earth, Shaders, Aircraft, Cameras, TextureTier
│   ├── telemetry/           # NMEA, Browser Geolocation, Mobile Relay, Slerp Navigation
│   ├── ui/                  # Flight HUD, Instruments, PFD, Modal Dialogs, ThemeManager
│   ├── mode.ts              # Map / Relay mode persistence
│   ├── start.ts             # PWA mode chooser controller
│   ├── hud-mobile.css       # Phone/tablet HUD layout overrides
│   └── main.ts              # Application Bootstrap & Lifecycle
├── index.html               # 3D Moving Map Entry Point
├── mobile.html              # Mobile Satellite GNSS Transmitter UI
├── start.html               # Mode Chooser (PWA start_url)
├── vite.config.ts           # Vite + vite-plugin-pwa (manifest & Workbox precache)
└── package.json
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

**Third-party imagery:** the Earth day/night texture set is derived from NASA elevation and imagery data and published by [Solar System Scope](https://www.solarsystemscope.com/textures/) under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license. Attribution is surfaced in-app (mode chooser and GPS dialog).

---

<p align="center">
  <b>rTech Systems</b> &bull; Precision Aviation & Telemetry Engineering<br/>
  <i>Crafted for high-altitude exploration.</i>
</p>
