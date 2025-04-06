import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup.test.js',
    include: ['**/*.{test,spec}.{js,jsx}'],
    exclude: ['node_modules', 'setup.test.js']
  },
})
