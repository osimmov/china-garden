## 2024-04-12 - Added Strict Content Security Policy (CSP)
**Vulnerability:** Missing security headers. The application lacked a Content Security Policy, leaving it vulnerable to XSS and unauthorized resource loading.
**Learning:** Adding a CSP via a `<meta>` tag is a quick win for static sites. However, enforcing `style-src 'self'` without `'unsafe-inline'` will break inline styles (e.g., `style="border:0;"` on iframes).
**Prevention:** Always refactor inline styles to external CSS classes before enforcing strict CSP directives to avoid breaking the UI.