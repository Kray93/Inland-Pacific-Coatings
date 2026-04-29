import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Head back to Inland Pacific Coatings to explore our services.",
};

export default function NotFound() {
  return (
    <main className="section dark-section" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>

        <div className="eyebrow" style={{ color: "var(--gold-soft)", justifyContent: "center" }}>
          404 — Page Not Found
        </div>

        <h1 style={{ marginTop: 16, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
          This surface hasn't been finished yet
        </h1>

        <p className="lead" style={{ marginTop: 18, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
          The page you're looking for doesn't exist or may have moved.
          Let's get you back on solid ground.
        </p>

        <div className="button-row" style={{ justifyContent: "center", marginTop: 32 }}>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/services" className="btn btn-secondary">
            View Services
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Get a Free Estimate
          </Link>
        </div>

      </div>
    </main>
  );
}
