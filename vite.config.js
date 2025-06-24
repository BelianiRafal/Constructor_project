import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vanilla from 'vite-plugin-vanilla';

export default defineConfig({
  plugins: [
    vanilla({
      include: '**/*.html',
      base: '/',
      transform(html, ctx) {},
    }),
  ],
  server: {
    port: 5500,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
