import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flake Epoxy Floors | Inland Pacific Coatings",
  description:
    "Durable flake epoxy floors for garages, shops, utility spaces, and high-traffic areas across Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function FlakeEpoxyFloorsPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Durable Texture System</div>
          <h1 className="services-page-title">Flake Epoxy Floors</h1>
          <p className="lead services-page-lead">
            Durable flake epoxy floors designed for garages, shops, and hardworking spaces that need a clean, finished
            look with long-term performance built in.
          </p>
          <p>
            Inland Pacific Coatings installs flake epoxy floor systems across Coeur d&apos;Alene, Spokane, and the
            Inland Northwest for homeowners and property owners who want a surface that looks sharp, handles daily use,
            and feels easier to maintain than bare concrete.
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
          <h2>Why flake epoxy floors are a popular choice</h2>
          <p>
            Flake epoxy systems are one of the most practical and visually balanced floor finishes available. They add
            texture, color variation, and a more finished look while helping conceal everyday dust, minor debris, and
            signs of wear better than a flat solid-color surface.
          </p>
          <ul>
            <li>Durable finish for high-use spaces</li>
            <li>Textured appearance with visual depth</li>
            <li>Cleaner and more polished than bare concrete</li>
            <li>Easy-to-maintain sealed surface</li>
            <li>Ideal for residential and light commercial environments</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where flake epoxy floors work best</h2>
          <p>
            Flake floors are especially well suited for utility-driven spaces that still benefit from a more finished
            appearance.
          </p>
          <ul>
            <li>Garages and workshops</li>
            <li>Home gyms and hobby spaces</li>
            <li>Storage and utility rooms</li>
            <li>Commercial back-of-house areas</li>
            <li>Shops and light industrial environments</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>Built for function without sacrificing appearance</h2>
          <p>
            Flake epoxy flooring is often chosen because it strikes the right balance between performance and design.
            It does not try to be overly dramatic, but it still delivers a professional, upgraded look that improves
            the overall feel of the space.
          </p>
          <p>
            For many homeowners, it is the ideal garage floor finish because it feels clean, durable, and visually
            complete.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our flake floor installation process</h2>
          <ol>
            <li>Surface inspection and preparation</li>
            <li>Grinding and cleaning the concrete</li>
            <li>Repairs and crack correction where needed</li>
            <li>Base coat application</li>
            <li>Decorative flake broadcast</li>
            <li>Protective topcoat and final finishing</li>
          </ol>
          <p>
            The finished result depends heavily on proper preparation and a clean installation process from start to
            finish.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Flake epoxy floors vs garage floor coatings</h2>
          <p>
            Flake epoxy floors are one of the most common systems used for garage floor coatings. If you are comparing
            surface options for a garage or utility space, this is often the finish that offers the best blend of
            appearance, traction, and durability.
          </p>
          <div className="pill-list">
            <Link href="/garage-floor-coatings" className="pill">
              View Garage Floor Coatings
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
  <div className="container article">
    <h2>Related Services</h2>
    <div className="pill-list">
      <Link href="/garage-floor-coatings" className="pill">Garage Floor Coatings</Link>
      <Link href="/concrete-resurfacing" className="pill">Concrete Resurfacing</Link>
      <Link href="/decorative-epoxy-floors" className="pill">Decorative Epoxy Floors</Link>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container article">
          <h2>Flake epoxy floors in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings installs flake epoxy floors throughout Coeur d&apos;Alene, Spokane, and the Inland
            Northwest for garages, shops, and high-use spaces that need better protection and a more polished look.
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