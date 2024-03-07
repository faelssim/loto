import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: `../../dist/${pkg.name}`
  }
})
