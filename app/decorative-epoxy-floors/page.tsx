import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Decorative Epoxy Floors",
  description:
    "Premium decorative and metallic epoxy floor systems for homes and statement spaces in Coeur d'Alene, Spokane, and the Inland Northwest."
};

export default function DecorativeFloorsPage() {
  return (
    <main className="section">
      <div className="container article">
        <div className="eyebrow">Service Page</div>
        <h1 style={{ marginTop: 14 }}>Decorative Epoxy Floors</h1>
        <p className="lead" style={{ marginTop: 18 }}>
          Premium metallic and decorative floor systems for basements, interiors, showrooms, and statement-making
          spaces.
        </p>
        <p>
          This page is ready for expansion with project galleries, design options, FAQs, and local SEO content as your
          flooring portfolio grows.
        </p>
        <div className="button-row">
          <Link href="/contact" className="btn btn-primary">Request an Estimate</Link>
        </div>
      </div>
    </main>
  );
}
