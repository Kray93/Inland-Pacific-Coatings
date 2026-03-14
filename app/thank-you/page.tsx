import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Inland Pacific Coatings",
  description:
    "Thank you for contacting Inland Pacific Coatings. We’ve received your estimate request and will be in touch soon.",
};

export default function ThankYouPage() {
  return (
    <main className="section dark-section">
      <div className="container">
        <div
          className="form-wrap"
          style={{
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
            padding: "48px 32px",
          }}
        >
          <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>
            Request Received
          </div>

          <h1 style={{ marginTop: 14 }}>
            Thank you for reaching out.
          </h1>

          <p
            className="lead"
            style={{
              marginTop: 18,
              maxWidth: 580,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            We’ve received your estimate request and will review your project
            details soon. Inland Pacific Coatings will be in touch as quickly as
            possible.
          </p>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href="/" className="btn btn-primary">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
