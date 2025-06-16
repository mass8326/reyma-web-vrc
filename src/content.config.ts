import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const assets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/assets" }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
});

export const collections = { assets, pages };
