/**
 * Removes near-black background pixels from logo PNG (gold MS on black).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const source = path.join(root, "public/images/logo.png");
const outMain = path.join(root, "public/images/logo.png");
/** Optional smaller assets (layout metadata uses /images/logo.png) */
const outIcon = path.join(root, "public/icon.png");
const outApple = path.join(root, "public/apple-icon.png");

function isBackground(r, g, b) {
  // Flat black / very dark only — keeps gold/bronze detail
  const lum = r * 0.299 + g * 0.587 + b * 0.114;
  return lum < 32 && r < 55 && g < 55 && b < 55;
}

async function processBuffer(buf, width, height) {
  const out = Buffer.alloc(buf.length);
  for (let i = 0; i < buf.length; i += 4) {
    const r = buf[i];
    const g = buf[i + 1];
    const b = buf[i + 2];
    out[i] = r;
    out[i + 1] = g;
    out[i + 2] = b;
    out[i + 3] = isBackground(r, g, b) ? 0 : buf[i + 3];
  }
  return out;
}

async function main() {
  if (!fs.existsSync(source)) {
    console.error("Missing source:", source);
    process.exit(1);
  }

  const meta = await sharp(source).metadata();
  const { data, info } = await sharp(source)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const processed = await processBuffer(data, info.width, info.height);

  const pngFull = await sharp(processed, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toBuffer();

  fs.mkdirSync(path.dirname(outMain), { recursive: true });
  fs.writeFileSync(outMain, pngFull);
  console.log("Wrote", outMain);

  // Favicon / app icons — square, crisp at small sizes
  const iconSize = 64;
  await sharp(pngFull)
    .resize(iconSize, iconSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outIcon);
  console.log("Wrote", outIcon);

  await sharp(pngFull)
    .resize(180, 180, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outApple);
  console.log("Wrote", outApple);

  console.log("Also wrote public/icon.png, public/apple-icon.png (optional fallbacks)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
