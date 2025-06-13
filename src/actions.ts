import assert from "node:assert";
import { defineAction } from "astro:actions";
import { STRIPE_PRICING_ID } from "astro:env/server";
import { stripe } from "./lib/stripe";

export const server = {
  createCheckoutSession: defineAction({
    handler: async (_, ctx) => {
      const session = await stripe.checkout.sessions.create({
        ui_mode: "embedded",
        line_items: [{ price: STRIPE_PRICING_ID, quantity: 1 }],
        mode: "payment",
        return_url: new URL(
          "/thank-you?session_id={CHECKOUT_SESSION_ID}",
          ctx.request.url,
        ).toString(),
      });
      assert(session.client_secret, "Could not create checkout session");
      return { clientSecret: session.client_secret };
    },
  }),
};
