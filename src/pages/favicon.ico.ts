import sharp from "sharp";
import ico from "sharp-ico";
import { SVG_ICON } from "../constants";

export async function GET() {
  const pngBuffer = await sharp(Buffer.from(SVG_ICON))
    .resize({ width: 256, height: 256 }) // Resize to a larger size for better quality
    .png()
    .toBuffer();
  const icoBuffer = ico.encode([pngBuffer]);

  return new Response(icoBuffer, {
    headers: {
      "Content-Type": "image/x-icon",
    },
  });
}
