import Link from "next/link";
import { coreCategories } from "../lib/services";
import { Photo } from "./Photo";

/** The four big "what are you looking for?" tiles. Used in the first-visit chooser and on the homepage. */
export function CoreServiceTiles({ onPick }: { onPick?: () => void }) {
  return (
    <div className="core-tiles">
      {coreCategories.map((cat) => (
        <Link key={cat.key} href={cat.href} className="core-tile" onClick={onPick}>
          <Photo id={cat.image} ratio="4 / 5" sizes="(max-width: 960px) 50vw, 25vw" />
          <div className="core-tile-overlay">
            <span className="core-tile-title">{cat.title}</span>
            <span className="core-tile-tagline">{cat.tagline}</span>
            <span className="core-tile-cta">Explore →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
