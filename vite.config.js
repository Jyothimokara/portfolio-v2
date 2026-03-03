import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ✅ KEY FIX: Use './' so all asset paths are relative
  // This makes the built files work when opened directly in a browser
  // without a server (file:// protocol)
  base: './',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure sourcemaps for debugging
    sourcemap: false,
    // Inline small assets to reduce path issues
    assetsInlineLimit: 4096,
  },
})
