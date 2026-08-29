import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project repos at username.github.io/repo-name/,
// so all asset paths must be prefixed with the repo name or nothing loads.
export default defineConfig({
  plugins: [react()],
  base: '/Ultron-/',
});
