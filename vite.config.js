import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import dsv from '@rollup/plugin-dsv' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    dsv(), 
  ],
  resolve: {
    
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
