import directives from "@unocss/transformer-directives";
import group from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";

export default defineConfig({
  transformers: [group(), directives()],
  shortcuts: [
    ["sc-link", "underline text-blue-600 visited:text-violet-600"],
    [
      "richtext",
      "[&_a]:sc-link [&_h2]:(text-2xl font-bold) [&_ul]:(ml-6 list-disc)",
    ],
  ],
});
