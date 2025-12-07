import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("next").NextConfig} */
const nextConfig = {
	output: "standalone",
	outputFileTracingRoot: path.resolve(__dirname),
	turbopack: {},
	// Configure webpack for better Cloudflare Workers compatibility
	webpack: (config, { isServer }) => {
		if (isServer) {
			// Server-side bundling for Cloudflare Workers
			config.resolve = {
				...config.resolve,
				// Prioritize workerd conditions for server bundle
				conditionNames: [
					"workerd",
					"worker",
					"browser",
					"module",
					"import",
					"require",
					"default",
				],
			};

			// Ensure proper external handling for Cloudflare environment
			config.externals = config.externals || [];
			if (Array.isArray(config.externals)) {
				config.externals.push({
					"cloudflare:assets": "cloudflare:assets",
				});
			}
		}

		return config;
	},
};

export default nextConfig;

// Initialize OpenNext Cloudflare for local dev with bindings
initOpenNextCloudflareForDev();
