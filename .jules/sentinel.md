## 2026-02-16 - Lockfile Policy
**Vulnerability:** Dependency resolution inconsistencies without lockfiles.
**Learning:** This project intentionally does not commit lockfiles (bun.lock/bun.lockb), relying on package.json ranges. This is unusual for an application (vs library) and poses reproducibility risks.
**Prevention:** Always verify lockfile status before committing. If generated during install/build, delete them to maintain repo state.
