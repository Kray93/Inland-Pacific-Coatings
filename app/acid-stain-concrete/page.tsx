import type { Metadata } from "next";
import Link from "next/link";
import { PhotoGallery } from "../components/Photo";
import { servicePhotos } from "../lib/photos";

export const metadata: Metadata = {
  title: "Acid Stain Concrete",
  description:
    "Acid stain and concrete staining for floors and patios in Coeur d'Alene, Spokane, and the Inland Northwest. Rich, marbled, one-of-a-kind earth-tone color that becomes part of the concrete.",
};

export default function AcidStainConcretePage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Decorative Concrete</div>
          <h1 className="services-page-title">Acid Stain Concrete</h1>
          <p className="lead services-page-lead">
            Rich, variegated color that reacts with the concrete itself — creating a marbled, natural-stone look that no
            two floors share.
          </p>
          <p>
            Inland Pacific Coatings acid stains interior floors, patios, walkways, and commercial spaces across Coeur
            d&apos;Alene, Spokane, and the Inland Northwest. Acid stain does not sit on top of the surface like paint.
            It chemically reacts with the slab, so the color becomes part of the concrete.
          </p>

          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Request an Estimate
            </Link>
            <Link href="/concrete-coatings" className="btn btn-outline">
              View Concrete Services
            </Link>
          </div>
        </div>
      </section>

      <PhotoGallery ids={servicePhotos("acid-stain-concrete")} eyebrow="Project Gallery" className="gallery-tight" />

      <section className="section alt-section">
        <div className="container article">
          <h2>How acid staining works</h2>
          <p>
            Acid stains are made with metallic salts in a mild acidic solution. When applied, they react with the
            minerals in cured concrete to produce deep, translucent color with natural mottling and movement, similar to
            marble, leather, or weathered stone.
          </p>
          <ul>
            <li>Color becomes part of the concrete and will not peel or flake</li>
            <li>Translucent, variegated finish with natural depth</li>
            <li>Earth-tone palette: browns, tans, amber, terra cotta, and blue-green</li>
            <li>Every slab reacts differently, so every floor is one of a kind</li>
            <li>Sealed after staining for protection and a satin or gloss sheen</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where acid stain works best</h2>
          <ul>
            <li>Basements and lower-level living spaces</li>
            <li>Main-floor concrete in modern and rustic homes</li>
            <li>Covered patios, porches, and walkways</li>
            <li>Restaurants, retail, breweries, and showrooms</li>
            <li>Shops and studios that want character without a thick coating</li>
          </ul>
          <p>
            Acid stain is a more understated choice than metallic epoxy or decorative overlays. It enhances the
            concrete you have instead of covering it, for a surface that feels natural and integrated into the space.
          </p>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>What to expect</h2>
          <p>
            Acid stain highlights the character of your concrete, including its natural variation and much of its
            history. Because it is translucent, existing patches, cracks, and wear can still show through, which is part
            of its natural, aged charm.
          </p>
          <p>
            If you want a more uniform color or need to hide surface damage, we may recommend concrete resurfacing
            before staining or a decorative epoxy system instead. We&apos;ll walk you through the options during your
            estimate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our acid stain process</h2>
          <ol>
            <li>Evaluate the slab and test how it takes stain</li>
            <li>Clean and prepare the surface, removing sealers, glue, and contaminants</li>
            <li>Apply acid stain in one or more coats to build color</li>
            <li>Neutralize and thoroughly rinse the stain residue</li>
            <li>Apply a protective sealer in your choice of sheen</li>
            <li>Final inspection and care instructions</li>
          </ol>
          <p>
            Proper cleaning and neutralizing are what separate a lasting acid stain from one that clouds or fails under
            the sealer.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Related Services</h2>
          <div className="pill-list">
            <Link href="/concrete-polishing-sealing" className="pill">Concrete Polishing & Sealing</Link>
            <Link href="/concrete-resurfacing" className="pill">Concrete Resurfacing</Link>
            <Link href="/outdoor-concrete-coatings" className="pill">Outdoor Concrete Coatings</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Acid stain concrete in Coeur d&apos;Alene, Spokane, and the Inland Northwest</h2>
          <p>
            Inland Pacific Coatings creates acid-stained floors and outdoor surfaces throughout the Inland Northwest for
            clients who want rich, natural color with a truly custom look.
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
