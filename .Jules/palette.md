## 2025-02-18 - Inline Form Accessibility Pattern
**Learning:** Found inline forms (like newsletter subscriptions) relying solely on placeholders for labels, which fails accessibility checks and makes interaction difficult for screen reader users.
**Action:** Always wrap inline inputs with `<label className="sr-only">` or use `aria-label` to provide context while maintaining the minimalist visual design.
