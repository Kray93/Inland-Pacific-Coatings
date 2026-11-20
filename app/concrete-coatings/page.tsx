import type { Metadata } from "next";
import Link from "next/link";
import { CategoryHero, CtaBand } from "../components/CategoryHero";
import { ProductsUsed } from "../components/SeoBlocks";
import { brands } from "../lib/products";
import { Photo, PhotoGallery } from "../components/Photo";
import { ServiceCards } from "../components/ServiceCards";
import { getCategory } from "../lib/services";

export const metadata: Metadata = {
  title: "Concrete Coating & Sealing in Coeur d'Alene & Spokane",
  description:
    "Garage floor coatings, concrete sealing, polishing, staining, resurfacing, and exterior coatings for patios, driveways, walkways, and pool decks in Coeur d'Alene, Spokane, and the Inland Northwest.",
  alternates: { canonical: "/concrete-coatings" },
};

const category = getCategory("concrete");

export default function ConcreteCoatingsPage() {
  return (
    <main>
      <CategoryHero
        category={category}
        heading="Garage floors & concrete coatings built for Northwest winters."
      />

      <section className="section" id="services">
        <div className="container">
          <div className="eyebrow">Concrete Services</div>
          <h2 className="services-heading">Seal it, restore it, or transform it.</h2>
          <p className="lead services-lead">
            Unsealed concrete absorbs water, salt, and stains — and freeze-thaw cycles do the rest. Whether you need a
            protective sealer on a newer slab or a full resurfacing of a worn patio, we match the system to the surface.
          </p>
          <ServiceCards services={category.services} />
        </div>
      </section>

      <PhotoGallery
        className="alt-section"
        heading="Recent concrete projects"
        layout="grid"
        ids={[
          "garage-floor-coatings-1",
          "outdoor-concrete-coatings-2",
          "concrete-resurfacing-2",
          "acid-stain-concrete-3",
          "texture-deck-1",
          "resin-bound-gravel-3",
        ]}
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <div className="eyebrow">Garage Floor Transformations</div>
            <h2 style={{ marginTop: 14 }}>From stained slab to showroom.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Our most-requested service. A full-broadcast flake system hides dust, adds traction, and stands up to hot
              tires, road salt, and everyday spills.
            </p>
            <ul>
              <li>Diamond grinding for a proper mechanical bond</li>
              <li>Crack and spall repair before coating</li>
              <li>Full-broadcast decorative flake</li>
              <li>UV-stable protective topcoat</li>
            </ul>
            <div className="button-row">
              <Link href="/garage-floor-coatings" className="btn btn-primary">Explore Garage Floors</Link>
            </div>
          </div>
          <div>
            <div className="photo-grid photo-grid-2">
              <Photo id="garage-floor-coatings-2" ratio="4 / 5" />
              <Photo id="garage-floor-coatings-1" ratio="4 / 5" />
            </div>
            <p className="photo-note">Before &amp; after: bare concrete vs. finished flake system.</p>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-col">
          <div>
            <div className="eyebrow">Why Seal Concrete?</div>
            <h2 style={{ marginTop: 14 }}>Protection you can see.</h2>
            <ul style={{ marginTop: 20 }}>
              <li>Helps block water, de-icing salts, oil, and stains</li>
              <li>Reduces spalling and surface wear from freeze-thaw cycles</li>
              <li>Refreshes color and can add a subtle sheen or wet look</li>
              <li>Makes exterior and garage concrete much easier to clean</li>
            </ul>
          </div>
          <div>
            <div className="photo-grid photo-grid-2">
              <Photo id="concrete-resurfacing-2" ratio="4 / 5" />
              <Photo id="concrete-resurfacing-1" ratio="4 / 5" />
            </div>
            <p className="photo-note">Before &amp; after: worn slab vs. resurfaced and sealed.</p>
          </div>
        </div>
      </section>

      <ProductsUsed brand={brands.stainAndSeal} heading="Professional acid stains & sealers." />

      <CtaBand />
    </main>
  );
}
