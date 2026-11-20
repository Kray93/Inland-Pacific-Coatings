import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ServiceChooser } from "./components/ServiceChooser";

export const metadata: Metadata = {
  metadataBase: new URL("https://ipcepoxy.com"),
  icons: {
    icon: "/ipc-logo.jpg",
    apple: "/ipc-logo.jpg",
  },
  title: {
    default: "Inland Pacific Coatings | Concrete Coatings, Epoxy, Painting & Roof Rejuvenation",
    template: "%s | Inland Pacific Coatings"
  },
  description:
    "Inland Pacific Coatings provides concrete coating and sealing, epoxy floors and countertops, interior and exterior painting, and roof rejuvenation in Coeur d'Alene, Spokane, and the Inland Northwest.",
  openGraph: {
    title: "Inland Pacific Coatings",
    description:
      "Concrete coatings, epoxy floors & countertops, painting, and roof rejuvenation for the Inland Northwest.",
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
      "Concrete coatings, epoxy floors & countertops, painting, and roof rejuvenation for the Inland Northwest.",
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
  "description": "Concrete coating and sealing, epoxy floors and countertops, painting, and roof rejuvenation serving Coeur d'Alene, Spokane, and the Inland Northwest.",
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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Concrete Polishing & Sealing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cabinet Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Rejuvenation" } }
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
        {/* Google Tag — manages both Google Ads (AW-18126713560) and GA4 (G-JY8YEZKYJT) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-5NGRF2F8"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-5NGRF2F8');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
        <ServiceChooser />
      </body>
    </html>
  );
}
