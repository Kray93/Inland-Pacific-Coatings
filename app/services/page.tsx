import type { Metadata } from "next";
import Link from "next/link";
import { CoreServiceTiles } from "../components/CoreServiceTiles";
import { ServiceCards } from "../components/ServiceCards";
import { coreCategories } from "../lib/services";

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Concrete coating and sealing, epoxy floors and countertops, interior and exterior painting, and roof rejuvenation across Coeur d'Alene, Spokane, and the Inland Northwest.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="hero services-hero">
        <div className="container services-hero-inner">
          <h1 className="services-page-title">
            Concrete, epoxy, painting &amp; roof rejuvenation — one trusted Northwest crew.
          </h1>
          <p className="lead services-page-lead">
            Explore the full range of protective and decorative services offered by Inland Pacific Coatings. Every
            service is built around careful prep, craftsmanship, and long-term performance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Jump to a Service</div>
          <div style={{ marginTop: 24 }}>
            <CoreServiceTiles />
          </div>
        </div>
      </section>

      {coreCategories.map((cat, i) => (
        <section key={cat.key} id={cat.key} className={`section ${i % 2 === 0 ? "alt-section" : ""}`}>
          <div className="container">
            <div className="eyebrow">{cat.tagline}</div>
            <h2 className="services-group-title" style={{ marginTop: 14 }}>{cat.title}</h2>
            <p className="lead services-group-intro" style={{ maxWidth: 760, marginTop: 18 }}>{cat.description}</p>
            <ServiceCards services={cat.services} />
            <div className="services-button-row">
              <Link href={cat.href} className="btn services-view-all">
                Explore {cat.shortTitle} →
              </Link>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
