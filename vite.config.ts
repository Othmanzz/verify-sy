import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Configure client-side routing for development
    historyApiFallback: {
      index: '/index.html',
    },
  },
  preview: {
    // Configure client-side routing for preview mode
    historyApiFallback: {
      index: '/index.html',
    },
  },
  build: {
    // Ensure proper routing for production builds
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
