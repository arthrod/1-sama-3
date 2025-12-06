import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({});

// Add buildCommand to prevent infinite loop
// opennextjs-cloudflare runs `bun run build` by default which causes recursion
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(config as any).buildCommand = "bun next build";

export default config;
