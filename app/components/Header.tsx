import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          <div className="brand-mark">
            <Image src="/ipc-logo.jpg" alt="Inland Pacific Coatings logo" width={56} height={56} />
          </div>
          <div className="brand-copy">
            <strong>Inland Pacific Coatings</strong>
            <span>Northwest Heritage • Luxury Surfaces</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/epoxy-countertops">Countertops</Link>
          <Link href="/decorative-epoxy-floors">Floors</Link>
          <Link href="/garage-floor-systems">Garage</Link>
          <Link href="/outdoor-surfaces">Outdoor</Link>
          <Link href="/contact" className="btn btn-outline">Free Estimate</Link>
        </nav>
      </div>
    </header>
  );
}
