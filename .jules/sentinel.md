## 2026-03-05 - Content Security Policy & Inline Styles
**Vulnerability:** Use of inline styles (`style="..."`) prevents the implementation of a strict Content Security Policy (CSP), leaving the application vulnerable to XSS attacks that rely on inline style injection or execution.
**Learning:** To enforce a robust CSP without `'unsafe-inline'`, all styling must be externalized to CSS files. The codebase previously used inline styles for iframes which blocked CSP adoption.
**Prevention:** Always use external CSS classes for styling. Verify CSP compliance by checking browser console for violations after changes.
