import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Counter/",   // ✅ correct place
  plugins: [react(), tailwindcss()] // ✅ fixed array
})