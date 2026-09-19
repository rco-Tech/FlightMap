import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  const isPages = process.env.GITHUB_PAGES === 'true';
  const base = isPages ? '/FlightMap/' : '/';

  return {
    base,
    server: {
      host: '0.0.0.0',
      port: 5173,
      proxy: {
        '/ws': {
          target: 'ws://localhost:3000',
          ws: true
        },
        '/api': {
          target: 'http://localhost:3000'
        }
      }
    },
    build: {
      target: 'esnext',
      assetsInlineLimit: 0,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          mobile: resolve(__dirname, 'mobile.html'),
          start: resolve(__dirname, 'start.html')
        }
      }
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        includeAssets: ['icons/apple-touch-icon.png', 'icons/favicon-48x48.png'],
        manifest: {
          name: 'FlightMap',
          short_name: 'FlightMap',
          description:
            'Offline 3D in-flight moving map with cross-device GNSS telemetry. Standalone map or GPS relay mode.',
          theme_color: '#030814',
          background_color: '#02060d',
          display: 'standalone',
          orientation: 'any',
          scope: base,
          start_url: `${base}start.html`,
          categories: ['travel', 'navigation', 'utilities'],
          icons: [
            { src: 'icons/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: 'icons/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
            {
              src: 'icons/maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        },
        workbox: {
          globPatterns: [
            '**/*.{js,css,html}',
            'assets/data/**/*.json',
            'assets/data/**/*.geojson',
            'assets/textures/mobile/**/*.{jpg,png}',
            'icons/**/*.png'
          ],
          maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
          navigateFallback: `${base}start.html`,
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true
        }
      })
    ]
  };
});
