from playwright.sync_api import sync_playwright

def verify_csp():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Capture console messages
        console_messages = []
        page.on("console", lambda msg: console_messages.append(msg))
        page.on("pageerror", lambda err: console_messages.append(f"Page Error: {err}"))

        try:
            page.goto("http://localhost:8000")

            # Wait for critical elements
            # Map
            try:
                page.wait_for_selector(".google-map", state="visible", timeout=5000)
                print("Google Map iframe found.")
            except Exception as e:
                print(f"Error finding Google Map: {e}")

            # Menu categories (Appetizers is open by default)
            try:
                page.wait_for_selector(".menu-category.active", state="visible", timeout=5000)
                print("Active menu category found.")
            except Exception as e:
                print(f"Error finding active menu category: {e}")

            # Menu images (check for one)
            # The images might take time to load, but the img tag should be there
            try:
                page.wait_for_selector(".item-image img", state="attached", timeout=5000)
                print("Menu item images found.")
            except Exception as e:
                print(f"Error finding menu images: {e}")

            # Check if inline style is gone from iframe
            iframe = page.locator(".google-map")
            style_attr = iframe.get_attribute("style")
            if style_attr:
                print(f"Warning: iframe still has style attribute: {style_attr}")
            else:
                print("Success: iframe has no inline style.")

            # Take screenshot
            page.screenshot(path="verification/csp_verification.png")
            print("Screenshot saved to verification/csp_verification.png")

            # Analyze console messages for CSP violations
            csp_violations = [
                msg for msg in console_messages
                if "Content Security Policy" in str(msg) or "refused to" in str(msg).lower()
            ]

            if csp_violations:
                print("\nERROR: CSP Violations found:")
                for msg in csp_violations:
                    print(f" - {msg}")
            else:
                print("\nSuccess: No CSP violations detected.")

        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_csp()
