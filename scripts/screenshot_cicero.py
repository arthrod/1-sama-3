import os
import sys
from playwright.sync_api import sync_playwright

def main():
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1440, "height": 900})

            # Get absolute path to the HTML file
            file_path = os.path.abspath("public/email-service.html")
            url = f"file://{file_path}"

            print(f"Loading {url}...")
            page.goto(url)

            # Wait for content to settle (e.g. fonts)
            page.wait_for_load_state("networkidle")
            page.wait_for_timeout(2000)

            output_viewport = "public/email-service.png"
            output_full = "public/email-service_full.png"

            print(f"Taking viewport screenshot to {output_viewport}...")
            page.screenshot(path=output_viewport)

            print(f"Taking full page screenshot to {output_full}...")
            page.screenshot(path=output_full, full_page=True)

            browser.close()
            print("Done.")

    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
