## 2024-05-23 - SSG with Keystatic on OpenNext
**Learning:** Keystatic `createReader` (local FS) works perfectly for SSG on Cloudflare OpenNext, because build time has `fs` access. Removing `force-dynamic` transforms the site from SSR (slow, API-dependent) to SSG (instant static HTML).
**Action:** Always verify if `force-dynamic` is truly needed. Prefer local file reading at build time for headless CMS content.
