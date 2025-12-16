// Custom worker that re-uses the generated OpenNext fetch handler
// @ts-expect-error `.open-next/worker.ts` is generated at build time
import { default as handler } from "./.open-next/worker.js";

export default {
	fetch: handler.fetch,
} satisfies ExportedHandler<CloudflareEnv>;

// Re-export for DO Queue and DO Tag Cache if needed
// @ts-expect-error `.open-next/worker.ts` is generated at build time
export { DOQueueHandler, DOShardedTagCache } from "./.open-next/worker.js";
