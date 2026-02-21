import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Resolve the absolute path to the HTML file
        html_path = os.path.abspath("public/cicero-email-service.html")
        file_url = f"file://{html_path}"

        print(f"Loading {file_url}...")
        page.set_viewport_size({"width": 1440, "height": 900})
        page.goto(file_url)

        # Wait for fonts and layout to settle
        page.wait_for_timeout(2000)

        # Viewport screenshot
        screenshot_path = "public/cicero-email-service.png"
        page.screenshot(path=screenshot_path)
        print(f"Saved viewport screenshot to {screenshot_path}")

        # Full page screenshot
        full_screenshot_path = "public/cicero-email-service_full.png"
        page.screenshot(path=full_screenshot_path, full_page=True)
        print(f"Saved full page screenshot to {full_screenshot_path}")

        browser.close()

if __name__ == "__main__":
    run()
