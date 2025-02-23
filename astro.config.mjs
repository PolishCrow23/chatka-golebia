import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://chatkagolebia.pl',
  integrations: [mdx(), sitemap()],
  output: "hybrid",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  }
});