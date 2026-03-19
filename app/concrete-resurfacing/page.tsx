import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Resurfacing | Inland Pacific Coatings",
  description:
    "Concrete resurfacing to restore and upgrade worn, outdated surfaces across Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function ConcreteResurfacingPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Surface Renewal</div>
          <h1 className="services-page-title">Concrete Resurfacing</h1>
          <p className="lead services-page-lead">
            A practical way to restore worn or outdated concrete surfaces and give them a cleaner, more finished
            appearance without full replacement.
          </p>
          <p>
            Inland Pacific Coatings provides concrete resurfacing across Coeur d&apos;Alene, Spokane, and the Inland
            Northwest for homeowners and property owners who want to improve the look and usability of existing
            concrete without tearing it out and starting over.
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
          <h2>What concrete resurfacing does</h2>
          <p>
            Concrete resurfacing applies a new layer over an existing slab to improve its appearance and create a more
            uniform, finished surface. It is often used when the concrete is structurally sound but visually worn,
            stained, or inconsistent.
          </p>
          <ul>
            <li>Improves surface appearance</li>
            <li>Covers minor imperfections and visual wear</li>
            <li>Creates a more uniform finish</li>
            <li>Prepares surfaces for additional coatings if needed</li>
            <li>Extends the usable life of existing concrete</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where resurfacing works best</h2>
          <p>
            Resurfacing is ideal for concrete that is still structurally intact but needs visual improvement or a more
            refined finish.
          </p>
          <ul>
            <li>Patios and outdoor living areas</li>
            <li>Garage floors and utility spaces</li>
            <li>Walkways and entry areas</li>
            <li>Driveway sections and feature zones</li>
            <li>Interior concrete floors</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>A strong foundation for better finishes</h2>
          <p>
            Concrete resurfacing is often the first step before applying decorative coatings, stains, or other surface
            systems. It helps create a more consistent base that improves the final look and performance of the finish.
          </p>
          <p>
            In many projects, resurfacing is what allows a surface to go from worn and inconsistent to clean and
            ready for a premium finish.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our resurfacing process</h2>
          <ol>
            <li>Surface inspection and evaluation</li>
            <li>Cleaning and preparation</li>
            <li>Repair of minor surface issues</li>
            <li>Application of resurfacing system</li>
            <li>Leveling and finishing</li>
            <li>Final cure and inspection</li>
          </ol>
          <p>
            The condition of the existing concrete determines how the resurfacing process is approached.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Resurfacing vs replacement</h2>
          <p>
            In many cases, resurfacing provides a faster and more cost-effective alternative to full replacement. It
            allows property owners to upgrade the appearance of their concrete without the disruption of demolition and
            reconstruction.
          </p>
        </div>
      </section>

      <section className="section alt-section">
  <div className="container article">
    <h2>Related Services</h2>
    <div className="pill-list">
      <Link href="/asphalt-resurfacing" className="pill">Asphalt Resurfacing</Link>
      <Link href="/flake-epoxy-floors" className="pill">Flake Epoxy Floors</Link>
      <Link href="/outdoor-concrete-coatings" className="pill">Outdoor Concrete Coatings</Link>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container article">
          <h2>Concrete resurfacing in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings provides concrete resurfacing services throughout Coeur d&apos;Alene, Spokane, and
            the Inland Northwest for clients who want to restore and upgrade their surfaces without starting from
            scratch.
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