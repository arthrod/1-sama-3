import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.resolve(__dirname),
  // Configure webpack for better Cloudflare Workers compatibility
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Server-side bundling for Cloudflare Workers
      config.resolve = {
        ...config.resolve,
        // Prioritize workerd conditions for server bundle
        conditionNames: ['workerd', 'worker', 'browser', 'module', 'import', 'require', 'default'],
      };

      // Ensure proper external handling for Cloudflare environment
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push({
          'cloudflare:assets': 'cloudflare:assets',
        });
      }
    }

    return config;
  },
};

export default nextConfig;

// Initialize OpenNext Cloudflare for local dev with bindings
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
