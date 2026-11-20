import type { Metadata } from "next";
import Link from "next/link";
import { CategoryHero, CtaBand } from "../components/CategoryHero";
import { Photo, PhotoGallery } from "../components/Photo";
import { ServiceCards } from "../components/ServiceCards";
import type { PhotoKey } from "../lib/photos";
import { getCategory } from "../lib/services";

export const metadata: Metadata = {
  title: "Interior & Exterior Painting",
  description:
    "Professional interior painting, exterior painting, cabinet painting, deck and fence staining, and commercial painting in Coeur d'Alene, Spokane, and the Inland Northwest.",
};

const category = getCategory("painting");

const details: {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  points: string[];
  images: [PhotoKey, PhotoKey];
}[] = [
  {
    id: "interior",
    eyebrow: "Residential Interiors",
    title: "Interior Painting",
    lead:
      "Fresh walls change how a home feels. We protect your floors and furniture, repair the surface, and leave clean, straight lines on every wall, ceiling, and trim piece.",
    points: [
      "Walls, ceilings, trim, baseboards, and doors",
      "Drywall patching and surface repair before paint",
      "Low-odor, washable finishes for busy households",
      "Furniture moved, floors covered, daily cleanup",
    ],
    images: ["painting-interior", "painting-color"],
  },
  {
    id: "exterior",
    eyebrow: "Curb Appeal",
    title: "Exterior Painting",
    lead:
      "Inland Northwest weather is hard on paint. We prep thoroughly — washing, scraping, sanding, caulking, and priming — so your new finish holds up season after season.",
    points: [
      "Siding, trim, soffits, fascia, and doors",
      "Pressure washing and loose-paint removal",
      "Caulking and spot-priming of bare wood",
      "Premium exterior coatings rated for UV and moisture",
    ],
    images: ["painting-exterior", "painting-before-after"],
  },
  {
    id: "cabinets",
    eyebrow: "Kitchen Refresh",
    title: "Cabinet Painting",
    lead:
      "Update a dated kitchen or bath without the cost of new cabinets. Doors and drawers are cleaned, deglossed, primed, and finished for a smooth, durable result.",
    points: [
      "Kitchen, bathroom, and built-in cabinetry",
      "Degreasing and bonding primer for lasting adhesion",
      "Smooth, hard-wearing cabinet-grade enamel",
      "Pairs perfectly with our epoxy countertop refinishing",
    ],
    images: ["painting-cabinets", "epoxy-countertops-1"],
  },
  {
    id: "deck-fence",
    eyebrow: "Outdoor Wood",
    title: "Deck & Fence Staining",
    lead:
      "Sun and snow turn wood grey and brittle. Cleaning, brightening, and a quality penetrating stain bring back the color and help protect the wood.",
    points: [
      "Decks, fences, pergolas, and railings",
      "Cleaning and wood brightening",
      "Transparent, semi-transparent, and solid stains",
      "Maintenance recoats to keep wood looking new",
    ],
    images: ["painting-deck-fence", "texture-deck-3"],
  },
  {
    id: "commercial",
    eyebrow: "Business Spaces",
    title: "Commercial Painting",
    lead:
      "Offices, retail spaces, and rental properties painted on a schedule that works around your business — including evenings and weekends when needed.",
    points: [
      "Offices, storefronts, and tenant improvements",
      "Rental turnovers and multi-unit properties",
      "Flexible scheduling to minimize downtime",
      "Pair with epoxy or polished concrete floors for a full refresh",
    ],
    images: ["painting-commercial", "painting-trim-doors"],
  },
];

const process = [
  { title: "Walkthrough & estimate", text: "We look at the space, talk colors and sheens, and give you a clear written estimate." },
  { title: "Protect & prep", text: "Floors, furniture, and landscaping are covered. Surfaces are cleaned, repaired, sanded, and primed." },
  { title: "Paint", text: "Quality paints applied in the right number of coats, with crisp cut lines." },
  { title: "Walkthrough & cleanup", text: "We review the work with you, touch up anything you notice, and leave the site clean." },
];

export default function PaintingPage() {
  return (
    <main>
      <CategoryHero
        category={category}
        heading="Interior & exterior painting, done with coating-grade prep."
      />

      <section className="section" id="services">
        <div className="container">
          <div className="eyebrow">Painting Services</div>
          <h2 className="services-heading">What can we paint for you?</h2>
          <p className="lead services-lead">
            The same prep-first discipline behind our epoxy and concrete systems now goes into every paint job — because
            a finish is only as good as the surface underneath it.
          </p>
          <ServiceCards services={category.services} />
        </div>
      </section>

      {details.map((d, i) => (
        <section key={d.id} id={d.id} className={`section ${i % 2 === 0 ? "alt-section" : ""}`}>
          <div className={`container two-col detail-row ${i % 2 === 1 ? "detail-row-reverse" : ""}`}>
            <div>
              <div className="eyebrow">{d.eyebrow}</div>
              <h2 style={{ marginTop: 14 }}>{d.title}</h2>
              <p className="lead" style={{ marginTop: 20 }}>{d.lead}</p>
              <ul>
                {d.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="button-row">
                <Link href="/contact" className="btn btn-primary">Get a {d.title} Estimate</Link>
              </div>
            </div>
            <div className="photo-stack">
              <Photo id={d.images[0]} ratio="4 / 3" />
              <Photo id={d.images[1]} ratio="16 / 9" />
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="eyebrow">Our Process</div>
          <h2 style={{ marginTop: 14 }}>How a painting project works.</h2>
          <div className="card-grid process-grid" style={{ marginTop: 36 }}>
            {process.map((step, i) => (
              <article key={step.title} className="card">
                <div className="process-num">{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ marginTop: 12 }}>{step.title}</h3>
                <p style={{ marginTop: 10 }}>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PhotoGallery
        className="alt-section"
        heading="Recent painting projects"
        layout="grid"
        ids={[
          "painting-exterior",
          "painting-interior",
          "painting-cabinets",
          "painting-prep",
          "painting-trim-doors",
          "painting-deck-fence",
        ]}
      />

      <CtaBand text="Tell us what you'd like painted — rooms, exterior, cabinets, or a fence — and we'll follow up with a free estimate." />
    </main>
  );
}
