## 2025-02-18 - Keystatic FS Reader for SSG
**Learning:** The project was using `createGitHubReader` with `force-dynamic` in `page.tsx`, causing expensive GitHub API calls on every request. Keystatic content is part of the repo, so `createReader` (filesystem) can be used during build time to enable true SSG, even on Cloudflare Workers via OpenNext (since build runs in Node).
**Action:** Always check if dynamic content fetching can be replaced by build-time SSG when content is file-based and version controlled. Use `generateStaticParams` to enumerate dynamic routes.

## 2025-02-18 - CI Workflow Fix
**Learning:** GitHub Actions using `actions/setup-node` will fail if no lockfile exists, even if `bun` is installed. When using `bun` exclusively, use `oven-sh/setup-bun` and remove `actions/setup-node` entirely. Always respect `agents.md` constraints about `cleanup-preview` job removal to avoid breaking shared environments.
**Action:** Audit workflow files for legacy `npm` or `node` usage when migrating to `bun`.

## 2025-02-18 - Wrangler Config for PRs
**Learning:** Wrangler Environments (`env.*`) in `wrangler.jsonc` do NOT inherit `vars` from the top level. They must be explicitly duplicated. Also, `name` fields in environments cannot contain wildcards (e.g., `samarias-pr-*`). For PR previews using a shared token, use a static name (e.g., `samarias-preview`), set `workers_dev: true`, and empty `routes: []` to avoid zone-level authentication errors.
**Action:** When configuring `wrangler.jsonc` for CI environments, always explicitly copy `vars` and use valid, static names for environments.
