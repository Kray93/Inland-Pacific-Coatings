import type { Metadata } from "next";
import Link from "next/link";
import { CategoryHero, CtaBand } from "../components/CategoryHero";
import { Photo, PhotoGallery } from "../components/Photo";
import { ServiceCards } from "../components/ServiceCards";
import { brands } from "../lib/products";
import { getCategory } from "../lib/services";
import { Faq, ProductsUsed } from "../components/SeoBlocks";

export const metadata: Metadata = {
  title: "Roof Rejuvenation in Coeur d'Alene & Spokane",
  description:
    "Soy-based HydraSoy roof rejuvenation for asphalt shingle roofs in Coeur d'Alene, Spokane, and the Inland Northwest. Restore aging shingles and delay the cost of roof replacement.",
  alternates: { canonical: "/roof-rejuvenation" },
};

const category = getCategory("roof");

const signs = [
  "Shingles look faded, dry, or chalky",
  "Granules collecting in gutters or at downspouts",
  "Shingles feel brittle rather than flexible",
  "Roof is aging but not yet leaking or failing",
];

const benefits = [
  { title: "Fraction of replacement cost", text: "Treating an aging roof typically costs far less than tearing off and replacing it." },
  { title: "Restores flexibility", text: "The treatment penetrates dried-out asphalt shingles to help restore pliability and granule adhesion." },
  { title: "Fast & non-invasive", text: "Most homes are treated in a single day with no tear-off, no dumpster, and no debris." },
  { title: "Less landfill waste", text: "Keeping your existing shingles in service longer keeps roofing material out of the landfill." },
];

const faqs = [
  {
    q: "What is roof rejuvenation?",
    a: "Roof rejuvenation is a spray-applied treatment for asphalt shingle roofs. We use HydraSoy, a soy-based formula that absorbs into the shingles to help replace the oils lost to sun, heat, and weather, restoring flexibility so the roof keeps protecting your home longer.",
  },
  {
    q: "Is my roof a candidate?",
    a: "Rejuvenation works best on asphalt shingle roofs that are aging but still structurally sound — not actively leaking, curling badly, or missing shingles. Leaks and damaged shingles need to be repaired first. We inspect every roof before recommending treatment, and we will tell you honestly if replacement is the better option.",
  },
  {
    q: "How much life does roof rejuvenation add?",
    a: "HydraSoy reports an average of about five additional years per treatment, with up to three treatments over a roof's lifespan. Actual results depend on your roof's age and condition, and we'll give you a realistic expectation after the assessment.",
  },
  {
    q: "How long does it take?",
    a: "Most residential roofs in Coeur d'Alene, Spokane, and the surrounding area are treated in a single day. The roof needs to be dry, so we schedule around the forecast.",
  },
  {
    q: "Is it safe for my landscaping and pets?",
    a: "HydraSoy is a soy-based product. We still protect plants, siding, windows, and walkways during application and follow the manufacturer's guidance, and we'll walk you through the details during your estimate.",
  },
  {
    q: "Is roof rejuvenation worth it compared to a new roof?",
    a: "For a roof that is aging but sound, rejuvenation typically costs a fraction of replacement and can postpone that larger expense by years. It is preventive maintenance, not a repair, so it isn't the right choice for a roof that is already failing.",
  },
];

export default function RoofRejuvenationPage() {
  return (
    <main>
      <CategoryHero
        category={category}
        heading="Roof rejuvenation: get more years from the roof you already have."
      />

      <section className="section" id="how-it-works">
        <div className="container two-col">
          <div>
            <div className="eyebrow">How It Works</div>
            <h2 style={{ marginTop: 14 }}>Why shingles fail — and how rejuvenation helps.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Asphalt shingles are held together by oils that slowly bake out under the sun. As they dry, shingles turn
              brittle, crack, and shed the protective granules that shield them from UV.
            </p>
            <p>
              Roof rejuvenation is a spray-applied treatment that soaks into the shingles to help replenish those
              oils. We use HydraSoy, a soy-based formula that absorbs into the asphalt layer of each shingle — restoring flexibility, helping granules stay put, and slowing the aging process so your roof keeps
              protecting your home longer.
            </p>
          </div>
          <div className="photo-stack">
            <Photo id="roof-application" ratio="4 / 3" />
            <Photo id="roof-closeup" ratio="16 / 9" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-col">
          <div>
            <div className="photo-grid photo-grid-2">
              <Photo id="roof-before" ratio="4 / 5" />
              <Photo id="roof-after" ratio="4 / 5" />
            </div>
            <p className="photo-note">Before &amp; after: the same roof before and after treatment.</p>
          </div>
          <div>
            <div className="eyebrow">Signs Your Roof Could Benefit</div>
            <h2 style={{ marginTop: 14 }}>Aging, but not failing?</h2>
            <ul style={{ marginTop: 20 }}>
              {signs.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <div className="button-row">
              <Link href="/contact" className="btn btn-primary">Schedule a Roof Assessment</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <div className="eyebrow">Benefits</div>
          <h2 style={{ marginTop: 14 }}>Why homeowners choose rejuvenation.</h2>
          <div className="card-grid process-grid" style={{ marginTop: 36 }}>
            {benefits.map((b) => (
              <article key={b.title} className="card">
                <h3>{b.title}</h3>
                <p style={{ marginTop: 10 }}>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section" id="process">
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>Our Process</div>
          <h2 style={{ marginTop: 14 }}>Assess. Treat. Protect.</h2>
          <ServiceCards services={category.services} />
        </div>
      </section>

      <PhotoGallery
        heading="Roof rejuvenation projects"
        layout="grid"
        ids={["roof-home", "roof-after", "roof-inspection", "roof-closeup", "roof-application", "roof-before"]}
      />

      <ProductsUsed brand={brands.hydrasoy} heading="Powered by HydraSoy soy-based rejuvenation." className="alt-section" />

      <Faq items={faqs} heading="Roof rejuvenation questions." className="" />

      <CtaBand text="Not sure if your roof qualifies? We'll take a look and give you an honest recommendation — rejuvenate or replace." />
    </main>
  );
}
