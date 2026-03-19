import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Texture Deck Coatings | Inland Pacific Coatings",
  description:
    "Slip-resistant texture deck coatings for patios, pool decks, and outdoor surfaces in Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function TextureDeckPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Slip-Resistant System</div>
          <h1 className="services-page-title">Texture Deck Coatings</h1>
          <p className="lead services-page-lead">
            Durable, slip-resistant coatings designed for patios, pool decks, and outdoor living spaces that need both
            safety and a more finished appearance.
          </p>
          <p>
            Inland Pacific Coatings installs texture deck systems across Coeur d&apos;Alene, Spokane, and the Inland
            Northwest for homeowners and property owners who want outdoor surfaces that are safer to walk on, easier to
            maintain, and visually upgraded from plain concrete.
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
          <h2>Why texture deck coatings are used</h2>
          <p>
            Outdoor concrete surfaces can become slippery, worn, and visually inconsistent over time. Texture deck
            coatings improve both function and appearance by adding grip and a more uniform finish.
          </p>
          <ul>
            <li>Slip-resistant surface for safer walking</li>
            <li>Improves the look of worn or uneven concrete</li>
            <li>Comfortable underfoot compared to bare concrete</li>
            <li>Designed for outdoor conditions and exposure</li>
            <li>Creates a more finished, cohesive space</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where texture deck coatings work best</h2>
          <p>
            Texture deck systems are ideal for outdoor areas where traction and usability are important.
          </p>
          <ul>
            <li>Pool decks and surrounding areas</li>
            <li>Patios and outdoor living spaces</li>
            <li>Walkways and entry areas</li>
            <li>Balconies and elevated decks</li>
            <li>Commercial outdoor spaces</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>Built for outdoor performance</h2>
          <p>
            Texture deck coatings are designed to handle changing weather conditions while maintaining a consistent,
            usable surface. They provide a balance between durability, comfort, and visual appeal.
          </p>
          <p>
            For many outdoor spaces, this system creates a noticeable upgrade in both safety and overall finish.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our installation process</h2>
          <ol>
            <li>Surface preparation and cleaning</li>
            <li>Repair and correction of problem areas</li>
            <li>Base layer application</li>
            <li>Texture system installation</li>
            <li>Color and finish application</li>
            <li>Sealing and final detailing</li>
          </ol>
          <p>
            Proper preparation ensures the coating bonds correctly and performs well over time.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Texture deck vs other outdoor coatings</h2>
          <p>
            Compared to smoother finishes like resin-bound gravel or decorative coatings, texture deck systems are
            chosen when traction and safety are the top priority, especially around pool areas and frequently used
            walkways.
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
      <Link href="/resin-bound-gravel" className="pill">Resin-Bound Gravel</Link>
      <Link href="/outdoor-concrete-coatings" className="pill">Outdoor Concrete Coatings</Link>
      <Link href="/concrete-resurfacing" className="pill">Concrete Resurfacing</Link>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container article">
          <h2>Texture deck coatings in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings installs texture deck systems throughout Coeur d&apos;Alene, Spokane, and the
            Inland Northwest for clients who want outdoor surfaces that are safer, more durable, and more visually
            refined.
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