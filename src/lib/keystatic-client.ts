// Cloudflare Workers doesn't send the User-Agent header which the Github API requires
// This fix adds the required User-Agent header for Cloudflare compatibility
// Based on: https://keystatic.com/docs/guides/cloudflare/

const self = global || globalThis || this;
const originalFetch = self.fetch;

self.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
  const requestInit: RequestInit = {
    ...(init ?? {}),
    headers: {
      ...(init?.headers ?? {}),
      'User-Agent': 'Cloudflare-Workers',
    }
  };
  return originalFetch(input, requestInit);
}