import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    root: '.',
    base: '/',
    publicDir: 'public',
    server: {
      port: 3000,
      host: '0.0.0.0',
      open: false,
      cors: true,
    },
    preview: {
      port: 4173,
      host: '0.0.0.0',
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      assetsDir: 'assets',
      minify: 'terser',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'lucide-vendor': ['lucide-react'],
          },
        },
      },
    },
    plugins: [react()],
    define: {
      'process.env.MODE': JSON.stringify(mode),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    css: {
      postcss: './postcss.config.js',
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react'],
    },
  };
});
