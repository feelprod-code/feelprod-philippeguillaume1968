"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const images = [
    "assets/images/steadyphil.JPG",
    "assets/images/travelingphil.JPG",
    "assets/images/barriophil.jpg",
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

            {/* Hero Slideshow Section */}
            <section className="hero-section overflow-hidden" style={{ minHeight: '60vh', paddingBottom: '0' }}>
                <div className="video-background" style={{ height: '100%', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={images[index]}
                                alt="Philippe Guillaume"
                                className="w-full h-full object-cover object-top grayscale"
                                style={{ transform: 'scale(1)' }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full bg-white relative z-10 py-16 md:py-24">
                {/* Main Content Container centered with 85% width on mobile */}
                <div className="w-[85%] max-w-2xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-16">
                            <h1 className="text-[#1d1d1f] mb-4 text-4xl md:text-6xl font-bold tracking-tighter">L'ARTISAN</h1>
                            <p className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest">Derrière la caméra</p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="text-lg leading-relaxed text-gray-800 font-light tracking-wide text-left md:text-justify space-y-10">

                            {/* Intro */}
                            <div>
                                <p className="font-medium text-xl md:text-2xl text-[#1d1d1f] mb-6">
                                    FEELPROD est né d’un regard porté sur l’humain.
                                </p>
                                <p>
                                    À l’origine, il y a Philippe Guillaume, thérapeute de profession, passionné d’image et de mouvement.<br />
                                    Depuis toujours, une même recherche traverse son parcours :<br />
                                    aller à la rencontre de ce qui est vivant, sensible et lumineux chez les personnes.
                                </p>
                            </div>

                            {/* Citation */}
                            <div className="pl-6 border-l-4 border-[#fca00b] py-2">
                                <p className="italic text-xl text-gray-600 font-serif">
                                    « Dans mon métier de thérapeute, je vais chercher les ressources qui permettent au corps et à l’être de se remettre en mouvement.<br />
                                    Avec l’image, je fais exactement la même chose. »
                                </p>
                            </div>

                            {/* Histoire */}
                            <p>
                                Très tôt, bien avant l’ère des smartphones, il s’intéresse à la vidéo. Le sport, le geste, le rythme, la présence. Il traverse les évolutions technologiques — vidéo, photo, son, montage — non par fascination pour l’outil, mais pour affiner sa manière de capter le réel.
                            </p>

                            {/* Approche */}
                            <div>
                                <p className="mb-4">Danse, sport, événements, entreprises…</p>
                                <p>
                                    FEELPROD accompagne des moments de vie avec une approche sensible et discrète : observer, ressentir, révéler sans jamais forcer.<br />
                                    <span className="block mt-4 font-medium text-[#1d1d1f]">
                                        L’outil s’efface au profit du regard.<br />
                                        La technique sert l’émotion.
                                    </span>
                                </p>
                            </div>

                            {/* Conclusion Refondue */}
                            <div className="pt-10 border-t border-gray-100 mt-12 text-center">
                                <p className="text-2xl md:text-3xl font-bold text-[#1d1d1f] leading-tight mb-4">
                                    FEELPROD se situe à l’endroit où l’humain rencontre l’image.
                                </p>
                                <p className="text-xl text-gray-600 mb-2">
                                    Un espace où l’on révèle la lumière, le mouvement et la justesse d’un instant.
                                </p>
                                <p className="text-xl text-[#fca00b] font-bold uppercase tracking-widest mt-6">
                                    Pour donner à voir ce qui est déjà là, pleinement vivant.
                                </p>
                            </div>

                        </div>
                    </Reveal>
                </div>
            </section>

            <div className="w-full flex justify-center pb-20 bg-white">
                <Link
                    href="/"
                    className="comic-link text-xl tracking-wide uppercase text-[#1d1d1f]"
                    style={{ fontFamily: 'var(--font-comic)' }}
                >
                    RETOUR ACCUEIL
                </Link>
            </div>
        </main>
    );
}
