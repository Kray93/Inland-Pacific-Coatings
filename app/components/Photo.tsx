import Image from "next/image";
import { photo, type PhotoKey } from "../lib/photos";

type PhotoProps = {
  id: PhotoKey;
  /** CSS aspect ratio, e.g. "16 / 10" or "4 / 3" */
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  caption?: boolean;
};

export function Photo({ id, ratio = "16 / 10", className = "", priority, sizes = "(max-width: 960px) 100vw, 50vw", caption }: PhotoProps) {
  const p = photo(id);
  return (
    <figure className={`photo ${className}`} style={{ aspectRatio: ratio }}>
      <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
      {caption && !p.isPlaceholder && <figcaption className="photo-caption">{p.alt}</figcaption>}
    </figure>
  );
}

type GalleryProps = {
  ids: PhotoKey[];
  eyebrow?: string;
  heading?: string;
  /** "feature" = one large + two stacked; "grid" = even grid */
  layout?: "feature" | "grid";
  className?: string;
};

export function PhotoGallery({ ids, eyebrow = "Project Gallery", heading, layout = "feature", className = "" }: GalleryProps) {
  if (ids.length === 0) return null;
  return (
    <section className={`section gallery-section ${className}`}>
      <div className="container">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {heading && <h2 style={{ marginTop: 14 }}>{heading}</h2>}
        <div className={layout === "feature" && ids.length === 3 ? "photo-feature-grid" : "photo-grid"}>
          {ids.map((id, i) => (
            <Photo
              key={id}
              id={id}
              ratio={layout === "feature" && ids.length === 3 && i === 0 ? undefined : "4 / 3"}
              className={layout === "feature" && ids.length === 3 && i === 0 ? "photo-feature-main" : ""}
              sizes="(max-width: 960px) 100vw, 33vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
