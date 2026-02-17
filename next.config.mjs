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
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
					},
				],
			},
		];
	},
};

export default nextConfig;

// Initialize OpenNext Cloudflare for local dev with bindings
initOpenNextCloudflareForDev();
