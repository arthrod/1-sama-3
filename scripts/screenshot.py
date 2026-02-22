import sys
import os
from playwright.sync_api import sync_playwright

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 screenshot.py <input_html_path> <output_png_path>")
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2]

    # Resolve absolute path for the input file
    abs_input_path = os.path.abspath(input_path)
    if not os.path.exists(abs_input_path):
        print(f"Error: Input file not found: {abs_input_path}")
        sys.exit(1)

    file_url = f"file://{abs_input_path}"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1440, "height": 900})

        print(f"Navigating to {file_url}...")
        page.goto(file_url, wait_until="networkidle")

        # Give fonts a moment to settle just in case
        page.wait_for_timeout(2000)

        print(f"Taking viewport screenshot to {output_path}...")
        page.screenshot(path=output_path)

        full_page_path = output_path.replace(".png", "_full.png")
        print(f"Taking full page screenshot to {full_page_path}...")
        page.screenshot(path=full_page_path, full_page=True)

        browser.close()
        print("Done.")

if __name__ == "__main__":
    main()
