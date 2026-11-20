import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-logo-name">Inland Pacific Coatings</div>
          <div className="footer-tagline">Northwest Heritage • Luxury Surfaces</div>
          <p className="footer-blurb">
            Concrete coatings, epoxy, painting, and roof rejuvenation
            for the Inland Northwest.
          </p>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <div className="footer-col-heading">Services</div>
          <ul className="footer-links">
            <li><Link href="/concrete-coatings">Concrete Coating &amp; Sealing</Link></li>
            <li><Link href="/epoxy">Epoxy Floors &amp; Countertops</Link></li>
            <li><Link href="/painting">Painting</Link></li>
            <li><Link href="/roof-rejuvenation">Roof Rejuvenation</Link></li>
            <li><Link href="/garage-floor-coatings">Garage Floor Coatings</Link></li>
            <li><Link href="/epoxy-countertops">Epoxy Countertops</Link></li>
            <li><Link href="/services">View All Services</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <div className="footer-col-heading">Contact</div>
          <ul className="footer-links">
            <li><a href="tel:12087141951">208.714.1951</a></li>
            <li><a href="mailto:kevin@ipcepoxy.com">kevin@ipcepoxy.com</a></li>
            <li className="footer-area">Coeur d'Alene · Spokane<br />& the Inland Northwest</li>
          </ul>
          <Link href="/contact" className="btn btn-primary footer-cta">
            Free Estimate
          </Link>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div>© 2026 Inland Pacific Coatings LLC. All rights reserved.</div>
          <div>ipcepoxy.com</div>
        </div>
      </div>
    </footer>
  );
}
