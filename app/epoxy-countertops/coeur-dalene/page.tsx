import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Epoxy Countertops in Coeur d'Alene, ID",
  description:
    "Epoxy countertop refinishing, resurfacing, and custom epoxy countertops in Coeur d'Alene, Idaho. Premium stone-style finishes for kitchens, vanities, bars, and more."
};

export default function CoeurDAleneCountertopsPage() {
  return (
    <main className="section">
      <div className="container article">
        <div className="eyebrow">Location Page</div>
        <h1 style={{ marginTop: 14 }}>Epoxy Countertops in Coeur d&apos;Alene, ID</h1>
        <p className="lead" style={{ marginTop: 18 }}>
          Inland Pacific Coatings provides epoxy countertop refinishing, resurfacing, and custom installations for
          homeowners in Coeur d&apos;Alene and surrounding North Idaho communities.
        </p>
        <section>
          <h2>Why Coeur d&apos;Alene Homeowners Choose Epoxy Countertops</h2>
          <p>
            Epoxy countertops offer a luxury look without the cost and disruption of full replacement. They work well
            for kitchens, vanities, bars, and custom spaces in lake homes, remodels, and everyday residences.
          </p>
        </section>
        <section>
          <h2>Popular Local Services</h2>
          <ul>
            <li>Countertop refinishing for dated laminate kitchens</li>
            <li>Stone-style epoxy vanities and bathroom surfaces</li>
            <li>Custom bar tops and entertainment spaces</li>
            <li>Premium epoxy surfaces for remodel projects</li>
          </ul>
        </section>
        <section className="cta-band">
          <h2>Start Your Coeur d&apos;Alene Countertop Estimate</h2>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">Request an Estimate</Link>
            <Link href="/epoxy-countertops" className="btn btn-outline">View Countertop Services</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
