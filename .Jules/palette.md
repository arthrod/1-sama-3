## 2025-02-23 - Biome a11y: Spinner Roles
**Learning:** Biome's `lint/a11y/useSemanticElements` flags `role="status"` on generic elements like `span` or `div`, suggesting `<output>` instead. However, for a loading spinner which is visual, `role="img"` with an `aria-label` is a valid and accepted alternative that satisfies the linter and provides accessibility.
**Action:** When implementing non-semantic loading indicators, prefer `role="img"` with a descriptive `aria-label` to avoid linting errors while maintaining accessibility.
