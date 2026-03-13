import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Floor Systems",
  description:
    "Durable garage floor coating systems including epoxy and flake finishes for homes, shops, and hardworking spaces across the Inland Northwest."
};

export default function GarageFloorSystemsPage() {
  return (
    <main className="section">
      <div className="container article">
        <div className="eyebrow">Service Page</div>
        <h1 style={{ marginTop: 14 }}>Garage Floor Systems</h1>
        <p className="lead" style={{ marginTop: 18 }}>
          Durable flake, epoxy, and polyaspartic systems built for garages, shops, and hardworking spaces that still
          need to look sharp.
        </p>
        <p>
          This page is structured for future expansion with finish options, process details, and project examples.
        </p>
        <div className="button-row">
          <Link href="/contact" className="btn btn-primary">Request an Estimate</Link>
        </div>
      </div>
    </main>
  );
}
