import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true,
        svgProps: { fill: "currentColor" },
        svgoConfig: {
          plugins: [
            {
              name: "removeAttrs",
              params: { attrs: "(fill|stroke)" },
            },
          ],
        },
      },
    }),
  ],
  server: {
    host: true,      // allow external connections
    port: 5173,
    allowedHosts: [  // 👈 add your ngrok subdomain here
      '746ca9929e11.ngrok-free.app'
    ]
  },
})
