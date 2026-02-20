import os
import sys
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        # Resolve absolute path relative to repo root (where this script is run from)
        html_file = os.path.abspath("public/email-service.html")
        if not os.path.exists(html_file):
            print(f"Error: File {html_file} not found.")
            sys.exit(1)

        print(f"Loading file://{html_file}")
        page.goto(f"file://{html_file}")

        # Wait for fonts to load - crucial for Google Fonts
        page.wait_for_timeout(2000)

        # Viewport screenshot
        page.screenshot(path="public/email-service.png")
        print(f"Viewport screenshot saved: {os.path.abspath('public/email-service.png')}")

        # Full page screenshot
        page.screenshot(path="public/email-service_full.png", full_page=True)
        print(f"Full page screenshot saved: {os.path.abspath('public/email-service_full.png')}")

        browser.close()

if __name__ == "__main__":
    run()
