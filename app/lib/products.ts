/**
 * Manufacturer products Inland Pacific Coatings installs.
 * Descriptions are paraphrased from each manufacturer's own product pages — keep claims
 * attributed to the manufacturer and re-check them when products change.
 */
export type Brand = {
  name: string;
  url: string;
  intro: string;
  products: { name: string; text: string }[];
};

export const brands = {
  leggari: {
    name: "Leggari",
    url: "https://leggari.com/",
    intro:
      "Leggari is known for pioneering the metallic epoxy countertop system. Their primer, epoxy, and metallic pigments let us build the marble, stone, and liquid-metal looks our clients ask for.",
    products: [
      {
        name: "Metallic Epoxy Countertop System",
        text: "A primer, epoxy, and metallic-pigment system applied over properly prepared existing countertops to create one-of-a-kind marble and stone-inspired finishes.",
      },
      {
        name: "Metallic Epoxy Floor System",
        text: "Primer, epoxy, and metallics mixed for each floor's square footage, producing deep, reflective movement across the whole surface.",
      },
      {
        name: "Urethane Top Coat",
        text: "A protective top coat Leggari recommends over its epoxy for added durability and scratch resistance.",
      },
    ],
  },
  directColors: {
    name: "Direct Colors",
    url: "https://directcolors.com/",
    intro:
      "Direct Colors makes the acid stains and sealers we use for decorative concrete — products designed to work together as a matched stain-and-seal system.",
    products: [
      {
        name: "EverStain Acid Stain",
        text: "A water-based, metallic-salt acid stain that reacts with the concrete itself. Its full, rich color appears once the stain is neutralized and sealed.",
      },
      {
        name: "DecoGel Gel Acid Stain",
        text: "A gel-consistency acid stain made for walls and other vertical concrete, where a liquid stain would run.",
      },
      {
        name: "AcquaSeal, HydroCryl & EasySeal Sealers",
        text: "Water-based acrylic sealers (AcquaSeal, HydroCryl) for low-odor interior work, and solvent-based EasySeal for the deepest color saturation on exterior concrete.",
      },
    ],
  },
  sherwinWilliams: {
    name: "Sherwin-Williams",
    url: "https://www.sherwin-williams.com/",
    intro:
      "We paint with Sherwin-Williams coatings — matching the right product line to each surface, from living room walls to cabinets, siding, and commercial interiors.",
    products: [
      {
        name: "Emerald",
        text: "Sherwin-Williams' top-tier interior and exterior paint, which they position above Duration and SuperPaint for coverage, hide, and stain resistance.",
      },
      {
        name: "Duration & SuperPaint",
        text: "Proven interior and exterior lines for durable, long-lasting color on walls, siding, and trim.",
      },
      {
        name: "Emerald Urethane Trim Enamel",
        text: "A waterbased, urethane-modified enamel for cabinets, doors, trim, and windows — washable, durable, and formulated to resist yellowing.",
      },
      {
        name: "SuperDeck",
        text: "Deck and fence stains plus prep products, including deck wash and stain-and-sealer remover, for restoring outdoor wood.",
      },
      {
        name: "ProMar",
        text: "Professional commercial lines, including ProMar 200 Zero VOC, well suited to occupied offices, rentals, and retail spaces.",
      },
    ],
  },
  hydrasoy: {
    name: "HydraSoy",
    url: "https://www.hydrasoy.com/",
    intro:
      "Our roof rejuvenation treatment uses HydraSoy, a soy-based formula made specifically for asphalt shingle roofs.",
    products: [
      {
        name: "Soy-based penetrating formula",
        text: "Absorbs into the asphalt layer of the shingle to help replace oils lost to sun, heat, and weather — restoring flexibility to dried-out shingles.",
      },
      {
        name: "Repeatable maintenance",
        text: "HydraSoy reports an average of about five additional years of roof life per treatment, with up to three treatments over a roof's lifespan.",
      },
      {
        name: "Treatment, not a repair",
        text: "Rejuvenation is preventive maintenance. Active leaks, damaged shingles, or structural issues need to be repaired first — we check for these during the assessment.",
      },
    ],
  },
  cardinal: {
    name: "Cardinal Paint",
    url: "http://www.cardinalpaint.com/markets/reglazing/",
    intro:
      "For tub and sink reglazing we use Cardinal Paint's reglazing coatings — industrial-grade finishes made to refresh bathroom fixtures instead of replacing them.",
    products: [
      {
        name: "6G00 Series Reglazing Coating",
        text: "An aliphatic, two-component polyurethane that Cardinal formulates for reglazing porcelain and plastic fixtures.",
      },
      {
        name: "Low-VOC formulation",
        text: "Cardinal describes its coatings as low-VOC and compliant with environmental regulations; the 6G00 series is listed at 250 g/L VOC.",
      },
      {
        name: "Proper surface prep",
        text: "Cardinal stresses that the fixture must be prepared to accept the coating — the cleaning, repair, and etching steps we never skip.",
      },
    ],
  },
} satisfies Record<string, Brand>;
