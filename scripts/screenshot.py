# Note: This script uses Python Playwright instead of the Node/Puppeteer script suggested in the prompt
# because the development environment lacks internet access for `npm install`, but supports `python3` with Playwright.

import sys
import os
from playwright.sync_api import sync_playwright

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 scripts/screenshot.py <html_path> <output_path>")
        sys.exit(1)

    html_path = sys.argv[1]
    output_path = sys.argv[2]

    if not os.path.exists(html_path):
        print(f"Error: HTML file not found at {html_path}")
        sys.exit(1)

    abs_html_path = os.path.abspath(html_path)
    file_url = f"file://{abs_html_path}"

    output_dir = os.path.dirname(output_path)
    if output_dir and not os.path.exists(output_dir):
        os.makedirs(output_dir)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        print(f"Loading {file_url}...")
        page.goto(file_url, wait_until="networkidle")

        # specific wait for fonts
        page.wait_for_timeout(2000)

        print(f"Taking viewport screenshot to {output_path}...")
        page.screenshot(path=output_path)

        full_output_path = output_path.replace(".png", "_full.png")
        print(f"Taking full page screenshot to {full_output_path}...")
        page.screenshot(path=full_output_path, full_page=True)

        browser.close()
        print(f"Screenshots saved to:\n  {output_path}\n  {full_output_path}")

if __name__ == "__main__":
    main()
