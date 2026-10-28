import type { NextConfig } from "next";
import path from "node:path";

const config: NextConfig = {
  // A self-contained server bundle, so the Docker image needs no node_modules.
  output: "standalone",
  // The app imports the SDK from the monorepo, so trace files from its root.
  outputFileTracingRoot: path.join(__dirname, ".."),
  // The create page used to live at /launch; keep old links working.
  async redirects() {
    return [{ source: "/launch", destination: "/create", permanent: true }];
  },
};

export default config;
