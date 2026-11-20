import type { Metadata } from "next";
import { CategoryHero, CtaBand } from "../components/CategoryHero";
import { Photo, PhotoGallery } from "../components/Photo";
import { ServiceCards } from "../components/ServiceCards";
import { getCategory } from "../lib/services";

export const metadata: Metadata = {
  title: "Epoxy Floors & Countertops",
  description:
    "Epoxy garage floors, flake and metallic epoxy floors, decorative floors, seamless showers, and custom epoxy countertops in Coeur d'Alene, Spokane, and the Inland Northwest.",
};

const category = getCategory("epoxy");

export default function EpoxyPage() {
  return (
    <main>
      <CategoryHero category={category} heading="Seamless epoxy floors & countertops." />

      <section className="section" id="services">
        <div className="container">
          <div className="eyebrow">Epoxy Services</div>
          <h2 className="services-heading">Choose your epoxy system.</h2>
          <p className="lead services-lead">
            From hard-working garage floors to statement metallic floors and stone-look countertops, every epoxy
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
          "garage-floor-coatings-1",
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
            <div className="eyebrow">Garage Floor Transformations</div>
            <h2 style={{ marginTop: 14 }}>From stained slab to showroom.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Our most-requested epoxy service. A full-broadcast flake system hides dust, adds traction, and stands up
              to hot tires, road salt, and everyday spills.
            </p>
            <ul>
              <li>Diamond grinding for a proper mechanical bond</li>
              <li>Crack and spall repair before coating</li>
              <li>Full-broadcast decorative flake</li>
              <li>UV-stable protective topcoat</li>
            </ul>
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

      <CtaBand />
    </main>
  );
}
