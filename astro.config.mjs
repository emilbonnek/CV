import { defineConfig } from "astro/config";
import PDFPlugin from "./astro-plugin-pdf";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [PDFPlugin(), tailwind(), icon()],
  site: "https://emilbonnek.com",
});
