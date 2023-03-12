import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {
  peerDependencies,
  dependencies,
} from "./package.json";

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "dsx-react-components",
      formats: ["cjs", "es"],
      fileName: (format) =>
        `dsx-react-components.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
    },
  },
  plugins: [react()],
});

//TODO: Expose tailwind configuration file so it can be imported.
