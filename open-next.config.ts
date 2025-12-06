import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({});

// Add buildCommand to prevent infinite loop
// opennextjs-cloudflare runs `bun run build` by default which causes recursion
config.buildCommand = "bun next build";

export default config;
