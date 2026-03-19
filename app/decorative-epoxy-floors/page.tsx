import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Decorative Epoxy Floors | Inland Pacific Coatings",
  description:
    "Premium decorative epoxy floor systems for homes, showrooms, basements, and statement spaces across Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function DecorativeFloorsPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Luxury Interior Floors</div>
          <h1 className="services-page-title">Decorative Epoxy Floors</h1>
          <p className="lead services-page-lead">
            Decorative epoxy floors designed for homeowners and property owners who want more than a basic surface.
            These systems bring depth, movement, and a custom-finished look to interiors that need to feel elevated,
            refined, and built to last.
          </p>
          <p>
            Inland Pacific Coatings installs decorative floor systems for basements, feature rooms, showrooms,
            studios, retail environments, and other spaces where visual impact matters just as much as durability.
            From clean modern finishes to bold statement surfaces, each floor is built around design, preparation,
            and professional execution.
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
          <h2>Where decorative epoxy floors work best</h2>
          <p>
            Decorative epoxy floors are ideal for spaces where appearance matters. These systems are often chosen for
            finished basements, bar and entertainment areas, retail spaces, home gyms, studios, salons, offices, and
            custom residential interiors. They create a seamless surface that is easier to maintain than many
            traditional flooring materials while offering a more customized result.
          </p>
          <ul>
            <li>Finished basements and lower levels</li>
            <li>Studios, offices, and creative spaces</li>
            <li>Retail, showroom, and client-facing environments</li>
            <li>Interior spaces that need a custom luxury finish</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Design-focused floor systems built for standout interiors</h2>
          <p>
            Decorative epoxy flooring is about more than protection. It is about creating a finished environment that
            feels intentional. Depending on the look you want, these systems can lean sleek and modern, rich and
            dramatic, or warm and textured. The goal is always the same: deliver a surface that performs well and
            leaves a lasting impression.
          </p>
          <p>
            As your service pages expand, this page can act as the main hub for decorative interior flooring and guide
            visitors toward the finish that fits their style best.
          </p>

          <div className="card-grid services-grid services-grid-spacing">
            <article className="card featured">
              <div className="eyebrow">Specialty Finish</div>
              <h3 className="service-card-title">Metallic Epoxy Floors</h3>
              <p className="service-card-description">
                High-impact floors with rich movement, reflective depth, and a dramatic custom look for premium
                interior spaces.
              </p>
              <div className="service-card-link-wrap">
                <Link href="/metallic-epoxy-floors" className="service-card-link">
                  Learn more →
                </Link>
              </div>
            </article>

            <article className="card">
              <div className="eyebrow">Distinctive Overlay</div>
              <h3 className="service-card-title">Hardwood Overlay Floors</h3>
              <p className="service-card-description">
                Decorative overlay systems that capture the warmth and visual character of wood with the durability of
                a coated surface.
              </p>
              <div className="service-card-link-wrap">
                <Link href="/hardwood-overlay-floors" className="service-card-link">
                  Learn more →
                </Link>
              </div>
            </article>

            <article className="card">
              <div className="eyebrow">Refined Finish</div>
              <h3 className="service-card-title">Concrete Staining</h3>
              <p className="service-card-description">
                A more natural decorative option that adds tone, variation, and character while preserving the look of
                concrete.
              </p>
              <div className="service-card-link-wrap">
                <Link href="/concrete-staining" className="service-card-link">
                  Learn more →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>Why homeowners choose decorative epoxy floors</h2>
          <ul>
            <li>Custom appearance with a more elevated finish than standard flooring</li>
            <li>Seamless surface that is easier to maintain</li>
            <li>Durable performance for everyday residential and light commercial use</li>
            <li>Flexible design options for bold, modern, or classic spaces</li>
          </ul>
          <p>
            This page is also a strong place to feature future project photography, before-and-after transformations,
            and design examples as your flooring portfolio grows.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Decorative epoxy floor installation in the Inland Northwest</h2>
          <p>
            Inland Pacific Coatings serves clients in Coeur d'Alene, Spokane, and surrounding Inland Northwest areas
            with decorative surface systems designed for both performance and presentation. If you are looking for a
            custom floor that feels more architectural, more polished, and more intentional than a standard coating,
            this is where that process starts.
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
