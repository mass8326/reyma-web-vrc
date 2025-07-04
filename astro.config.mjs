import vercel from "@astrojs/vercel";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";
import { presetWind4 } from "unocss";
import uno from "unocss/astro";
import arraybuffer from "vite-plugin-arraybuffer";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    uno({
      injectReset: true,
    }),
    icon(),
  ],
  vite: {
    plugins: [arraybuffer()],
  },
  env: {
    schema: {
      PUBLIC_STRIPE_KEY: envField.string({
        context: "client",
        access: "public",
      }),
      DATABASE_URL: envField.string({
        context: "server",
        access: "secret",
      }),
      STRIPE_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
      STRIPE_PRICING_ID: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
