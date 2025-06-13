import type { DrizzleDb } from "./db";

declare global {
  namespace App {
    interface Locals {
      drizzle: DrizzleDb;
    }
  }
}

export {};
