"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CoreServiceTiles } from "./CoreServiceTiles";

const STORAGE_KEY = "ipc-chooser-seen";

/**
 * First-visit welcome prompt: "What kind of coating are you looking for today?"
 * Shows once per visitor, and only when they land on the homepage — visitors arriving
 * from Google/ads straight onto a service page are not interrupted.
 */
export function ServiceChooser() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathname !== "/") return;
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* storage blocked — show it anyway */
    }
    if (!seen) setOpen(true);
    // Only evaluate on first mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function close() {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="chooser-backdrop" onClick={close}>
      <div
        className="chooser"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chooser-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="chooser-close" onClick={close} aria-label="Close">
          ×
        </button>
        <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>Welcome to Inland Pacific Coatings</div>
        <h2 id="chooser-title" className="chooser-title">What kind of coating are you looking for today?</h2>
        <CoreServiceTiles onPick={close} />
        <div className="chooser-footer">
          <button className="chooser-skip" onClick={close}>Just browsing — take me to the homepage</button>
          <span className="chooser-divider">·</span>
          <Link href="/contact" className="chooser-skip" onClick={close}>Get a free estimate</Link>
        </div>
      </div>
    </div>
  );
}
