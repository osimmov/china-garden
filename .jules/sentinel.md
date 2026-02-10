## 2024-05-23 - CSP Constraint with Google Maps Iframe
**Vulnerability:** Inline styles (`style="..."`) prevent strict Content Security Policy implementation, leaving the app vulnerable to XSS if `unsafe-inline` is allowed.
**Learning:** The Google Maps iframe in `index.html` used `style="border:0;"` which blocked a strict `default-src 'self'` policy.
**Prevention:** Always move inline styles to external CSS files or `<style>` blocks (with nonces/hashes if strict) before enforcing CSP. In this case, `border: 0` was moved to `style.css`.
