import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
import { fileURLToPath, URL } from "url";

export default {
  base: "./",
  server: {
    open: false,
    watch: {
      usePolling: true
    }
  },
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    outDir: "build"
  }
};
