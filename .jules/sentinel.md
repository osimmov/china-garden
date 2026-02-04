## 2024-10-24 - DOM-based XSS in Menu Rendering
**Vulnerability:** `script.js` used `innerHTML` to insert menu item data (names, descriptions, prices) directly into the DOM, creating a DOM-based Cross-Site Scripting (XSS) vulnerability.
**Learning:** The application implicitly trusted `menu.json` content. Dynamic content rendering in this codebase often prioritized convenience (`innerHTML`) over security, missing the risk of injected scripts in data files.
**Prevention:** Mandate the use of `textContent` and `document.createElement()` for all dynamic content rendering. `innerHTML` is now forbidden for rendering user or data-store content in `script.js`.
