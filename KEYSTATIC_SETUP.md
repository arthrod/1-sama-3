# Keystatic CMS Setup

This project uses Keystatic as the CMS for managing content. The setup includes:

## Environment Variables

Create a `.env.local` file based on `.env.example` and configure the following:

### Required Variables:
- `CMS_CLIENT=keystatic` - Specifies Keystatic as the CMS
- `NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND=github` - Storage type (github for our setup)
- `NEXT_PUBLIC_KEYSTATIC_STORAGE_REPO=arthrod/1-sama-3` - Your GitHub repository
- `NEXT_PUBLIC_KEYSTATIC_CONTENT_PATH=./src/content` - Path to content folder
- `KEYSTATIC_GITHUB_TOKEN` - GitHub token with read permissions

### Getting a GitHub Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with:
   - `repo` scope (for private repositories)
   - `public_repo` scope (for public repositories)
3. Add the token as a Cloudflare secret:
   ```bash
   wrangler secret put KEYSTATIC_GITHUB_TOKEN
   ```

### Cloudflare Workers Environment Variables

Environment variables are configured in `wrangler.jsonc` for Cloudflare Workers. The GitHub token should be set as a secret for security, not committed to the repository.

## Authentication

The Keystatic admin interface at `/keystatic` includes basic authentication:

- **Development**: Automatically accessible
- **Production**: Requires authentication (currently disabled for safety)

To enable admin access in production, modify `src/app/keystatic/page.tsx` and implement proper authentication checks.

## Content Structure

Content is stored in `src/content/`:
- `posts/` - Blog posts
- `site/` - Site configuration
- `home/` - Homepage content

## Cloudflare Compatibility

The project includes a User-Agent fix for Cloudflare Workers at `src/lib/keystatic-client.ts` to ensure GitHub API compatibility.