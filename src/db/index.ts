import { DATABASE_URL } from "astro:env/server";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema.ts";

export * as db from "./schema.ts";

export type DrizzleDb = ReturnType<typeof getDrizzle>;

export function getDrizzle() {
  return drizzle({ connection: DATABASE_URL, schema });
}
