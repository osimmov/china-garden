## 2026-04-15 - Strict CSP implementation with inline style mitigation
**Vulnerability:** The application was missing a Content Security Policy (CSP), leaving it potentially vulnerable to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** Adding a strict CSP that disallows `'unsafe-inline'` blocks inline styles such as `style="border:0;"` on iframes.
**Prevention:** Always verify and refactor inline styles to external CSS files before enforcing a strict `style-src` CSP directive to prevent visual regressions and console errors.