/*
  scripts/resize-images.js
  - Scans the images/ folder and generates resized variants for each image.
  - Outputs: <name>-480.jpg, <name>-800.jpg, <name>-1200.jpg next to the source.

  Usage:
    npm install
    npm run resize-images

  Note: This script requires Node.js and the sharp package (included in package.json).
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, '..', 'images');
const SIZES = [480, 800, 1200];
const ALLOWED = ['.jpg', '.jpeg', '.png'];

async function resizeFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!ALLOWED.includes(ext)) return;
  const base = path.basename(file, ext);
  const inputPath = path.join(INPUT_DIR, file);

  for (const w of SIZES) {
    const outName = `${base}-${w}${ext}`;
    const outPath = path.join(INPUT_DIR, outName);
    try {
      await sharp(inputPath)
        .resize({ width: w })
        .withMetadata()
        .toFile(outPath);
      console.log(`Wrote ${outName}`);
    } catch (err) {
      console.error(`Failed to resize ${file} -> ${outName}:`, err.message);
    }
  }
}

async function main() {
  try {
    const files = fs.readdirSync(INPUT_DIR);
    for (const f of files) {
      await resizeFile(f);
    }
    console.log('Done.');
  } catch (err) {
    console.error('Error reading images directory:', err.message);
    process.exit(1);
  }
}

main();
