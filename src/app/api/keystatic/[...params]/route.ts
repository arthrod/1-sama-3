// Force this route to be completely dynamic - never evaluated at build time
export const dynamic = "force-dynamic";

// Apply Cloudflare User-Agent fix for GitHub API compatibility
import "../../../../lib/keystatic-client";

// Use a dynamic import with a getter to ensure this is only evaluated at runtime
export async function GET(request: Request) {
  const { makeRouteHandler } = await import("@keystatic/next/route-handler");
  const { default: keystatic } = await import("../../../../../keystatic.config");
  const handler = makeRouteHandler({ config: keystatic });
  return handler.GET(request);
}

export async function POST(request: Request) {
  const { makeRouteHandler } = await import("@keystatic/next/route-handler");
  const { default: keystatic } = await import("../../../../../keystatic.config");
  const handler = makeRouteHandler({ config: keystatic });
  return handler.POST(request);
}
