/**
 * Materials Inland Pacific Coatings installs, described generically for SEO.
 * Brand names are intentionally NOT shown on the site. Details are based on the
 * manufacturers' published product information — re-check if suppliers change.
 */
export type Brand = {
  /** Short label shown on each card (a material type, not a brand) */
  name: string;
  intro: string;
  products: { name: string; text: string }[];
};

export const brands = {
  metallicEpoxy: {
    name: "Metallic Epoxy",
    intro:
      "Our epoxy countertops and metallic floors are built with a professional metallic epoxy system — primer, clear epoxy, and metallic pigments — that lets us create marble, stone, and liquid-metal looks no two alike.",
    products: [
      {
        name: "Metallic epoxy countertop system",
        text: "A primer, epoxy, and metallic-pigment system applied over properly prepared existing countertops to create one-of-a-kind marble and stone-inspired finishes.",
      },
      {
        name: "Metallic epoxy floor system",
        text: "Primer, epoxy, and metallics mixed for each floor's square footage, producing deep, reflective movement across the whole surface.",
      },
      {
        name: "Urethane top coat",
        text: "A protective urethane top coat over the epoxy for added durability and scratch resistance.",
      },
    ],
  },
  stainAndSeal: {
    name: "Stain & Seal",
    intro:
      "For decorative concrete we use professional acid stains and sealers designed to work together as a matched stain-and-seal system.",
    products: [
      {
        name: "Metallic-salt acid stain",
        text: "A water-based acid stain made with metallic salts that reacts with the concrete itself. Its full, rich color appears once the stain is neutralized and sealed.",
      },
      {
        name: "Gel acid stain for vertical surfaces",
        text: "A gel-consistency acid stain made for walls and other vertical concrete, where a liquid stain would run.",
      },
      {
        name: "Interior & exterior sealers",
        text: "Low-odor water-based acrylic sealers for interior floors, and solvent-based acrylic sealers for the deepest color saturation on exterior concrete.",
      },
    ],
  },
  paint: {
    name: "Premium Paint",
    intro:
      "We paint with premium, professional-grade coatings — matching the right product line to each surface, from living room walls to cabinets, siding, and commercial interiors.",
    products: [
      {
        name: "Top-tier interior & exterior paint",
        text: "Premium paint lines chosen for coverage, hide, washability, and stain resistance on walls, ceilings, siding, and trim.",
      },
      {
        name: "Urethane trim & cabinet enamel",
        text: "A waterbased, urethane-modified enamel for cabinets, doors, trim, and windows — washable, durable, and formulated to resist yellowing.",
      },
      {
        name: "Deck & fence stains",
        text: "Penetrating and solid-color stains plus deck wash and stain-and-sealer removers for restoring outdoor wood.",
      },
      {
        name: "Zero-VOC commercial coatings",
        text: "Professional commercial paints, including zero-VOC options well suited to occupied offices, rentals, and retail spaces.",
      },
    ],
  },
  roofTreatment: {
    name: "Soy-Based Treatment",
    intro:
      "Our roof rejuvenation treatment is a soy-based formula made specifically for asphalt shingle roofs.",
    products: [
      {
        name: "Soy-based penetrating formula",
        text: "Absorbs into the asphalt layer of the shingle to help replace oils lost to sun, heat, and weather — restoring flexibility to dried-out shingles.",
      },
      {
        name: "Repeatable maintenance",
        text: "The manufacturer reports an average of about five additional years of roof life per treatment, with up to three treatments over a roof's lifespan.",
      },
      {
        name: "Treatment, not a repair",
        text: "Rejuvenation is preventive maintenance. Active leaks, damaged shingles, or structural issues need to be repaired first — we check for these during the assessment.",
      },
    ],
  },
  reglazing: {
    name: "Polyurethane Reglazing",
    intro:
      "For tub and sink reglazing we use industrial-grade reglazing coatings made to refresh bathroom fixtures instead of replacing them.",
    products: [
      {
        name: "Two-component polyurethane coating",
        text: "An aliphatic, two-component polyurethane formulated for reglazing porcelain and plastic fixtures, producing a durable, glossy finish.",
      },
      {
        name: "Low-VOC formulation",
        text: "A low-VOC coating that meets environmental regulations, applied with ventilation to protect your home.",
      },
      {
        name: "Proper surface prep",
        text: "The fixture must be prepared to accept the coating — cleaning, repair, and etching are the steps we never skip.",
      },
    ],
  },
} satisfies Record<string, Brand>;
