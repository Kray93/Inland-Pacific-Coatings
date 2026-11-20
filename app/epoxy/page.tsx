import type { Metadata } from "next";
import { CategoryHero, CtaBand } from "../components/CategoryHero";
import { ProductsUsed } from "../components/SeoBlocks";
import { brands } from "../lib/products";
import { Photo, PhotoGallery } from "../components/Photo";
import { ServiceCards } from "../components/ServiceCards";
import { getCategory } from "../lib/services";

export const metadata: Metadata = {
  title: "Epoxy Floors & Countertops in Coeur d'Alene & Spokane",
  description:
    "Custom epoxy countertops, flake and metallic epoxy floors, decorative floors, hardwood overlays, and seamless showers in Coeur d'Alene, Spokane, and the Inland Northwest.",
  alternates: { canonical: "/epoxy" },
};

const category = getCategory("epoxy");

export default function EpoxyPage() {
  return (
    <main>
      <CategoryHero category={category} heading="Seamless epoxy countertops & floors." />

      <section className="section" id="services">
        <div className="container">
          <div className="eyebrow">Epoxy Services</div>
          <h2 className="services-heading">Choose your epoxy system.</h2>
          <p className="lead services-lead">
            From stone-look countertops to statement metallic floors and seamless showers, every epoxy
            system starts with professional surface prep — grinding or shot blasting when the surface calls for it.
          </p>
          <ServiceCards services={category.services} />
        </div>
      </section>

      <PhotoGallery
        className="alt-section"
        heading="Recent epoxy projects"
        layout="grid"
        ids={[
          "decorative-epoxy-floors-1",
          "metallic-epoxy-floors-2",
          "epoxy-countertops-2",
          "flake-epoxy-floors-2",
          "hardwood-overlay-floors-1",
          "shower-systems-1",
        ]}
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <div className="eyebrow">Countertop Transformations</div>
            <h2 style={{ marginTop: 14 }}>A stone look without the stone price.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Our signature epoxy service. We transform dated or worn countertops into a seamless marble- or
              granite-inspired surface with depth and movement — without the cost of full replacement.
            </p>
            <ul>
              <li>Often avoids the tear-out of a full replacement</li>
              <li>Custom colors, veining, and metallic accents</li>
              <li>Seamless, non-porous, easy-to-clean surface</li>
              <li>Kitchens, vanities, bars, and feature pieces</li>
            </ul>
          </div>
          <div>
            <div className="photo-grid photo-grid-2">
              <Photo id="epoxy-countertops-2" ratio="4 / 5" />
              <Photo id="epoxy-countertops-1" ratio="4 / 5" />
            </div>
            <p className="photo-note">Marble-look vanity and kitchen island finishes.</p>
          </div>
        </div>
      </section>

      <ProductsUsed brand={brands.leggari} heading="Leggari metallic epoxy systems." />

      <CtaBand />
    </main>
  );
}
