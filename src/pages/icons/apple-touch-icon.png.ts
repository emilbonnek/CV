import sharp from "sharp";
import { SVG_ICON } from "../../constants";

export async function GET() {
  const pngBuffer = await sharp(Buffer.from(SVG_ICON)).png().toBuffer();

  return new Response(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
