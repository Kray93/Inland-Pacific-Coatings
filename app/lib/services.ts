import type { PhotoKey } from "./photos";

export type SubService = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: PhotoKey;
};

export type CoreCategory = {
  key: "concrete" | "epoxy" | "painting" | "roof";
  title: string;
  /** Short label for nav and the first-visit chooser */
  shortTitle: string;
  tagline: string;
  description: string;
  href: string;
  image: PhotoKey;
  services: SubService[];
};

export const coreCategories: CoreCategory[] = [
  {
    key: "concrete",
    title: "Concrete Coating & Sealing",
    shortTitle: "Concrete",
    tagline: "Garages, patios, driveways & pool decks",
    description:
      "Protect, restore, and elevate concrete inside and out — garage floor systems, sealers, stains, resurfacing, and exterior coatings built for Inland Northwest freeze-thaw seasons.",
    href: "/concrete-coatings",
    image: "hub-concrete",
    services: [
      {
        subtitle: "Residential Performance",
        title: "Garage Floor Coatings",
        description:
          "Garage floor coatings designed to create a cleaner, better-protected, and more finished space for everyday use.",
        href: "/garage-floor-coatings",
        image: "garage-floor-coatings-1",
      },
      {
        subtitle: "Refined Surface Finish",
        title: "Concrete Polishing & Sealing",
        description:
          "Polished and sealed concrete surfaces that create a cleaner, more architectural finish with improved durability and easier maintenance.",
        href: "/concrete-polishing-sealing",
        image: "concrete-polishing-sealing-1",
      },
      {
        subtitle: "Exterior Surface Systems",
        title: "Outdoor Concrete Coatings",
        description:
          "Protective outdoor concrete coatings for patios, walkways, and exterior spaces designed for performance and presentation.",
        href: "/outdoor-concrete-coatings",
        image: "outdoor-concrete-coatings-1",
      },
      {
        subtitle: "Surface Renewal",
        title: "Concrete Resurfacing",
        description:
          "A practical way to restore worn concrete surfaces and create a cleaner, more uniform foundation for everyday use or future finishes.",
        href: "/concrete-resurfacing",
        image: "concrete-resurfacing-1",
      },
      {
        subtitle: "Decorative Concrete",
        title: "Acid Stain Concrete",
        description:
          "Rich, marbled earth-tone color that reacts with the slab itself for a one-of-a-kind, natural-stone look indoors or out.",
        href: "/acid-stain-concrete",
        image: "acid-stain-concrete-1",
      },
      {
        subtitle: "Slip-Resistant System",
        title: "Texture Deck Coatings",
        description:
          "Outdoor coatings built for pool decks, patios, and walkways where traction, durability, and comfort matter.",
        href: "/texture-deck",
        image: "texture-deck-1",
      },
      {
        subtitle: "Premium Exterior Finish",
        title: "Resin-Bound Gravel",
        description:
          "A clean, modern stone-bound surface for patios, walkways, and exterior feature areas that need a refined natural look.",
        href: "/resin-bound-gravel",
        image: "resin-bound-gravel-1",
      },
      {
        subtitle: "Premium Surface Design",
        title: "Concrete Countertops",
        description:
          "Handcrafted concrete countertops with natural texture, architectural character, and a custom finish for standout interiors.",
        href: "/concrete-countertops",
        image: "concrete-countertops-1",
      },
      {
        subtitle: "Architectural Finish",
        title: "Concrete Wall Coatings",
        description:
          "Decorative concrete wall finishes that add texture, visual depth, and a design-forward look to interior spaces.",
        href: "/concrete-wall-coatings",
        image: "concrete-wall-coatings-1",
      },
      {
        subtitle: "Surface Renewal",
        title: "Asphalt Resurfacing",
        description:
          "Decorative asphalt resurfacing that refreshes aged surfaces with a more polished and visually improved finish.",
        href: "/asphalt-resurfacing",
        image: "asphalt-resurfacing-1",
      },
    ],
  },
  {
    key: "epoxy",
    title: "Epoxy Floors & Countertops",
    shortTitle: "Epoxy",
    tagline: "Countertops, decorative & metallic floors",
    description:
      "Seamless, high-performance epoxy systems — from custom stone-look countertops to metallic statement floors, flake floors, and seamless showers.",
    href: "/epoxy",
    image: "hub-epoxy",
    services: [
      {
        subtitle: "Hero Service",
        title: "Epoxy Countertops",
        description:
          "Custom epoxy countertops with stone-inspired movement, rich depth, and a refined finish designed to elevate kitchens, baths, bars, and feature spaces.",
        href: "/epoxy-countertops",
        image: "epoxy-countertops-1",
      },
      {
        subtitle: "Durable Texture System",
        title: "Flake Epoxy Floors",
        description:
          "Durable flake flooring systems for garages, shops, and high-use spaces that need traction, durability, and a clean finished look.",
        href: "/flake-epoxy-floors",
        image: "flake-epoxy-floors-1",
      },
      {
        subtitle: "Specialty Finish",
        title: "Metallic Epoxy Floors",
        description:
          "High-impact metallic epoxy floors with dramatic depth, reflective movement, and a custom statement finish.",
        href: "/metallic-epoxy-floors",
        image: "metallic-epoxy-floors-1",
      },
      {
        subtitle: "Luxury Interior Floors",
        title: "Decorative Epoxy Floors",
        description:
          "Custom decorative floor finishes designed to bring movement, style, and a seamless high-end look to interior spaces.",
        href: "/decorative-epoxy-floors",
        image: "decorative-epoxy-floors-1",
      },
      {
        subtitle: "Signature Finish",
        title: "Hardwood Overlay Floors",
        description:
          "A unique flooring system that captures the warmth and visual texture of wood with the durability of a coated surface.",
        href: "/hardwood-overlay-floors",
        image: "hardwood-overlay-floors-1",
      },
      {
        subtitle: "Wet Area Systems",
        title: "Shower Systems",
        description:
          "Seamless shower systems designed to replace traditional tile with a cleaner, more modern, and easier-to-maintain finish.",
        href: "/shower-systems",
        image: "shower-systems-1",
      },
    ],
  },
  {
    key: "painting",
    title: "Painting",
    shortTitle: "Painting",
    tagline: "Residential & commercial",
    description:
      "Professional interior and exterior painting with the same prep-first standards we bring to every coating — clean lines, durable finishes, and a respectful crew.",
    href: "/painting",
    image: "hub-painting",
    services: [
      {
        subtitle: "Homes & Homeowners",
        title: "Residential Painting",
        description:
          "Interior and exterior house painting, cabinet painting, and deck & fence staining — careful prep, clean lines, and a crew that respects your home.",
        href: "/residential-painting",
        image: "painting-residential",
      },
      {
        subtitle: "Businesses & Properties",
        title: "Commercial Painting",
        description:
          "Offices, retail, multi-unit properties, and shops painted on a schedule that keeps your business running — evenings and weekends available.",
        href: "/commercial-painting",
        image: "painting-commercial",
      },
    ],
  },
  {
    key: "roof",
    title: "Roof Rejuvenation",
    shortTitle: "Roof Rejuvenation",
    tagline: "Extend the life of your shingle roof",
    description:
      "A spray-applied treatment that restores flexibility to aging asphalt shingles, helping your existing roof last longer and delaying the cost of replacement.",
    href: "/roof-rejuvenation",
    image: "hub-roof",
    services: [
      {
        subtitle: "Step One",
        title: "Roof Assessment",
        description:
          "We inspect your roof to confirm it is a good candidate for rejuvenation before recommending any treatment.",
        href: "/roof-rejuvenation#process",
        image: "roof-inspection",
      },
      {
        subtitle: "The Treatment",
        title: "Shingle Rejuvenation",
        description:
          "A penetrating treatment applied across the roof surface to help restore flexibility to dried-out asphalt shingles.",
        href: "/roof-rejuvenation#how-it-works",
        image: "roof-application",
      },
      {
        subtitle: "The Result",
        title: "Longer Roof Life",
        description:
          "Get more years out of the roof you already have at a fraction of the cost of a full replacement.",
        href: "/roof-rejuvenation#benefits",
        image: "roof-after",
      },
    ],
  },
];

export function getCategory(key: CoreCategory["key"]): CoreCategory {
  return coreCategories.find((c) => c.key === key)!;
}

/**
 * Main-service choices for the estimate form, each with a hint for the project description box.
 * Kept short on purpose: visitors pick a main service and describe the details.
 */
export const estimateOptions: { label: string; hint: string }[] = [
  {
    label: "Concrete Coating & Sealing",
    hint: "What surface is it (garage, patio, driveway, pool deck, basement)? About how big, and what finish are you hoping for?",
  },
  {
    label: "Epoxy Floors & Countertops",
    hint: "Floor or countertop? Where is it, about how big, and do you have a look in mind (flake, metallic, marble, wood-look)?",
  },
  {
    label: "Residential Painting",
    hint: "Interior, exterior, cabinets, or deck/fence? Which rooms or areas, and roughly how large is the home?",
  },
  {
    label: "Commercial Painting",
    hint: "What type of property (office, retail, multi-unit, shop)? Approximate size, and any scheduling needs (evenings, weekends)?",
  },
  {
    label: "Roof Rejuvenation",
    hint: "About how old is the roof, what type of shingles, and have you noticed granule loss, curling, or leaks?",
  },
  {
    label: "Other / Not Sure",
    hint: "Tell us about the space and what you'd like done, and we'll recommend the right service.",
  },
];
