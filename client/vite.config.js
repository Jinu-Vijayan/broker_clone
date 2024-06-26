import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:10000',
        secure: false,
      }
    }
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  plugins: [react()],
})
