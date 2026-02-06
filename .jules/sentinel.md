# Sentinel's Security Journal

## 2026-02-06 - Enforcing Content Security Policy in Legacy HTML
**Vulnerability:** Missing Content Security Policy (CSP) allowed potential execution of unauthorized scripts and loading of malicious resources.
**Learning:** Legacy HTML often contains inline styles (e.g., `style="border:0;"` on iframes) which block the implementation of a strict `style-src 'self'` policy. In this case, the inline style was redundant as the CSS already covered it.
**Prevention:** Audit and move all inline styles to external CSS files. Use `grep` to identify inline styles before implementing CSP.
