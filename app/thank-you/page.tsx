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
        <section
          className="form-wrap thank-you-card"
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "56px 32px",
            textAlign: "center",
          }}
        >
          <div
            className="eyebrow"
            style={{ color: "var(--gold-soft)", justifyContent: "center" }}
          >
            Request Received
          </div>

          <h1 style={{ marginTop: 16 }}>Thank you for reaching out!</h1>

          <p
            className="lead"
            style={{
              marginTop: 18,
              maxWidth: 620,
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
              padding: "18px 20px",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 18,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <p style={{ margin: 0 }}>
              Need to talk sooner?
            </p>
            <p
              style={{
                marginTop: 8,
                color: "var(--gold-soft)",
                fontWeight: 600,
              }}
            >
              Call us directly at 208.714.1951
            </p>
          </div>

          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" className="btn btn-primary">
              Return Home
            </Link>

            <a href="tel:12087141951" className="btn btn-secondary">
              Call Now
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
