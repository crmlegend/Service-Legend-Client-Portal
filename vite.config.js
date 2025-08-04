import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import path module for absolute paths

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    },
  },
  build: {
    rollupOptions: {
      // Keep external empty, as lucide-react should be bundled.
      external: [],
    },
  },
})
