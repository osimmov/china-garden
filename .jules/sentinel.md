## 2026-02-03 - DOM-based XSS in Menu Rendering
**Vulnerability:** The application was using `innerHTML` to render menu items and category titles from `menu.json`. This would allow an attacker to inject malicious scripts via the `menu.json` file (if they compromised the source website or the file itself).
**Learning:** Even internal data files like `menu.json` should be treated as untrusted sources when rendering to the DOM, especially if they originate from external scraping (as seen in `parser.py`).
**Prevention:** Use safe DOM manipulation methods like `document.createElement`, `textContent`, and `appendChild` instead of `innerHTML` when handling dynamic content.
