import puppeteer from "puppeteer";
import express from "express";
import { promises as fs } from "fs";
import type { AstroIntegration, AstroIntegrationLogger } from "astro";
import type { Server } from "http";
import { PDF_TITLE } from "./src/constants";

export default function PDFPlugin(): AstroIntegration {
  return {
    name: "pdf-plugin",
    hooks: {
      "astro:build:generated": async ({ logger }) => {
        const app = express();
        app.use(express.static("dist"));
        const staticServer = app.listen(0);
        const pdfBuffer = await generatePDF(staticServer, logger);
        staticServer.close();
        await fs.writeFile(`dist/${PDF_TITLE}`, pdfBuffer);
      },
      "astro:server:setup": async ({ server, logger }) => {
        server.middlewares.use(`/${PDF_TITLE}`, async (_req, res, _next) => {
          if (!server.httpServer) throw new Error("No http server");
          const pdfBuffer = await generatePDF(server.httpServer, logger);
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader(
            "Content-Disposition",
            `inline; filename="${PDF_TITLE}"`
          );
          res.end(pdfBuffer);
        });
      },
    },
  };
}

async function generatePDF(httpServer: Server, logger: AstroIntegrationLogger) {
  logger.info("Generating PDF");
  const address = httpServer.address();
  if (!address || typeof address === "string") throw new Error("No address");
  const port = address.port;
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  const response = await page.goto(`http://localhost:${port}/`, {
    waitUntil: "networkidle0",
  });
  if (!response || !response.ok()) logger.error("Failed to reach page");
  const pdfBuffer = await page.pdf({
    preferCSSPageSize: true,
  });
  await browser.close();
  return pdfBuffer;
}
