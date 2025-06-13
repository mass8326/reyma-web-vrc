import type { APIRoute } from "astro";
import fpvs from "../../assets/fpvs.unitypackage?arraybuffer";
import { db } from "../../db";

export const GET: APIRoute = (ctx) => {
  return Response.redirect(new URL("/", ctx.url), 302);
};

export const POST: APIRoute = async (ctx) => {
  await ctx.locals.drizzle.insert(db.downloadLog).values({
    asset: "Novabeast - FPV Snoot & Global Collider",
    filename: "fpvs.unitypackage",
    ip: ctx.clientAddress,
  });
  const headers = { "content-type": "application/octet-stream" };
  return new Response(fpvs, { headers });
};
