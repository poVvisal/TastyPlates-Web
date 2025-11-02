# Vann Tasty Plates — Local demo

Project reorganized: CSS and JS were extracted from `index.html` into `css/styles.css` and `js/main.js` for maintainability.

Files added:
- `css/styles.css` — all site styles (extracted from index.html)
- `js/main.js` — page behavior: dynamic year, mobile menu toggle, smooth scroll, contact form demo
- `README.md` — this file

How to run locally:
1. Make sure the images referenced in `index.html` exist in the `images/` folder.
2. Open `index.html` in your browser (double-click or use "Open File"), or from PowerShell run:

```powershell
Start-Process .\index.html
```

Image resizing (responsive variants):
I added a small Node.js script to generate responsive image sizes next to the originals.

Files added:
- `package.json` — declares `sharp` and a `resize-images` npm script.
- `scripts/resize-images.js` — scans `images/` and writes `-480`, `-800`, and `-1200` variants for each JPG/PNG.

Run locally (PowerShell):

```powershell
npm install
npm run resize-images
```

What this produces
- For each `images/foo.jpg` you will get `images/foo-480.jpg`, `images/foo-800.jpg`, and `images/foo-1200.jpg`.

Notes
- `sharp` is a native module and will compile binary dependencies on install; this requires a working build toolchain on Windows (recommended: install windows-build-tools or use WSL). If you prefer, run the script in WSL or on another machine and copy the generated images back into `images/`.
- After running the script, the `srcset` attributes already added to `index.html` will point to the generated files and the browser can choose the best size.

Notes:
- This is a static local demo—no backend.
- If you update CSS or JS, refresh the page. Use DevTools to inspect layout/mobile behavior.
- The contact form is a demo: it shows an alert and does not send network requests.
