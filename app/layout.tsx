import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://ipcepoxy.com"),
  title: {
    default: "Inland Pacific Coatings | Premium Epoxy Countertops & Decorative Floors",
    template: "%s | Inland Pacific Coatings"
  },
  description:
    "Inland Pacific Coatings creates premium epoxy countertop refinishing, decorative floors, garage floor systems, and outdoor surfaces in Coeur d'Alene, Spokane, and the Inland Northwest.",
  openGraph: {
    title: "Inland Pacific Coatings",
    description:
      "Premium epoxy countertops, decorative floors, and outdoor surface systems for the Inland Northwest.",
    url: "https://ipcepoxy.com",
    siteName: "Inland Pacific Coatings",
    type: "website",
    images: [
      {
        url: "https://ipcepoxy.com/epoxy-hero-2.png",
        width: 1200,
        height: 630,
        alt: "Premium epoxy surfaces by Inland Pacific Coatings"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Inland Pacific Coatings",
    description:
      "Premium epoxy countertops, decorative floors, and outdoor surface systems for the Inland Northwest.",
    images: ["https://ipcepoxy.com/epoxy-hero-2.png"]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Inland Pacific Coatings",
  "url": "https://ipcepoxy.com",
  "telephone": "+1-208-714-1951",
  "email": "kevin@ipcepoxy.com",
  "description": "Premium epoxy countertops, decorative floors, garage floor systems, and outdoor surface coatings serving Coeur d'Alene, Spokane, and the Inland Northwest.",
  "image": "https://ipcepoxy.com/ipc-logo.jpg",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coeur d'Alene",
    "addressRegion": "ID",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Coeur d'Alene",
      "sameAs": "https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho"
    },
    {
      "@type": "City",
      "name": "Spokane",
      "sameAs": "https://en.wikipedia.org/wiki/Spokane,_Washington"
    },
    {
      "@type": "State",
      "name": "Inland Northwest"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Surface Coating Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Epoxy Countertop Refinishing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Concrete Countertops" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garage Floor Coatings" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Decorative Epoxy Floors" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hardwood Overlay Floors" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metallic Epoxy Floors" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outdoor Concrete Coatings" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Concrete Polishing & Sealing" } }
    ]
  },
  "sameAs": [
    "https://ipcepoxy.com"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vat4zck.css" />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18126713560"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18126713560');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
