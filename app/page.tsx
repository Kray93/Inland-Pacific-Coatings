import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoreServiceTiles } from "./components/CoreServiceTiles";
import { PhotoGallery } from "./components/Photo";
import { ServiceCards } from "./components/ServiceCards";
import { BrandStrip } from "./components/SeoBlocks";
import { coreCategories } from "./lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const featuredHrefs = [
  "/epoxy-countertops",
  "/garage-floor-coatings",
  "/outdoor-concrete-coatings",
  "/residential-painting",
  "/hardwood-overlay-floors",
  "/roof-rejuvenation#benefits",
];
const signatureServices = featuredHrefs.map(
  (href) => coreCategories.flatMap((c) => c.services).find((s) => s.href === href)!
);

const coreValues = [
  {
    title: "Integrity in Every Job",
    text: "We operate with honesty, transparency, and accountability and stand behind our work."
  },
  {
    title: "Excellence in Craftsmanship",
    text: "Every surface is prepared and installed with precision and attention to detail."
  },
  {
    title: "Service Before Profit",
    text: "Customer experience and long-term relationships come before quick transactions."
  },
  {
    title: "Reliability & Professionalism",
    text: "Clear communication, dependable scheduling, and respect for every jobsite."
  },
  {
    title: "Growth & Stewardship",
    text: "Building a company that serves clients, employees, and community well."
  }
];

const areas = [
  "Coeur d'Alene",
  "Spokane",
  "Post Falls",
  "Hayden",
  "Liberty Lake",
  "Sandpoint",
  "Surrounding Inland Northwest communities"
];

export default function HomePage() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <div className="badge">Serving Coeur d&apos;Alene, Spokane, and the Inland Northwest</div>
            <h1 style={{ marginTop: 18 }}>
              premium concrete coatings, epoxy, painting & roof rejuvenation for northwest living.
            </h1>
            <p className="lead" style={{ marginTop: 22, maxWidth: 760 }}>
              Inland Pacific Coatings protects and elevates every surface of your home — concrete sealing and
              coatings, epoxy floors and countertops, interior and exterior painting, and roof rejuvenation.
            </p>
            <div className="button-row">
              <Link href="/contact" className="btn btn-primary">Request a Free Estimate</Link>
              <a href="#find-your-service" className="btn btn-secondary">Find Your Service</a>
            </div>
            <div className="stat-grid">
              <div className="stat">
                <strong style={{ color: "var(--gold-soft)", display: "block", fontSize: 22 }}>Signature Focus</strong>
                <p>Concrete, epoxy, paint, and roofs</p>
              </div>
              <div className="stat">
                <strong style={{ color: "var(--gold-soft)", display: "block", fontSize: 22 }}>Luxury Market</strong>
                <p>Homes, remodels, and premium spaces</p>
              </div>
              <div className="stat">
                <strong style={{ color: "var(--gold-soft)", display: "block", fontSize: 22 }}>Built to Scale</strong>
                <p>Professional systems with craftsmanship standards</p>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="logo-frame">
              <Image
                src="/ipc-logo.jpg"
                alt="Inland Pacific Coatings"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ marginTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
              <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>The Inland Pacific Standard</div>
              <p style={{ marginTop: 14 }}>
                Luxury design sensibility, rugged Northwest identity, and professional surface systems built for
                long-term beauty, durability, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="find-your-service">
        <div className="container">
          <div className="eyebrow">Our Core Services</div>
          <h2 className="services-heading">What kind of coating are you looking for today?</h2>
          <p className="lead services-lead">
            Pick a service to see our work, how the process goes, and what to expect.
          </p>
          <div style={{ marginTop: 36 }}>
            <CoreServiceTiles />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container mission">
          <div className="eyebrow">Our Mission</div>
          <p>
            To provide homeowners and businesses with beautiful, long-lasting coated and painted surfaces through expert
            preparation, skilled craftsmanship, and reliable service while delivering a professional experience from
            consultation to installation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Signature Services</div>
          <h2 className="services-heading">
            Surface systems designed for high-end homes and standout spaces.
          </h2>
          <p className="lead services-lead">
            From epoxy and concrete systems to paint and roof care, every service balances design, durability, and
            professional execution.
          </p>

          <ServiceCards services={signatureServices} />

         <div className="services-button-row">
           <Link href="/services" className="btn services-view-all">
             View All Services →
           </Link>
         </div>
        </div>
      </section>

      <PhotoGallery
        className="dark-section"
        heading="Recent projects across the Inland Northwest."
        layout="grid"
        ids={[
          "garage-floor-coatings-1",
          "painting-exterior",
          "roof-after",
          "epoxy-countertops-1",
          "outdoor-concrete-coatings-1",
          "metallic-epoxy-floors-1",
        ]}
      />

      <section className="section alt-section">
        <div className="container two-col">
          <div>
            <div className="eyebrow">About the Brand</div>
            <h2 style={{ marginTop: 14 }}>Luxury modern finish. Northwest rugged backbone.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Inland Pacific Coatings is positioned as a larger, established surface brand built for premium
              residential projects, refined remodels, and future commercial expansion.
            </p>
            <p>
              From concrete and epoxy to fresh paint and rejuvenated roofs, each project is designed to elevate the space while standing up to real-world use in the Inland Northwest.
            </p>
          </div>
          <div className="card-grid">
            {[
              "Northwest heritage brand with luxury presentation",
              "Concrete coating & sealing, epoxy floors and countertops, painting, and roof rejuvenation",
              "Professional prep standards built around shot blasting and grinding when surface conditions require it",
              "Serving Coeur d'Alene, Spokane, and surrounding Inland Northwest communities"
            ].map((item) => (
              <div key={item} className="card">
                <p style={{ margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandStrip />

      <section className="section alt-section">
        <div className="container">
          <div className="eyebrow">Core Values</div>
          <h2 style={{ marginTop: 14 }}>What Inland Pacific Coatings stands for.</h2>
          <div className="card-grid values-grid" style={{ marginTop: 36 }}>
            {coreValues.map((value) => (
              <article key={value.title} className="card">
                <h3>{value.title}</h3>
                <p style={{ marginTop: 12 }}>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
         <div className="container vision">
          <div className="eyebrow">Our Vision</div>
          <p>
            To become the leading coatings company in the Pacific Northwest, recognized for exceptional
            craftsmanship, innovative surface systems, and trusted service across residential and
            commercial markets.
          </p>
        </div>
      </section>
    </main>
  );
}
      {/* unused sections

      <section className="section dark-section">
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>Project Gallery</div>
          <h2 style={{ marginTop: 14 }}>Luxury visuals will sell this brand.</h2>
          <p className="lead" style={{ maxWidth: 720, marginTop: 16 }}>
            Replace these placeholders with your best countertop, floor, outdoor surface, and garage photography as
            your portfolio grows.
          </p>
          <div className="card-grid gallery-grid" style={{ marginTop: 36 }}>
            {["Countertop transformations", "Custom stone-style finishes", "Decorative epoxy floors"].map((item, index) => (
              <div key={item} className="card dark">
                <div className="gallery-placeholder">Project {index + 1}</div>
                <p style={{ marginTop: 14 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section alt-section">
      <div className="container two-col">
          <div>
            <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>Request an Estimate</div>
            <h2 style={{ marginTop: 14 }}>Let&apos;s talk about your surface transformation.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              From countertop resurfacing and custom epoxy counters to decorative floors and outdoor living surfaces,
              Inland Pacific Coatings is built to help clients create spaces that look elevated and perform
              beautifully.
            </p>
            <p><strong style={{ color: "var(--gold-soft)" }}>Phone:</strong> 208.714.1951</p>
            <p><strong style={{ color: "var(--gold-soft)" }}>Email:</strong> kevin@ipcepoxy.com</p>
            <p><strong style={{ color: "var(--gold-soft)" }}>Website:</strong> ipcepoxy.com</p>
          </div>

          <div className="form-wrap">
            <div className="form-grid">
              <div className="input-row">
                <input placeholder="Name" />
                <input placeholder="Phone" />
              </div>
              <input placeholder="Email" />
              <select defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Epoxy Countertop Refinishing & Resurfacing</option>
                <option>Custom Epoxy Countertops</option>
                <option>Decorative Epoxy Floors</option>
                <option>Garage Floor Systems</option>
                <option>Outdoor Surface Systems</option>
              </select>
              <textarea placeholder="Tell us about your project" />
              <Link href="/contact" className="btn btn-primary">Request Free Estimate</Link>
            </div>
          </div>
        </div>
        </section>
        
        <section className="section">
        <div className="container">
          <div className="eyebrow">Service Area</div>
          <h2 style={{ marginTop: 14 }}>Serving Coeur d&apos;Alene, Spokane, and surrounding Inland Northwest communities.</h2>
          <div className="pill-list">
            {areas.map((area) => (
              <div className="pill" key={area}>{area}</div>
            ))}
          </div>
        </div>
      </section>
      */}
