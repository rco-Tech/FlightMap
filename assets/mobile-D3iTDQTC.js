import"./modulepreload-polyfill-B5Qt9EMX.js";class l{ws=null;isWsConnected=!1;isTransmitting=!1;isSimulating=!1;simTimer=null;watchId=null;wakeLock=null;syncOrientation=!1;currentPitch=0;currentRoll=0;lastLat=0;lastLon=0;lastAlt=0;lastSpeed=0;lastHeading=0;lastAccuracy=0;packetsSent=0;simLat=51.47;simLon=-.45;simAlt=41e3;simSpeed=495;simHdg=285;constructor(){this.render(),this.initWebSocket(),this.initEvents(),this.checkSecureContext()}checkSecureContext(){const t=window.isSecureContext,e=document.getElementById("insecure-banner");e&&(!t&&window.location.protocol==="http:"?e.style.display="flex":e.style.display="none")}render(){const t=document.getElementById("mobile-app");t.innerHTML=`
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

        <!-- Header -->
        <header class="mobile-header">
          <div class="mobile-title">
            <span>FLIGHTMAP COPILOT</span>
            <h1>Mobile GPS Relay</h1>
          </div>
          <div class="conn-badge">
            <span class="conn-dot" id="ws-dot"></span>
            <span id="ws-status-text">OFFLINE</span>
          </div>
        </header>

        <button class="switch-mode-btn" id="btn-switch-mode">🧭 Switch Mode</button>

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
          </div>
          <div class="transmission-counter" id="tx-counter">Packets Sent to Laptop: 0</div>
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
              <span class="unit">KTS</span>
            </div>
          </div>

          <div class="metric-box">
            <span class="label">GPS ALTITUDE</span>
            <div class="val-row">
              <span class="big-val" id="disp-alt">--</span>
              <span class="unit">FT</span>
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
        </div>
      </div>
    `}initWebSocket(){const e=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/telemetry`,s=()=>{try{this.ws=new WebSocket(e),this.ws.onopen=()=>{this.isWsConnected=!0,this.updateConnectionStatus(!0)},this.ws.onclose=()=>{this.isWsConnected=!1,this.updateConnectionStatus(!1),setTimeout(s,3e3)}}catch{this.updateConnectionStatus(!1)}};s()}updateConnectionStatus(t){const e=document.getElementById("ws-dot"),s=document.getElementById("ws-status-text");e&&s&&(t?(e.className="conn-dot online",s.textContent="CONNECTED"):(e.className="conn-dot",s.textContent="OFFLINE"))}initEvents(){document.getElementById("btn-switch-mode")?.addEventListener("click",()=>{window.location.href="/start.html"}),document.getElementById("btn-switch-https")?.addEventListener("click",()=>{const i=`https://${window.location.hostname}:3443/mobile.html`;window.location.href=i}),document.getElementById("btn-toggle-transmit")?.addEventListener("click",()=>{this.isTransmitting?this.stopTransmitting():this.startTransmitting()}),document.getElementById("btn-test-gps")?.addEventListener("click",()=>{this.isSimulating?this.stopSimulation():this.startSimulation()});const s=document.getElementById("chk-gyro-sync");s?.addEventListener("change",()=>{this.syncOrientation=s.checked,this.syncOrientation&&this.requestDeviceOrientation()}),document.querySelectorAll(".cam-pill").forEach(i=>{i.addEventListener("click",a=>{const n=a.currentTarget.dataset.cam;this.ws&&this.isWsConnected&&this.ws.send(JSON.stringify({type:"set_camera",mode:n}))})})}async startTransmitting(){if(this.isSimulating&&this.stopSimulation(),!navigator.geolocation){this.setStatusMessage("❌ Geolocation is not supported by your mobile browser.");return}if(!window.isSecureContext&&window.location.protocol==="http:"){this.setStatusMessage("⚠️ Mobile browser blocked GPS: HTTPS connection required.");const i=document.getElementById("insecure-banner");i&&(i.style.display="flex")}try{"wakeLock"in navigator&&(this.wakeLock=await navigator.wakeLock.request("screen"))}catch{}this.isTransmitting=!0;const t=document.getElementById("btn-toggle-transmit"),e=document.getElementById("transmit-label"),s=document.getElementById("transmit-icon");t&&e&&s&&(t.classList.add("active"),e.textContent="TRANSMITTING GPS LIVE (STOP)",s.textContent="🟢"),this.setStatusMessage("📡 Requesting hardware GNSS satellite lock from device..."),navigator.geolocation.getCurrentPosition(i=>{this.handlePositionUpdate(i,"Network/Cell Fix")},i=>{console.warn("Initial coarse position:",i.message)},{enableHighAccuracy:!1,timeout:5e3,maximumAge:1e4}),this.watchId=navigator.geolocation.watchPosition(i=>{this.handlePositionUpdate(i,"Satellite GNSS Fix")},i=>{this.handleGpsError(i)},{enableHighAccuracy:!0,maximumAge:1e3,timeout:15e3})}handlePositionUpdate(t,e){const s=t.coords;this.lastLat=s.latitude,this.lastLon=s.longitude,this.lastAlt=s.altitude!==null?Math.round(s.altitude*3.28084):41e3,this.lastSpeed=s.speed!==null?Math.round(s.speed*3.6/1.852):485,this.lastHeading=s.heading!==null?Math.round(s.heading):0,this.lastAccuracy=Math.round(s.accuracy||5),this.updateMobileReadouts(e),this.broadcastTelemetry()}handleGpsError(t){let e="";switch(t.code){case 1:e="❌ Location Permission Denied. Please allow location in browser settings & ensure HTTPS is used.";break;case 2:e='⚠️ Satellite signal unavailable indoors. Move near window or use "Test GPS Simulator".';break;case 3:e="⏳ Satellite acquisition timed out. Retrying search...",navigator.geolocation.getCurrentPosition(s=>this.handlePositionUpdate(s,"Coarse Network Fix"),()=>{},{enableHighAccuracy:!1,timeout:5e3});break;default:e=`GPS Error (${t.code}): ${t.message}`}this.setStatusMessage(e)}stopTransmitting(){this.isTransmitting=!1,this.watchId!==null&&(navigator.geolocation.clearWatch(this.watchId),this.watchId=null),this.wakeLock&&(this.wakeLock.release().catch(()=>{}),this.wakeLock=null);const t=document.getElementById("btn-toggle-transmit"),e=document.getElementById("transmit-label"),s=document.getElementById("transmit-icon");t&&e&&s&&(t.classList.remove("active"),e.textContent="START TRANSMITTING GPS",s.textContent="📡"),this.setStatusMessage("GPS transmission paused.")}startSimulation(){this.isTransmitting&&this.stopTransmitting(),this.isSimulating=!0;const t=document.getElementById("btn-test-gps");t&&(t.textContent="⏹ Stop Test GPS",t.style.background="rgba(0, 229, 255, 0.3)"),this.setStatusMessage("🧪 Transmitting simulated flight GPS data to laptop..."),this.simTimer=window.setInterval(()=>{this.simLon-=.015,this.simLat+=.002,this.lastLat=this.simLat,this.lastLon=this.simLon,this.lastAlt=this.simAlt,this.lastSpeed=this.simSpeed,this.lastHeading=this.simHdg,this.lastAccuracy=2.5,this.updateMobileReadouts("Simulator Active (Cruise)"),this.broadcastTelemetry()},1e3)}stopSimulation(){this.isSimulating=!1,this.simTimer!==null&&(clearInterval(this.simTimer),this.simTimer=null);const t=document.getElementById("btn-test-gps");t&&(t.textContent="🧪 Test GPS Simulator",t.style.background=""),this.setStatusMessage("Simulator stopped.")}setStatusMessage(t){const e=document.getElementById("disp-coords");e&&(e.textContent=t)}updateMobileReadouts(t){const e=(i,a)=>{const n=document.getElementById(i);n&&(n.textContent=a)};e("disp-acc",`±${this.lastAccuracy}`),e("disp-speed",this.lastSpeed.toString()),e("disp-alt",this.lastAlt.toLocaleString()),e("disp-heading",`${this.lastHeading}°`),e("disp-coords",`${this.lastLat.toFixed(5)}°, ${this.lastLon.toFixed(5)}°`),e("disp-fix-type",`✓ ${t} active`);const s=document.getElementById("tx-counter");s&&(s.textContent=`Packets Sent to Laptop: ${this.packetsSent}`)}requestDeviceOrientation(){typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(t=>{t==="granted"&&window.addEventListener("deviceorientation",this.handleOrientation.bind(this))}).catch(console.error):window.addEventListener("deviceorientation",this.handleOrientation.bind(this))}handleOrientation(t){if(!this.syncOrientation)return;const e=t.beta||0,s=t.gamma||0;this.currentPitch=Math.max(-25,Math.min(25,(e-45)*.5)),this.currentRoll=Math.max(-45,Math.min(45,s*.8));const i=(a,n)=>{const o=document.getElementById(a);o&&(o.textContent=n)};i("disp-pitch",`PITCH: ${this.currentPitch>=0?"+":""}${this.currentPitch.toFixed(1)}°`),i("disp-roll",`ROLL: ${this.currentRoll.toFixed(1)}°`),this.broadcastTelemetry()}broadcastTelemetry(){if(!this.ws||!this.isWsConnected)return;this.packetsSent++;const t={type:"gps_update",lat:this.lastLat,lon:this.lastLon,altitude:Math.round(this.lastAlt/3.28084),speed:this.lastSpeed*1.852/3.6,heading:this.lastHeading,pitch:this.currentPitch,roll:this.currentRoll,accuracy:this.lastAccuracy,timestamp:Date.now()};this.ws.send(JSON.stringify(t))}}new l;
