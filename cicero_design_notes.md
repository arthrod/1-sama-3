# Cicero Email Service Design Notes

## Design Choice: Option G (Standalone Email Service Page)
I chose to design a standalone landing page because the email service is Cicero's core value proposition and deserves a dedicated space to explain the workflow without distraction. A standalone page allows for a focused narrative: Problem (Messy Email) -> Process (Clarification) -> Solution (Perfect Deliverables).

## Key Selling Angles
1.  **"Send it messy, get it back perfect."**: The primary visual hook is the "Before/After" comparison. I used a rotated, slightly chaotic "Input" card next to a clean, structured "Output" card to visually represent the transformation of chaos into order.
2.  **"The Clarification Step is a Trust Signal"**: I explicitly included a "Clarification Bridge" between the input and output. This addresses the skepticism that an AI might just guess or hallucinate. Showing Cicero asking a specific legal question ("NY or CA law?") proves it understands the nuance of the request.
3.  **"Two Attachments. Everything You Need."**: In every deliverable mock-up, I paired the DOCX (Work Product) with the PDF (Checklist). This recurring visual motif reinforces the completeness of the service.

## Emphasis on `assistant@cicero.im`
The email address is the product. To make it the inevitable next action:
-   **Typography**: I set it in `JetBrains Mono` to distinguish it from the body text (`DM Sans`) and headings (`Cormorant Garamond`). This makes it look like a tool/code, not just text.
-   **Prominence**: It appears in the Hero (as a large button), in the "How It Works" section, and in the final Footer CTA.
-   **Interaction**: It is always wrapped in a `mailto:` link with a hover state that shifts to the brand color (Scarlet), inviting interaction.

## Brand Alignment
The design strictly adheres to the provided brand tokens:
-   **Colors**: Scarlet (`#9d0208`) is used sparingly for high-impact accents (CTA hover, "Output" badge, clean email border). The background is Warm Gray (`#f5f4f0`) to reduce eye strain and feel "paper-like".
-   **Typography**: `Cormorant Garamond` gives the page a serious, authoritative legal feel, while `DM Sans` ensures readability for the explanatory text.
-   **Geometry**: Sharp corners (2px radius max) maintain the professional, crisp aesthetic of legal documents.
