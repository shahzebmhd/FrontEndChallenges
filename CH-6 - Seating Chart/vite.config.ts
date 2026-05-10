import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveBase(): string {
  // Allow override for forks or custom hosting
  if (process.env.VITE_BASE) {
    return process.env.VITE_BASE.endsWith('/') ? process.env.VITE_BASE : `${process.env.VITE_BASE}/`;
  }
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  // Pages URL is /<repo>/CH-6 - Seating Chart/index.html — assets must load under that prefix
  if (repoName) {
    return `/${repoName}/CH-6 - Seating Chart/`;
  }
  return './';
}

export default defineConfig(({mode}) => {
  return {
    base: resolveBase(),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
