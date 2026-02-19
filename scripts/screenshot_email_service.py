import http.server
import socketserver
import threading
import time
import os
import functools
from playwright.sync_api import sync_playwright

PORT = 8000
DIRECTORY = "public"

def run_server():
    # Use functools.partial to pass the directory argument to the handler
    Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)
    # Allow address reuse to avoid "Address already in use" errors on quick restarts
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"serving at port {PORT}")
        httpd.serve_forever()

if __name__ == "__main__":
    # Start server in a thread
    server_thread = threading.Thread(target=run_server)
    server_thread.daemon = True
    server_thread.start()

    # Give it a moment to start
    time.sleep(2)

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        url = f"http://localhost:{PORT}/email-service.html"
        print(f"Navigating to {url}")
        page.goto(url)
        # Wait for fonts and everything to be stable
        page.wait_for_load_state("networkidle")
        time.sleep(2) # Extra wait for fonts

        # Viewport screenshot
        page.screenshot(path="public/email-service.png")
        print("Saved public/email-service.png")

        # Full page screenshot
        page.screenshot(path="public/email-service_full.png", full_page=True)
        print("Saved public/email-service_full.png")

        browser.close()
