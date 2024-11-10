import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      '@emotion/react': '@emotion/react',
      '@emotion/styled': '@emotion/styled',
    },
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
