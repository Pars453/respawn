import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  root: path.resolve(process.cwd(), 'kart-royale-src'),
  base: '/games/kart-royale/',
  publicDir: 'public',
  build: {
    outDir: path.resolve(process.cwd(), 'public/games/kart-royale'),
    emptyOutDir: true,
    target: 'es2022',
    sourcemap: false
  }
});
