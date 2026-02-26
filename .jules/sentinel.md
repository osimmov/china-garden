## 2025-02-23 - Static Site CSP Implementation
**Vulnerability:** XSS and data injection risks due to lack of Content Security Policy.
**Learning:** This static site relies on external assets from Unsplash (images), Google Fonts (styles/fonts), and Google Maps (frames). The CSP must explicitly whitelist these domains (`img-src https://images.unsplash.com`, `frame-src https://www.google.com`) while disallowing `unsafe-inline` for styles (requiring removal of inline `style` attributes from iframes).
**Prevention:** Enforce strict CSP via `<meta>` tag in `index.html` and move all styles to external CSS files.
