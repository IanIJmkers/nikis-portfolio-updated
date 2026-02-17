import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGES_DIR = new URL("../public/images", import.meta.url).pathname;
const MAX_WIDTH = 2400;
const QUALITY = 85;
const EXTENSIONS = [".png", ".jpg", ".jpeg"];

async function optimizeImages() {
  const files = await readdir(IMAGES_DIR);
  const imageFiles = files.filter((f) =>
    EXTENSIONS.includes(extname(f).toLowerCase())
  );

  console.log(`Found ${imageFiles.length} images to optimize.\n`);

  for (const file of imageFiles) {
    const inputPath = join(IMAGES_DIR, file);
    const name = basename(file, extname(file));
    const outputPath = join(IMAGES_DIR, `${name}.webp`);

    const before = (await stat(inputPath)).size;

    try {
      await sharp(inputPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const after = (await stat(outputPath)).size;
      const ratio = ((1 - after / before) * 100).toFixed(1);
      console.log(
        `${file} → ${name}.webp  |  ${fmt(before)} → ${fmt(after)}  (${ratio}% smaller)`
      );
    } catch (err) {
      console.error(`Failed: ${file} — ${err.message}`);
    }
  }

  console.log("\nDone.");
}

function fmt(bytes) {
  if (bytes > 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + " MB";
  return (bytes / 1024).toFixed(0) + " KB";
}

optimizeImages();
