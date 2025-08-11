import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the development server port
  },
  preview: {
    port: 8080, // Set the preview server port
  },
  build: {
    outDir: 'build', // CRA's default build output
  },
});
