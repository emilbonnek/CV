import { NAME, PRIMARY_COLOR } from "../constants";

const MANIFEST_DATA = {
  name: NAME,
  short_name: NAME,
  icons: [
    {
      src: "icons/google-touch-icon.png",
      sizes: "512x512",
    },
  ],
  theme_color: PRIMARY_COLOR,
  background_color: PRIMARY_COLOR,
  start_url: ".",
  display: "standalone",
};

export async function GET() {
  return new Response(JSON.stringify(MANIFEST_DATA), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
