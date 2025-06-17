import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const assets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/assets" }),
  schema: ({ image }) =>
    z.object({
      dl: z.string().optional(),
      thumbnails: z
        .object({ src: image(), alt: z.string() })
        .array()
        .optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
});

export const collections = { assets, pages };
