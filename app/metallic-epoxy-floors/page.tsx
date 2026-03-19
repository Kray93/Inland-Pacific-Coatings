import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metallic Epoxy Floors | Inland Pacific Coatings",
  description:
    "Custom metallic epoxy floors with depth, movement, and high-end finishes for homes and commercial spaces in Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function MetallicEpoxyFloorsPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Specialty Finish</div>
          <h1 className="services-page-title">Metallic Epoxy Floors</h1>
          <p className="lead services-page-lead">
            High-impact epoxy floors designed with depth, movement, and a reflective finish that transforms a surface
            into a true statement piece.
          </p>
          <p>
            Metallic epoxy floors are one of the most visually striking flooring options available. Installed by Inland
            Pacific Coatings across Coeur d&apos;Alene, Spokane, and the Inland Northwest, these systems are built for
            clients who want a bold, custom look that goes beyond traditional flooring materials.
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
          <h2>What makes metallic epoxy floors unique</h2>
          <p>
            Metallic epoxy floors use specially formulated pigments that move through the coating during installation,
            creating natural-looking flow, depth, and variation. The result is a surface that feels more like polished
            stone or liquid metal than a standard floor.
          </p>
          <ul>
            <li>Rich depth and movement in every design</li>
            <li>High-gloss, reflective finish</li>
            <li>Completely custom appearance for each project</li>
            <li>Seamless surface with no grout lines or seams</li>
            <li>Designed to stand out in any space</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where metallic epoxy floors work best</h2>
          <p>
            These floors are best suited for spaces where visual impact is a priority. They are often used in both
            residential and commercial environments that benefit from a bold, modern finish.
          </p>
          <ul>
            <li>Basements and finished lower levels</li>
            <li>Showrooms and retail spaces</li>
            <li>Bars, entertainment areas, and lounges</li>
            <li>Studios and creative workspaces</li>
            <li>Commercial interiors and feature areas</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>A fully custom floor every time</h2>
          <p>
            No two metallic epoxy floors are identical. The movement of the pigments during installation creates a
            one-of-a-kind pattern that cannot be exactly replicated. This makes metallic epoxy ideal for clients who
            want a surface that feels personal and unique.
          </p>
          <p>
            Color selection, movement style, and finish can all be adjusted to match the design direction of the space.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our metallic epoxy floor process</h2>
          <ol>
            <li>Surface preparation and grinding</li>
            <li>Repairs and base layer application</li>
            <li>Metallic epoxy design layer</li>
            <li>Movement and pattern development</li>
            <li>Protective topcoat installation</li>
            <li>Final cure and finishing</li>
          </ol>
          <p>
            The quality of the final result depends heavily on preparation, timing, and the skill used during the
            design phase.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Metallic epoxy floors vs other decorative finishes</h2>
          <p>
            Compared to other decorative flooring options, metallic epoxy stands out for its movement and reflective
            quality. While options like hardwood overlay or concrete staining offer a more natural or textured look,
            metallic epoxy is chosen for bold, modern, and high-contrast environments.
          </p>
          <div className="pill-list">
            <Link href="/decorative-epoxy-floors" className="pill">
              View Decorative Floor Options
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
  <div className="container article">
    <h2>Related Services</h2>
    <div className="pill-list">
      <Link href="/decorative-epoxy-floors" className="pill">Decorative Epoxy Floors</Link>
      <Link href="/epoxy-countertops" className="pill">Epoxy Countertops</Link>
      <Link href="/concrete-polishing-sealing" className="pill">Concrete Polishing & Sealing</Link>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container article">
          <h2>Metallic epoxy floors in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings installs metallic epoxy floors throughout Coeur d&apos;Alene, Spokane, and the
            Inland Northwest for clients who want a floor that feels like a centerpiece, not just a surface.
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