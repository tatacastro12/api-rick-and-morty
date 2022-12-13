import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tatacastro12.github.io/api-rick-and-morty",
  plugins: [react()],
})
