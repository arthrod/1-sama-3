## 2024-05-22 - Accessibility in Minimalist Forms
**Learning:** Minimalist forms relying on placeholders (visual-only) exclude screen reader users entirely. Placeholders are not labels.
**Action:** Always verify form inputs have associated labels. Use `.sr-only` to hide labels visually while keeping them accessible. Also, dynamic text updates (like "Sending..." -> "Sent!") require `aria-live` regions to be announced.
