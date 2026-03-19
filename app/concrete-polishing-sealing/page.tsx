import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Polishing & Sealing | Inland Pacific Coatings",
  description:
    "Concrete polishing and sealing for homes, shops, commercial interiors, and high-traffic spaces across Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function ConcretePolishingSealingPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Refined Surface Finish</div>
          <h1 className="services-page-title">Concrete Polishing &amp; Sealing</h1>
          <p className="lead services-page-lead">
            Concrete polishing and sealing designed to create a cleaner, more refined surface with improved durability,
            easier maintenance, and a finished architectural look.
          </p>
          <p>
            Inland Pacific Coatings provides concrete polishing and sealing across Coeur d&apos;Alene, Spokane, and the
            Inland Northwest for homeowners, businesses, and property owners who want concrete that looks intentional,
            performs better, and feels more complete than an unfinished slab.
          </p>

          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Request an Estimate
            </Link>
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Why polish and seal concrete</h2>
          <p>
            Concrete polishing and sealing improves both appearance and performance. Instead of leaving the surface
            dusty, dull, or porous, the process refines the concrete and helps protect it for everyday use.
          </p>
          <ul>
            <li>Creates a cleaner and more finished look</li>
            <li>Reduces dust and surface shedding</li>
            <li>Improves ease of maintenance</li>
            <li>Enhances clarity and natural variation in the concrete</li>
            <li>Works well in both residential and commercial spaces</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where concrete polishing and sealing works best</h2>
          <p>
            This service is ideal for spaces that benefit from a more refined concrete finish without moving into a
            fully decorative coating system.
          </p>
          <ul>
            <li>Garages and workshops</li>
            <li>Basements and lower levels</li>
            <li>Retail and showroom spaces</li>
            <li>Studios and creative workspaces</li>
            <li>Commercial interiors and open-plan spaces</li>
            <li>Modern residential environments</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>A more natural finished concrete look</h2>
          <p>
            Concrete polishing and sealing is a strong option for clients who like the look of concrete itself and want
            to enhance it rather than cover it completely. The result is often more understated than decorative epoxy,
            but still highly intentional and visually clean.
          </p>
          <p>
            This makes it especially appealing in modern, industrial, and design-forward spaces where material honesty
            matters.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our process</h2>
          <ol>
            <li>Surface inspection and evaluation</li>
            <li>Grinding and refinement of the slab</li>
            <li>Correction of minor surface issues where needed</li>
            <li>Polishing to the desired level of finish</li>
            <li>Sealing and surface protection</li>
            <li>Final detailing and cleanup</li>
          </ol>
          <p>
            The final appearance depends on the condition of the existing concrete, the level of polish selected, and
            the intended use of the space.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Concrete polishing and sealing vs decorative coatings</h2>
          <p>
            Polishing and sealing is different from systems like decorative epoxy, hardwood overlay, or metallic floors.
            Rather than transforming the concrete into a new visual material, it refines and protects the slab itself.
          </p>
          <div className="pill-list">
            <Link href="/decorative-epoxy-floors" className="pill">
              View Decorative Floor Options
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Concrete polishing and sealing in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings provides polished and sealed concrete surfaces throughout Coeur d&apos;Alene,
            Spokane, and the Inland Northwest for clients who want concrete that looks cleaner, performs better, and
            feels more refined.
          </p>

          <div className="button-row cta-band">
            <Link href="/contact" className="btn btn-primary">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}