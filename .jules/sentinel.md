## 2026-05-20 - Content Security Policy (CSP) Implementation
**Vulnerability:** The application lacked a Content Security Policy (CSP), making it vulnerable to XSS and data injection attacks. Additionally, redundant inline styles were found on the map iframe.
**Learning:** Legacy or copy-pasted code (like Google Maps iframes) often comes with inline styles that conflict with strict CSPs. The inline style `border:0` was redundant as `style.css` already handled it.
**Prevention:** Implement a strict CSP early in development. Remove inline styles and move them to CSS classes. Use `frame-src` for embedded content.
