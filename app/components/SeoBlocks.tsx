import Link from "next/link";
import { brands, type Brand } from "../lib/products";

/** "Products we use" section for a single manufacturer. */
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
        <div className="eyebrow">Products We Use</div>
        <h2 style={{ marginTop: 14 }}>{heading ?? `Installed with ${brand.name} products.`}</h2>
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
        <p className="product-source">
          Product information summarized from{" "}
          <a href={brand.url} target="_blank" rel="noopener noreferrer">
            {brand.name}
          </a>
          . Product names are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}

/** Compact strip of the four manufacturers, linking to the service each one supports. */
export function BrandStrip({ className = "" }: { className?: string }) {
  const items = [
    { brand: brands.sherwinWilliams, label: "Interior & exterior paint", href: "/painting" },
    { brand: brands.leggari, label: "Metallic epoxy countertops & floors", href: "/epoxy" },
    { brand: brands.directColors, label: "Acid stains & concrete sealers", href: "/concrete-coatings" },
    { brand: brands.hydrasoy, label: "Soy-based roof rejuvenation", href: "/roof-rejuvenation" },
  ];
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className="eyebrow">Products We Trust</div>
        <h2 style={{ marginTop: 14 }}>Professional-grade materials on every job.</h2>
        <div className="card-grid brand-grid" style={{ marginTop: 32 }}>
          {items.map((i) => (
            <Link key={i.brand.name} href={i.href} className="card brand-card">
              <span className="brand-name">{i.brand.name}</span>
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
