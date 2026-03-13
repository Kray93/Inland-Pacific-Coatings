import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request an Estimate",
  description:
    "Request an estimate for epoxy countertops, countertop refinishing, decorative epoxy floors, garage floor systems, and outdoor surface projects."
};

export default function ContactPage() {
  return (
    <main className="section dark-section">
      <div className="container two-col">
        <div>
          <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>Request an Estimate</div>
          <h1 style={{ marginTop: 14 }}>Start your project conversation.</h1>
          <p className="lead" style={{ marginTop: 18 }}>
            Tell us about your countertop, floor, garage, or outdoor-surface project. This starter form is ready for a
            future live form integration.
          </p>
          <p><strong style={{ color: "var(--gold-soft)" }}>Phone:</strong> 208.660.2028</p>
          <p><strong style={{ color: "var(--gold-soft)" }}>Email:</strong> kevin@ipcepoxy.com</p>
          <p><strong style={{ color: "var(--gold-soft)" }}>Service Area:</strong> Coeur d&apos;Alene, Spokane, and surrounding Inland Northwest communities</p>
        </div>

        <div className="form-wrap">
          <div className="form-grid">
            <div className="input-row">
              <input placeholder="Name" />
              <input placeholder="Phone" />
            </div>
            <input placeholder="Email" />
            <input placeholder="City" />
            <select defaultValue="">
              <option value="" disabled>Select a project type</option>
              <option>Epoxy Countertop Refinishing & Resurfacing</option>
              <option>Custom Epoxy Countertops</option>
              <option>Decorative Epoxy Floors</option>
              <option>Garage Floor Systems</option>
              <option>Outdoor Surface Systems</option>
            </select>
            <textarea placeholder="Tell us about your project" />
            <button className="btn btn-primary" type="button">Submit Estimate Request</button>
          </div>
        </div>
      </div>
    </main>
  );
}
