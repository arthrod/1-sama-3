import sys
import os
from playwright.sync_api import sync_playwright

if len(sys.argv) < 3:
    print("Usage: python3 screenshot.py <input.html> <output.png>")
    sys.exit(1)

input_file = sys.argv[1]
output_file = sys.argv[2]

if not os.path.exists(input_file):
    print(f"Error: {input_file} not found")
    sys.exit(1)

abs_path = os.path.abspath(input_file)
output_dir = os.path.dirname(os.path.abspath(output_file))

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

print(f"Processing {abs_path}...")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    # Load local file
    page.goto(f"file://{abs_path}")

    # Wait for fonts and any animations
    page.wait_for_timeout(2000)

    # Viewport screenshot
    page.screenshot(path=output_file)
    print(f"Viewport: {output_file}")

    # Full page screenshot
    full_path = output_file.replace('.png', '_full.png')
    page.screenshot(path=full_path, full_page=True)
    print(f"Full page: {full_path}")

    browser.close()
