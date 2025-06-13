import type { MiddlewareHandler } from "astro";
import { getDrizzle } from "./db";

export const onRequest: MiddlewareHandler = (ctx, next) => {
  ctx.locals.drizzle = getDrizzle();
  return next();
};
