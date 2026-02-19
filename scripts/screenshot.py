import sys
import os
from playwright.sync_api import sync_playwright

def screenshot(html_path, output_path):
    # Ensure paths are absolute
    html_abs_path = os.path.abspath(html_path)
    output_abs_path = os.path.abspath(output_path)
    output_dir = os.path.dirname(output_abs_path)

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        # Load the HTML file
        print(f"Loading {html_abs_path}...")
        page.goto(f"file://{html_abs_path}")

        # Wait for fonts and any potential rendering (using networkidle to be safe, though inline usually instant)
        # Using wait_for_load_state just in case
        page.wait_for_load_state("networkidle")

        # Viewport screenshot
        print(f"Taking viewport screenshot to {output_abs_path}...")
        page.screenshot(path=output_abs_path, type='png')

        # Full page screenshot
        full_output_path = output_abs_path.replace('.png', '_full.png')
        print(f"Taking full page screenshot to {full_output_path}...")
        page.screenshot(path=full_output_path, type='png', full_page=True)

        browser.close()
        print("Done.")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 screenshot.py <html_file> <output_png>")
        sys.exit(1)

    html_file = sys.argv[1]
    output_png = sys.argv[2]

    screenshot(html_file, output_png)
