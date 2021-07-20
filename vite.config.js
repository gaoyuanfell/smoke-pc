import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import viteCompression from "vite-plugin-compression";
export default defineConfig({
  plugins: [createVuePlugin(), viteCompression()],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve("src")
    }
  }
});
