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
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vat4zck.css" />
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
