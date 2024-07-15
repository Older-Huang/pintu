import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts';
import parsecss from './src/scripts/parsecss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    parsecss(),
    vue(),
    vueJsx(),
    vueDevTools(),
    dts({
      include: ['src/packages/**/*.{vue,ts}'],
      tsconfigPath: './tsconfig.build.json'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsInlineLimit: 1048576,
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: fileURLToPath(new URL('./src/packages/index.ts', import.meta.url)),
      name: 'Jigsaw',
      fileName: '[name]',
      formats: ['es', 'umd'],

    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
})
