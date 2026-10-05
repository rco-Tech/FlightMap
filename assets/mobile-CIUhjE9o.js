import"./modulepreload-polyfill-B5Qt9EMX.js";import{U as m,F as g,a as u,A as d}from"./UnitManager-BlGITi8m.js";class f{ws=null;isWsConnected=!1;isLaptopOnline=!1;unitManager=m.getInstance();targetHost="";packetsSent=0;packetsAcked=0;lastLatencyMs=null;pingTimer=null;reconnectTimer=null;isTransmitting=!1;isSimulating=!1;simTimer=null;watchId=null;wakeLock=null;syncOrientation=!1;currentPitch=0;currentRoll=0;lastLat=0;lastLon=0;lastAlt=0;lastSpeed=0;lastHeading=0;lastAccuracy=0;simLat=51.47;simLon=-.45;simAlt=41e3;simSpeed=495;simHdg=285;flightPlanManager=g.getInstance();activeRouteKey="BHX-OTP";isFlightPlanOpen=!1;remoteSimSpeed=10;remoteSimPaused=!1;liveDestTz="";liveProgressReceived=!1;batteryMode="auto";batteryLevel=null;batteryCharging=null;lastTelemetrySentAt=0;compassMagHeading=null;compassGpsHeading=null;lastCompassRender=0;airportSearchReady=!1;airportSearchLoading=!1;suggestDebounce=null;suggestTarget=null;cuesEnabled=!0;audioCtx=null;hadGpsFix=!1;hadFirstAck=!1;pendingRouteCue=null;constructor(){this.targetHost=this.resolveTargetHost(),this.render(),this.initWebSocket(),this.initEvents(),this.renderMobilePresets(),this.flightPlanManager.onFavoritesChanged(()=>{this.renderMobilePresets()}),this.checkSecureContext(),this.initBatterySaver(),this.initCues(),this.initCompass()}resolveTargetHost(){const t=new URLSearchParams(window.location.search),e=t.get("host")||t.get("server");if(e){const a=e.replace(/^[a-z]+:\/\//i,"").replace(/\/.*$/,"");return localStorage.setItem("flightmap_target_host",a),a}const s=localStorage.getItem("flightmap_target_host");if(s)return s;const i=window.location.host;return i&&!i.includes("github.io")?i:"192.168.1.98:3443"}checkSecureContext(){const t=window.isSecureContext,e=document.getElementById("insecure-banner");e&&(!t&&window.location.protocol==="http:"?e.style.display="flex":e.style.display="none")}initBatterySaver(){try{const e=localStorage.getItem("flightmap_battery_saver");(e==="auto"||e==="on"||e==="off")&&(this.batteryMode=e)}catch{}const t=navigator;typeof t.getBattery=="function"?t.getBattery().then(e=>{const s=()=>{this.batteryLevel=typeof e.level=="number"?Math.round(e.level*100):null,this.batteryCharging=!!e.charging,this.updateBatteryStatus()};e.addEventListener("levelchange",s),e.addEventListener("chargingchange",s),s()}).catch(()=>this.updateBatteryStatus()):this.updateBatteryStatus()}isBatterySaverActive(){return this.batteryMode==="on"?!0:this.batteryMode==="off"?!1:this.batteryLevel!==null&&this.batteryLevel<=20&&this.batteryCharging===!1}renderBatteryMode(){document.querySelectorAll(".battery-pill").forEach(t=>{const e=t;e.classList.toggle("active",e.dataset.mode===this.batteryMode)})}updateBatteryStatus(){this.renderBatteryMode();const t=document.getElementById("battery-level");if(t)if(this.batteryLevel!==null){const a=this.batteryCharging?"🔌":"🔋";t.textContent=`${a} ${this.batteryLevel}%${this.batteryCharging?" • CHG":""}`}else t.textContent="🔋 n/a";const e=this.isBatterySaverActive(),s=document.getElementById("battery-card");s&&s.classList.toggle("saver-active",e);const i=document.getElementById("battery-status");if(i)if(e){const a=this.batteryMode==="on"?"manual":"low battery";i.textContent=`⚡ Saver active (${a}) — GPS relay throttled to one fix every 10 s.`}else this.batteryMode==="auto"?i.textContent=this.batteryLevel!==null?`Full rate now — AUTO engages below 20% on battery (now ${this.batteryLevel}%${this.batteryCharging?", charging":""}).`:"AUTO needs battery access (unavailable on this device) — use ON to force the saver.":i.textContent="Broadcasting at full rate."}initCompass(){const t=e=>this.handleCompassOrientation(e);"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",t),window.addEventListener("deviceorientation",t),document.getElementById("compass-card")?.addEventListener("click",()=>{this.enableCompassSensors()})}async enableCompassSensors(){const t=window.DeviceOrientationEvent;if(t&&typeof t.requestPermission=="function")try{if(await t.requestPermission()!=="granted")return}catch{return}this.lastCompassRender=0,this.renderCompass()}handleCompassOrientation(t){const e=t.webkitCompassHeading;if(typeof e=="number"&&!Number.isNaN(e))this.compassMagHeading=(e+360)%360;else if(t.absolute&&typeof t.alpha=="number")this.compassMagHeading=(360-t.alpha)%360;else return;this.renderCompass()}renderCompass(){const t=performance.now();if(t-this.lastCompassRender<80)return;this.lastCompassRender=t;const e=(n,o)=>{const r=document.getElementById(n);r&&(r.textContent=o)},s=this.compassMagHeading??this.compassGpsHeading,i=document.getElementById("compass-needle");if(s===null){e("compass-deg","--°"),e("compass-cardinal","NO SIGNAL"),e("compass-source","—"),e("compass-hint","TAP TO ENABLE SENSORS · OR START GPS");return}const a=(s%360+360)%360;i&&(i.style.transform=`rotate(${a.toFixed(1)}deg)`),e("compass-deg",`${Math.round(a)}°`),e("compass-cardinal",["N","NE","E","SE","S","SW","W","NW"][Math.round(a/45)%8]),this.compassMagHeading!==null?(e("compass-source","MAG"),e("compass-hint","HOLD FLAT · 3D MAGNETOMETER")):(e("compass-source","GPS"),e("compass-hint","GPS TRACK — MAGNETOMETER UNAVAILABLE"))}async ensureAirportSearch(){if(!(this.airportSearchReady||this.airportSearchLoading)){this.airportSearchLoading=!0;try{await u.getInstance().load(),this.airportSearchReady=!0}catch(t){console.warn("[Mobile] Airport search data unavailable:",t)}finally{this.airportSearchLoading=!1}}}handleAirportSearchInput(t){this.suggestTarget=t;const e=t==="from"?"remote-input-from":"remote-input-to",s=document.getElementById(e);s&&(this.ensureAirportSearch(),this.suggestDebounce!==null&&window.clearTimeout(this.suggestDebounce),this.suggestDebounce=window.setTimeout(()=>{this.suggestDebounce=null,this.runAirportSearch(t,s.value)},180))}closeSuggestions(){const t=document.getElementById("fp-suggest");t&&(t.classList.remove("open"),t.innerHTML=""),this.suggestTarget=null}async runAirportSearch(t,e){const s=document.getElementById("fp-suggest");if(!s||this.suggestTarget!==t)return;const i=e.trim();if(i.length<2){this.closeSuggestions();return}if(await this.ensureAirportSearch(),!this.airportSearchReady||this.suggestTarget!==t)return;const a=u.getInstance().search(i,6);if(!a.length){this.closeSuggestions();return}s.innerHTML=a.map(l=>`
      <button type="button" class="fp-suggest-item" data-iata="${l.iata}">
        <span class="fp-suggest-iata">${l.iata}</span>
        <span class="fp-suggest-text">
          <span class="fp-suggest-name">${l.name}</span>
          <span class="fp-suggest-sub">${l.city}${l.country?" · "+l.country:""}</span>
        </span>
      </button>`).join(""),s.classList.add("open"),s.querySelectorAll(".fp-suggest-item").forEach(l=>{l.addEventListener("pointerdown",n=>n.preventDefault()),l.addEventListener("click",()=>{const n=l.dataset.iata||"",o=this.suggestTarget;if(!n||!o)return;const r=document.getElementById(o==="from"?"remote-input-from":"remote-input-to");if(r&&(r.value=n),this.closeSuggestions(),o==="from"){const c=document.getElementById("remote-input-to");c&&!c.value.trim()&&c.focus()}})})}initCues(){try{this.cuesEnabled=localStorage.getItem("flightmap_cues")!=="0"}catch{}this.renderCuesButton()}renderCuesButton(){const t=document.getElementById("btn-cues");t&&(t.textContent=this.cuesEnabled?"🔔 Cues: On":"🔕 Cues: Off",t.style.opacity=this.cuesEnabled?"1":"0.55")}initAudio(){try{if(!this.audioCtx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}this.audioCtx?.resume?.().catch(()=>{})}catch{}}beep(t,e,s=0,i=.12){const a=this.audioCtx;if(a)try{const l=a.currentTime+s,n=a.createOscillator(),o=a.createGain();n.type="sine",n.frequency.value=t,o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(i,l+.015),o.gain.exponentialRampToValueAtTime(1e-4,l+e/1e3),n.connect(o),o.connect(a.destination),n.start(l),n.stop(l+e/1e3+.05)}catch{}}vibrate(t){try{navigator.vibrate?.(t)}catch{}}cue(t){if(this.cuesEnabled)switch(t){case"gps-lock":this.vibrate([40,70,40]),this.beep(880,90),this.beep(1320,110,.1);break;case"ack":this.vibrate(25),this.beep(660,55);break;case"route":this.vibrate([25,50,25]),this.beep(780,70),this.beep(1040,80,.09);break;case"offline":this.vibrate(140),this.beep(240,280,0,.1);break}}render(){const t=document.getElementById("mobile-app");t.innerHTML=`
      <div class="mobile-root">
        <!-- Insecure Context Warning (Chrome/Safari requirement) -->
        <div class="insecure-banner" id="insecure-banner" style="display: none;">
          <div class="insecure-title">
            <span>⚠️</span>
            <span>HTTPS Required for Mobile GPS</span>
          </div>
          <p class="insecure-desc">
            Mobile Chrome & Safari block hardware GPS on plain HTTP. Switch to our local HTTPS server to grant location access:
          </p>
          <button class="btn-switch-https" id="btn-switch-https">Switch to HTTPS (Port 3443)</button>
        </div>

        <!-- Sticky Header with Real-Time Handshake Status -->
        <header class="mobile-header">
          <div class="mobile-title">
            <span>FLIGHTMAP COPILOT</span>
            <h1>GPS Relay</h1>
          </div>
          <div class="conn-badge" id="btn-header-badge" title="Tap to configure PC Connection">
            <span class="conn-dot" id="ws-dot"></span>
            <span id="ws-status-text">CONNECTING...</span>
          </div>
        </header>

        <!-- Dedicated Handshake & Connection Card -->
        <div class="handshake-card state-connecting" id="handshake-card">
          <div class="handshake-status-banner">
            <div class="handshake-icon" id="hs-status-icon">🔄</div>
            <div class="handshake-info">
              <div class="handshake-title" id="hs-status-title">Connecting to Laptop...</div>
              <div class="handshake-desc" id="hs-status-desc">
                Establishing WebSocket handshake with ${this.targetHost}...
              </div>
            </div>
          </div>

          <!-- 4-Metric Live Handshake Readout -->
          <div class="handshake-metrics-grid">
            <div class="hs-metric">
              <span class="hs-label">TARGET PC HOST</span>
              <span class="hs-val highlight" id="hs-target-host">${this.targetHost}</span>
            </div>
            <div class="hs-metric">
              <span class="hs-label">ROUNDTRIP PING</span>
              <span class="hs-val" id="hs-latency">--</span>
            </div>
            <div class="hs-metric">
              <span class="hs-label">PACKETS TRANSMITTED</span>
              <span class="hs-val" id="hs-packets-sent">0</span>
            </div>
            <div class="hs-metric">
              <span class="hs-label">LAPTOP ACKS</span>
              <span class="hs-val success" id="hs-packets-acked">0</span>
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div class="hs-actions-row">
            <button class="hs-btn-action" id="btn-toggle-ip-drawer">
              <span>⚙️</span>
              <span id="label-toggle-ip">Change PC IP</span>
            </button>
            <button class="hs-btn-action" id="btn-reconnect-now">
              <span>🔄</span>
              <span>Reconnect Now</span>
            </button>
          </div>

          <!-- Inline IP Configuration Drawer -->
          <div class="ip-config-drawer hidden" id="ip-config-drawer">
            <div class="ip-config-title">CONFIGURE LAPTOP IP ADDRESS</div>
            <div class="ip-input-row">
              <input
                type="text"
                class="ip-input"
                id="input-pc-ip"
                value="${this.targetHost}"
                placeholder="e.g. 192.168.1.98:3443"
                autocomplete="off"
                spellcheck="false"
              />
              <button class="btn-save-ip" id="btn-save-ip">Connect</button>
            </div>
            <div class="ip-preset-chips" id="ip-preset-chips">
              <span class="ip-chip" data-host="192.168.1.98:3443">🏠 WiFi (192.168.1.98:3443)</span>
              <span class="ip-chip" data-host="172.20.10.1:3443">📱 iPhone (172.20.10.1:3443)</span>
              <span class="ip-chip" data-host="192.168.43.1:3443">🤖 Android (192.168.43.1:3443)</span>
              <span class="ip-chip" data-host="192.168.137.1:3443">💻 Win Hotspot (192.168.137.1:3443)</span>
              <span class="ip-chip" data-host="192.168.1.98:3000">⚡ HTTP Port 3000</span>
            </div>
          </div>

          <!-- SSL Certificate Acceptance Helper -->
          <div class="ssl-helper-card hidden" id="ssl-helper-card">
            <div class="ssl-helper-text">
              🔒 <strong>First time on local HTTPS?</strong> Mobile Chrome and Safari require accepting our self-signed TLS certificate once before allowing WebSockets:
            </div>
            <a href="https://${this.targetHost}/" target="_blank" class="btn-accept-ssl" id="link-accept-ssl">
              <span>👉 Open Certificate Authorization Page</span>
            </a>
          </div>
        </div>

        <button class="switch-mode-btn" id="btn-switch-mode">🧭 Switch Operating Mode</button>

        <!-- Transmit Button Card -->
        <div class="transmit-card">
          <button class="btn-transmit" id="btn-toggle-transmit">
            <span id="transmit-icon">📡</span>
            <span id="transmit-label">START TRANSMITTING GPS</span>
          </button>
          <p class="transmit-subtext" id="transmit-subtext">
            Streams your phone's hardware satellite GNSS fixes to the laptop 3D flight monitor in real-time.
          </p>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="test-gps-btn" id="btn-test-gps">🧪 Test GPS Simulator</button>
            <button class="test-gps-btn" id="btn-cues" title="Haptic + audio feedback on GPS lock, laptop ACK and route sync">🔔 Cues: On</button>
          </div>
          <div class="transmission-counter" id="tx-counter">Packets Sent to Laptop: 0</div>
        </div>

        <!-- Live Flight Status (mirrored from the laptop moving map over WebSocket) -->
        <div class="live-flight-card" id="live-flight-card">
          <div class="lf-header">
            <span class="lf-title">LIVE FLIGHT STATUS</span>
            <span class="lf-source" id="lf-source">WAITING</span>
          </div>
          <div class="lf-route" id="lf-route">Waiting for laptop…</div>
          <div class="lf-flight-info" id="lf-flight-info">Open the map on your laptop to sync the flight</div>
          <div class="lf-progress-track">
            <div class="lf-progress-fill" id="lf-progress-fill" style="width: 0%;"></div>
            <span class="lf-progress-plane" id="lf-progress-plane" style="left: 0%;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#00e5ff"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
            </span>
          </div>
          <div class="lf-metrics">
            <div class="lf-metric">
              <span class="lf-k">FLOWN</span>
              <span class="lf-v" id="lf-flown">--</span>
            </div>
            <div class="lf-metric">
              <span class="lf-k">REMAINING</span>
              <span class="lf-v" id="lf-remaining">--</span>
            </div>
            <div class="lf-metric">
              <span class="lf-k">ETE</span>
              <span class="lf-v" id="lf-ete">--:--</span>
            </div>
            <div class="lf-metric">
              <span class="lf-k">ETA</span>
              <span class="lf-v" id="lf-eta">--:--</span>
            </div>
          </div>
        </div>

        <!-- Battery Saver (throttles the relay when power is scarce) -->
        <div class="battery-card" id="battery-card">
          <div class="battery-header">
            <span class="battery-title">BATTERY SAVER</span>
            <span class="battery-level" id="battery-level">🔋 --</span>
          </div>
          <div class="battery-pills">
            <button class="battery-pill" data-mode="auto">AUTO</button>
            <button class="battery-pill" data-mode="on">ON</button>
            <button class="battery-pill" data-mode="off">OFF</button>
          </div>
          <div class="battery-status" id="battery-status">Broadcasting at full rate.</div>
        </div>

        <!-- Measurement Unit Selector -->
        <div class="mobile-unit-bar">
          <span class="m-unit-lbl">UNITS:</span>
          <div class="m-unit-pills">
            <button class="m-unit-pill ${this.unitManager.getSystem()==="maritime"?"active":""}" data-unit="maritime">⚓ MARITIME</button>
            <button class="m-unit-pill ${this.unitManager.getSystem()==="metric"?"active":""}" data-unit="metric">🌍 METRIC</button>
            <button class="m-unit-pill ${this.unitManager.getSystem()==="imperial"?"active":""}" data-unit="imperial">🚗 IMPERIAL</button>
          </div>
        </div>

        <!-- Real-time GPS Telemetry Grid -->
        <div class="telemetry-mobile-grid">
          <div class="metric-box">
            <span class="label">GPS ACCURACY</span>
            <div class="val-row">
              <span class="big-val" id="disp-acc">--</span>
              <span class="unit">M</span>
            </div>
          </div>

          <div class="metric-box">
            <span class="label">GROUND SPEED</span>
            <div class="val-row">
              <span class="big-val" id="disp-speed">--</span>
              <span class="unit" id="disp-speed-unit">KTS</span>
            </div>
          </div>

          <div class="metric-box">
            <span class="label">GPS ALTITUDE</span>
            <div class="val-row">
              <span class="big-val" id="disp-alt">--</span>
              <span class="unit" id="disp-alt-unit">FT</span>
            </div>
          </div>

          <div class="metric-box">
            <span class="label">COMPASS TRACK</span>
            <div class="val-row">
              <span class="big-val" id="disp-heading">--</span>
              <span class="unit">°</span>
            </div>
          </div>

          <div class="metric-box full-width">
            <span class="label">CURRENT POSITION & STATUS</span>
            <span class="coords" id="disp-coords">Tap "Start Transmitting GPS" to acquire satellite fix</span>
            <div class="fix-type-tag" id="disp-fix-type"></div>
          </div>
        </div>

        <!-- Phone Gyroscope Attitude Sync -->
        <div class="gyro-card">
          <div class="gyro-header">
            <div>
              <div class="gyro-title">Phone Gyro Aircraft Tilt</div>
              <div style="font-size: 11px; color: var(--text-muted);">Hold phone & bank like an aircraft</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="chk-gyro-sync" />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="gyro-readout">
            <span id="disp-pitch">PITCH: +0.0°</span>
            <span id="disp-roll">ROLL: 0.0°</span>
          </div>
        </div>

        <!-- Compass Rose (magnetometer heading, GPS-track fallback) -->
        <div class="compass-card" id="compass-card" title="Tap to enable motion sensors">
          <div class="compass-header">
            <span class="compass-title">COMPASS ROSE</span>
            <span class="compass-source" id="compass-source">—</span>
          </div>
          <div class="compass-body">
            <div class="compass-dial">
              <span class="cp-label cp-n">N</span>
              <span class="cp-label cp-e">E</span>
              <span class="cp-label cp-s">S</span>
              <span class="cp-label cp-w">W</span>
              <div class="compass-needle" id="compass-needle">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="#00e5ff"><path d="M12 2 L17.5 21 L12 16.8 L6.5 21 Z"/></svg>
              </div>
              <span class="compass-hub"></span>
            </div>
            <div class="compass-readout">
              <span class="compass-deg" id="compass-deg">--°</span>
              <span class="compass-cardinal" id="compass-cardinal">NO SIGNAL</span>
              <span class="compass-hint" id="compass-hint">TAP TO ENABLE SENSORS · OR START GPS</span>
            </div>
          </div>
        </div>

        <!-- Remote Camera Switcher -->
        <div class="remote-cam-card">
          <div class="remote-cam-title">REMOTE LAPTOP CAMERA VIEW</div>
          <div class="cam-grid">
            <button class="cam-pill" data-cam="cockpit">🪟 Cockpit</button>
            <button class="cam-pill" data-cam="wing">🪽 Wing Cam</button>
            <button class="cam-pill" data-cam="chase">🎥 Chase</button>
            <button class="cam-pill" data-cam="orbit">🌐 Globe</button>
            <button class="cam-pill" data-cam="tactical">🗺️ 2D Nav</button>
          </div>

          <!-- Remote Simulation Speed Controls -->
          <div class="remote-sim-speed-section">
            <div class="remote-sim-speed-header">
              <span class="remote-sim-speed-title">LAPTOP SIMULATION SPEED</span>
              <span class="remote-sim-speed-badge" id="m-sim-speed-badge">10x</span>
            </div>
            <div class="remote-sim-speed-row">
              <button class="remote-sim-pause-btn" id="m-btn-sim-pause" title="Pause / Resume Laptop Simulation">
                <span id="m-sim-pause-icon">⏸</span>
                <span id="m-sim-pause-text">PAUSE</span>
              </button>
              <div class="remote-sim-speed-pills" id="m-sim-speed-pills">
                <button class="m-speed-pill" data-speed="1">1x</button>
                <button class="m-speed-pill active" data-speed="10">10x</button>
                <button class="m-speed-pill" data-speed="25">25x</button>
                <button class="m-speed-pill" data-speed="50">50x</button>
                <button class="m-speed-pill" data-speed="75">75x</button>
                <button class="m-speed-pill" data-speed="100">100x</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Collapsible Remote Flight Plan & Route Selector -->
        <div class="remote-fp-card" id="card-remote-flightplan">
          <div class="remote-fp-header" id="btn-toggle-remote-fp">
            <div class="remote-fp-header-left">
              <span class="remote-fp-icon">✈️</span>
              <div>
                <div class="remote-fp-title">FLIGHT PLAN & ROUTE SELECTOR</div>
                <div class="remote-fp-sub" id="disp-active-route">Active: W4 3002 (BHX &rarr; OTP)</div>
              </div>
            </div>
            <span class="remote-fp-chevron" id="chevron-remote-fp">▼</span>
          </div>

          <div class="remote-fp-body collapsed" id="body-remote-fp">
            <div class="remote-fp-section-title">FAVORITE ROUTES & PRESETS</div>
            <div class="remote-fp-presets-grid" id="remote-presets-list">
              <!-- Dynamically populated presets -->
            </div>

            <div class="remote-fp-section-title">CUSTOM ROUTE</div>
            <div class="remote-fp-inputs-row">
              <div class="remote-fp-field">
                <span class="remote-fp-field-tag">ORIGIN</span>
                <input type="text" class="remote-fp-input" id="remote-input-from" placeholder="BHX" value="BHX" maxlength="4" autocomplete="off" spellcheck="false" />
              </div>
              <div class="remote-fp-arrow-wrap">
                <span class="remote-fp-arrow">&rarr;</span>
              </div>
              <div class="remote-fp-field">
                <span class="remote-fp-field-tag">DESTINATION</span>
                <input type="text" class="remote-fp-input" id="remote-input-to" placeholder="OTP" value="OTP" maxlength="4" autocomplete="off" spellcheck="false" />
              </div>
            </div>

            <!-- Airport search suggestions (city / airport name / IATA) -->
            <div class="fp-suggest" id="fp-suggest"></div>

            <!-- Route details: flight number, cruise altitude & speed -->
            <div class="remote-fp-meta-section">
              <div class="remote-fp-field">
                <span class="remote-fp-field-tag">FLIGHT NUMBER</span>
                <input type="text" class="remote-fp-input remote-fp-input-flight" id="remote-input-flight" placeholder="W4-3002" value="W4-3002" maxlength="8" autocomplete="off" spellcheck="false" />
              </div>
              <div class="remote-fp-inputs-row">
                <div class="remote-fp-field">
                  <span class="remote-fp-field-tag">CRUISE ALTITUDE</span>
                  <select class="remote-fp-select" id="remote-select-alt">
                    <option value="36000">FL360 (36,000 FT)</option>
                    <option value="37000" selected>FL370 (37,000 FT)</option>
                    <option value="38000">FL380 (38,000 FT)</option>
                    <option value="40000">FL400 (40,000 FT)</option>
                    <option value="43000">FL430 (43,000 FT)</option>
                  </select>
                </div>
                <div class="remote-fp-field">
                  <span class="remote-fp-field-tag">CRUISE SPEED</span>
                  <select class="remote-fp-select" id="remote-select-speed">
                    <option value="450" selected>Mach 0.76 (450 KTS)</option>
                    <option value="460">Mach 0.78 (460 KTS)</option>
                    <option value="485">Mach 0.82 (485 KTS)</option>
                    <option value="510">Mach 0.86 (510 KTS)</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="remote-fp-actions-row">
              <button class="btn-remote-fav" id="btn-mobile-save-fav" title="Save to Favorites">⭐ Save Fav</button>
              <button class="btn-remote-send" id="btn-mobile-send-route" title="Activate Route on Laptop">🚀 Send to Laptop</button>
            </div>
            <div class="remote-fp-feedback" id="remote-fp-feedback"></div>
          </div>
        </div>
      </div>
    `}initWebSocket(){if(this.ws){try{this.ws.onopen=null,this.ws.onclose=null,this.ws.onerror=null,this.ws.onmessage=null,this.ws.close()}catch{}this.ws=null}this.reconnectTimer!==null&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null);const e=this.targetHost.trim().replace(/^[a-z]+:\/\//i,"").replace(/\/.*$/,""),i=`${window.location.protocol==="https:"||e.includes(":3443")?"wss:":"ws:"}//${e}/ws/telemetry`;this.updateHandshakeUI("connecting",`Connecting to ${e}...`);try{this.ws=new WebSocket(i),this.ws.onopen=()=>{this.isWsConnected=!0,console.log("[Mobile] Connected to telemetry relay:",i);try{this.ws?.send(JSON.stringify({type:"client_hello",role:"phone",client:"FlightMap Mobile GNSS Transmitter"}))}catch{}this.startHeartbeat(),this.updateHandshakeUI("relay_connected",`Connected to Relay (${e})`),this.updateTransmitCounter(!0)},this.ws.onmessage=a=>{try{const l=JSON.parse(a.data);this.handleServerMessage(l)}catch(l){console.warn("[Mobile] Error parsing message:",l)}},this.ws.onerror=a=>{console.warn("[Mobile] WebSocket error:",a)},this.ws.onclose=()=>{const a=this.isWsConnected;this.isWsConnected=!1,this.isLaptopOnline=!1,this.stopHeartbeat(),this.updateHandshakeUI("offline",`Disconnected from ${e}`),this.updateTransmitCounter(!1),a&&(this.isTransmitting||this.isSimulating)&&this.cue("offline"),this.reconnectTimer=window.setTimeout(()=>this.initWebSocket(),3500)}}catch{this.isWsConnected=!1,this.isLaptopOnline=!1,this.updateHandshakeUI("offline",`Failed to open socket to ${e}`),this.updateTransmitCounter(!1),this.reconnectTimer=window.setTimeout(()=>this.initWebSocket(),4e3)}}handleServerMessage(t){if((t.type==="server_hello"||t.type==="hello_ack"||t.type==="peer_status")&&(t.serverIp&&this.updateDetectedIpChips(t.serverIp),this.isLaptopOnline=!!t.laptopOnline,this.isLaptopOnline?this.updateHandshakeUI("laptop_connected",`Connected to Laptop (${this.targetHost})`):this.updateHandshakeUI("relay_connected","Relay Online • Waiting for Laptop Map"),this.updateTransmitCounter(!0)),t.type==="pong"&&(t.clientTimestamp&&(this.lastLatencyMs=Math.max(1,Date.now()-t.clientTimestamp)),t.laptopOnline!==void 0&&(this.isLaptopOnline=!!t.laptopOnline),this.updateHandshakeStats(),this.updateTransmitCounter(!0)),(t.type==="gps_ack"||t.type==="laptop_ack")&&(this.packetsAcked++,t.laptopOnline&&(this.isLaptopOnline=!0),this.updateHandshakeStats(!0),this.updateTransmitCounter(!0),!this.hadFirstAck&&(this.isTransmitting||this.isSimulating)&&(this.hadFirstAck=!0,this.cue("ack"))),(t.type==="camera_ack"||t.type==="camera_active")&&t.mode&&this.setActiveCameraPill(t.mode),(t.type==="flight_plan_active"||t.type==="flight_plan_ack")&&t.from&&t.to){this.activeRouteKey=`${t.from.toUpperCase()}-${t.to.toUpperCase()}`;const e=document.getElementById("disp-active-route");e&&(e.textContent=`Active: ${t.flightNumber||t.from+" → "+t.to} (${t.from} → ${t.to})`),this.renderMobilePresets(),this.updateLiveFlightCard(t);const s=`${t.from.toUpperCase()}-${t.to.toUpperCase()}`;this.pendingRouteCue&&this.pendingRouteCue.key===s&&Date.now()-this.pendingRouteCue.at<2e4&&(this.pendingRouteCue=null,this.cue("route"))}t.type==="unit_system"&&t.system&&(this.unitManager.setSystem(t.system),this.setActiveUnitPill(t.system),this.updateMobileReadouts(this.isSimulating?"Simulator":"GPS")),(t.type==="sim_speed_active"||t.type==="sim_speed_ack")&&(typeof t.speed=="number"&&this.setActiveSimSpeedPill(t.speed),typeof t.isPaused=="boolean"&&this.setRemoteSimPauseState(t.isPaused)),(t.type==="sim_pause_active"||t.type==="sim_pause_ack")&&(typeof t.isPaused=="boolean"&&this.setRemoteSimPauseState(t.isPaused),typeof t.speed=="number"&&this.setActiveSimSpeedPill(t.speed)),t.type==="flight_progress"&&this.updateLiveFlightProgress(t)}updateLiveFlightCard(t){if(t.from&&t.to){const i=document.getElementById("lf-route");i&&(i.textContent=`${t.from} → ${t.to}`)}const e=[t.flightNumber,t.airline].filter(Boolean).join(" • "),s=document.getElementById("lf-flight-info");s&&e&&(s.textContent=e),t.destTz&&(this.liveDestTz=t.destTz)}updateLiveFlightProgress(t){const e=Math.max(0,Math.min(100,(t.progressFraction||0)*100)),s=document.getElementById("lf-progress-fill"),i=document.getElementById("lf-progress-plane");s&&(s.style.width=`${e.toFixed(1)}%`),i&&(i.style.left=`${e.toFixed(1)}%`);const a=(o,r)=>{const c=document.getElementById(o);c&&(c.textContent=r)};a("lf-flown",this.unitManager.formatDistance(t.distanceTraveledNM||0).displayStr),a("lf-remaining",this.unitManager.formatDistance(t.distanceRemainingNM||0).displayStr),a("lf-ete",d.formatDuration(t.eteSeconds||0));let l="--:--";if(t.eteSeconds>0){const o=new Date(Date.now()+t.eteSeconds*1e3);try{l=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1,...this.liveDestTz?{timeZone:this.liveDestTz}:{}}).format(o)}catch{l=`${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}`}}a("lf-eta",l),a("lf-source",{simulation:"SIM",mobile_gps:"PHONE GPS",browser_gps:"LAPTOP GPS",serial_nmea:"USB GPS"}[t.source]||"LIVE"),this.liveProgressReceived||(this.liveProgressReceived=!0,document.getElementById("live-flight-card")?.classList.add("live-synced"))}setActiveUnitPill(t){document.querySelectorAll(".m-unit-pill").forEach(e=>{e.dataset.unit===t?e.classList.add("active"):e.classList.remove("active")})}startHeartbeat(){this.stopHeartbeat(),this.pingTimer=window.setInterval(()=>{if(this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({type:"ping",timestamp:Date.now()}))}catch{}},2500)}stopHeartbeat(){this.pingTimer!==null&&(clearInterval(this.pingTimer),this.pingTimer=null)}updateHandshakeUI(t,e){const s=document.getElementById("handshake-card"),i=document.getElementById("ws-dot"),a=document.getElementById("ws-status-text"),l=document.getElementById("hs-status-icon"),n=document.getElementById("hs-status-title"),o=document.getElementById("hs-status-desc"),r=document.getElementById("ssl-helper-card"),c=document.getElementById("link-accept-ssl");if(s&&(s.className=`handshake-card state-${t}`),r&&c&&(t==="offline"&&(window.location.protocol==="https:"||this.targetHost.includes(":3443"))?(r.classList.remove("hidden"),c.href=`https://${this.targetHost}/`):r.classList.add("hidden")),i&&a&&l&&n&&o)switch(t){case"laptop_connected":i.className="conn-dot online",a.textContent="PC SYNCED",l.textContent="🟢",n.textContent=`Connected to Laptop (${this.targetHost})`,o.textContent="Active bi-directional handshake verified! FlightMap 3D cockpit monitor is receiving your live GNSS telemetry.";break;case"relay_connected":i.className="conn-dot relay",a.textContent="RELAY READY",l.textContent="🟡",n.textContent="Connected to Relay Server",o.textContent=`Connected to FlightMap server at ${this.targetHost}. Open http://localhost:3000 on your laptop to display moving map.`;break;case"connecting":i.className="conn-dot connecting",a.textContent="CONNECTING...",l.textContent="🔄",n.textContent=`Connecting to ${this.targetHost}...`,o.textContent=e||"Establishing WebSocket telemetry handshake...";break;case"offline":default:i.className="conn-dot",a.textContent="PC OFFLINE",l.textContent="🔴",n.textContent=`Disconnected from Laptop (${this.targetHost})`,o.textContent='Cannot reach PC. Ensure phone & PC are on the same Wi-Fi or Hotspot, or tap "Change PC IP" below.';break}this.updateHandshakeStats()}updateHandshakeStats(t=!1){const e=document.getElementById("hs-target-host"),s=document.getElementById("hs-latency"),i=document.getElementById("hs-packets-sent"),a=document.getElementById("hs-packets-acked");e&&(e.textContent=this.targetHost),s&&(s.textContent=this.lastLatencyMs!==null?`${this.lastLatencyMs} ms`:"--"),i&&(i.textContent=this.packetsSent.toString()),a&&(a.textContent=this.packetsAcked.toString(),t&&(a.classList.remove("pulse"),a.offsetWidth,a.classList.add("pulse")))}updateDetectedIpChips(t){const e=document.getElementById("ip-preset-chips");if(!e||!t)return;if(!e.querySelector(`[data-host="${t}:3443"]`)){const i=document.createElement("span");i.className="ip-chip",i.setAttribute("data-host",`${t}:3443`),i.textContent=`⚡ Server IP (${t}:3443)`,i.addEventListener("click",()=>{this.setTargetHost(`${t}:3443`)}),e.prepend(i)}}setTargetHost(t){const e=t.trim().replace(/^[a-z]+:\/\//i,"").replace(/\/.*$/,"");if(!e)return;this.targetHost=e,localStorage.setItem("flightmap_target_host",e);const s=document.getElementById("input-pc-ip");s&&(s.value=e);const i=document.getElementById("ip-config-drawer");i&&i.classList.add("hidden"),this.initWebSocket()}initEvents(){document.getElementById("btn-switch-mode")?.addEventListener("click",()=>{window.location.href="/start.html"}),document.getElementById("btn-switch-https")?.addEventListener("click",()=>{const n=`https://${window.location.hostname}:3443/mobile.html`;window.location.href=n}),document.getElementById("btn-header-badge")?.addEventListener("click",()=>{this.toggleIpDrawer()}),document.getElementById("btn-toggle-ip-drawer")?.addEventListener("click",()=>{this.toggleIpDrawer()}),document.getElementById("btn-reconnect-now")?.addEventListener("click",()=>{this.initWebSocket()}),document.getElementById("btn-save-ip")?.addEventListener("click",()=>{const n=document.getElementById("input-pc-ip");n&&n.value&&this.setTargetHost(n.value)}),document.getElementById("input-pc-ip")?.addEventListener("keydown",n=>{if(n.key==="Enter"){const o=document.getElementById("input-pc-ip");o&&o.value&&this.setTargetHost(o.value)}}),document.querySelectorAll(".ip-chip").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-host");o&&this.setTargetHost(o)})}),document.querySelectorAll(".m-unit-pill").forEach(n=>{n.addEventListener("click",o=>{const r=o.currentTarget.dataset.unit;if(r&&(this.unitManager.setSystem(r),this.setActiveUnitPill(r),this.updateMobileReadouts(this.isSimulating?"Simulator":"GPS"),this.ws&&this.ws.readyState===WebSocket.OPEN))try{this.ws.send(JSON.stringify({type:"unit_system",system:r,timestamp:Date.now()}))}catch{}})}),document.querySelectorAll(".battery-pill").forEach(n=>{n.addEventListener("click",o=>{const r=o.currentTarget.dataset.mode;if(r){this.batteryMode=r;try{localStorage.setItem("flightmap_battery_saver",r)}catch{}this.updateBatteryStatus()}})}),document.getElementById("btn-cues")?.addEventListener("click",()=>{this.cuesEnabled=!this.cuesEnabled;try{localStorage.setItem("flightmap_cues",this.cuesEnabled?"1":"0")}catch{}this.initAudio(),this.cuesEnabled&&this.cue("ack"),this.renderCuesButton()}),document.getElementById("btn-toggle-transmit")?.addEventListener("click",()=>{this.isTransmitting?this.stopTransmitting():this.startTransmitting()}),document.getElementById("btn-test-gps")?.addEventListener("click",()=>{this.isSimulating?this.stopSimulation():this.startSimulation()});const s=document.getElementById("chk-gyro-sync");s?.addEventListener("change",()=>{this.syncOrientation=s.checked,this.syncOrientation&&this.requestDeviceOrientation()}),document.querySelectorAll(".cam-pill").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-cam");o&&(this.setActiveCameraPill(o),this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({type:"camera_command",mode:o})))})}),this.setActiveCameraPill("orbit"),document.querySelectorAll(".m-speed-pill").forEach(n=>{n.addEventListener("click",o=>{const r=parseInt(o.currentTarget.dataset.speed||"10",10);if(this.setActiveSimSpeedPill(r),this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({type:"sim_speed_command",speed:r,timestamp:Date.now()}))}catch{}})}),document.getElementById("m-btn-sim-pause")?.addEventListener("click",()=>{const n=!this.remoteSimPaused;if(this.setRemoteSimPauseState(n),this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({type:"sim_pause_command",isPaused:n,timestamp:Date.now()}))}catch{}}),document.getElementById("btn-toggle-remote-fp")?.addEventListener("click",()=>{this.isFlightPlanOpen=!this.isFlightPlanOpen;const n=document.getElementById("body-remote-fp"),o=document.getElementById("chevron-remote-fp");n&&o&&(this.isFlightPlanOpen?(n.classList.remove("collapsed"),o.classList.add("expanded")):(n.classList.add("collapsed"),o.classList.remove("expanded")))});const i=document.getElementById("remote-input-from"),a=document.getElementById("remote-input-to");i?.addEventListener("input",()=>{i.value=i.value.toUpperCase(),this.handleAirportSearchInput("from")}),a?.addEventListener("input",()=>{a.value=a.value.toUpperCase(),this.handleAirportSearchInput("to")}),i?.addEventListener("focus",()=>this.handleAirportSearchInput("from")),a?.addEventListener("focus",()=>this.handleAirportSearchInput("to"));const l=document.getElementById("remote-input-flight");l?.addEventListener("input",()=>{l.value=l.value.toUpperCase()}),document.getElementById("btn-mobile-send-route")?.addEventListener("click",()=>{const n=document.getElementById("remote-input-from")?.value.trim().toUpperCase(),o=document.getElementById("remote-input-to")?.value.trim().toUpperCase();if(!n||!o||n===o){this.showFpFeedback("Please enter valid 3-letter IATA codes (e.g. BHX, OTP)","warn");return}const r=this.readRouteMeta();this.sendFlightPlan(n,o,r.flightNumber||`${n}-${o}`,"Custom Route","Airbus A321neo",r.alt,r.speed)}),document.getElementById("btn-mobile-save-fav")?.addEventListener("click",()=>{const n=document.getElementById("remote-input-from")?.value.trim().toUpperCase(),o=document.getElementById("remote-input-to")?.value.trim().toUpperCase();if(!n||!o||n===o){this.showFpFeedback("Enter valid IATAs before saving","warn");return}const r=this.readRouteMeta();this.flightPlanManager.saveFavoriteRoute({from:n,to:o,flightNumber:r.flightNumber||`${n}-${o}`,airline:`${n} &rarr; ${o}`,aircraft:"Airbus A321neo",cruiseAltitudeFt:r.alt,cruiseSpeedKnots:r.speed}),this.showFpFeedback(`✓ Saved ${n} &rarr; ${o} to favorites!`,"success"),this.renderMobilePresets()})}renderMobilePresets(){const t=document.getElementById("remote-presets-list");if(!t)return;const e=this.flightPlanManager.getFavoriteRoutes();t.innerHTML=e.map(s=>{const i=`${s.from.toUpperCase()}-${s.to.toUpperCase()}`;return`
          <button class="mobile-preset-pill ${this.activeRouteKey===i?"active":""} ${s.isCustom?"custom-fav":""}" data-from="${s.from}" data-to="${s.to}" data-flight="${s.flightNumber}" data-airline="${s.airline}" data-aircraft="${s.aircraft}" data-alt="${s.cruiseAltitudeFt||37e3}" data-speed="${s.cruiseSpeedKnots||450}">
            <div class="m-pill-top">
              <span class="m-pill-flight">${s.flightNumber}</span>
              ${s.isCustom?'<span class="m-pill-star">⭐</span>':""}
            </div>
            <div class="m-pill-route">${s.from} &rarr; ${s.to}</div>
            <div class="m-pill-airline">${s.airline}</div>
          </button>
        `}).join(""),t.querySelectorAll(".mobile-preset-pill").forEach(s=>{s.addEventListener("click",i=>{const a=i.currentTarget,l=a.dataset.from,n=a.dataset.to,o=a.dataset.flight||`${l}-${n}`,r=a.dataset.airline||"rTech Airways",c=a.dataset.aircraft||"Airbus A321neo",p=parseInt(a.dataset.alt||"37000",10),h=parseInt(a.dataset.speed||"450",10);this.sendFlightPlan(l,n,o,r,c,p,h)})})}sendFlightPlan(t,e,s,i,a,l=37e3,n=450){const o=t.trim().toUpperCase(),r=e.trim().toUpperCase();this.activeRouteKey=`${o}-${r}`,this.renderMobilePresets(),this.syncRouteMetaInputs(s,l,n),this.pendingRouteCue={key:`${o}-${r}`,at:Date.now()};const c=document.getElementById("disp-active-route");if(c&&(c.textContent=`Active: ${s} (${o} → ${r})`),this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({type:"flight_plan_command",from:o,to:r,flightNumber:s,airline:i,aircraft:a,cruiseAltitude:l,cruiseSpeed:n,timestamp:Date.now()})),this.showFpFeedback(`🚀 Sent ${s} (${o}&rarr;${r}) to Laptop 3D Map!`,"success")}catch{this.showFpFeedback("WebSocket transmission failed","error")}else this.showFpFeedback("Laptop is currently offline; connect to sync","warn")}readRouteMeta(){const t=document.getElementById("remote-input-flight")?.value.trim().toUpperCase()||"",e=parseInt(document.getElementById("remote-select-alt")?.value||"37000",10),s=parseInt(document.getElementById("remote-select-speed")?.value||"450",10);return{flightNumber:t,alt:e||37e3,speed:s||450}}syncRouteMetaInputs(t,e,s){const i=document.getElementById("remote-input-flight");i&&(i.value=t.toUpperCase());const a=document.getElementById("remote-select-alt");if(a){const n=String(Math.round(e));Array.from(a.options).some(o=>o.value===n)&&(a.value=n)}const l=document.getElementById("remote-select-speed");if(l){const n=String(Math.round(s));Array.from(l.options).some(o=>o.value===n)&&(l.value=n)}}showFpFeedback(t,e){const s=document.getElementById("remote-fp-feedback");s&&(s.innerHTML=t,s.className=`remote-fp-feedback ${e}`,setTimeout(()=>{s.innerHTML===t&&(s.className="remote-fp-feedback",s.innerHTML="")},3500))}setActiveCameraPill(t){document.querySelectorAll(".cam-pill").forEach(e=>{e.getAttribute("data-cam")===t?e.classList.add("active"):e.classList.remove("active")})}setActiveSimSpeedPill(t){this.remoteSimSpeed=t;const e=document.getElementById("m-sim-speed-badge");e&&(e.textContent=this.remoteSimPaused?`PAUSED • ${t}x`:`${t}x`,this.remoteSimPaused?e.classList.add("paused"):e.classList.remove("paused")),document.querySelectorAll(".m-speed-pill").forEach(s=>{parseInt(s.dataset.speed||"0",10)===t?s.classList.add("active"):s.classList.remove("active")})}setRemoteSimPauseState(t){this.remoteSimPaused=t;const e=document.getElementById("m-btn-sim-pause"),s=document.getElementById("m-sim-pause-icon"),i=document.getElementById("m-sim-pause-text"),a=document.getElementById("m-sim-speed-badge");e&&s&&i&&(t?(e.classList.add("paused"),s.textContent="▶",i.textContent="RESUME"):(e.classList.remove("paused"),s.textContent="⏸",i.textContent="PAUSE")),a&&(a.textContent=t?`PAUSED • ${this.remoteSimSpeed}x`:`${this.remoteSimSpeed}x`,t?a.classList.add("paused"):a.classList.remove("paused"))}toggleIpDrawer(){const t=document.getElementById("ip-config-drawer"),e=document.getElementById("label-toggle-ip");t&&(t.classList.contains("hidden")?(t.classList.remove("hidden"),e&&(e.textContent="Close IP Config"),document.getElementById("input-pc-ip")?.focus()):(t.classList.add("hidden"),e&&(e.textContent="Change PC IP")))}async startTransmitting(){if(this.isSimulating&&this.stopSimulation(),!navigator.geolocation){this.setStatusMessage("❌ Geolocation is not supported by your mobile browser.");return}if(!window.isSecureContext&&window.location.protocol==="http:"){this.setStatusMessage("⚠️ Mobile browser blocked GPS: HTTPS connection required.");const i=document.getElementById("insecure-banner");i&&(i.style.display="flex")}try{"wakeLock"in navigator&&(this.wakeLock=await navigator.wakeLock.request("screen"))}catch{}this.initAudio(),this.hadGpsFix=!1,this.hadFirstAck=!1,this.isTransmitting=!0;const t=document.getElementById("btn-toggle-transmit"),e=document.getElementById("transmit-label"),s=document.getElementById("transmit-icon");t&&e&&s&&(t.classList.add("active"),e.textContent="TRANSMITTING GPS LIVE (STOP)",s.textContent="🟢"),this.setStatusMessage("📡 Requesting hardware GNSS satellite lock from device..."),this.updateTransmitCounter(this.isWsConnected),navigator.geolocation.getCurrentPosition(i=>{this.handlePositionUpdate(i,"Network/Cell Fix")},i=>{console.warn("Initial coarse position:",i.message)},{enableHighAccuracy:!1,timeout:5e3,maximumAge:1e4}),this.watchId=navigator.geolocation.watchPosition(i=>{this.handlePositionUpdate(i,"Satellite GNSS Fix")},i=>{this.handleGpsError(i)},{enableHighAccuracy:!0,maximumAge:1e3,timeout:15e3})}handlePositionUpdate(t,e){const s=t.coords;this.lastLat=s.latitude,this.lastLon=s.longitude,this.lastAlt=s.altitude!==null?Math.round(s.altitude*3.28084):41e3,this.lastSpeed=s.speed!==null?Math.round(s.speed*3.6/1.852):485,this.lastHeading=s.heading!==null?Math.round(s.heading):0,this.lastAccuracy=Math.round(s.accuracy||5),this.hadGpsFix||(this.hadGpsFix=!0,this.cue("gps-lock")),this.compassMagHeading===null&&typeof s.heading=="number"&&typeof s.speed=="number"&&s.speed>3&&(this.compassGpsHeading=Math.round(s.heading),this.renderCompass()),this.updateMobileReadouts(e),this.broadcastTelemetry()}handleGpsError(t){let e="";switch(t.code){case 1:e="❌ Location Permission Denied. Please allow location in browser settings & ensure HTTPS is used.";break;case 2:e='⚠️ Satellite signal unavailable indoors. Move near window or use "Test GPS Simulator".';break;case 3:e="⏳ Satellite acquisition timed out. Retrying search...",navigator.geolocation.getCurrentPosition(s=>this.handlePositionUpdate(s,"Coarse Network Fix"),()=>{},{enableHighAccuracy:!1,timeout:5e3});break;default:e=`GPS Error (${t.code}): ${t.message}`}this.setStatusMessage(e)}stopTransmitting(){this.isTransmitting=!1,this.watchId!==null&&(navigator.geolocation.clearWatch(this.watchId),this.watchId=null),this.wakeLock&&(this.wakeLock.release().catch(()=>{}),this.wakeLock=null);const t=document.getElementById("btn-toggle-transmit"),e=document.getElementById("transmit-label"),s=document.getElementById("transmit-icon");t&&e&&s&&(t.classList.remove("active"),e.textContent="START TRANSMITTING GPS",s.textContent="📡"),this.setStatusMessage("GPS transmission paused."),this.updateTransmitCounter(this.isWsConnected)}startSimulation(){this.isTransmitting&&this.stopTransmitting(),this.initAudio(),this.hadGpsFix=!0,this.hadFirstAck=!1,this.cue("gps-lock"),this.isSimulating=!0;const t=document.getElementById("btn-test-gps");t&&(t.textContent="⏹ Stop Test GPS",t.style.background="rgba(0, 229, 255, 0.3)"),this.setStatusMessage("🧪 Transmitting simulated flight GPS data to laptop..."),this.simTimer=window.setInterval(()=>{this.simLon-=.015,this.simLat+=.002,this.lastLat=this.simLat,this.lastLon=this.simLon,this.lastAlt=this.simAlt,this.lastSpeed=this.simSpeed,this.lastHeading=this.simHdg,this.lastAccuracy=2.5,this.compassMagHeading===null&&(this.compassGpsHeading=this.simHdg,this.renderCompass()),this.updateMobileReadouts("Simulator Active (Cruise)"),this.broadcastTelemetry()},1e3)}stopSimulation(){this.isSimulating=!1,this.simTimer!==null&&(clearInterval(this.simTimer),this.simTimer=null);const t=document.getElementById("btn-test-gps");t&&(t.textContent="🧪 Test GPS Simulator",t.style.background=""),this.setStatusMessage("Simulator stopped."),this.updateTransmitCounter(this.isWsConnected)}setStatusMessage(t){const e=document.getElementById("disp-coords");e&&(e.textContent=t)}updateMobileReadouts(t){const e=(n,o)=>{const r=document.getElementById(n);r&&(r.textContent=o)},s=this.unitManager.formatSpeed(this.lastSpeed),i=this.unitManager.formatAltitude(this.lastAlt);e("disp-acc",`±${this.lastAccuracy}`),e("disp-speed",s.value.toString()),e("disp-speed-unit",s.unit),e("disp-alt",i.value.toLocaleString()),e("disp-alt-unit",i.unit),e("disp-heading",`${this.lastHeading}°`);const a=d.formatCoordinateRow(this.lastLat,!0),l=d.formatCoordinateRow(this.lastLon,!1);e("disp-coords",`${a.formatted}  •  ${l.formatted}`),e("disp-fix-type",`✓ ${t} active`)}updateTransmitCounter(t){const e=document.getElementById("tx-counter");e&&(!t||!this.isWsConnected?(e.className="transmission-counter offline",e.textContent=`⚠️ PC OFFLINE — ${this.packetsSent} fixes sent, but PC is unreachable. Check Handshake Card above.`):this.isLaptopOnline?(e.className="transmission-counter success",e.textContent=`🟢 LIVE TRANSMISSION ACTIVE — ${this.packetsSent} fixes sent • ${this.packetsAcked} ACKed by laptop (${this.lastLatencyMs||"<10"}ms)`):(e.className="transmission-counter warning",e.textContent=`🟡 RELAY ONLINE — ${this.packetsSent} fixes sent. Waiting for Laptop 3D Map to open...`))}requestDeviceOrientation(){typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(t=>{t==="granted"&&window.addEventListener("deviceorientation",this.handleOrientation.bind(this))}).catch(console.error):window.addEventListener("deviceorientation",this.handleOrientation.bind(this))}handleOrientation(t){if(!this.syncOrientation)return;const e=t.beta||0,s=t.gamma||0;this.currentPitch=Math.max(-25,Math.min(25,(e-45)*.5)),this.currentRoll=Math.max(-45,Math.min(45,s*.8));const i=(a,l)=>{const n=document.getElementById(a);n&&(n.textContent=l)};i("disp-pitch",`PITCH: ${this.currentPitch>=0?"+":""}${this.currentPitch.toFixed(1)}°`),i("disp-roll",`ROLL: ${this.currentRoll.toFixed(1)}°`),this.broadcastTelemetry()}broadcastTelemetry(){if(!this.ws||this.ws.readyState!==WebSocket.OPEN){this.updateTransmitCounter(!1);return}const t=Date.now();if(this.isBatterySaverActive()&&t-this.lastTelemetrySentAt<1e4)return;this.lastTelemetrySentAt=t,this.packetsSent++;const e={type:"gps_update",lat:this.lastLat,lon:this.lastLon,altitude:Math.round(this.lastAlt/3.28084),speed:this.lastSpeed*1.852/3.6,heading:this.lastHeading,pitch:this.currentPitch,roll:this.currentRoll,accuracy:this.lastAccuracy,timestamp:Date.now()};try{this.ws.send(JSON.stringify(e)),this.updateHandshakeStats(),this.updateTransmitCounter(!0)}catch(s){console.warn("[Mobile] Error broadcasting telemetry:",s),this.updateTransmitCounter(!1)}}}new f;
