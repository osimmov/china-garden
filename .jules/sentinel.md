# Sentinel Security Journal

## 2026-02-14 - Content Security Policy Configuration
**Vulnerability:** Cross-Site Scripting (XSS) due to unrestricted resource loading.
**Learning:** This static site relies on external resources (Google Fonts, Unsplash, Google Maps). CSP must explicitly whitelist these domains (`fonts.googleapis.com`, `fonts.gstatic.com`, `images.unsplash.com`, `www.google.com`) and disallow `unsafe-inline` styles/scripts.
**Prevention:** Implemented strict CSP in `index.html` and refactored inline styles to `style.css`.
