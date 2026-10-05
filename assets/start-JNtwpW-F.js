import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as h,i as v,A as u,s as f,a as c}from"./mode-D7kfJILk.js";const g=[{id:"map",icon:"🌐",name:"Moving Map",desc:"Render the full 3D in-flight moving map on this device using its own satellite GNSS. No laptop required.",href:"/FlightMap/index.html"},{id:"relay",icon:"📡",name:"GPS Relay",desc:"Stream this device’s GNSS + gyro to a laptop running FlightMap as a live telemetry transmitter.",href:"/FlightMap/mobile.html"}];function m(t){f(t.id),window.location.href=t.href}function w(){const t=document.getElementById("start-app");if(!t)return;const e=h(),n=v()?"":"Tip: use your browser menu → <strong>Add to Home Screen</strong> to install FlightMap as a standalone app.";t.innerHTML=`
    <div class="start-root">
      <header class="start-header">
        <div class="start-eyebrow">rTech Systems</div>
        <h1 class="start-title">FLIGHTMAP</h1>
        <p class="start-subtitle">Offline 3D In-Flight Moving Map • Select operating mode</p>
        <button class="version-pill" id="version-pill" type="button" title="Check for updates">
          <span class="version-dot"></span>${u}
        </button>
        <div class="version-hint">Tap to check for updates</div>
      </header>

      <div class="mode-grid" id="mode-grid"></div>

      <footer class="start-footer">
        ${n}
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
  `;const a=document.getElementById("mode-grid");for(const i of g){const o=document.createElement("button");o.type="button",o.className="mode-card"+(e===i.id?" is-last":""),o.innerHTML=`
      ${e===i.id?'<span class="mode-badge">Last used</span>':""}
      <span class="mode-icon">${i.icon}</span>
      <div class="mode-name">${i.name}</div>
      <p class="mode-desc">${i.desc}</p>
    `,o.addEventListener("click",()=>m(i)),a.appendChild(o)}k(),S()}function k(){const t=document.getElementById("version-pill");if(!t)return;const e=()=>{t.classList.remove("checking","uptodate"),t.innerHTML=`<span class="version-dot"></span>${u}`};t.addEventListener("click",async()=>{if(!t.classList.contains("checking")){t.classList.add("checking"),t.textContent="CHECKING FOR UPDATES…",s(!1);try{const n="serviceWorker"in navigator?await navigator.serviceWorker.getRegistration():void 0;if(!n){t.textContent="REFRESHING…",window.setTimeout(()=>window.location.reload(),500);return}let a=!1;if(n.addEventListener("updatefound",()=>{a=!0}),await n.update(),a||n.installing||n.waiting){t.textContent="UPDATE FOUND — REFRESHING…",window.setTimeout(()=>window.location.reload(),1800);return}t.classList.remove("checking"),t.classList.add("uptodate"),t.textContent=`✓ UP TO DATE — v${c}`,window.setTimeout(e,2400)}catch{e()}}})}const y=300*1e3;let p=0,d=!1;function b(t,e){const n=t.split(".").map(o=>parseInt(o,10)||0),a=e.split(".").map(o=>parseInt(o,10)||0),i=Math.max(n.length,a.length);for(let o=0;o<i;o++){const l=(n[o]||0)-(a[o]||0);if(l!==0)return l>0?1:-1}return 0}async function E(){try{const t=await fetch(`/FlightMap/version.json?t=${Date.now()}`,{cache:"no-store"});if(!t.ok)return null;const e=await t.json();return typeof e?.version=="string"?e.version:null}catch{return null}}function r(t,e={}){const n=document.getElementById("update-check"),a=document.getElementById("uc-text");if(!(!n||!a))switch(n.dataset.state=t,t){case"checking":a.textContent="Checking for updates…";break;case"latest":a.textContent=`v${c} — you're on the latest version`;break;case"outdated":a.textContent=`UPDATE AVAILABLE — v${c} → v${e.latest}`;break;case"error":a.textContent=e.note??"Couldn't reach the update server — try Check now";break}}async function s(t,e=!1){if(d)return;d=!0,e||r("checking");const n=await E();let a=!1;if("serviceWorker"in navigator)try{const i=await navigator.serviceWorker.getRegistration();if(i){if(t)try{await i.update()}catch{}a=!!(i.waiting||i.installing)}}catch{}if(p=Date.now(),d=!1,!n){if(!e){const i=location.hostname==="localhost"||location.hostname==="127.0.0.1";r("error",{note:i?"Update check runs on the deployed PWA (no service worker on localhost)":void 0})}return}b(n,c)>0||a?r("outdated",{latest:n}):r("latest")}async function C(){const t=document.getElementById("btn-force-update"),e=document.getElementById("uc-text");t&&(t.disabled=!0,t.textContent="⏳ Updating…"),e&&(e.textContent="Clearing caches & fetching the newest version…");try{if("serviceWorker"in navigator){const a=await navigator.serviceWorker.getRegistrations();await Promise.all(a.map(i=>i.unregister()))}if("caches"in window){const a=await caches.keys();await Promise.all(a.map(i=>caches.delete(i)))}}catch{}const n=new URL(window.location.href);n.searchParams.set("fresh",Date.now().toString(36)),window.location.replace(n.toString())}function S(){try{const t=new URL(window.location.href);t.searchParams.has("fresh")&&(t.searchParams.delete("fresh"),window.history.replaceState(null,"",t.pathname+(t.search||"")))}catch{}if(document.getElementById("btn-check-update")?.addEventListener("click",()=>{s(!0)}),document.getElementById("btn-force-update")?.addEventListener("click",()=>{C()}),"serviceWorker"in navigator){const t=!!navigator.serviceWorker.controller;let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{!t||e||(e=!0,window.location.reload())}),navigator.serviceWorker.getRegistration().then(n=>n?.update().catch(()=>{})).catch(()=>{})}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(Date.now()-p<3e4||s(!1,!0))}),window.setInterval(()=>{document.visibilityState==="visible"&&s(!1,!0)},y),window.setTimeout(()=>void s(!1),700)}w();
