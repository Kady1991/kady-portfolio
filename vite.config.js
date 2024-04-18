// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@mui/material': 'path/to/node_modules/@mui/material',
      '@mui/icons-material': 'path/to/node_modules/@mui/icons-material',
      // Ajoutez d'autres alias MUI si nécessaire
    },
  },
});
