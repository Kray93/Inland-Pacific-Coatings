import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outdoor Surface Systems",
  description:
    "Resin-bound gravel and texture deck systems for patios, walkways, decks, and outdoor living spaces in Coeur d'Alene, Spokane, and surrounding areas."
};

export default function OutdoorSurfacesPage() {
  return (
    <main className="section">
      <div className="container article">
        <div className="eyebrow">Service Page</div>
        <h1 style={{ marginTop: 14 }}>Outdoor Surface Systems</h1>
        <p className="lead" style={{ marginTop: 18 }}>
          Resin-bound gravel and texture deck systems for patios, walkways, decks, and outdoor living spaces across the
          Inland Northwest.
        </p>
        <p>
          This page is ready for future visuals and service detail once your outdoor-surface portfolio expands.
        </p>
        <div className="button-row">
          <Link href="/contact" className="btn btn-primary">Request an Estimate</Link>
        </div>
      </div>
    </main>
  );
}
