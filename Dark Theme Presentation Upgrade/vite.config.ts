import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/batbox-boardmeeting/',
  build: {
    outDir: 'build',
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'vendor-motion': ['motion'],
          'vendor-radix': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
          ],
          'vendor-ui': ['lucide-react', 'recharts', 'clsx', 'tailwind-merge'],
        },
      },
    },
    // Increase chunk size warning limit since we have large assets
    chunkSizeWarningLimit: 1000,
    // Use esbuild for minification (faster, no extra dependency)
    minify: 'esbuild',
    // Disable source maps for production
    sourcemap: false,
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: true,
    },
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'motion',
      'lucide-react',
    ],
  },
  // Enable esbuild optimizations
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
