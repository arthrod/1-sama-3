import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        cwd = os.getcwd()
        file_path = f"file://{cwd}/public/email-service.html"
        print(f"Navigating to {file_path}")

        page.goto(file_path)

        print(" Taking viewport screenshot...")
        page.screenshot(path="public/email-service.png")

        print(" Taking full page screenshot...")
        page.screenshot(path="public/email-service_full.png", full_page=True)

        browser.close()
        print("Done.")

if __name__ == "__main__":
    run()
