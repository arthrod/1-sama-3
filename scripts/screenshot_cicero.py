import sys
import os
from playwright.sync_api import sync_playwright

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 scripts/screenshot_cicero.py <input_html_path> <output_image_path>")
        sys.exit(1)

    input_path = os.path.abspath(sys.argv[1])
    output_path = os.path.abspath(sys.argv[2])
    output_full_path = output_path.replace(".png", "_full.png")

    if not os.path.exists(input_path):
        print(f"Error: Input file {input_path} does not exist.")
        sys.exit(1)

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        # Open file using file:// protocol
        page.goto(f"file://{input_path}")

        # Wait for network idle (simulated) or just wait a bit for rendering
        page.wait_for_load_state("networkidle")

        # Screenshot viewport
        page.screenshot(path=output_path)
        print(f"Viewport screenshot saved to {output_path}")

        # Screenshot full page
        page.screenshot(path=output_full_path, full_page=True)
        print(f"Full page screenshot saved to {output_full_path}")

        browser.close()

if __name__ == "__main__":
    main()
