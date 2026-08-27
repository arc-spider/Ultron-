import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
      // Prevents two copies of three.js ending up in the graph (one direct,
      // one nested inside @react-three/drei / postprocessing) — a common
      // cause of dev-server memory blowing up in constrained environments
      // like StackBlitz WebContainers.
      dedupe: ['three', 'react', 'react-dom'],
    },
    // Pre-bundle the heavy 3D deps once via esbuild instead of Vite
    // re-transforming them piecemeal on every cold start — noticeably
    // lighter in memory-constrained dev environments.
    optimizeDeps: {
      include: [
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        '@react-three/postprocessing',
      ],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
