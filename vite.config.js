import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  // optional: set a default dev server host (or remove this line)
  server: { host: true },
});
