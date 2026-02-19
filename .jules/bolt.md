## 2025-02-18 - Keystatic FS Reader for SSG
**Learning:** The project was using `createGitHubReader` with `force-dynamic` in `page.tsx`, causing expensive GitHub API calls on every request. Keystatic content is part of the repo, so `createReader` (filesystem) can be used during build time to enable true SSG, even on Cloudflare Workers via OpenNext (since build runs in Node).
**Action:** Always check if dynamic content fetching can be replaced by build-time SSG when content is file-based and version controlled. Use `generateStaticParams` to enumerate dynamic routes.
