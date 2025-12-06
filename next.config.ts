import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

// Initialize OpenNext Cloudflare for local dev with bindings
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
