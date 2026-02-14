## 2026-02-14 - Unbounded Request Timeout
**Vulnerability:** `parser.py` made HTTP requests without a timeout, allowing for potential indefinite hanging (DoS) if the remote server stalled.
**Learning:** Python `requests` library does not have a default timeout. It must be explicitly set.
**Prevention:** Always add `timeout=X` to `requests.get()` calls and wrap them in `try/except` blocks to handle failures gracefully.
