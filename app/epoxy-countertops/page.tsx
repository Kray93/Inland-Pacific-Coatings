import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Epoxy Countertop Refinishing & Resurfacing",
  description:
    "Upgrade outdated countertops with epoxy countertop refinishing, resurfacing, and custom epoxy surfaces. Serving Coeur d'Alene, Spokane, and the Inland Northwest."
};

export default function EpoxyCountertopsPage() {
  return (
    <main className="section">
      <div className="container article">
        <div className="eyebrow">Authority Page</div>
        <h1 style={{ marginTop: 14 }}>Epoxy Countertop Refinishing &amp; Resurfacing</h1>
        <p className="lead" style={{ marginTop: 18 }}>
          Serving Coeur d&apos;Alene, Spokane, and the Inland Northwest. Transform outdated countertops into durable,
          stone-inspired epoxy surfaces without replacing cabinets or undergoing a full renovation.
        </p>

        <section>
          <h2>What Is Epoxy Countertop Refinishing?</h2>
          <p>
            Epoxy countertop refinishing is a decorative coating system applied over existing surfaces such as
            laminate, tile, wood, or concrete. The process creates a seamless, durable finish that can replicate
            natural stone, marble, or granite.
          </p>
        </section>

        <section>
          <h2>Refinishing vs Replacement</h2>
          <ul>
            <li>Keeps existing cabinets</li>
            <li>Less demolition and disruption</li>
            <li>Lower overall cost</li>
            <li>Custom stone-style finishes</li>
            <li>Faster than full replacement projects</li>
          </ul>
        </section>

        <section>
          <h2>Custom Epoxy Countertop Designs</h2>
          <p>
            Epoxy countertops can replicate marble, granite, quartz, metallic stone, and custom color blends. Each
            surface is handcrafted and unique, allowing homeowners to achieve a design that fits their space.
          </p>
        </section>

        <section>
          <h2>Our Countertop Installation Process</h2>
          <ol>
            <li>Surface inspection and preparation</li>
            <li>Repairs and leveling if needed</li>
            <li>Primer coat application</li>
            <li>Decorative epoxy design layer</li>
            <li>Protective topcoat for durability</li>
            <li>Final cure and finishing</li>
          </ol>
          <p>Each installation timeline depends on surface condition, design complexity, and environmental conditions.</p>
        </section>

        <section>
          <h2>Where Epoxy Countertops Work Best</h2>
          <ul>
            <li>Kitchens</li>
            <li>Bathroom vanities</li>
            <li>Bar tops</li>
            <li>Laundry rooms</li>
            <li>Commercial counters</li>
            <li>Outdoor bar areas</li>
          </ul>
        </section>

        <section>
          <h2>Why Choose Inland Pacific Coatings</h2>
          <p>
            Inland Pacific Coatings combines luxury epoxy craftsmanship with professional preparation standards to
            deliver durable and visually striking surfaces across the Inland Northwest.
          </p>
          <p>
            Explore our local pages for <Link href="/epoxy-countertops/coeur-dalene" style={{ color: "var(--gold)", fontWeight: 700 }}>Coeur d&apos;Alene</Link> and <Link href="/epoxy-countertops/spokane" style={{ color: "var(--gold)", fontWeight: 700 }}>Spokane</Link>.
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <p><strong>Are epoxy countertops durable?</strong><br />Yes. With proper installation and topcoats, epoxy countertops can provide a durable and water-resistant surface.</p>
          <p><strong>Can laminate countertops be refinished with epoxy?</strong><br />In many cases, yes. Laminate surfaces are commonly resurfaced using epoxy systems.</p>
          <p><strong>How long does countertop refinishing take?</strong><br />Installation timelines vary depending on preparation, design complexity, and cure conditions.</p>
          <p><strong>Are epoxy countertops heat resistant?</strong><br />They are heat resistant to a degree, but hot pans should still be placed on trivets or pads.</p>
        </section>

        <section className="cta-band">
          <h2>Transform Your Countertops</h2>
          <p>
            Contact Inland Pacific Coatings to explore countertop refinishing, resurfacing, or custom epoxy countertop
            options.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">Request an Estimate</Link>
            <Link href="/" className="btn btn-outline">Back to Home</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
