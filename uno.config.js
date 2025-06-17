import directives from "@unocss/transformer-directives";
import group from "@unocss/transformer-variant-group";
import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
  presets: [presetWind4()],
  transformers: [group(), directives()],
  extendTheme: (theme) => ({
    ...theme,
    breakpoint: {
      ...theme.breakpoint,
      xs: "480px",
    },
  }),
  shortcuts: [
    ["sc-link", "underline text-blue-600 visited:text-violet-600"],
    [
      "richtext",
      "[&_a]:sc-link [&_h2]:(text-2xl font-bold) [&_ul]:(ml-6 list-disc)",
    ],
    [
      /^p(x+)(y+)(?:-([\d.]+))?$/,
      ([, x, y, c]) => {
        if (!x || !y) return;
        const num = c ? Number(c) : 4;
        if (Number.isNaN(num)) return;
        return `px-${num * x.length} py-${num * y.length}`;
      },
    ],
  ],
});
