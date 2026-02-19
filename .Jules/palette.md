## 2025-02-27 - Form Success State Patterns
**Learning:** Users respond better to clear, dedicated success messages (replacing the form) than transient button state changes ("Enviando..." -> "Enviado!"). The replacement pattern removes ambiguity about whether the action is fully complete and prevents duplicate submissions.
**Action:** When refactoring forms, prefer replacing the entire form container with a success message using smooth cross-fade animations (`AnimatePresence`) over modifying button text alone.
