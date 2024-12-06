import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api/quote': {
        target: 'https://zenquotes.io',  // Correct ZenQuotes API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/quote/, '/api/random'), // Adjust path to match the ZenQuotes API endpoint
      },
    },
  },
});
