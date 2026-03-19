import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Floor Coatings | Inland Pacific Coatings",
  description:
    "Premium garage floor coatings for homes, shops, and hardworking spaces across Coeur d'Alene, Spokane, and the Inland Northwest. Durable, clean, and built to last.",
};

export default function GarageFloorCoatingsPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Residential Performance</div>
          <h1 className="services-page-title">Garage Floor Coatings</h1>
          <p className="lead services-page-lead">
            Durable garage floor coatings designed to upgrade hardworking spaces with a cleaner look, stronger
            protection, and a more finished feel.
          </p>
          <p>
            Inland Pacific Coatings installs premium garage floor coating systems for homeowners, shops, and utility
            spaces throughout Coeur d&apos;Alene, Spokane, and the Inland Northwest. Whether you want a garage that
            feels more polished, easier to maintain, or better protected from daily wear, this service is built to
            combine performance with appearance.
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
          <h2>Why garage floor coatings are worth the upgrade</h2>
          <p>
            A bare concrete garage floor can stain easily, collect dust, and make the entire space feel unfinished.
            A professionally installed coating system transforms the garage into a more durable, easier-to-clean, and
            more visually refined part of the home.
          </p>
          <ul>
            <li>Improves the overall appearance of the garage</li>
            <li>Helps reduce concrete dust and surface wear</li>
            <li>Creates a more sealed and easier-to-maintain finish</li>
            <li>Delivers a cleaner, more intentional space for daily use</li>
            <li>Works well for garages, workshops, and multi-use utility areas</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Built for garages, shops, and high-use spaces</h2>
          <p>
            Garage floor coatings are ideal for more than just vehicle storage. They also work well in workshops,
            hobby spaces, home gyms, utility rooms, and other areas where concrete needs better protection and a more
            finished presentation.
          </p>
          <p>
            The goal is not just to coat the floor, but to improve how the space looks, feels, and functions every
            day.
          </p>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>Garage floor finish options</h2>
          <p>
            Depending on the look and performance goals of the space, garage floor coatings can be tailored with
            different systems and finishes. Many homeowners choose flake-style finishes for their balance of durability,
            texture, and visual appeal.
          </p>

          <div className="card-grid services-grid services-grid-spacing">
            <article className="card featured">
              <div className="eyebrow">Durable Texture System</div>
              <h3 className="service-card-title">Flake Epoxy Floors</h3>
              <p className="service-card-description">
                A popular garage floor option that adds texture, visual depth, and a more finished look while helping
                disguise everyday dust and wear.
              </p>
              <div className="service-card-link-wrap">
                <Link href="/flake-epoxy-floors" className="service-card-link">
                  Learn more →
                </Link>
              </div>
            </article>

            <article className="card">
              <div className="eyebrow">Surface Renewal</div>
              <h3 className="service-card-title">Concrete Resurfacing</h3>
              <p className="service-card-description">
                A strong option for garage surfaces that need visual renewal before receiving a more finished coating
                system.
              </p>
              <div className="service-card-link-wrap">
                <Link href="/concrete-resurfacing" className="service-card-link">
                  Learn more →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our garage floor coating process</h2>
          <ol>
            <li>Surface inspection and moisture evaluation</li>
            <li>Grinding, cleaning, and preparation</li>
            <li>Repairs and surface correction where needed</li>
            <li>Base system application</li>
            <li>Decorative or texture layer, if selected</li>
            <li>Protective topcoat and final finishing</li>
          </ol>
          <p>
            Proper preparation is what makes a garage coating system hold up well and look professional long after the
            installation is complete.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Who this service is best for</h2>
          <p>Garage floor coatings are a strong fit for homeowners and property owners who want:</p>
          <ul>
            <li>A cleaner and more polished garage appearance</li>
            <li>A durable finish for parking, storage, and daily traffic</li>
            <li>A better-looking workshop or home utility space</li>
            <li>A garage that feels like a true extension of the home</li>
          </ul>
        </div>
      </section>

      <section className="section alt-section">
  <div className="container article">
    <h2>Related Services</h2>
    <div className="pill-list">
      <Link href="/flake-epoxy-floors" className="pill">Flake Epoxy Floors</Link>
      <Link href="/concrete-resurfacing" className="pill">Concrete Resurfacing</Link>
      <Link href="/concrete-polishing-sealing" className="pill">Concrete Polishing & Sealing</Link>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container article">
          <h2>Garage floor coatings in Coeur d&apos;Alene, Spokane, and the Inland Northwest</h2>
          <p>
            Inland Pacific Coatings serves clients across the Inland Northwest with garage floor systems designed for
            both durability and presentation. If you want a garage that looks more finished, feels easier to maintain,
            and holds up better to real-life use, this service is built for that.
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
