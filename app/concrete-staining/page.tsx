import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Staining | Inland Pacific Coatings",
  description:
    "Concrete staining for floors, patios, and interior spaces across Coeur d'Alene, Spokane, and the Inland Northwest. Natural tone, variation, and refined finishes.",
};

export default function ConcreteStainingPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Natural Finish</div>
          <h1 className="services-page-title">Concrete Staining</h1>
          <p className="lead services-page-lead">
            A refined way to enhance concrete with natural color, variation, and character while maintaining the look
            and feel of the original surface.
          </p>
          <p>
            Inland Pacific Coatings provides concrete staining services across Coeur d&apos;Alene, Spokane, and the
            Inland Northwest for homeowners and property owners who want a more natural, design-forward finish without
            fully covering the concrete surface.
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
          <h2>What is concrete staining</h2>
          <p>
            Concrete staining is a process that adds color and depth to concrete while allowing the natural variation
            of the slab to remain visible. Unlike coatings that fully cover the surface, staining enhances what is
            already there.
          </p>
          <ul>
            <li>Natural variation and tone</li>
            <li>Subtle, design-focused finish</li>
            <li>Enhances existing concrete character</li>
            <li>Less uniform than paint or coatings</li>
            <li>Works well in both interior and exterior spaces</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where concrete staining works best</h2>
          <p>
            Concrete staining is ideal for spaces where a softer, more natural aesthetic is preferred over bold or
            high-gloss finishes.
          </p>
          <ul>
            <li>Basements and lower levels</li>
            <li>Patios and outdoor living spaces</li>
            <li>Walkways and entry areas</li>
            <li>Retail and showroom floors</li>
            <li>Modern residential interiors</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>A more understated decorative option</h2>
          <p>
            Concrete staining is often chosen by clients who want a finished surface without a dramatic or high-gloss
            appearance. It provides a more subtle, grounded look compared to systems like metallic epoxy or decorative
            overlays.
          </p>
          <p>
            The result is a surface that feels natural, intentional, and integrated into the overall design of the
            space.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our staining process</h2>
          <ol>
            <li>Surface preparation and cleaning</li>
            <li>Evaluation of concrete condition</li>
            <li>Application of stain system</li>
            <li>Color development and adjustment</li>
            <li>Sealing and protection</li>
            <li>Final detailing and finish work</li>
          </ol>
          <p>
            Because concrete varies from slab to slab, each project produces a slightly different final result.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Concrete staining vs decorative coatings</h2>
          <p>
            Concrete staining enhances the existing slab, while systems like epoxy, overlays, or polishing transform or
            refine it more dramatically. The right option depends on how much change you want in the final appearance.
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
          <h2>Concrete staining in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings provides concrete staining services throughout Coeur d&apos;Alene, Spokane, and
            the Inland Northwest for clients who want a more natural, refined finish that highlights the character of
            the concrete itself.
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