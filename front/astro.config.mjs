// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

const { SITE_URL } = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "static",

  trailingSlash: "never",
  integrations: [react(), sitemap()],
});
