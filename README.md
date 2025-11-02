# Vannak Tasty Plates — Official site

Project reorganized: CSS and JS were extracted from `index.html` into `css/styles.css` and `js/main.js` for maintainability.

Files of interest:
- `css/styles.css` — site styles
- `js/main.js` — page behavior: dynamic year, mobile menu toggle, smooth scroll, contact form handling, and theme toggle

How to run locally:
1. Make sure the images referenced in `index.html` exist in the `images/` folder.
2. Open `index.html` in your browser (double-click or use "Open File"), or from PowerShell run:

```powershell
Start-Process .\index.html
```

If you included the optional image resizing script, run it to generate responsive variants (not required for basic local previews).

Notes:
- This is a static site. If you update CSS or JS, refresh the page. Use DevTools to inspect layout/mobile behavior.
- The contact form currently shows a confirmation alert and does not submit to a backend. If you want a live form, I can wire a simple server endpoint or integrate a third-party form provider.
