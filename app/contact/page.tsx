import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Free Estimate",
  description:
    "Request a free estimate from Inland Pacific Coatings. We serve Coeur d'Alene, Spokane, and the Inland Northwest with premium epoxy countertops, decorative floors, garage coatings, and outdoor surfaces.",
};

export default function ContactPage() {
  return <ContactForm />;
}
