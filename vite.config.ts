import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { getRootPath, getSrcPath } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  // server: {
  //   host: '192.168.31.87',
  //   port: 8080,
  // },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
    }),
    Components(),
  ],
  resolve: {
    alias: {
      '~': getRootPath(),
      '@': getSrcPath(),
    },
  },
})
