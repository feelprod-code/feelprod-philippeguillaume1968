"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    { src: "/assets/images/steadyphil.JPG", position: "center 70%", scale: 1.30, finalScale: 1 },
    { src: "/assets/images/travelingphil-2.jpg", position: "center 20%", scale: 4, finalScale: 2 },
    { src: "/assets/images/barriophil.jpg", position: "center 80%", scale: 1.25, finalScale: 1 },
    { src: "/assets/images/pont.jpeg", position: "center 60%", scale: 1.25, finalScale: 1 },
    { src: "/assets/images/stabbvaw.JPG", position: "center 80%", scale: 1.25, finalScale: 1 },
    { src: "/assets/images/barrio stab.jpg", position: "center 80%", scale: 1.25, finalScale: 1 },
    { src: "/assets/images/barriohaut.jpg", position: "center 90%", scale: 1.25, finalScale: 1 },
    { src: "/assets/images/pont alex.jpg", position: "center 60%", scale: 1.25, finalScale: 1 },
];

export default function AboutPage() {
    const [index, setIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="bg-white min-h-screen">
            {/* Navigation */}
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
                    <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
                </div>
            </nav>

            {/* Hero Slideshow Section - 16/9 with fade */}
            <section className="relative w-full aspect-video overflow-hidden" style={{ marginTop: '80px' }}>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: images[index].scale }}
                        animate={{ opacity: 1, scale: images[index].finalScale }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={images[index].src}
                            alt="Philippe Guillaume"
                            className="w-full h-full object-cover grayscale"
                            style={{ objectPosition: images[index].position }}
                        />

                        {/* Gradient Fades */}
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* Content Section - EMPTY FOR NOW */}
            <section className="w-full bg-white relative z-10 px-6 py-20 min-h-[50vh]">
                {/* Waiting for new text content */}
            </section>

        </main>
    );
}
