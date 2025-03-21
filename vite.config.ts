import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  resolve: {
    alias: {
      "~": resolve("src"),
    },
    dedupe: ["vue"],
    extensions: [".ts", ".vue"],
  },
  plugins: [vue()],
});
