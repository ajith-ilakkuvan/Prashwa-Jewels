"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { getAdminSession } from "@/lib/adminAuth";
import { applyCatalogSeed, type CatalogSeedResult } from "@/lib/catalogSeedData";

async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) throw new Error("Not authorized.");
}

/** Loads/refreshes the starter demo catalog — safe to run repeatedly, it upserts by slug. */
export async function loadDemoCatalog(): Promise<CatalogSeedResult> {
  await requireAdmin();
  const result = await applyCatalogSeed(db);

  revalidatePath("/", "layout");
  revalidatePath("/admin/products/");
  revalidatePath("/admin/categories/");

  return result;
}
