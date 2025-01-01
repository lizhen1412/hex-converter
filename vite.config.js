import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置 @ 指向 src 目录
      '@soerenmartius/vue3-clipboard': '@soerenmartius/vue3-clipboard/dist/vue3-clipboard.esm.js' // 指定插件的构建路径
    }
  }
})
