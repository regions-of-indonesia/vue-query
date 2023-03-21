import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    include: ["**/*.test.ts"],
    setupFiles: "./vitest.setup.ts",
  },
});
