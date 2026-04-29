import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ipcepoxy.com";

  // Homepage
  const home = {
    url: base,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0
  };

  // High-priority service pages
  const primaryServices = [
    "/epoxy-countertops",
    "/garage-floor-coatings",
    "/decorative-epoxy-floors",
    "/hardwood-overlay-floors",
    "/concrete-countertops",
    "/outdoor-concrete-coatings",
    "/metallic-epoxy-floors",
    "/flake-epoxy-floors",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  // Secondary service pages
  const secondaryServices = [
    "/concrete-polishing-sealing",
    "/concrete-resurfacing",
    "/concrete-staining",
    "/concrete-wall-coatings",
    "/asphalt-resurfacing",
    "/resin-bound-gravel",
    "/shower-systems",
    "/texture-deck",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  // Location-specific pages
  const locationPages = [
    "/epoxy-countertops/coeur-dalene",
    "/epoxy-countertops/spokane",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  // Supporting pages
  const supportingPages = [
    "/services",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [home, ...primaryServices, ...locationPages, ...secondaryServices, ...supportingPages];
}
