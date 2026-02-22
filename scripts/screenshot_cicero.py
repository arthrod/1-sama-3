import os
import sys
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        # Determine the absolute path to the HTML file
        # Assuming the script is run from the repo root
        html_path = os.path.abspath("public/cicero-email-service.html")

        if not os.path.exists(html_path):
            print(f"Error: File not found at {html_path}")
            sys.exit(1)

        print(f"Loading file://{html_path}")
        page.goto(f"file://{html_path}")

        # Wait for content to load, including fonts
        page.wait_for_load_state("networkidle")

        # Screenshot viewport
        viewport_path = "public/cicero-email-service.png"
        page.screenshot(path=viewport_path)
        print(f"Viewport screenshot saved to {viewport_path}")

        # Screenshot full page
        full_path = "public/cicero-email-service_full.png"
        page.screenshot(path=full_path, full_page=True)
        print(f"Full page screenshot saved to {full_path}")

        browser.close()

if __name__ == "__main__":
    run()
