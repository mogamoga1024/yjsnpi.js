import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/yjsnpi.js',
      formats: ['es', 'umd'],
      name: 'yjsnpi',
      fileName: (format) => format === 'umd' ? 'yjsnpi.js' : 'yjsnpi.mjs'
    },
    rollupOptions: {
      output: {
        dir: 'dist'
      }
    },
    minify: 'terser'
  }
});
