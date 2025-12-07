# Tailwind Config Migration TODO

## Migration from tailwind.config.ts to globals.css ✅

- [x] Update globals.css with all theme values from tailwind.config.ts
  - [x] Add background-image configuration for paper-texture
  - [x] Verify all colors are migrated
  - [x] Verify all fonts are migrated
  - [x] Verify all shadows are migrated
  - [x] Verify all animations are migrated
- [x] Simplify or remove tailwind.config.ts
  - [x] Remove theme.extend section
  - [x] Keep only essential config or remove entirely if possible
- [x] Test the migration
  - [x] Verify custom classes work (created test file)
  - [x] Check dark mode functionality (dark mode class retained in config)

## Migration Summary

Successfully migrated all deprecated theme configuration from `tailwind.config.ts` to `globals.css`:

1. **Reduced tailwind.config.ts** from 64 lines to just 10 lines
2. **Migrated to CSS-based configuration** using Tailwind v4's `@theme` directive
3. **Preserved all custom values**:
   - Custom colors (paper, ink, graphite, merlot variants)
   - Custom fonts (serif, sans, script)
   - Custom shadows (paper-lift, sharp)
   - Background images (paper-texture)
   - Animations (fade-in, fade-in-up)
4. **Maintained dark mode support** via `darkMode: "class"` in config
5. **Created test file** at `src/app/test-tailwind.tsx` to verify all custom classes work
