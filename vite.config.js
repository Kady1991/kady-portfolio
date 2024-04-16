import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@mui/material': '@mui/material/esm',
      '@mui/icons-material': '@mui/icons-material/esm',
    },
  },
});
