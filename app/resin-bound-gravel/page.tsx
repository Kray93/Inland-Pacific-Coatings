import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resin-Bound Gravel | Inland Pacific Coatings",
  description:
    "Resin-bound gravel systems for patios, walkways, driveways, and outdoor spaces in Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function ResinBoundGravelPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Premium Exterior Finish</div>
          <h1 className="services-page-title">Resin-Bound Gravel</h1>
          <p className="lead services-page-lead">
            A modern outdoor surface system that blends natural stone with a clean, durable finish for patios,
            walkways, and exterior spaces.
          </p>
          <p>
            Resin-bound gravel is one of the most distinctive exterior finishes offered by Inland Pacific Coatings.
            Installed across Coeur d&apos;Alene, Spokane, and the Inland Northwest, this system creates a smooth,
            visually refined surface that elevates outdoor spaces while maintaining long-term durability.
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
          <h2>What is resin-bound gravel</h2>
          <p>
            Resin-bound gravel combines natural aggregate with a binding resin to create a smooth, seamless surface.
            Unlike loose gravel, the stones are locked in place, resulting in a stable and finished look that does not
            shift or scatter.
          </p>
          <ul>
            <li>Smooth, solid surface made from natural stone</li>
            <li>No loose gravel movement or displacement</li>
            <li>Clean, modern appearance</li>
            <li>Permeable surface depending on installation</li>
            <li>Strong balance of design and function</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where resin-bound gravel works best</h2>
          <p>
            This system is ideal for outdoor spaces where both appearance and usability matter.
          </p>
          <ul>
            <li>Walkways and entry paths</li>
            <li>Patios and outdoor living areas</li>
            <li>Driveways and feature sections</li>
            <li>Garden paths and landscape accents</li>
            <li>Poolside areas and exterior gathering spaces</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>A cleaner alternative to traditional gravel</h2>
          <p>
            Traditional gravel can feel unfinished and difficult to maintain. Resin-bound systems provide a more
            refined alternative that keeps the natural look of stone while eliminating the movement and mess.
          </p>
          <p>
            The result is an outdoor surface that feels intentional, stable, and easier to live with day to day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our installation process</h2>
          <ol>
            <li>Surface preparation and base evaluation</li>
            <li>Base layer correction or preparation if needed</li>
            <li>Mixing of aggregate and resin</li>
            <li>Application and leveling of the system</li>
            <li>Detail work and finishing</li>
            <li>Curing and final inspection</li>
          </ol>
          <p>
            Proper base preparation and installation technique are key to achieving a smooth and long-lasting finish.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Resin-bound gravel vs other outdoor coatings</h2>
          <p>
            Compared to traditional concrete coatings or texture deck systems, resin-bound gravel offers a more natural
            stone appearance. It is often chosen when the goal is to elevate an outdoor space with a softer, more
            organic finish.
          </p>
          <div className="pill-list">
            <Link href="/outdoor-concrete-coatings" className="pill">
              View Outdoor Coatings
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
  <div className="container article">
    <h2>Related Services</h2>
    <div className="pill-list">
      <Link href="/texture-deck" className="pill">Texture Deck Coatings</Link>
      <Link href="/outdoor-concrete-coatings" className="pill">Outdoor Concrete Coatings</Link>
      <Link href="/concrete-resurfacing" className="pill">Concrete Resurfacing</Link>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container article">
          <h2>Resin-bound gravel in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings installs resin-bound gravel systems throughout Coeur d&apos;Alene, Spokane, and
            the Inland Northwest for clients who want an outdoor surface that feels more refined, more stable, and more
            visually distinctive than traditional options.
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