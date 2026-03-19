import Link from "next/link";

const serviceGroups = [
  {
    title: "Countertops",
    intro:
      "Custom countertop systems designed to transform kitchens, baths, bars, and feature spaces with premium finishes and handcrafted detail.",
    services: [
      {
        subtitle: "Hero Service",
        title: "Epoxy Countertops",
        description:
          "Custom epoxy countertops with stone-inspired movement, rich depth, and a refined finish designed to elevate kitchens, baths, bars, and feature spaces.",
        href: "/epoxy-countertops",
      },
      {
        subtitle: "Premium Surface Design",
        title: "Concrete Countertops",
        description:
          "Handcrafted concrete countertops with natural texture, architectural character, and a custom finish for standout interiors.",
        href: "/concrete-countertops",
      },
    ],
  },
  {
    title: "Floors",
    intro:
      "Decorative and performance-driven floor systems built for homes, shops, studios, and statement spaces that deserve more than a standard finish.",
    services: [
      {
        subtitle: "Signature Finish",
        title: "Hardwood Overlay Floors",
        description:
          "A unique flooring system that captures the warmth and visual texture of wood with the durability of a coated surface.",
        href: "/hardwood-overlay-floors",
      },
      {
        subtitle: "Luxury Interior Floors",
        title: "Decorative Epoxy Floors",
        description:
          "Custom decorative floor finishes designed to bring movement, style, and a seamless high-end look to interior spaces.",
        href: "/decorative-epoxy-floors",
      },
      {
        subtitle: "Specialty Finish",
        title: "Metallic Epoxy Floors",
        description:
          "High-impact metallic epoxy floors with dramatic depth, reflective movement, and a custom statement finish.",
        href: "/metallic-epoxy-floors",
      },
      {
        subtitle: "Durable Texture System",
        title: "Flake Epoxy Floors",
        description:
          "Durable flake flooring systems for garages, shops, and high-use spaces that need traction, durability, and a clean finished look.",
        href: "/flake-epoxy-floors",
      },
      {
        subtitle: "Refined Surface Finish",
        title: "Concrete Polishing & Sealing",
        description:
          "Polished and sealed concrete surfaces that create a cleaner, more architectural finish with improved durability and easier maintenance.",
        href: "/concrete-polishing-sealing",
      },
      {
        subtitle: "Natural Finish",
        title: "Concrete Staining",
        description:
          "Concrete staining that enhances the natural character of the slab with tone, variation, and a more design-forward appearance.",
        href: "/concrete-staining",
      },
      {
        subtitle: "Residential Performance",
        title: "Garage Floor Coatings",
        description:
          "Garage floor coatings designed to create a cleaner, better-protected, and more finished space for everyday use.",
        href: "/garage-floor-coatings",
      },
    ],
  },
  {
    title: "Outdoor Surfaces",
    intro:
      "Exterior systems designed to improve curb appeal, usability, traction, and finish quality across patios, walkways, pool areas, and worn surfaces.",
    services: [
      {
        subtitle: "Premium Exterior Finish",
        title: "Resin-Bound Gravel",
        description:
          "A clean, modern stone-bound surface for patios, walkways, and exterior feature areas that need a refined natural look.",
        href: "/resin-bound-gravel",
      },
      {
        subtitle: "Slip-Resistant System",
        title: "Texture Deck Coatings",
        description:
          "Outdoor coatings built for pool decks, patios, and walkways where traction, durability, and comfort matter.",
        href: "/texture-deck",
      },
      {
        subtitle: "Surface Renewal",
        title: "Concrete Resurfacing",
        description:
          "A practical way to restore worn concrete surfaces and create a cleaner, more uniform foundation for everyday use or future finishes.",
        href: "/concrete-resurfacing",
      },
      {
        subtitle: "Surface Renewal",
        title: "Asphalt Resurfacing",
        description:
          "Decorative asphalt resurfacing that refreshes aged surfaces with a more polished and visually improved finish.",
        href: "/asphalt-resurfacing",
      },
      {
        subtitle: "Exterior Surface Systems",
        title: "Outdoor Concrete Coatings",
        description:
          "Protective outdoor concrete coatings for patios, walkways, and exterior spaces designed for performance and presentation.",
        href: "/outdoor-concrete-coatings",
      },
    ],
  },
  {
    title: "Walls & Vertical Surfaces",
    intro:
      "Decorative vertical systems created to bring depth, texture, and a more custom architectural feel to walls, bathrooms, and feature spaces.",
    services: [
      {
        subtitle: "Architectural Finish",
        title: "Concrete Wall Coatings",
        description:
          "Decorative concrete wall finishes that add texture, visual depth, and a design-forward look to interior spaces.",
        href: "/concrete-wall-coatings",
      },
      {
        subtitle: "Wet Area Systems",
        title: "Shower Systems",
        description:
          "Seamless shower systems designed to replace traditional tile with a cleaner, more modern, and easier-to-maintain finish.",
        href: "/shower-systems",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="hero services-hero">
        <div className="container services-hero-inner">
          <h1 className="services-page-title">
            Premium surface systems for countertops, floors, outdoor spaces, and vertical finishes.
          </h1>
          <p className="lead services-page-lead">
            Explore the full range of decorative and protective surface solutions offered by Inland Pacific Coatings.
            Every service is built around craftsmanship, design, and long-term performance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {serviceGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`services-group ${groupIndex > 0 ? "services-group-spaced" : ""}`}
            >
              <h2 className="services-group-title">{group.title}</h2>
              <p className="lead services-group-intro">{group.intro}</p>

              <div className="card-grid services-grid services-grid-spacing">
                {group.services.map((service, index) => (
                  <article
                    key={service.title}
                    className={`card ${
                      group.title === "Countertops" && index === 0 ? "featured" : ""
                    }`}
                  >
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-description">{service.description}</p>
                    <p className="service-card-note">
                      Custom quoted based on surface type, prep, layout, and finish complexity.
                    </p>
                    <div className="service-card-link-wrap">
                      <Link href={service.href} className="service-card-link">
                        Learn more →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}