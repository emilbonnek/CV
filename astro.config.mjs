import { defineConfig } from "astro/config";
import PDFPlugin from "./astro-plugin-pdf";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [PDFPlugin(), tailwind()],
});
