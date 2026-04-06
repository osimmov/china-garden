## 2026-04-06 - Missing CSP Headers
**Vulnerability:** The application was missing Content Security Policy (CSP) headers, leaving it more vulnerable to XSS and data injection attacks.
**Learning:** The static web project relied solely on implicit browser security. Furthermore, adding CSP required refactoring inline styles (like `style="border:0;"` on an iframe) as they violate strict CSP directives that disallow `unsafe-inline`.
**Prevention:** Always implement a strict CSP by default in the meta tag for static sites and strictly avoid inline styles.
