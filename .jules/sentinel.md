## 2025-05-22 - CSP for Static Sites
**Vulnerability:** Lack of Content Security Policy allowed potential XSS and data exfiltration.
**Learning:** Even static sites use many external resources (Google Maps, Fonts, Unsplash). A strict CSP requires careful cataloging of these origins. Inline styles in iframes prevent strict style-src policies.
**Prevention:** Implement strict CSP headers/meta tags and move inline styles to CSS files. Whitelist only necessary domains.
