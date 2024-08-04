import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { getRootPath, getSrcPath } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig({
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
