import Link from "next/link";
import type { CoreCategory } from "../lib/services";
import { Photo } from "./Photo";

export function CategoryHero({ category, heading, lead }: { category: CoreCategory; heading?: string; lead?: string }) {
  return (
    <section className="section dark-section category-hero">
      <div className="container hero-grid">
        <div>
          <div className="badge">Serving Coeur d&apos;Alene, Spokane &amp; the Inland Northwest</div>
          <h1 style={{ marginTop: 18 }}>{heading ?? category.title}</h1>
          <p className="lead" style={{ marginTop: 22, maxWidth: 640 }}>
            {lead ?? category.description}
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">Request a Free Estimate</Link>
            <a href="#services" className="btn btn-secondary">See {category.shortTitle} Services</a>
          </div>
        </div>
        <Photo id={category.image} ratio="4 / 3" priority className="photo-hero" />
      </div>
    </section>
  );
}

export function CtaBand({ text = "Ready to get started? Tell us about your project and we'll follow up with a free estimate." }: { text?: string }) {
  return (
    <section className="section dark-section">
      <div className="container cta-final">
        <h2>Let&apos;s talk about your project.</h2>
        <p className="lead" style={{ marginTop: 16 }}>{text}</p>
        <div className="button-row" style={{ justifyContent: "center" }}>
          <Link href="/contact" className="btn btn-primary">Request a Free Estimate</Link>
          <a href="tel:12087141951" className="btn btn-secondary">Call 208.714.1951</a>
        </div>
      </div>
    </section>
  );
}
