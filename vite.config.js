import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname, "./src"),
    },
  },
});


// We use the built-in Node.js `path` module to create the absolute path of the `src` folder.
// `path.resolve(__dirname, "./src")` converts the relative path (`./src`) into an absolute path (e.g., `C:/Users/Mayank/project/src`), so Vite always knows the exact location.
// This lets us use `@` as an alias, so instead of writing `../../../components/Button`, we can simply write `@/components/Button`.

