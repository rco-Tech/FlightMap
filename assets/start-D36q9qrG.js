import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as n,i as d,s as r}from"./mode-BZ018I4_.js";const l=[{id:"map",icon:"🌐",name:"Moving Map",desc:"Render the full 3D in-flight moving map on this device using its own satellite GNSS. No laptop required.",href:"/FlightMap/index.html"},{id:"relay",icon:"📡",name:"GPS Relay",desc:"Stream this device’s GNSS + gyro to a laptop running FlightMap as a live telemetry transmitter.",href:"/FlightMap/mobile.html"}];function c(t){r(t.id),window.location.href=t.href}function m(){const t=document.getElementById("start-app");if(!t)return;const a=n(),i=d()?"":"Tip: use your browser menu → <strong>Add to Home Screen</strong> to install FlightMap as a standalone app.";t.innerHTML=`
    <div class="start-root">
      <header class="start-header">
        <div class="start-eyebrow">rTech Systems</div>
        <h1 class="start-title">FLIGHTMAP</h1>
        <p class="start-subtitle">Offline 3D In-Flight Moving Map • Select operating mode</p>
      </header>

      <div class="mode-grid" id="mode-grid"></div>

      <footer class="start-footer">
        ${i}
        <div style="margin-top:10px;">
          Earth imagery © Solar System Scope, NASA-derived, CC BY 4.0.
        </div>
      </footer>
    </div>
  `;const o=document.getElementById("mode-grid");for(const e of l){const s=document.createElement("button");s.type="button",s.className="mode-card"+(a===e.id?" is-last":""),s.innerHTML=`
      ${a===e.id?'<span class="mode-badge">Last used</span>':""}
      <span class="mode-icon">${e.icon}</span>
      <div class="mode-name">${e.name}</div>
      <p class="mode-desc">${e.desc}</p>
    `,s.addEventListener("click",()=>c(e)),o.appendChild(s)}}m();
