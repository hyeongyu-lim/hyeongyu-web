import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://hyeongyu-lim.github.io",
  base: "/hyeongyu-web",
  integrations: [mdx(), sitemap(), tailwind()],
});
