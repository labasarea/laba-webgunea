// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  output: "static",

  trailingSlash: "never",
  integrations: [react(), sitemap()],
});
