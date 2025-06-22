import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://chatkagolebia.pl",
  integrations: [sitemap({})],
  output: "static",
  adapter: netlify(),
});
