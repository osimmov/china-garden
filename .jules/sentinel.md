## 2026-02-05 - Content Security Policy for Static Sites
**Vulnerability:** The application lacked a Content Security Policy (CSP), potentially allowing execution of malicious scripts or loading of unauthorized resources if an injection vulnerability were introduced.
**Learning:** Even static sites can benefit from CSP as a defense-in-depth measure. It requires careful enumeration of all external resources (fonts, images, frames) and removal of inline styles to be effective.
**Prevention:** Always implement a strict CSP that whitelists only necessary domains and avoids 'unsafe-inline' or 'unsafe-eval' where possible.
