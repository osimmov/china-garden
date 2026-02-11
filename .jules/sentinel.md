## 2025-05-20 - Unbounded Request Timeout Vulnerability
**Vulnerability:** The `parser.py` script uses `requests.get()` without a timeout parameter.
**Learning:** Default behavior of `requests` library allows connections to hang indefinitely, potentially causing Denial of Service if the external server is unresponsive.
**Prevention:** Always specify a `timeout` parameter in `requests` calls (e.g., `requests.get(url, timeout=10)`).

## 2025-05-20 - Inline Styles Block Strict CSP
**Vulnerability:** Application lacked Content Security Policy (CSP), allowing potential XSS.
**Learning:** Inline styles (e.g., `style="border:0;"`) block strict CSP implementation. Existing CSS classes often cover these styles but are overridden or ignored.
**Prevention:** Move all inline styles to external CSS files before implementing CSP to allow `default-src 'self'` and avoid `'unsafe-inline'`.
