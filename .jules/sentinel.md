## 2024-05-24 - Strict CSP Requires Moving Inline Styles
**Vulnerability:** Missing Content Security Policy (CSP) allowed potential Cross-Site Scripting (XSS).
**Learning:** Enforcing a strict CSP `style-src 'self'` required moving the inline `style="border:0;"` on the Google Maps iframe to `style.css` (`.map-container iframe { border: none; }`).
**Prevention:** Always define styles in CSS files and avoid inline `style` attributes to maintain CSP compliance without needing `unsafe-inline`.
