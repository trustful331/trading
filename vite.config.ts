import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      store: path.resolve(__dirname, "./src/store"),
      pages: path.resolve(__dirname, "./src/pages"),
      utils: path.resolve(__dirname, "./src/utils"),
      containers: path.resolve(__dirname, "./src/containers"),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5175,
  },
});
