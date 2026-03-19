import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shower Systems | Inland Pacific Coatings",
  description:
    "Seamless decorative shower systems for bathrooms across Coeur d'Alene, Spokane, and the Inland Northwest. Modern, durable, and custom-finished.",
};

export default function ShowerSystemsPage() {
  return (
    <main>
      <section className="section">
        <div className="container article">
          <div className="eyebrow">Wet Area Systems</div>
          <h1 className="services-page-title">Shower Systems</h1>
          <p className="lead services-page-lead">
            Seamless shower systems designed to replace traditional tile with a cleaner, more modern, and easier-to-maintain finish.
          </p>
          <p>
            Inland Pacific Coatings installs decorative shower systems across Coeur d&apos;Alene, Spokane, and the Inland Northwest for homeowners who want a bathroom that feels more refined, more contemporary, and less dependent on grout lines and traditional materials.
          </p>

          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Request an Estimate
            </Link>
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Why choose a seamless shower system</h2>
          <p>
            Traditional tile showers rely on grout lines that can stain, crack, and require ongoing maintenance. Seamless shower systems eliminate those weak points while creating a cleaner, more modern look.
          </p>
          <ul>
            <li>No grout lines to maintain</li>
            <li>Cleaner, more modern appearance</li>
            <li>Water-resistant and easy to clean</li>
            <li>Custom design options</li>
            <li>Works for both full remodels and upgrades</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Where these systems are used</h2>
          <p>
            Shower systems are ideal for residential bathrooms where a clean, seamless finish improves both function and appearance.
          </p>
          <ul>
            <li>Walk-in showers</li>
            <li>Master bathroom remodels</li>
            <li>Guest bathrooms</li>
            <li>Custom home builds</li>
            <li>Modern renovation projects</li>
          </ul>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container article">
          <h2>A more modern bathroom finish</h2>
          <p>
            Seamless shower systems create a more unified, architectural feel compared to traditional tile. The result is a space that looks cleaner, feels more intentional, and is easier to maintain over time.
          </p>
          <p>
            These systems are especially appealing in modern and design-focused homes where simplicity and finish quality matter.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Our installation process</h2>
          <ol>
            <li>Evaluation of existing shower or substrate</li>
            <li>Preparation and waterproofing</li>
            <li>Base layer and system build-up</li>
            <li>Decorative finish application</li>
            <li>Sealing and protection</li>
            <li>Final detailing and inspection</li>
          </ol>
          <p>
            Proper preparation and waterproofing are critical to ensure long-term performance in wet environments.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container article">
          <h2>Shower systems vs tile showers</h2>
          <p>
            While tile remains a common option, seamless systems are chosen for their cleaner appearance and reduced maintenance. They eliminate grout lines and provide a more consistent, finished look.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <h2>Shower systems in Coeur d&apos;Alene and Spokane</h2>
          <p>
            Inland Pacific Coatings installs shower systems throughout Coeur d&apos;Alene, Spokane, and the Inland Northwest for homeowners looking to upgrade their bathrooms with a more modern and durable finish.
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