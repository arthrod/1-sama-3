# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run start` - Start production server
- `npm run build` - Build for Cloudflare Pages deployment
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run cf-typegen` - Generate Cloudflare environment types

### Testing
No testing framework is currently configured. Consider adding Jest/Vitest for unit testing.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.5.7 (App Router)
- **Deployment**: Cloudflare Pages via `@opennextjs/cloudflare`
- **CMS**: Keystatic with GitHub backend storage
- **Styling**: Tailwind CSS v4 with custom color palette
- **Fonts**: Playfair Display (serif), Lato (sans-serif), Great Vibes (script)

### Project Structure
- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable React components
- `keystatic.config.ts` - CMS configuration for blog posts and site settings
- `content/` - Keystatic content storage (posts, site settings)

### Keystatic CMS
- Blog posts stored in `content/posts/` with frontmatter schema
- Site configuration in `content/site/` and `content/home/`
- Admin interface available at `/keystatic`
- Posts collection supports categories, author info, SEO metadata
- Images stored in `public/images/blog/` and `public/images/authors/`

### Styling System
- **Color Palette**: Paper-based theme with warm, earthy tones
  - Paper colors (light/dark modes)
  - Ink (text variations)
  - Graphite (borders/subtle text)
  - Merlot (accent/CTA)
- **Typography**: Three-font system for hierarchy
- **Dark Mode**: Class-based implementation via ThemeProvider
- **Animations**: Custom fade-in effects

### Key Components
- `Navigation` - Main navigation with mobile menu
- `HeroSlideshow` - Landing page hero section
- `WineCard/LabelShowcase` - Product display components
- `Newsletter` - Email signup component
- `ThemeProvider` - Dark mode toggle with context

### Content Structure
- Landing page uses custom sections with parallax effects
- Blog route is `/posts` (not `/blog`)
- "As Três Sás" section at `/as-tres-sas` for brand story
- All images stored in `public/images/`

### Deployment Notes
- Configured for Cloudflare Pages deployment
- Uses Wrangler for type generation
- Build process via `@opennextjs/cloudflare` package
- **Important**: If you set environment variables from the Cloudflare dashboard, use the `--keep-vars` option to prevent them from being deleted during deployments:
  ```bash
  opennextjs-cloudflare deploy -- --keep-vars
  ```

## Development Guidelines

- Use TypeScript for all new code
- Follow existing component patterns and naming conventions
- Maintain consistent spacing using Tailwind's design system
- Preserve the rustic, elegant aesthetic in new components
- All content should be in Portuguese (pt-BR) as per the target audience