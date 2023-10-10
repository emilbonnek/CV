import {
  SVG_ICON_E_PATH,
  SVG_ICON_WIDTH,
  SVG_ICON_HEIGHT,
} from "../../constants";

const MASK_SVG = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${SVG_ICON_WIDTH}"
  height="${SVG_ICON_HEIGHT}"
  viewBox="0 0 ${SVG_ICON_WIDTH} ${SVG_ICON_HEIGHT}"
>
  <path
    d="${SVG_ICON_E_PATH}"
    fill="black"
  />
</svg>
`;

export async function GET() {
  return new Response(MASK_SVG, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}
