import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config = defineCloudflareConfig({}) as any;

// Configure Cloudflare-specific options
config.cloudflare = {
	// Enable workerd build conditions for proper Cloudflare Workers compatibility
	// This ensures packages resolve correctly for the Cloudflare runtime
	useWorkerdCondition: true,
};

// Add buildCommand to prevent infinite loop
// opennextjs-cloudflare runs `bun run build` by default which causes recursion
config.buildCommand = "bun next build";

export default config;
