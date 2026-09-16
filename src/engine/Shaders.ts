import * as THREE from 'three';

/**
 * Custom WebGL Shaders for Earth Atmosphere, Day/Night illumination, and Flight Path Arc
 */

export const AtmosphereShader = {
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    uniform vec3 glowColor;
    uniform float coefficient;
    uniform float power;
    void main() {
      float intensity = pow(coefficient - dot(vNormal, vec3(0.0, 0.0, 1.0)), power);
      gl_FragColor = vec4(glowColor, intensity * 0.75);
    }
  `
};

export const EarthDayNightShader = {
  uniforms: {
    dayTexture: { value: null as THREE.Texture | null },
    nightTexture: { value: null as THREE.Texture | null },
    specularMap: { value: null as THREE.Texture | null },
    bumpMap: { value: null as THREE.Texture | null },
    sunDirection: { value: new THREE.Vector3(1, 0, 0) }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vSunDir;
    varying vec3 vViewDir;
    uniform vec3 sunDirection;

    void main() {
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vSunDir = normalize(sunDirection);
      vViewDir = normalize(cameraPosition - worldPosition.xyz);
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,
  fragmentShader: `
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;
    uniform sampler2D specularMap;
    uniform sampler2D bumpMap;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vSunDir;
    varying vec3 vViewDir;

    void main() {
      // 4K Elevation bump relief perturbation
      float hCenter = texture2D(bumpMap, vUv).r;
      float hEast = texture2D(bumpMap, vUv + vec2(0.0004, 0.0)).r;
      float hNorth = texture2D(bumpMap, vUv + vec2(0.0, 0.0004)).r;
      vec3 perturbedNormal = normalize(vNormal + vec3((hCenter - hEast) * 4.5, (hCenter - hNorth) * 4.5, 0.0));

      float sunDot = dot(perturbedNormal, vSunDir);
      float smoothSunDot = dot(vNormal, vSunDir);

      // Smooth terminator transition
      float dayFactor = smoothstep(-0.12, 0.18, smoothSunDot);

      vec4 dayColor = texture2D(dayTexture, vUv);
      vec4 nightColor = texture2D(nightTexture, vUv);
      vec4 specMask = texture2D(specularMap, vUv);

      // Boost night lights on dark side
      vec3 nightCity = nightColor.rgb * 1.9 * (1.0 - dayFactor);

      // Realistic daylight with mountain slope shading and ambient illumination
      float diffuse = clamp(sunDot * 0.85 + 0.15, 0.15, 1.0);
      vec3 dayLighting = dayColor.rgb * diffuse * max(0.12, dayFactor);

      // Specular ocean sheen
      if (smoothSunDot > 0.0) {
        vec3 halfVector = normalize(vSunDir + vViewDir);
        float specAngle = max(dot(vNormal, halfVector), 0.0);
        float isWater = specMask.r; // water mask has high value over oceans
        float specular = pow(specAngle, 40.0) * isWater * 0.65;
        dayLighting += vec3(specular * 0.8, specular * 0.9, specular);
      }

      vec3 finalColor = dayLighting + nightCity;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};
