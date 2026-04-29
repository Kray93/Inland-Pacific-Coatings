'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        {/* Logo / Brand */}
        <Link href="/" className="brand">
          <div className="brand-mark">
            <Image src="/ipc-logo.jpg" alt="Inland Pacific Coatings logo" width={56} height={56} />
          </div>
          <div className="brand-copy">
            <strong>Inland Pacific Coatings</strong>
            <span>Northwest Heritage • Luxury Surfaces</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact" className="nav-cta">Free Estimate</Link>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className={`hamburger-line${isOpen ? ' is-open-top' : ''}`} />
          <span className={`hamburger-line${isOpen ? ' is-open-mid' : ''}`} />
          <span className={`hamburger-line${isOpen ? ' is-open-bot' : ''}`} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="container mobile-menu-inner">
            <Link href="/" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className="btn btn-primary mobile-menu-cta" onClick={() => setIsOpen(false)}>
              Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
