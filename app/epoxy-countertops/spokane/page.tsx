import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Epoxy Countertops in Spokane, WA",
  description:
    "Inland Pacific Coatings provides epoxy countertop refinishing, resurfacing, and custom epoxy countertops in Spokane, Washington and surrounding areas."
};

export default function SpokaneCountertopsPage() {
  return (
    <main className="section">
      <div className="container article">
        <div className="eyebrow">Location Page</div>
        <h1 style={{ marginTop: 14 }}>Epoxy Countertops in Spokane, WA</h1>
        <p className="lead" style={{ marginTop: 18 }}>
          Inland Pacific Coatings installs decorative epoxy countertops and provides countertop resurfacing services
          throughout Spokane and the Inland Northwest region.
        </p>
        <section>
          <h2>Luxury Countertop Upgrades Without Full Replacement</h2>
          <p>
            Spokane-area homeowners looking to modernize their kitchens, bars, and bathroom counters can use epoxy
            refinishing to achieve a stone-inspired finish while keeping existing cabinets in place.
          </p>
        </section>
        <section>
          <h2>Common Spokane Projects</h2>
          <ul>
            <li>Laminate countertop resurfacing</li>
            <li>Custom metallic and stone-style finishes</li>
            <li>Bathroom vanity transformations</li>
            <li>Bar tops and entertaining spaces</li>
          </ul>
        </section>
        <section className="cta-band">
          <h2>Start Your Spokane Countertop Estimate</h2>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">Request an Estimate</Link>
            <Link href="/epoxy-countertops" className="btn btn-outline">View Countertop Services</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
