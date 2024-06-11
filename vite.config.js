import htmlPurge from 'vite-plugin-purgecss';
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [
    htmlPurge(),
  ]
});
