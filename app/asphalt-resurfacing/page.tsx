import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asphalt Resurfacing | Inland Pacific Coatings",
  description:
    "Decorative asphalt resurfacing to refresh worn, faded, and outdated surfaces across Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function AsphaltResurfacingPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Surface Renewal</div>
          <h1 className="services-page-title">Asphalt Resurfacing</h1>
          <p className="lead services-page-lead">
            A practical way to improve the appearance of worn asphalt surfaces with a cleaner, more refined finish
            without full replacement.
          </p>
          <p>
            Inland Pacific Coatings provides asphalt resurfacing across Coeur d&apos;Alene, Spokane, and the Inland
            Northwest for homeowners and property owners who want to refresh aged surfaces and create a more finished,
            visually improved result.
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
          <h2>What asphalt resurfacing does</h2>
          <p>
            Asphalt resurfacing improves the look of an existing surface by applying a new finish over asphalt that is
            visually worn, faded, or tired. It is best suited for surfaces that need a cosmetic upgrade and a more
            intentional appearance.
          </p>
          <ul>
            <li>Refreshes the look of aged asphalt</li>
            <li>Improves visual consistency</li>
            <li>Creates a cleaner, more finished surface appearance</li>
            <li>Offers an alternative to full tear-out and replacement</li>
            <li>Can enhance curb appeal and overall presentation</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where asphalt resurfacing works best</h2>
          <p>
            This service is ideal for asphalt surfaces that are still functional but need visual improvement.
          </p>
          <ul>
            <li>Driveway sections</li>
            <li>Private lanes and access areas</li>
            <li>Entry zones and approach areas</li>
            <li>Feature sections that need a refreshed appearance</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>A cosmetic upgrade for tired surfaces</h2>
          <p>
            Asphalt resurfacing is a strong option when the goal is to improve appearance rather than address major
            structural issues. It helps make worn surfaces look more intentional and better integrated into the overall
            property.
          </p>
          <p>
            For the right project, resurfacing can provide a noticeably cleaner and more polished result without the
            disruption of a full replacement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our resurfacing process</h2>
          <ol>
            <li>Surface inspection and project evaluation</li>
            <li>Cleaning and preparation</li>
            <li>Correction of minor problem areas</li>
            <li>Application of resurfacing system</li>
            <li>Finishing and refinement</li>
            <li>Final cure and inspection</li>
          </ol>
          <p>
            Each project depends on the existing condition of the asphalt and the finish being applied.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Asphalt resurfacing vs replacement</h2>
          <p>
            Full replacement is not always necessary when the main concern is visual wear. Resurfacing can be a more
            efficient way to improve the appearance of asphalt surfaces without the mess and cost of complete removal
            and reconstruction.
          </p>
        </div>
      </section>

      <section className="section alt-section">
  <div className="container article">
    <h2>Related Services</h2>
    <div className="pill-list">
      <Link href="/concrete-resurfacing" className="pill">Concrete Resurfacing</Link>
      <Link href="/texture-deck" className="pill">Texture Deck Coatings</Link>
      <Link href="/resin-bound-gravel" className="pill">Resin-Bound Gravel</Link>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container article">
          <h2>Asphalt resurfacing in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings provides asphalt resurfacing throughout Coeur d&apos;Alene, Spokane, and the
            Inland Northwest for clients who want a better-looking surface and a more polished overall presentation.
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