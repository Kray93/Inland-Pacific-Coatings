import Link from "next/link";
import type { Brand } from "../lib/products";

/** "Materials & methods" section describing the materials used for a service (no brand names). */
export function ProductsUsed({
  brand,
  heading,
  className = "",
}: {
  brand: Brand;
  heading?: string;
  className?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className="eyebrow">Materials &amp; Methods</div>
        <h2 style={{ marginTop: 14 }}>{heading ?? "Professional-grade materials."}</h2>
        <p className="lead" style={{ marginTop: 18, maxWidth: 760 }}>{brand.intro}</p>
        <div className="card-grid product-grid" style={{ marginTop: 32 }}>
          {brand.products.map((p) => (
            <article key={p.name} className="card">
              <div className="eyebrow">{brand.name}</div>
              <h3 style={{ marginTop: 10 }}>{p.name}</h3>
              <p style={{ marginTop: 10 }}>{p.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

/** Compact strip of material types, linking to the service each one supports. */
export function BrandStrip({ className = "" }: { className?: string }) {
  const items = [
    { title: "Premium Paints", label: "Interior, exterior, cabinet & commercial coatings", href: "/painting" },
    { title: "Metallic Epoxy", label: "Countertop & floor systems with urethane top coats", href: "/epoxy" },
    { title: "Acid Stains & Sealers", label: "Matched stain-and-seal systems for concrete", href: "/concrete-coatings" },
    { title: "Soy-Based Roof Treatment", label: "Restores flexibility to aging asphalt shingles", href: "/roof-rejuvenation" },
  ];
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className="eyebrow">Our Materials</div>
        <h2 style={{ marginTop: 14 }}>Professional-grade materials on every job.</h2>
        <div className="card-grid brand-grid" style={{ marginTop: 32 }}>
          {items.map((i) => (
            <Link key={i.title} href={i.href} className="card brand-card">
              <span className="brand-name">{i.title}</span>
              <span className="brand-label">{i.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export type FaqItem = { q: string; a: string };

/** FAQ accordion that also emits FAQPage structured data for search engines. */
export function Faq({
  items,
  heading = "Frequently asked questions",
  className = "alt-section",
}: {
  items: FaqItem[];
  heading?: string;
  className?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className={`section ${className}`}>
      <div className="container article">
        <div className="eyebrow">FAQ</div>
        <h2 style={{ marginTop: 14 }}>{heading}</h2>
        <div className="faq-list">
          {items.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
