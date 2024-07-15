import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsConfigPaths(), react()],
  server:{
    port: 3000,
    host: 'localhost'
  }
});
