"use client";

import { useState, useTransition } from "react";
import { Sparkles } from "lucide-react";
import { loadDemoCatalog } from "@/lib/actions/adminCatalogSeed";

/**
 * One-click way to (re)load the starter demo catalog from the browser —
 * no terminal/CLI access needed. Useful for populating a freshly deployed
 * database before a client demo. Safe to click more than once: it upserts
 * by slug and re-syncs each product's images every run.
 */
export function LoadDemoCatalogButton() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  function handleClick() {
    if (
      !confirm(
        "Load the starter demo catalog? This adds/updates the sample categories and products (including the real product photos) — existing products with the same slug get their details and images refreshed.",
      )
    ) {
      return;
    }
    setMessage(null);
    startTransition(async () => {
      try {
        const result = await loadDemoCatalog();
        setMessage(`Loaded ${result.categories} categories and ${result.products} products.`);
      } catch {
        setMessage("Something went wrong loading the catalog — please try again.");
      }
    });
  }

  return (
    <div className="rounded-2xl border border-dashed border-brand-gold-dark/40 bg-brand-gold-light/20 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-charcoal">
            <Sparkles aria-hidden="true" className="size-4 text-brand-gold-dark" />
            Load Demo Catalog
          </h2>
          <p className="mt-1 text-sm text-charcoal/60">
            Populate this store with the starter categories and products — including the real client photos — in one click.
          </p>
        </div>
        <button
          type="button"
          onClick={handleClick}
          disabled={isPending}
          className="btn-shine rounded-full bg-brand-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-black-deep disabled:opacity-50"
        >
          {isPending ? "Loading…" : "Load Demo Catalog"}
        </button>
      </div>
      {message && <p className="mt-3 text-sm font-medium text-charcoal">{message}</p>}
    </div>
  );
}
