## 2025-03-25 - [Missing Security Headers]
**Vulnerability:** Missing security headers in `next.config.mjs`, potentially exposing the app to XSS and Clickjacking.
**Learning:** Security headers must be explicitly configured in Next.js. Even if documentation suggests they are present, always verify the source code.
**Prevention:** Include a standard `headers` configuration in `next.config.mjs` for all new Next.js projects.
