import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Wall Coatings | Inland Pacific Coatings",
  description:
    "Decorative concrete wall coatings for interior and feature spaces across Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function ConcreteWallCoatingsPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Architectural Finish</div>
          <h1 className="services-page-title">Concrete Wall Coatings</h1>
          <p className="lead services-page-lead">
            Decorative wall finishes that bring texture, depth, and a custom architectural feel to interior spaces and
            feature areas.
          </p>
          <p>
            Inland Pacific Coatings installs concrete wall coatings across Coeur d&apos;Alene, Spokane, and the Inland
            Northwest for clients who want walls that feel more intentional, more refined, and more connected to the
            overall design of the space.
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
          <h2>What are concrete wall coatings</h2>
          <p>
            Concrete wall coatings are decorative finishes applied to vertical surfaces to create a textured, stone-like,
            or architectural appearance. These systems can range from smooth and modern to more raw and organic,
            depending on the desired look.
          </p>
          <ul>
            <li>Custom texture and finish</li>
            <li>Stone, plaster, or concrete-inspired looks</li>
            <li>Seamless application across wall surfaces</li>
            <li>Designed for visual impact</li>
            <li>Works in both residential and commercial interiors</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where wall coatings work best</h2>
          <p>
            Concrete wall coatings are often used to create feature walls or to elevate the design of a space.
          </p>
          <ul>
            <li>Living room feature walls</li>
            <li>Fireplace surrounds</li>
            <li>Commercial interiors and reception areas</li>
            <li>Retail and showroom spaces</li>
            <li>Offices and modern interior environments</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>A design-driven wall finish</h2>
          <p>
            Unlike standard paint or drywall finishes, concrete wall coatings are chosen for their ability to add
            dimension and character. They create a surface that feels more substantial and visually engaging.
          </p>
          <p>
            This makes them a strong option for spaces where walls are meant to stand out rather than fade into the
            background.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our installation process</h2>
          <ol>
            <li>Surface preparation and evaluation</li>
            <li>Base layer and bonding preparation</li>
            <li>Application of coating system</li>
            <li>Texture development and finishing</li>
            <li>Color refinement and sealing</li>
            <li>Final detailing and inspection</li>
          </ol>
          <p>
            Each wall is built to match the design direction of the space, making every installation unique.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Concrete wall coatings vs traditional finishes</h2>
          <p>
            Compared to paint or standard wall treatments, concrete coatings offer more depth and texture. They are
            often chosen when the goal is to create a more architectural or design-forward environment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Concrete wall coatings in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings provides decorative wall coating systems throughout Coeur d&apos;Alene, Spokane,
            and the Inland Northwest for clients who want interior spaces that feel more refined and visually
            distinctive.
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