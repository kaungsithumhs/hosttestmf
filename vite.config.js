import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: "host",
    //   filename: "remoteEntry.js",
    //   remotes: {
    //     remoteApp: "https://testmf-one.vercel.app/assets/remoteEntry.js",
    //   },
    // }),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remoteApp: "https://chatbuyer.shopdoora.com/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
