import { SVG_ICON } from "../../constants";

export async function GET() {
  return new Response(SVG_ICON, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}
