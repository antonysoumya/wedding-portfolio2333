import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://antonysoumya.github.io/wedding-portfolio2333/
  base: '/wedding-portfolio2333/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
