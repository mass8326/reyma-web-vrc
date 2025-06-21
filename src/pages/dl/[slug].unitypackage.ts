import type { APIRoute } from "astro";
import fpvs from "../../assets/fpvs-v1.0.0.unitypackage?arraybuffer";
import modular from "../../assets/modular-novabeast-v1.0.0.unitypackage?arraybuffer";
import { db } from "../../db";

export const GET: APIRoute = (ctx) => {
  return Response.redirect(new URL("/", ctx.url), 302);
};

export const POST: APIRoute = async (ctx) => {
  const headers = { "content-type": "application/octet-stream" };
  switch (ctx.params.slug) {
    case "fpvs":
      await ctx.locals.drizzle.insert(db.downloadLog).values({
        asset: "Novabeast - FPV Snoot & Global Collider",
        filename: "fpvs-v1.0.0.unitypackage",
        ip: ctx.clientAddress,
      });
      return new Response(fpvs, { headers });
    case "modular-novabeast":
      await ctx.locals.drizzle.insert(db.downloadLog).values({
        asset: "Modular Novabeast - VRCFury",
        filename: "modular-novabeast-v1.0.0.unitypackage",
        ip: ctx.clientAddress,
      });
      return new Response(modular, { headers });
  }
  return new Response(null, { status: 404 });
};
