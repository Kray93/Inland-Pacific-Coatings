import type { Metadata } from "next";
import Link from "next/link";
import { CategoryHero, CtaBand } from "../components/CategoryHero";
import { ProductsUsed, Faq, type FaqItem } from "../components/SeoBlocks";
import { brands } from "../lib/products";
import { Photo, PhotoGallery } from "../components/Photo";
import { ServiceCards } from "../components/ServiceCards";
import type { PhotoKey } from "../lib/photos";
import { getCategory, type SubService } from "../lib/services";

export const metadata: Metadata = {
  title: "Commercial Painting in Coeur d'Alene & Spokane",
  description:
    "Commercial painting for offices, retail, multi-unit properties, and shops with Sherwin-Williams coatings. Evening and weekend scheduling in Coeur d'Alene and Spokane.",
  alternates: { canonical: "/commercial-painting" },
};

const category = { ...getCategory("painting"), image: "painting-commercial" as PhotoKey, shortTitle: "Commercial Painting" };

const commercialServices: SubService[] = [
  {
    subtitle: "Offices & Retail",
    title: "Offices & Storefronts",
    description: "Refresh workspaces, lobbies, and storefronts with clean, durable finishes that make a strong first impression.",
    href: "#offices-retail",
    image: "painting-commercial-retail",
  },
  {
    subtitle: "Property Management",
    title: "Multi-Unit & Rentals",
    description: "Apartment exteriors, common areas, and unit turnovers completed quickly so units get back on the market.",
    href: "#multi-unit",
    image: "painting-commercial-multifamily",
  },
  {
    subtitle: "Hard-Working Spaces",
    title: "Shops & Warehouses",
    description: "Walls, ceilings, and doors in shops and warehouses — pair with an epoxy or sealed concrete floor for a complete refresh.",
    href: "#shops-warehouses",
    image: "painting-commercial-warehouse",
  },
];

const details: {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  points: string[];
  images: [PhotoKey, PhotoKey];
}[] = [
  {
    id: "offices-retail",
    eyebrow: "Offices & Retail",
    title: "Offices, storefronts & tenant improvements",
    lead:
      "Your space is part of your brand. We repaint offices, lobbies, and retail spaces with minimal disruption to staff and customers.",
    points: [
      "Interior walls, ceilings, doors, and trim",
      "Storefront and building exteriors",
      "Tenant improvements and move-in / move-out repaints",
      "Evening and weekend scheduling available",
    ],
    images: ["painting-commercial", "painting-commercial-afterhours"],
  },
  {
    id: "multi-unit",
    eyebrow: "Property Management",
    title: "Multi-unit & rental properties",
    lead:
      "Property managers and owners need dependable turnaround. We handle unit turnovers, hallways and common areas, and full exterior repaints.",
    points: [
      "Unit turnovers on tight timelines",
      "Hallways, stairwells, and common areas",
      "Exterior siding, trim, and doors",
      "Clear written scopes and pricing per unit or per building",
    ],
    images: ["painting-commercial-multifamily", "painting-exterior"],
  },
  {
    id: "shops-warehouses",
    eyebrow: "Hard-Working Spaces",
    title: "Shops, warehouses & light industrial",
    lead:
      "Brighter walls and ceilings make a working space safer and more professional. Combine painting with our floor coatings for one contractor, one schedule.",
    points: [
      "Walls, ceilings, and overhead doors",
      "Durable coatings for high-traffic areas",
      "Coordinated with epoxy or sealed concrete floors",
      "Work phased around your operations",
    ],
    images: ["painting-commercial-warehouse", "flake-epoxy-floors-1"],
  },
];

const reasons = [
  { title: "Work around your hours", text: "Evening, weekend, and phased schedules so your doors stay open." },
  { title: "One contractor for walls & floors", text: "Paint, epoxy, and concrete coatings from the same crew and the same schedule." },
  { title: "Clear written scopes", text: "Detailed estimates so you know exactly what is included before work starts." },
  { title: "Clean, professional jobsite", text: "Protected work areas and daily cleanup — respectful of your customers, tenants, and staff." },
];

const faqs: FaqItem[] = [
  {
    q: "Can you paint while our business is open?",
    a: "Yes. We can work evenings, weekends, or in phases so your doors stay open, and we use low-odor products in occupied spaces.",
  },
  {
    q: "Do you offer zero-VOC paint for occupied buildings?",
    a: "Yes. We use Sherwin-Williams commercial products such as ProMar 200 Zero VOC, which is well suited to offices, rentals, healthcare, and other occupied spaces.",
  },
  {
    q: "Can you paint and coat the floors on the same project?",
    a: "Yes. Because we also install epoxy, polished concrete, and concrete sealers, we can handle walls and floors under one schedule and one contract.",
  },
  {
    q: "Do you work with property managers on unit turnovers?",
    a: "Yes. We handle unit turnovers, hallways, common areas, and full exterior repaints for multi-unit and rental properties throughout Coeur d'Alene and Spokane.",
  },
];

export default function CommercialPaintingPage() {
  return (
    <main>
      <CategoryHero
        category={category}
        heading="Commercial painting that works around your business."
        lead="Offices, retail, multi-unit properties, and shops across the Inland Northwest — painted on your schedule with clean, professional results."
      />

      <section className="section" id="services">
        <div className="container">
          <div className="eyebrow">Commercial Painting Services</div>
          <h2 className="services-heading">Built for businesses and property owners.</h2>
          <ServiceCards services={commercialServices} />
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
                <Link href="/contact" className="btn btn-primary">Request a Commercial Estimate</Link>
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
          <div className="eyebrow">Why Businesses Choose Us</div>
          <h2 style={{ marginTop: 14 }}>Less downtime. Fewer contractors.</h2>
          <div className="card-grid process-grid" style={{ marginTop: 36 }}>
            {reasons.map((r) => (
              <article key={r.title} className="card">
                <h3>{r.title}</h3>
                <p style={{ marginTop: 10 }}>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PhotoGallery
        className="alt-section"
        heading="Recent commercial painting projects"
        layout="grid"
        ids={[
          "painting-commercial",
          "painting-commercial-retail",
          "painting-commercial-multifamily",
          "painting-commercial-warehouse",
          "painting-commercial-afterhours",
          "painting-prep",
        ]}
      />

      <ProductsUsed brand={brands.sherwinWilliams} heading="Commercial-grade Sherwin-Williams coatings." />

      <Faq items={faqs} />

      <CtaBand text="Tell us about your property and timeline, and we'll put together a clear written estimate." />
    </main>
  );
}
