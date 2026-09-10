import "server-only";
import { db } from "@/lib/db";
import { applyCatalogSeed } from "@/lib/catalogSeedData";

/**
 * Demo convenience: auto-loads the starter catalog the first time the
 * site is hit against an empty database, so a fresh deploy shows products
 * immediately without anyone needing to log into /admin and click "Load
 * Demo Catalog" first. Safe to leave running (upserts by slug, no-ops
 * once real products exist) but drop this once the store has its own
 * real catalog and a first-run auto-seed no longer makes sense.
 *
 * Cached per warm server instance so a busy site doesn't run a
 * `category.count()` check on every single request.
 */
let seedCheck: Promise<void> | null = null;

export function ensureCatalogSeeded(): Promise<void> {
  if (!seedCheck) {
    seedCheck = db.category
      .count()
      .then((count) => {
        if (count === 0) return applyCatalogSeed(db).then(() => undefined);
      })
      .catch((error) => {
        console.error("Auto-seed check failed:", error);
        seedCheck = null; // allow retry on the next request
      });
  }
  return seedCheck;
}
