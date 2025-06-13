import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const downloadLog = pgTable("download_log", {
  id: serial(),
  ip: text("ip").notNull(),
  timestamp: timestamp().defaultNow().notNull(),
  asset: text("asset").notNull(),
  filename: text("filename").notNull(),
});
