import os
from playwright.sync_api import sync_playwright

def screenshot_cicero():
    # Define paths
    html_path = os.path.abspath("public/cicero-email-service.html")
    output_path = os.path.abspath("public/cicero-email-service.png")

    # Ensure output directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch()
        page = browser.new_page()

        # Set viewport to 1440x900 as requested
        page.set_viewport_size({"width": 1440, "height": 900})

        # Load the file
        print(f"Loading {html_path}...")
        page.goto(f"file://{html_path}")

        # Take screenshot of the viewport
        print(f"Taking screenshot to {output_path}...")
        page.screenshot(path=output_path)

        # Also take a full page screenshot for review
        full_output_path = output_path.replace(".png", "_full.png")
        print(f"Taking full page screenshot to {full_output_path}...")
        page.screenshot(path=full_output_path, full_page=True)

        browser.close()
        print("Done.")

if __name__ == "__main__":
    screenshot_cicero()
