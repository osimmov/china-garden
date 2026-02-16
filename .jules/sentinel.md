## 2025-02-20 - Destructive Parser Script
**Vulnerability:** The `parser.py` script overwrites `menu.json` with scraped data but fails to preserve existing image URLs, leading to data loss and a broken frontend experience.
**Learning:** Helper scripts in this repo are not idempotent and can be destructive. They lack validation against existing data structures.
**Prevention:** Always backup `menu.json` before running `parser.py`. Future improvements should merge new data or preserve existing fields.

## 2025-02-20 - Strict CSP Implementation
**Vulnerability:** Lack of Content Security Policy allowed potential XSS and data injection.
**Learning:** The application uses Google Fonts, Google Maps, and Unsplash images. Inline styles were present on the iframe but covered by CSS.
**Prevention:** Use the established CSP meta tag pattern: `default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; ...`. Ensure all future styles are in `style.css` to maintain strict CSP.
