/**
 * Seeds the starter/demo catalog (see src/lib/catalogSeedData.ts) so the
 * storefront and admin panel aren't empty on first run. This same data and
 * upsert logic also backs the admin panel's "Load Demo Catalog" button, for
 * loading it without a terminal. Run with `npm run db:seed`.
 */
import { PrismaClient } from "@prisma/client";
import { applyCatalogSeed } from "../src/lib/catalogSeedData";

const db = new PrismaClient();

applyCatalogSeed(db)
  .then((result) => {
    console.log(`Seeded ${result.categories} categories and ${result.products} products.`);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
