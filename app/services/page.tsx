import Link from "next/link";

const services = [
  {
    subtitle: "Hero Service",
    title: "Epoxy Countertops",
    description:
      "Custom epoxy countertops designed to deliver a high-end stone-inspired look with bold color, depth, and a durable protective finish.",
    href: "/epoxy-countertops",
  },
  {
    subtitle: "Premium Surface Design",
    title: "Concrete Countertops",
    description:
      "Handcrafted concrete countertops with modern texture, custom tone, and a refined finish built for standout kitchens, baths, and bars.",
    href: "/concrete-countertops",
  },
  {
    subtitle: "Residential Performance",
    title: "Garage Floor Coatings",
    description:
      "Durable garage floor systems built to resist wear, elevate appearance, and create a clean, finished space that performs every day.",
    href: "/garage-floor-coatings",
  },
  {
    subtitle: "Luxury Interior Floors",
    title: "Decorative Epoxy Floors",
    description:
      "Decorative floor coatings that bring seamless style, rich movement, and high-end character to interiors that need more than a basic finish.",
    href: "/decorative-epoxy-floors",
  },
  {
    subtitle: "Specialty Finish",
    title: "Metallic Epoxy Floors",
    description:
      "Statement-making metallic epoxy floors with dramatic movement, reflective depth, and a custom luxury finish for bold interior spaces.",
    href: "/metallic-epoxy-floors",
  },
  {
    subtitle: "Durable Texture System",
    title: "Flake Epoxy Floors",
    description:
      "Slip-resistant flake flooring systems designed for garages, shops, and high-traffic areas that need durability with a finished look.",
    href: "/flake-epoxy-floors",
  },
  {
    subtitle: "Refined Surface Finish",
    title: "Concrete Polishing & Sealing",
    description:
      "Polished and sealed concrete surfaces that enhance clarity, improve durability, and deliver a clean architectural look for homes and businesses.",
    href: "/concrete-polishing-sealing",
  },
  {
    subtitle: "Exterior Surface Systems",
    title: "Outdoor Concrete Coatings",
    description:
      "Protective outdoor surface coatings for patios, walkways, and poolside spaces designed for traction, durability, and curb appeal.",
    href: "/outdoor-concrete-coatings",
  },
  {
    subtitle: "Natural Look Finish",
    title: "Concrete Staining",
    description:
      "Concrete staining systems that add rich tone, variation, and character to floors and surfaces while preserving a natural concrete feel.",
    href: "/concrete-staining",
  },
  {
    subtitle: "Distinctive Overlay",
    title: "Hardwood Overlay Floors",
    description:
      "Decorative overlay floors crafted to capture the warmth and visual texture of wood with the durability of a coated surface system.",
    href: "/hardwood-overlay-floors",
  },
  {
    subtitle: "Premium Exterior Finish",
    title: "Resin-Bound Gravel",
    description:
      "Resin-bound gravel systems that create a clean, elegant, and permeable finish for walkways, patios, and exterior feature areas.",
    href: "/resin-bound-gravel",
  },
  {
    subtitle: "Surface Renewal",
    title: "Concrete Resurfacing",
    description:
      "Decorative concrete resurfacing that refreshes worn surfaces with a renewed appearance, improved durability, and a more finished presentation.",
    href: "/concrete-resurfacing",
  },
  {
    subtitle: "Surface Renewal",
    title: "Asphalt Resurfacing",
    description:
      "Decorative asphalt resurfacing designed to improve appearance and provide a more refined finish for aged or visually tired surfaces.",
    href: "/asphalt-resurfacing",
  },
  {
    subtitle: "Architectural Feature",
    title: "Concrete Wall Coatings",
    description:
      "Decorative concrete wall finishes that add texture, depth, and a custom architectural feel to vertical surfaces and feature spaces.",
    href: "/concrete-wall-coatings",
  },
  {
    subtitle: "Wet Area Systems",
    title: "Shower Systems",
    description:
      "Seamless decorative shower systems built for a clean, modern look with durable protection and a custom-finished appearance.",
    href: "/shower-systems",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero services-hero">
        <div className="container services-hero-inner">
          <div className="eyebrow">All Services</div>
          <h1 className="services-page-title">
            Premium surface systems for countertops, floors, walls, and outdoor spaces.
          </h1>
          <p className="lead services-page-lead">
            Explore the full range of decorative and protective surface solutions offered by Inland Pacific Coatings.
            From standout countertops to durable flooring and refined exterior finishes, every system is built around
            craftsmanship, design, and long-term performance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid services-grid services-grid-spacing">
            {services.map((service, index) => (
              <article key={service.title} className={`card ${index === 0 ? "featured" : ""}`}>
                <div className="eyebrow">{service.subtitle}</div>
                <h2 className="service-card-title">{service.title}</h2>
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
      </section>
    </>
  );
}
