import type { Metadata } from "next";
import Link from "next/link";
import { Faq, ProductsUsed, type FaqItem } from "../components/SeoBlocks";
import { PhotoGallery } from "../components/Photo";
import { servicePhotos } from "../lib/photos";
import { brands } from "../lib/products";

export const metadata: Metadata = {
  title: "Tub & Sink Reglazing in Coeur d'Alene & Spokane",
  description:
    "Bathtub and sink reglazing in Coeur d'Alene, Spokane, and the Inland Northwest. Restore chipped, stained, or dated porcelain fixtures with a durable new finish instead of replacing them.",
  alternates: { canonical: "/tub-sink-reglazing" },
};

const faqs: FaqItem[] = [
  {
    q: "What is tub and sink reglazing?",
    a: "Reglazing (also called refinishing or resurfacing) restores a worn bathtub or sink by cleaning, repairing, and etching the surface, then spraying on a new durable coating. The fixture stays in place, so there's no demolition, plumbing, or tile work.",
  },
  {
    q: "Is reglazing cheaper than replacing a bathtub?",
    a: "Usually, yes. Replacing a tub often means removing tile, walls, and plumbing fixtures. Reglazing refreshes the tub you already have, typically for a fraction of the cost and in far less time.",
  },
  {
    q: "What can be reglazed?",
    a: "We reglaze porcelain bathtubs and sinks, and many other fixtures depending on their material and condition. We'll inspect your fixtures during the estimate and let you know if reglazing is a good fit.",
  },
  {
    q: "What coating do you use?",
    a: "We use Cardinal Paint's 6G00 series reglazing coating, a two-component aliphatic polyurethane that Cardinal formulates for reglazing porcelain and plastic fixtures.",
  },
  {
    q: "How soon can I use my tub after reglazing?",
    a: "The coating needs time to cure before it gets wet. We'll give you a specific timeline for your project, and we ventilate the space during and after application.",
  },
  {
    q: "How do I care for a reglazed tub or sink?",
    a: "Clean with mild, non-abrasive cleaners and a soft cloth or sponge. Avoid scouring powders, abrasive pads, harsh chemicals, and bath mats with suction cups, which can damage the finish over time.",
  },
];

export default function TubSinkReglazingPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Bath &amp; Kitchen Refinishing</div>
          <h1 className="services-page-title">Tub &amp; Sink Reglazing</h1>
          <p className="lead services-page-lead">
            Make chipped, stained, or outdated tubs and sinks look new again — without the cost, demolition, and
            downtime of replacement.
          </p>
          <p>
            Inland Pacific Coatings reglazes bathtubs and sinks for homeowners, landlords, and property managers across
            Coeur d&apos;Alene, Spokane, and the Inland Northwest. Your fixture stays in place while we restore it with
            a durable, glossy new finish.
          </p>

          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Request an Estimate
            </Link>
            <Link href="/epoxy" className="btn btn-outline">
              View Epoxy &amp; Refinishing Services
            </Link>
          </div>
        </div>
      </section>

      <PhotoGallery ids={servicePhotos("tub-sink-reglazing")} eyebrow="Project Gallery" className="gallery-tight" />

      <section className="section alt-section">
        <div className="container article">
          <h2>Why reglaze instead of replace?</h2>
          <ul>
            <li>Typically a fraction of the cost of a new tub or sink</li>
            <li>No tear-out of tile, walls, countertops, or plumbing</li>
            <li>Fixes worn, dull, stained, or chipped finishes</li>
            <li>Updates dated colors to a clean, modern white</li>
            <li>Keeps a bulky old fixture out of the landfill</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Great for homes and rentals</h2>
          <p>
            Reglazing is popular with homeowners refreshing a bathroom before a sale, and with landlords and property
            managers who need a unit turned around quickly. Pair it with our{" "}
            <Link href="/shower-systems" style={{ color: "var(--gold)" }}>seamless shower systems</Link>,{" "}
            <Link href="/epoxy-countertops" style={{ color: "var(--gold)" }}>epoxy vanity tops</Link>, or{" "}
            <Link href="/residential-painting" style={{ color: "var(--gold)" }}>interior painting</Link> for a complete
            bathroom update.
          </p>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>Our reglazing process</h2>
          <ol>
            <li>Inspect the fixture and confirm it is a good candidate</li>
            <li>Protect the surrounding bathroom and set up ventilation</li>
            <li>Deep clean and remove old caulk, soap scum, and residue</li>
            <li>Repair chips and cracks</li>
            <li>Etch and prepare the surface so the coating can bond</li>
            <li>Spray-apply the reglazing coating</li>
            <li>Re-caulk, inspect, and review care instructions</li>
          </ol>
          <p>
            Like every coating we install, a lasting reglaze comes down to preparation — it&apos;s the step we never
            rush.
          </p>
        </div>
      </section>

      <ProductsUsed brand={brands.cardinal} heading="Reglazed with Cardinal Paint coatings." className="alt-section" />

      <Faq items={faqs} heading="Tub & sink reglazing questions." className="" />

      <section className="section alt-section">
        <div className="container article">
          <h2>Related Services</h2>
          <div className="pill-list">
            <Link href="/shower-systems" className="pill">Shower Systems</Link>
            <Link href="/epoxy-countertops" className="pill">Epoxy Countertops</Link>
            <Link href="/residential-painting" className="pill">Residential Painting</Link>
            <Link href="/commercial-painting" className="pill">Commercial Painting</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Tub &amp; sink reglazing in Coeur d&apos;Alene, Spokane, and the Inland Northwest</h2>
          <p>
            From a single bathtub to multi-unit rental turnovers, Inland Pacific Coatings restores bathroom and kitchen
            fixtures throughout the Inland Northwest with durable, professional reglazing.
          </p>

          <div className="button-row cta-band">
            <Link href="/contact" className="btn btn-primary">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
