import os
from playwright.sync_api import sync_playwright

def screenshot_cicero():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        # Determine absolute path to the HTML file
        file_path = os.path.abspath("public/cicero-exploration.html")
        url = f"file://{file_path}"

        print(f"Loading {url}...")
        page.goto(url)

        # Wait for fonts to load (a simple wait is usually enough for local files,
        # but let's wait for network idle just in case)
        page.wait_for_load_state("networkidle")

        screenshot_path = "cicero_screenshot.png"
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    screenshot_cicero()
