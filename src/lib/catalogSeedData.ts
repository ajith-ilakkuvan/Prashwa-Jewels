/**
 * The store's starter/demo catalog — a mix of real, client-supplied product
 * photography and illustrative placeholders for categories that don't have
 * real photos yet. Shared between the CLI seed script (`prisma/seed.ts`,
 * for local/CI setup) and the admin "Load Demo Catalog" action
 * (`src/lib/actions/adminCatalogSeed.ts`, so a non-technical admin can
 * (re)load it from the browser without running any command).
 */
import type { PrismaClient } from "@prisma/client";

export interface SeedProduct {
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  metal: string;
  purity?: string;
  weightGrams?: number;
  gemstone?: string;
  sku: string;
  stock: number;
  featured?: boolean;
  /** First image is used as the primary photo; extras become additional gallery images. */
  images: string[];
}

export interface SeedCategory {
  name: string;
  slug: string;
  description: string;
  image: string;
  products: SeedProduct[];
}

export const categories: SeedCategory[] = [
  {
    name: "Necklaces",
    slug: "necklaces",
    description: "Statement necklaces and haarams handcrafted in gold, from everyday elegance to bridal grandeur.",
    image: "/products/placeholder-necklaces.svg",
    products: [
      {
        name: "Kanchi Kamakshi Temple Necklace",
        slug: "kanchi-kamakshi-temple-necklace",
        description:
          "A handcrafted temple-style necklace in 22K gold, featuring traditional deity motifs and a ruby-studded pendant — a timeless choice for weddings and festive occasions.",
        price: 185000,
        compareAtPrice: 198000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 42.5,
        gemstone: "Ruby, Kundan",
        sku: "PJ-NK-001",
        stock: 4,
        featured: true,
        images: ["/products/placeholder-necklaces.svg"],
      },
      {
        name: "Royal Nagas Heritage Necklace",
        slug: "the-royal-nagas-necklace",
        description:
          "An eternal narration of heritage — a temple-antique necklace densely worked with naga and peacock motifs in gold, finished with a cascade of engraved coin drops and set with ruby and emerald accents. From Prashwa Jewels' Royal Nagas collection.",
        price: 285000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 68,
        gemstone: "Ruby, Emerald",
        sku: "PJ-NK-002",
        stock: 2,
        featured: true,
        images: ["/products/real/royal-nagas-heritage-necklace.jpg"],
      },
      {
        name: "Royal Nagas Peacock Collar Necklace",
        slug: "royal-nagas-peacock-collar-necklace",
        description:
          "A wide, temple-antique collar necklace from the Royal Nagas collection, with a pair of facing peacocks at its heart and dense naga-motif goldwork studded with ruby accents throughout.",
        price: 310000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 74,
        gemstone: "Ruby",
        sku: "PJ-NK-004",
        stock: 2,
        featured: true,
        images: ["/products/real/royal-nagas-peacock-collar-necklace.jpg"],
      },
      {
        name: "Lakshmi Kaasu Mala",
        slug: "lakshmi-kaasu-mala",
        description:
          "An ethereal Lakshmi necklace strung with antique gold coin discs and a row of engraved elephants — a traditional kaasu mala to complete any festive or bridal look.",
        price: 145000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 34,
        sku: "PJ-NK-005",
        stock: 3,
        images: ["/products/real/lakshmi-kaasu-mala.jpg"],
      },
      {
        name: "Royal Puligoru Necklace",
        slug: "royal-puligoru-necklace",
        description:
          "A traditional puligoru (tiger-claw) pendant on multiple strands of gold-toned pearls, with a diamond-set crown and an emerald centre — handcrafted to enhance a majestic, festive look.",
        price: 68000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 18,
        gemstone: "Pearl, Emerald, Diamond",
        sku: "PJ-NK-006",
        stock: 5,
        images: ["/products/real/royal-puligoru-necklace.jpg"],
      },
      {
        name: "Viruvah Diamonds Emerald Station Necklace",
        slug: "viruvah-diamonds-emerald-station-necklace",
        description:
          "A fine gold chain with pear-cut emerald and round diamond stations set along its length — a delicate everyday piece from Viruvah Diamonds, Prashwa Jewels' fine diamond line.",
        price: 52000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 6,
        gemstone: "Diamond, Emerald",
        sku: "PJ-NK-007",
        stock: 8,
        images: ["/products/real/viruvah-diamonds-emerald-station-necklace.jpg"],
      },
      {
        name: "Designer Pearl Leaf Necklace Set",
        slug: "designer-pearl-leaf-necklace-set",
        description:
          "A customised-beauty necklace and earring set with hand-shaped gold leaves fringed in seed pearls — a light, textured design for a distinctive festive look.",
        price: 58000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 15,
        gemstone: "Pearl",
        sku: "PJ-NK-008",
        stock: 6,
        images: ["/products/real/designer-pearl-leaf-set.jpg"],
      },
      {
        name: "Rose Gold Layered Pendant Chain",
        slug: "rose-gold-layered-pendant-chain",
        description: "A delicate, everyday-wear layered chain in 18K rose gold with a petite diamond pendant.",
        price: 62000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 9.2,
        gemstone: "Diamond",
        sku: "PJ-NK-003",
        stock: 10,
        images: ["/products/placeholder-necklaces.svg"],
      },
    ],
  },
  {
    name: "Earrings",
    slug: "earrings",
    description: "From subtle studs to elaborate jhumkas — earrings for every occasion.",
    image: "/products/placeholder-earrings.svg",
    products: [
      {
        name: "Kundan Polki Jhumka",
        slug: "kundan-polki-jhumka",
        description: "Statement jhumkas in Kundan-Polki work with a pearl drop finish, perfect for bridal wear.",
        price: 78000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 16,
        gemstone: "Kundan, Pearl",
        sku: "PJ-ER-001",
        stock: 6,
        featured: true,
        images: ["/products/placeholder-earrings.svg"],
      },
      {
        name: "Viruvah Diamonds Emerald Pear Studs",
        slug: "viruvah-diamonds-emerald-drop-studs",
        description:
          "A pear-cut emerald halo in a diamond frame — from Viruvah Diamonds, Prashwa Jewels' fine diamond line.",
        price: 68000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 3.4,
        gemstone: "Diamond, Emerald",
        sku: "PJ-ER-002",
        stock: 8,
        featured: true,
        images: ["/products/real/viruvah-diamonds-emerald-pear-studs.jpg"],
      },
      {
        name: "Textured Gold Diamond Studs",
        slug: "textured-gold-diamond-studs",
        description:
          "An organically textured gold stud with a diamond-set halo at its centre — the elegance and reflection of modern design in an everyday stud.",
        price: 34500,
        metal: "Gold",
        purity: "18K",
        weightGrams: 4,
        gemstone: "Diamond",
        sku: "PJ-ER-004",
        stock: 10,
        images: ["/products/real/textured-gold-diamond-studs.jpg"],
      },
      {
        name: "Viruvah Diamonds Floral Halo Studs",
        slug: "viruvah-diamonds-floral-halo-studs",
        description:
          "An open floral motif in rose gold, rimmed with a diamond halo — a reflection of modern elegance, from Viruvah Diamonds.",
        price: 39500,
        metal: "Gold",
        purity: "18K",
        weightGrams: 2.6,
        gemstone: "Diamond",
        sku: "PJ-ER-005",
        stock: 12,
        images: ["/products/placeholder-earrings.svg"],
      },
      {
        name: "Peacock Motif Chandbali",
        slug: "peacock-motif-chandbali",
        description: "Chandbali earrings with a hand-enamelled peacock motif and hanging pearl tassels.",
        price: 46500,
        metal: "Gold",
        purity: "22K",
        weightGrams: 11.5,
        gemstone: "Pearl, Enamel",
        sku: "PJ-ER-003",
        stock: 8,
        images: ["/products/placeholder-earrings.svg"],
      },
    ],
  },
  {
    name: "Bangles & Bracelets",
    slug: "bangles-bracelets",
    description: "Everyday bangles, stacking bracelets and ceremonial kada, in gold and diamond.",
    image: "/products/placeholder-bangles.svg",
    products: [
      {
        name: "Nakshi Work Gold Bangle Pair",
        slug: "nakshi-work-gold-bangle-pair",
        description: "A pair of broad bangles with intricate Nakshi engraving, sold as a set.",
        price: 168000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 38,
        sku: "PJ-BN-001",
        stock: 3,
        featured: true,
        images: ["/products/placeholder-bangles.svg"],
      },
      {
        name: "Antique Gold Bangles",
        slug: "antique-gold-bangles",
        description:
          "Bold antique-finish bangles crafted in 22K gold, densely set with ruby and emerald accents in a traditional scrollwork pattern — sold as a pair.",
        price: 245000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 58,
        gemstone: "Ruby, Emerald",
        sku: "PJ-BN-003",
        stock: 3,
        featured: true,
        images: ["/products/real/antique-gold-bangles.jpg"],
      },
      {
        name: "Classic Bangle",
        slug: "classic-bangle",
        description:
          "A lattice-worked gold bangle with a diamond-set band running through its centre — handcrafted to enhance a feminine, everyday-luxury look.",
        price: 135000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 22,
        gemstone: "Diamond",
        sku: "PJ-BN-004",
        stock: 4,
        featured: true,
        images: ["/products/real/classic-bangle.jpg"],
      },
      {
        name: "Antique Vanki Armlet",
        slug: "antique-vanki-armlet",
        description:
          "A handcrafted antique vanki (armlet) in gold, set with ruby and polki stones around a floral centrepiece and finished with a pearl finial — an heirloom-style piece for the traditional bride.",
        price: 165000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 28,
        gemstone: "Ruby, Polki, Pearl",
        sku: "PJ-BN-005",
        stock: 3,
        images: ["/products/real/antique-vanki-armlet.jpg"],
      },
      {
        name: "Diamond Eye Cuff Bracelet",
        slug: "diamond-eye-cuff-bracelet",
        description:
          "An open cuff bracelet in gold with two diamond-set navette clusters — the elegance and reflection of modern design in a versatile everyday piece.",
        price: 78000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 6,
        gemstone: "Diamond",
        sku: "PJ-BN-006",
        stock: 6,
        images: ["/products/real/diamond-eye-cuff-bracelet.jpg"],
      },
      {
        name: "Diamond Tennis Bracelet",
        slug: "diamond-tennis-bracelet",
        description: "A classic diamond tennis bracelet in 18K gold, a versatile everyday-luxury piece.",
        price: 95000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 7.8,
        gemstone: "Diamond",
        sku: "PJ-BN-002",
        stock: 5,
        images: ["/products/placeholder-bangles.svg"],
      },
    ],
  },
  {
    name: "Rings",
    slug: "rings",
    description: "Engagement, daily-wear and statement rings in gold and diamond.",
    image: "/products/placeholder-rings.svg",
    products: [
      {
        name: "Solitaire Engagement Ring",
        slug: "solitaire-engagement-ring",
        description: "A timeless solitaire engagement ring in 18K white gold with a certified centre diamond.",
        price: 125000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 4.2,
        gemstone: "Diamond",
        sku: "PJ-RG-001",
        stock: 6,
        featured: true,
        images: ["/products/placeholder-rings.svg"],
      },
      {
        name: "Antique Floral Gold Ring",
        slug: "antique-floral-gold-ring",
        description: "An antique-finish gold ring with a floral motif and a ruby centre stone.",
        price: 32500,
        metal: "Gold",
        purity: "22K",
        weightGrams: 6.5,
        gemstone: "Ruby",
        sku: "PJ-RG-002",
        stock: 9,
        images: ["/products/placeholder-rings.svg"],
      },
    ],
  },
  {
    name: "Bridal Collection",
    slug: "bridal-collection",
    description:
      "Being your happily ever after with exemplary jewellery for the bride — complete bridal sets designed as one ensemble.",
    image: "/products/placeholder-bridal.svg",
    products: [
      {
        name: "Grand Temple Bridal Set",
        slug: "grand-temple-bridal-set",
        description:
          "A complete bridal set — layered temple-style necklace, matching jhumkas, vanki and maang tikka — handcrafted in 22K gold with ruby and Kundan work.",
        price: 425000,
        compareAtPrice: 455000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 96,
        gemstone: "Ruby, Kundan",
        sku: "PJ-BR-001",
        stock: 1,
        featured: true,
        images: ["/products/placeholder-bridal.svg"],
      },
      {
        name: "Timeless Beauty Ruby Diamond Necklace",
        slug: "timeless-beauty-ruby-diamond-necklace",
        description:
          "Inspired from the best, this lustrous creation of diamonds and gemstones is sheer brilliance — a dense diamond choker necklace centred on a square-cut ruby, finished with a fringe of drop pearls.",
        price: 875000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 85,
        gemstone: "Diamond, Ruby, Pearl",
        sku: "PJ-BR-002",
        stock: 1,
        featured: true,
        images: ["/products/real/timeless-beauty-ruby-necklace-1.jpg", "/products/real/timeless-beauty-ruby-necklace-2.jpg"],
      },
      {
        name: "Timeless Beauty Emerald Diamond Necklace",
        slug: "timeless-beauty-emerald-diamond-necklace",
        description:
          "Inspired from the best, this lustrous creation of diamonds and gemstones is sheer brilliance — a dense diamond choker necklace scattered with oval emeralds in halo settings, for the bride who wants to make an entrance.",
        price: 925000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 88,
        gemstone: "Diamond, Emerald",
        sku: "PJ-BR-003",
        stock: 1,
        featured: true,
        images: [
          "/products/real/timeless-beauty-emerald-necklace-1.jpg",
          "/products/real/timeless-beauty-emerald-necklace-2.jpg",
        ],
      },
      {
        name: "Antique Meenakari Pearl Haar",
        slug: "antique-meenakari-pearl-haar",
        description:
          "A handcrafted, multi-strand seed pearl haar with a hand-painted meenakari medallion pendant and matching earrings — customised beauty for the bride's most memorable day.",
        price: 195000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 72,
        gemstone: "Pearl, Kundan, Enamel",
        sku: "PJ-BR-004",
        stock: 2,
        featured: true,
        images: ["/products/real/antique-meenakari-pearl-haar-1.jpg", "/products/real/antique-meenakari-pearl-haar-2.jpg"],
      },
      {
        name: "Ruby Peacock Necklace Set",
        slug: "ruby-peacock-necklace-set",
        description:
          "Moments of magic and beauty, specially designed for the traditional bride — an antique-finish necklace with a facing-peacock motif and a chandbali-style ruby pendant, paired with matching peacock stud earrings.",
        price: 225000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 54,
        gemstone: "Ruby",
        sku: "PJ-BR-005",
        stock: 2,
        images: ["/products/real/ruby-peacock-necklace-set.jpg"],
      },
    ],
  },
  {
    name: "Chains & Pendants",
    slug: "chains-pendants",
    description: "Gold chains and pendants for daily wear and gifting.",
    image: "/products/placeholder-chains.svg",
    products: [
      {
        name: "Classic Rope Chain",
        slug: "classic-rope-chain",
        description: "A durable, everyday 22K gold rope chain — a versatile foundation for any pendant.",
        price: 58000,
        metal: "Gold",
        purity: "22K",
        weightGrams: 14,
        sku: "PJ-CH-001",
        stock: 15,
        images: ["/products/placeholder-chains.svg"],
      },
      {
        name: "Interlock Diamond Pendant Set",
        slug: "interlock-diamond-pendant-set",
        description:
          "Elegance and reflection of modern design — interlocking rose gold rings, one diamond-set, form a pendant and matching stud earrings for a versatile everyday-luxury look.",
        price: 72000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 9,
        gemstone: "Diamond",
        sku: "PJ-CH-003",
        stock: 6,
        featured: true,
        images: ["/products/real/interlock-diamond-pendant-set.jpg"],
      },
      {
        name: "Couple Pendants",
        slug: "couple-pendants",
        description:
          "Presenting bold gold couple jewellery — a matching pair of monogram pendants in 18K gold on fine box chains, customised with your initials.",
        price: 28000,
        metal: "Gold",
        purity: "18K",
        weightGrams: 8,
        sku: "PJ-CH-004",
        stock: 10,
        images: ["/products/real/couple-pendants.jpg"],
      },
      {
        name: "Om Pendant with Chain",
        slug: "om-pendant-with-chain",
        description: "A minimal Om pendant in 22K gold on a matching fine chain.",
        price: 24500,
        metal: "Gold",
        purity: "22K",
        weightGrams: 5.5,
        sku: "PJ-CH-002",
        stock: 20,
        images: ["/products/placeholder-chains.svg"],
      },
    ],
  },
];

/**
 * Slugs from earlier seed runs that were renamed/replaced above — removed
 * first so their old SKUs don't collide with the renamed products' SKUs.
 * Safe to delete: this is placeholder seed data, never real orders.
 */
const supersededSlugs = ["antique-lakshmi-haaram", "diamond-solitaire-studs"];

export interface CatalogSeedResult {
  categories: number;
  products: number;
}

/** Upserts every category/product above, re-syncing images on every run so swapping a placeholder for a real photo takes effect on re-run. Safe to call repeatedly. */
export async function applyCatalogSeed(db: PrismaClient): Promise<CatalogSeedResult> {
  await db.product.deleteMany({ where: { slug: { in: supersededSlugs } } });

  for (const [index, category] of categories.entries()) {
    const createdCategory = await db.category.upsert({
      where: { slug: category.slug },
      create: {
        name: category.name,
        slug: category.slug,
        description: category.description,
        image: category.image,
        sortOrder: index,
      },
      update: {
        name: category.name,
        description: category.description,
        image: category.image,
        sortOrder: index,
      },
    });

    for (const product of category.products) {
      const upsertedProduct = await db.product.upsert({
        where: { slug: product.slug },
        create: {
          name: product.name,
          slug: product.slug,
          description: product.description,
          price: product.price,
          compareAtPrice: product.compareAtPrice,
          metal: product.metal,
          purity: product.purity,
          weightGrams: product.weightGrams,
          gemstone: product.gemstone,
          sku: product.sku,
          stock: product.stock,
          featured: product.featured ?? false,
          categoryId: createdCategory.id,
        },
        update: {
          name: product.name,
          description: product.description,
          price: product.price,
          compareAtPrice: product.compareAtPrice,
          metal: product.metal,
          purity: product.purity,
          weightGrams: product.weightGrams,
          gemstone: product.gemstone,
          stock: product.stock,
          featured: product.featured ?? false,
          categoryId: createdCategory.id,
        },
      });

      await db.productImage.deleteMany({ where: { productId: upsertedProduct.id } });
      await db.productImage.createMany({
        data: product.images.map((url, sortOrder) => ({
          url,
          alt: product.name,
          sortOrder,
          productId: upsertedProduct.id,
        })),
      });
    }
  }

  return {
    categories: categories.length,
    products: categories.reduce((n, c) => n + c.products.length, 0),
  };
}
