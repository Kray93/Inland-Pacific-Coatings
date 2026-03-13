import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ipcepoxy.com";
  return [
    "",
    "/epoxy-countertops",
    "/epoxy-countertops/coeur-dalene",
    "/epoxy-countertops/spokane",
    "/decorative-epoxy-floors",
    "/garage-floor-systems",
    "/outdoor-surfaces",
    "/contact"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
