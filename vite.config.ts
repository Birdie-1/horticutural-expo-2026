import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/horticutural-expo-2026/',
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        // removed manualChunks to fix type error
      },
    },
  },
})
