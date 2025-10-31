import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // fuerza a que cualquier import "react-dom" use el paquete completo,
      // no "react-dom/client"
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
})
