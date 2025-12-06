import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({
  // Enable observability for monitoring and debugging
  observability: {
    enabled: true,
    head_sampling_rate: 1,
    logs: {
      enabled: true,
      head_sampling_rate: 1,
      persist: true,
      invocation_logs: true
    },
    traces: {
      enabled: true,
      persist: true,
      head_sampling_rate: 1
    }
  }
});

// Add buildCommand to prevent infinite loop
// opennextjs-cloudflare runs `bun run build` by default which causes recursion
config.buildCommand = "bun next build";

export default config;
