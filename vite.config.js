import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build portable across Netlify, GitHub Pages project
// sites, and local file preview without hardcoding a repo path.
export default defineConfig({
  base: './',
  plugins: [react()],
})
