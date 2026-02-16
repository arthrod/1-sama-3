# Cicero Design Brief

## Findings

**Product Discrepancy:**
The provided codebase is for "Sá Marias", a family-owned winery in Minas Gerais, Brazil. The prompt describes "Cicero", a legal tech product.
Following the instruction to "design based on what you found in the code" but apply it to "Cicero", I will re-purpose the winery's design tokens for the legal tech interface.

**Visual Language (from `src/styles/samarias.css`):**
- **Colors:**
  - **Merlot (`#541e23`)**: Deep red, used for accents/CTA. In a legal context, this will serve as a "high impact" or "alert" color.
  - **Ink (`#1a1818`)**: Primary text/background. Suitable for high-contrast reading.
  - **Paper (`#faf9f7`)**: Main background. A warm, off-white, perfect for long-form legal reading.
  - **Graphite (`#595450`)**: Secondary text/borders. Good for UI structure.
- **Typography:**
  - **Headings:** Playfair Display (Serif). Elegant, authoritative. Fits "Cicero" (classic Roman statesman).
  - **Body:** Lato (Sans). Clean, legible for dense text.
- **Geometry:** Sharp edges, minimal border-radius (`2px` - `0.5rem`). Fits a "serious" legal tool.

**Missing Elements:**
- **Legal Tech Features:** The codebase lacks any document processing, case management, or AI analysis features. I will design these from scratch using the visual language.
- **Pricing:** No SaaS pricing model found.

## Design Task

I have chosen to design a **Legal Document Analysis Workspace**.
This is a critical screen for a legal tech product, where "dense interfaces" are the norm.
It will feature:
1.  **Sidebar:** Navigation for Cases, Documents, and Tools.
2.  **Main Document View:** A contract or case law text, typeset in Lato/Playfair for readability.
3.  **Cicero AI Panel:** A right-hand sidebar offering AI-driven insights, citations, and risk analysis (using the Merlot color for risks).

This design will demonstrate how the "winery" aesthetic (elegant, traditional, warm) can be successfully adapted to a "legal" context (authoritative, serious, dense).
