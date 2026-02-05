"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="global-nav">
            <div className="nav-content">
                <Link href="/" className="nav-title hover:opacity-70 transition-opacity">FEELPROD</Link>
            </div>

            {/* Hamburger Button */}
            <button
                className="hamburger-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
            >
                <span className={`hamburger-bar ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
                <span className={`hamburger-bar ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`hamburger-bar ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>ACCUEIL</Link>
                <Link href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>À PROPOS</Link>
                <Link href="/work" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>WORK</Link>
                <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
                <Link href="/test-spacing" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>PAGE TEST</Link>
            </div>
        </nav>
    );
}
