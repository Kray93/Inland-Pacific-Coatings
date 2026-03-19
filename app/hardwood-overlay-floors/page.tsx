import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hardwood Overlay Floors | Inland Pacific Coatings",
  description:
    "Hardwood overlay floors that combine the natural look of wood with the durability of a coated surface system. Serving Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function HardwoodOverlayFloorsPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Signature Finish</div>
          <h1 className="services-page-title">Hardwood Overlay Floors</h1>
          <p className="lead services-page-lead">
            A distinctive flooring system that captures the warmth and character of wood while delivering the strength,
            durability, and seamless performance of a coated surface.
          </p>
          <p>
            Hardwood overlay floors are one of the most unique services offered by Inland Pacific Coatings. Designed for
            homeowners and property owners who want a high-end, custom look, these systems bring natural texture and
            visual depth into spaces that need something beyond traditional flooring options.
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
          <h2>What makes hardwood overlay floors different</h2>
          <p>
            Unlike traditional hardwood, this system is built as a decorative overlay. It delivers the appearance of
            wood grain, variation, and tone while maintaining the benefits of a sealed, continuous surface.
          </p>
          <ul>
            <li>Custom-crafted wood-inspired texture and finish</li>
            <li>Seamless surface without traditional plank separation</li>
            <li>More resistant to moisture compared to standard hardwood</li>
            <li>Designed for both durability and visual impact</li>
            <li>Fully customizable color and pattern</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where hardwood overlay floors work best</h2>
          <p>
            This system is ideal for spaces where you want the warmth of wood with a more durable and customized finish.
          </p>
          <ul>
            <li>Living rooms and main living areas</li>
            <li>Basements and lower levels</li>
            <li>Retail spaces and showrooms</li>
            <li>Studios, offices, and creative spaces</li>
            <li>Feature areas that need a standout floor design</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>A custom floor built for your space</h2>
          <p>
            Every hardwood overlay floor is built by hand. This allows for a level of customization that goes beyond
            traditional flooring products. Tone, movement, grain pattern, and finish can all be adjusted to match the
            style of the home or business.
          </p>
          <p>
            The result is a floor that feels more intentional, more architectural, and more tailored to the space it
            lives in.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our installation process</h2>
          <ol>
            <li>Surface evaluation and preparation</li>
            <li>Base layer and structural build-up</li>
            <li>Handcrafted wood grain and texture work</li>
            <li>Color development and finishing</li>
            <li>Protective topcoat application</li>
            <li>Final cure and detailing</li>
          </ol>
          <p>
            The process is detail-driven and requires precision at every step to achieve a natural and convincing wood
            appearance.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Why homeowners choose hardwood overlay floors</h2>
          <ul>
            <li>Unique look that stands apart from standard flooring</li>
            <li>Custom design flexibility</li>
            <li>Durable and sealed surface</li>
            <li>Works in spaces where traditional wood may not be ideal</li>
            <li>Creates a true statement feature within the home</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Hardwood overlay floors in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings installs hardwood overlay flooring systems throughout Coeur d&apos;Alene, Spokane,
            and the Inland Northwest. If you are looking for a flooring solution that combines design, durability, and a
            truly custom finish, this is one of the most distinctive options available.
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