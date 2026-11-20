import type { Metadata } from "next";
import Link from "next/link";
import { CategoryHero, CtaBand } from "../components/CategoryHero";
import { ProductsUsed } from "../components/SeoBlocks";
import { brands } from "../lib/products";
import { Photo } from "../components/Photo";
import { getCategory } from "../lib/services";

export const metadata: Metadata = {
  title: "Painting Contractor in Coeur d'Alene & Spokane",
  description:
    "Residential and commercial painting in Coeur d'Alene, Spokane, and the Inland Northwest — interior, exterior, cabinets, deck and fence staining, offices, retail, and multi-unit properties.",
  alternates: { canonical: "/painting" },
};

const category = getCategory("painting");

const includes: Record<string, string[]> = {
  "/residential-painting": ["Interior painting", "Exterior house painting", "Cabinet painting", "Deck & fence staining"],
  "/commercial-painting": ["Offices & storefronts", "Multi-unit & rental properties", "Shops & warehouses", "Evening & weekend scheduling"],
};

export default function PaintingPage() {
  return (
    <main>
      <CategoryHero
        category={category}
        heading="Painting for homes and businesses."
        lead="The same prep-first discipline behind our epoxy and concrete systems now goes into every paint job — because a finish is only as good as the surface underneath it."
      />

      <section className="section" id="services">
        <div className="container">
          <div className="eyebrow">Choose Your Project Type</div>
          <h2 className="services-heading">Residential or commercial?</h2>
          <div className="split-grid">
            {category.services.map((svc) => (
              <Link key={svc.href} href={svc.href} className="card image-card split-card">
                <Photo id={svc.image} ratio="16 / 10" sizes="(max-width: 960px) 100vw, 50vw" />
                <div className="image-card-body">
                  <div className="eyebrow">{svc.subtitle}</div>
                  <h3 className="service-card-title" style={{ fontSize: "1.7rem" }}>{svc.title}</h3>
                  <p className="service-card-description">{svc.description}</p>
                  <ul>
                    {includes[svc.href]?.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <span className="btn btn-primary" style={{ marginTop: 8 }}>Explore {svc.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductsUsed brand={brands.paint} heading="Premium, professional-grade paints." />

      <CtaBand text="Not sure where your project fits? Tell us about it and we'll follow up with a free estimate." />
    </main>
  );
}
