import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json'; // We'll create this next
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), crx({ manifest })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Ensure "@" points to "src"
    },
  },
  server: {
    port: 5173,
    cors: {
      origin: "*", // Allow all origins (only for development)
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
    watch: {
      usePolling: false, // Prevent excessive reloading
    },
    hmr: false, // Disable Hot Module Replacement
  },
})
