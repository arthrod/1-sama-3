# agents.md

This file provides context for AI coding agents working on this project.

## Project Overview

**Sá Marias** - A winery website for a family vineyard in Ritápolis, Minas Gerais, Brazil. The site showcases wines, accommodations (Sítio Dutra), and the brand story across three generations.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Bun** | Package manager and runtime |
| **Next.js 16** | React framework (App Router) |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Styling with custom design system |
| **Framer Motion** | Animations |
| **Keystatic** | Headless CMS with GitHub backend |
| **Cloudflare Pages** | Hosting and deployment |
| **@opennextjs/cloudflare** | Next.js adapter for Cloudflare |
| **Biome** | Linting and formatting |

## Commands

```bash
# Development
bun dev              # Start dev server with Turbopack
bun run build        # Build for Cloudflare Pages
bun run preview      # Preview production build locally
bun run deploy       # Deploy to Cloudflare Pages

# Code Quality
bun run lint         # Run Biome linter
bun run fmt          # Format code with Biome

# Cloudflare
bun run cf-typegen   # Generate Cloudflare environment types
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── vinhos/            # Wines page
│   ├── sitio-dutra/       # Accommodation page
│   ├── as-tres-sas/       # Brand story page
│   ├── posts/             # Blog (not /blog)
│   └── keystatic/         # CMS admin interface
├── components/            # Reusable React components
├── styles/               # CSS design system (samarias.css)
└── lib/                  # Utilities
content/
├── posts/                # Blog posts (Keystatic)
└── wines/                # Wine entries (Keystatic)
public/
└── images/               # Static images
```

## Keystatic CMS

- **Admin URL**: `/keystatic`
- **Backend**: GitHub repository storage
- **Collections**: Posts, Wines, Site settings
- **Token**: `KEYSTATIC_GITHUB_TOKEN` secret (set via Wrangler CLI)

```bash
# Set the GitHub token for Keystatic
wrangler secret put KEYSTATIC_GITHUB_TOKEN
```

## Design System

### Color Palette
- **Paper**: Background colors (light: #faf9f7, dark: #0a0909)
- **Ink**: Text colors (#1a1818 and variations)
- **Graphite**: Borders and subtle text (#595450, #9e9791, #d1cdc9)
- **Merlot**: Accent/CTA (#541e23)

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Lato (body text)
- **Script**: Great Vibes (decorative)

### Dark Mode
Class-based implementation via `ThemeProvider`. Use `dark:` prefix for dark mode styles.

## Deployment

Hosted on **Cloudflare Pages** using the OpenNext adapter.

```bash
# Deploy with environment variables preserved
opennextjs-cloudflare deploy -- --keep-vars
```

### Environment Variables
- `KEYSTATIC_GITHUB_TOKEN` - GitHub PAT for Keystatic (set via Wrangler secrets)

## Key Conventions

1. **Language**: All user-facing content in Portuguese (pt-BR)
2. **TypeScript**: Required for all new code
3. **Components**: Follow existing patterns in `src/components/`
4. **Styling**: Use Tailwind classes; custom styles in `src/styles/samarias.css`
5. **Images**: Store in `public/images/`
6. **Commits**: Include meaningful messages; co-authored with Claude/Happy

## Common Tasks

### Adding a new page
1. Create folder in `src/app/[page-name]/`
2. Add `page.tsx` with metadata export
3. Use existing components (Navigation, Footer)

### Adding a blog post
1. Go to `/keystatic` admin
2. Create new post in Posts collection
3. Upload images to `public/images/blog/`

### Modifying styles
1. Check `src/styles/samarias.css` for design tokens
2. Use Tailwind utility classes
3. Ensure dark mode support with `dark:` variants

## Known Lint Warnings

The following warnings are expected and can be ignored:
- `dangerouslySetInnerHTML` warnings for JSON-LD structured data and Google Analytics scripts
