## 2025-02-18 - Keystatic FS Reader for SSG
**Learning:** The project was using `createGitHubReader` with `force-dynamic` in `page.tsx`, causing expensive GitHub API calls on every request. Keystatic content is part of the repo, so `createReader` (filesystem) can be used during build time to enable true SSG, even on Cloudflare Workers via OpenNext (since build runs in Node).
**Action:** Always check if dynamic content fetching can be replaced by build-time SSG when content is file-based and version controlled. Use `generateStaticParams` to enumerate dynamic routes.

## 2025-02-18 - CI Workflow Fix
**Learning:** GitHub Actions using `actions/setup-node` will fail if no lockfile exists, even if `bun` is installed. When using `bun` exclusively, use `oven-sh/setup-bun` and remove `actions/setup-node` entirely. Always respect `agents.md` constraints about `cleanup-preview` job removal to avoid breaking shared environments.
**Action:** Audit workflow files for legacy `npm` or `node` usage when migrating to `bun`.

## 2025-02-18 - Wrangler Config for PRs
**Learning:** Wrangler Environments (`env.*`) in `wrangler.jsonc` do NOT inherit `vars` from the top level. They must be explicitly duplicated. Also, `name` fields in environments cannot contain wildcards (e.g., `samarias-pr-*`). For PR previews using a shared token, use a static name (e.g., `samarias-preview`), set `workers_dev: true`, and empty `routes: []` to avoid zone-level authentication errors.
**Action:** When configuring `wrangler.jsonc` for CI environments, always explicitly copy `vars` and use valid, static names for environments.

## 2025-02-18 - Wrangler Auth & Environments
**Learning:** When using Cloudflare API Tokens scoped to a specific Worker Service (e.g., 'samarias'), you CANNOT change the `name` field in `wrangler.jsonc` environments (e.g., `env.pr.name = 'samarias-preview'`) because the token lacks permission to deploy to a new service name. Instead, omit the `name` override in the environment configuration so it defaults to the authorized service name. Use `workers_dev: true` and `routes: []` to deploy a preview instance that does not affect production routes/domains.
**Action:** For CI/PR environments with scoped tokens, always use the authorized service name (by omitting `name` override) and isolate traffic via `workers_dev` and empty `routes`.

## 2025-02-18 - Eager Image Preloading for Carousels
**Learning:** To prevent LCP contention and visual layout shifts in React carousels, rendering a hidden `next/image` with `loading="eager"` and `priority={false}` for the *upcoming* slide ensures the asset is prefetched by the browser without blocking the initial paint of the current slide.
**Action:** Use hidden eager-loading images to improve perceived performance in image-heavy components like sliders.
