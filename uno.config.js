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
    ["flex-center-center", "flex justify-center items-center"],
    [
      "richtext",
      "[&_a]:sc-link [&_h1]:(text-3xl font-bold) [&_h2]:(text-2xl font-bold) [&_ul]:(pl-8 list-disc) [&_ol]:(pl-8 list-decimal)",
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
