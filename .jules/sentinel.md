## 2024-05-22 - DOM-based XSS in Menu Rendering
**Vulnerability:** `script.js` utilized `innerHTML` to render menu categories and items sourced from `menu.json`. This allowed for potential Cross-Site Scripting (XSS) if the JSON data contained malicious scripts.
**Learning:** Static site architectures relying on external JSON files for content population must treat that data as untrusted input. `innerHTML` is a dangerous sink for such data.
**Prevention:** Replaced `innerHTML` usage with safe DOM manipulation methods (`document.createElement`, `textContent`, `appendChild`) to ensure all data is treated as text, not executable code.
