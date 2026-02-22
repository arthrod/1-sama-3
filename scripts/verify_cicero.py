import os
import sys
from playwright.sync_api import sync_playwright

def verify_and_screenshot():
    # Ensure public directory exists
    public_dir = os.path.abspath("public")
    html_path = os.path.join(public_dir, "cicero-email-service.html")
    screenshot_path = os.path.join(public_dir, "cicero-email-service.png")

    if not os.path.exists(html_path):
        print(f"Error: HTML file not found at {html_path}")
        sys.exit(1)

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        # Open file
        page.goto(f"file://{html_path}")

        # Wait for network idle to ensure fonts/CSS are loaded
        # Since it uses CDN, we need to wait for network requests
        try:
            page.wait_for_load_state("networkidle", timeout=10000)
        except Exception as e:
            print(f"Warning: Network idle timeout ({e}), proceeding with screenshot anyway.")

        # Verify email address is visible
        email_visible = page.is_visible("text=assistant@cicero.im")
        if not email_visible:
            print("Warning: 'assistant@cicero.im' text not detected as visible by Playwright.")
        else:
            print("Verified: 'assistant@cicero.im' is visible.")

        # Take screenshot
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

    # Check file size
    if os.path.exists(screenshot_path):
        size = os.path.getsize(screenshot_path)
        print(f"Screenshot size: {size} bytes")
        if size < 10000:
            print("Error: Screenshot seems too small, possibly blank.")
            sys.exit(1)
    else:
        print("Error: Screenshot file was not created.")
        sys.exit(1)

if __name__ == "__main__":
    verify_and_screenshot()
