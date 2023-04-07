import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "n6r736",
  e2e: {
    chromeWebSecurity: false,
    specPattern: "./src/**/*.cy-e2e.{ts,tsx}",
  },
});
