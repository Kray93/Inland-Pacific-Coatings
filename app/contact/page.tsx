import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Free Estimate | Contact Us",
  description:
    "Request a free estimate from Inland Pacific Coatings. We serve Coeur d'Alene, Spokane, and the Inland Northwest with premium epoxy countertops, decorative floors, garage coatings, and outdoor surfaces.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactForm />;
}
