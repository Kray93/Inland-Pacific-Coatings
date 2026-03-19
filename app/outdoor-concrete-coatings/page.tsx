import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outdoor Concrete Coatings | Inland Pacific Coatings",
  description:
    "Outdoor concrete coatings including resin-bound gravel and texture deck systems for patios, walkways, and pool areas in Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function OutdoorConcreteCoatingsPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Exterior Surface Systems</div>
          <h1 className="services-page-title">Outdoor Concrete Coatings</h1>
          <p className="lead services-page-lead">
            Outdoor surface systems designed to upgrade patios, walkways, and exterior spaces with better durability,
            improved traction, and a more refined finished look.
          </p>
          <p>
            Inland Pacific Coatings installs outdoor concrete coatings across Coeur d&apos;Alene, Spokane, and the
            Inland Northwest for homeowners and property owners who want exterior spaces that look intentional and hold
            up to real-world conditions. Whether you're upgrading a patio, refreshing a walkway, or improving a pool
            deck, these systems are built to balance performance and appearance.
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
          <h2>Why upgrade outdoor concrete surfaces</h2>
          <p>
            Outdoor concrete can fade, stain, crack visually, and lose its appeal over time. A professionally installed
            coating system restores the look of the surface while improving usability and long-term performance.
          </p>
          <ul>
            <li>Improves overall curb appeal</li>
            <li>Creates a more finished and intentional outdoor space</li>
            <li>Helps protect the underlying concrete surface</li>
            <li>Adds texture and traction where needed</li>
            <li>Extends the usable life of patios, walkways, and decks</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>Outdoor coating options</h2>
          <p>
            Outdoor spaces require systems that perform well in changing conditions while still looking clean and
            refined. Depending on the project, different finishes can be used to match the style and function of the
            space.
          </p>

          <div className="card-grid services-grid services-grid-spacing">
            <article className="card featured">
              <div className="eyebrow">Premium Exterior Finish</div>
              <h3 className="service-card-title">Resin-Bound Gravel</h3>
              <p className="service-card-description">
                A clean, modern exterior surface that combines natural stone with a bound system for a smooth,
                permeable, and visually elevated finish.
              </p>
              <div className="service-card-link-wrap">
                <Link href="/resin-bound-gravel" className="service-card-link">
                  Learn more →
                </Link>
              </div>
            </article>

            <article className="card">
              <div className="eyebrow">Slip-Resistant System</div>
              <h3 className="service-card-title">Texture Deck Coatings</h3>
              <p className="service-card-description">
                A durable, slip-resistant coating system ideal for pool decks, patios, and outdoor living areas that
                need both safety and style.
              </p>
              <div className="service-card-link-wrap">
                <Link href="/texture-deck" className="service-card-link">
                  Learn more →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where outdoor coatings are commonly used</h2>
          <ul>
            <li>Patios and outdoor living spaces</li>
            <li>Walkways and entry paths</li>
            <li>Pool decks and surrounding areas</li>
            <li>Driveway accents and feature areas</li>
            <li>Exterior gathering and entertainment spaces</li>
          </ul>
          <p>
            These systems are designed to improve both how the space looks and how it functions day to day.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Outdoor coatings in Coeur d&apos;Alene, Spokane, and the Inland Northwest</h2>
          <p>
            Inland Pacific Coatings provides outdoor surface solutions across the Inland Northwest for homeowners and
            property owners who want exterior spaces that feel more complete, more durable, and more visually refined.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Upgrade your outdoor space</h2>
          <p>
            If your outdoor concrete surfaces feel worn, unfinished, or outdated, a professional coating system can
            completely transform the look and usability of the space.
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