# Cicero Design Exploration - Thinking

## Context
The codebase presented was for "Sá Marias", a winery, but the task was to design for "Cicero", a legal tech product, repurposing the Sá Marias design tokens.

## Design Choices

### 1. Brand Identity & Color Palette
- **Repurposed Tokens**:
    - `Merlot` (#541e23) became **Scarlet**: Used sparingly for high-impact actions (CTAs) and data highlights, representing authority and urgency.
    - `Ink` (#1a1818) became **Black**: Used for the primary text and "Dark Mode" sections, conveying seriousness and focus.
    - `Paper` (#faf9f7) became **Warm White**: Used for the background to soften the reading experience, acknowledging that lawyers read dense text.
    - `Graphite` (#595450) became **Gray**: Used for secondary text.
- **Why**: This palette aligns with the "authoritative but modern" aesthetic required for legal tech. The high contrast ensures readability.

### 2. Typography
- **Display**: `Cormorant Garamond` (Serif). Used for headings to evoke the tradition of law and printed briefs. It provides a sharp, elegant contrast to the UI chrome.
- **Body**: `DM Sans` (Sans-serif). Used for UI elements and body text to ensure high legibility at small sizes and on screens.
- **Why**: The pairing creates a "classic yet modern" feel, bridging the gap between traditional law (serifs) and modern software (sans-serifs).

### 3. Geometry
- **Constraint**: Sharp geometry, minimal border-radius.
- **Implementation**: All buttons, cards, and input fields have `border-radius: 0`. The UI mockup elements are also sharp rectangles.
- **Why**: This reinforces the "precision" and "rigor" of the tool. Soft curves felt too friendly; sharp edges feel precise.

### 4. Layout & Hierarchy
- **Hero Section**: Focuses on a clear value proposition ("The architecture of legal reasoning, digitized") with immediate stats to build trust.
- **Feature Section**: Uses a dark background to separate the "marketing" from the "product experience". The "Semantic Precedent Mapping" feature is highlighted with a CSS-only UI mockup to show *how* it works without needing screenshots.
- **Pricing/Data**: A grid layout emphasizing efficiency metrics (10x faster, 40% reduction) which are critical for law firm decision-makers.

### 5. Missing Elements addressed
- The original codebase lacked a dedicated Cicero landing page. This exploration fills that gap by providing a "Concept Car" version of the product's public face.

## Next Steps
- **Interactivity**: Add hover states for the feature cards to reveal more detail.
- **Mobile Refinement**: Ensure the complex data grid stacks more elegantly on very small screens.
- **Content Expansion**: Flesh out the "Solutions" page to target specific legal practice areas (Litigation vs. Corporate).
