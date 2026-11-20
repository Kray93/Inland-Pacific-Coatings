import list from "./photo-list.json";

/**
 * Every image on the site is looked up here by key.
 *
 * To swap a placeholder for a real photo:
 *   1. Drop the photo into public/photos/ (e.g. public/photos/garage-floor-1.jpg)
 *   2. In app/lib/photo-list.json, set that key's "src" to "/photos/garage-floor-1.jpg"
 *      (and update "alt" to describe the real photo).
 * Anything without a "src" falls back to its generated placeholder in public/placeholders/.
 */
export type PhotoKey = keyof typeof list.photos;

export type SitePhoto = {
  src: string;
  alt: string;
  isPlaceholder: boolean;
};

export function photo(key: PhotoKey): SitePhoto {
  const entry = list.photos[key] as { src: string | null; alt: string };
  return {
    src: entry.src ?? `/placeholders/${key}.svg`,
    alt: entry.alt,
    isPlaceholder: !entry.src,
  };
}

/** The three gallery photos registered for a service page slug, e.g. "garage-floor-coatings". */
export function servicePhotos(slug: string): PhotoKey[] {
  return [1, 2, 3]
    .map((n) => `${slug}-${n}`)
    .filter((k): k is PhotoKey => k in list.photos);
}
