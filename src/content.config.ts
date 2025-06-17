import { basename, dirname } from "node:path";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const assets = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*/index.md"],
    generateId: ({ entry }) => {
      const dir = dirname(entry).split("/")[0]!;
      if (dir === ".") return basename(entry, ".md");
      return dir;
    },
    base: "./src/content/assets",
  }),
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
