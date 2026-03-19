import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Countertops | Inland Pacific Coatings",
  description:
    "Custom concrete countertops for kitchens, bathrooms, bars, and feature spaces across Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function ConcreteCountertopsPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Premium Surface Design</div>
          <h1 className="services-page-title">Concrete Countertops</h1>
          <p className="lead services-page-lead">
            Handcrafted concrete countertops designed for clients who want a custom, architectural surface with depth,
            texture, and a refined finished look.
          </p>
          <p>
            Inland Pacific Coatings creates concrete countertops for kitchens, bathroom vanities, bars, laundry rooms,
            and custom feature spaces across Coeur d&apos;Alene, Spokane, and the Inland Northwest. These surfaces are
            built for homeowners and property owners who want something more distinctive than a standard prefabricated
            top and more grounded than a high-gloss finish.
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
          <h2>Why choose concrete countertops</h2>
          <p>
            Concrete countertops offer a custom look that feels substantial, modern, and highly intentional. They can
            be formed, colored, and finished to match a wide range of design styles, from clean contemporary spaces to
            warmer rustic interiors.
          </p>
          <ul>
            <li>Custom-built for the space</li>
            <li>Rich texture and natural variation</li>
            <li>Strong visual presence with an architectural feel</li>
            <li>Wide flexibility in tone, edge detail, and finish</li>
            <li>Ideal for clients who want a standout surface</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where concrete countertops work best</h2>
          <p>
            Concrete countertops are a strong fit for both residential and commercial spaces where design matters and a
            custom-built finish adds value to the room.
          </p>
          <ul>
            <li>Kitchens and islands</li>
            <li>Bathroom vanities</li>
            <li>Bars and entertainment areas</li>
            <li>Laundry rooms and mudrooms</li>
            <li>Commercial counters and reception spaces</li>
            <li>Outdoor bar or feature areas, depending on project conditions</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>Concrete countertops vs epoxy countertops</h2>
          <p>
            Both concrete and epoxy countertops offer a custom alternative to full replacement materials, but they
            create very different finished looks.
          </p>
          <p>
            Concrete countertops tend to feel more grounded, matte, and architectural. Epoxy countertops are often
            chosen for their high-gloss, stone-inspired movement and dramatic visual finish. The right choice depends
            on the style of the space and the look you want to create.
          </p>
          <div className="pill-list">
            <Link href="/epoxy-countertops" className="pill">
              Compare with Epoxy Countertops
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our concrete countertop process</h2>
          <ol>
            <li>Project consultation and design planning</li>
            <li>Surface evaluation or form preparation</li>
            <li>Build, shaping, and detail work</li>
            <li>Color, finish, and refinement</li>
            <li>Sealing and surface protection</li>
            <li>Final installation and finishing</li>
          </ol>
          <p>
            Every project is built around the layout, intended use, finish preference, and overall style of the space.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Why clients choose Inland Pacific Coatings</h2>
          <p>
            Inland Pacific Coatings focuses on premium surfaces that combine design, craftsmanship, and lasting visual
            impact. Concrete countertops are approached with the same detail-driven mindset as every signature finish
            on the site: build something custom, refined, and specific to the space.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Concrete countertops in Coeur d&apos;Alene, Spokane, and the Inland Northwest</h2>
          <p>
            Inland Pacific Coatings serves clients across the Inland Northwest with concrete countertop solutions
            designed to feel substantial, custom, and visually distinctive. If you want a countertop that feels more
            architectural than standard materials and more personal than off-the-shelf options, concrete is a strong
            direction to explore.
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