# Sentinel Journal 🛡️

## 2025-02-18 - Missing Timeout in Parser Script
**Vulnerability:** `parser.py` uses `requests.get()` without a timeout, which can cause the script to hang indefinitely (DoS) if the remote server is unresponsive.
**Learning:** Developers often overlook network unreliability in utility scripts, assuming they run in a controlled environment.
**Prevention:** Enforce mandatory `timeout` parameter for all HTTP requests and handle `RequestException` to fail gracefully.
