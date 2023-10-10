export const NAME = "Emil Bonne Kristiansen";
export const EMAIL = "emilbonnek@gmail.com";
export const PHONE = "29822645";

export const URL_LINKEDIN = "https://www.linkedin.com/in/emilbonnek/";
export const URL_GITHUB = "https://github.com/emilbonnek";
export const URL_WEBSITE = "https://emilbonnek.com";

export const DESCRIPTION = "My resume";
export const PDF_TITLE = "emilbonnek.pdf";

export const PRIMARY_COLOR = "#0b0b6e";
export const SECONDARY_COLOR = "#fff";

export const PAGE_WIDTH = "210mm";
export const PAGE_HEIGHT = "297mm";
export const PAGE_MARGIN = "24px";
export const PAGE_PADDING = "15mm";
export const PAGE_SEPARATOR = "5mm";

export const SVG_ICON_WIDTH = 100;
export const SVG_ICON_HEIGHT = 100;
export const SVG_ICON_STROKE_WIDTH = 5;
export const SVG_ICON_E_PATH =
  "M35 32.4C35 30.64 37.6087 28 39.3478 28H61.5217C63.2609 28 65 29.7601 65 31.52C65 33.2799 63.2609 35.04 61.5217 35.04H43.6957V46.48H61.5217C63.2609 46.4799 65 48.2399 65 50C65 51.7601 63.2609 53.5201 61.5217 53.52H43.6957V64.96H61.5217C63.2609 64.96 65 66.7201 65 68.48C65 70.2399 63.2609 72 61.5217 72H39.3478C37.6087 72 35 69.36 35 67.6V32.4Z";

export const SVG_ICON = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${SVG_ICON_WIDTH}"
  height="${SVG_ICON_HEIGHT}"
  viewBox="0 0 ${SVG_ICON_WIDTH} ${SVG_ICON_HEIGHT}"
>
  <style>
    rect {
      fill: ${SECONDARY_COLOR};
      stroke-width: ${SVG_ICON_STROKE_WIDTH};
      stroke: ${PRIMARY_COLOR};
    }
    path {
      fill: ${PRIMARY_COLOR};
    }
    @media (prefers-color-scheme: dark) {
      rect {
        fill: ${PRIMARY_COLOR};
        stroke: ${SECONDARY_COLOR};

      }
      path {
        fill: ${SECONDARY_COLOR};
      }
    }
  </style>
  <rect
    x="${SVG_ICON_STROKE_WIDTH / 2}"
    y="${SVG_ICON_STROKE_WIDTH / 2}"
    width="${SVG_ICON_WIDTH - SVG_ICON_STROKE_WIDTH}"
    height="${SVG_ICON_HEIGHT - SVG_ICON_STROKE_WIDTH}"
    rx="25"
    ry="25"
  ></rect>
  <path
    d="${SVG_ICON_E_PATH}"
  />
</svg>
`;
