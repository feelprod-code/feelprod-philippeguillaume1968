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
            {/* Navigation (Reusing exact same nav as Home for consistency) */}
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

            {/* Hero Slideshow Section - Standard Height */}
            <section className="relative h-[60vh] w-full overflow-hidden">
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
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* Content Section - Clean & Readable */}
            <section className="w-full bg-white relative z-10 -mt-20 rounded-t-[2.5rem] px-6 py-16 md:py-20">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-10 md:mb-16">
                            <h1 className="text-[#1d1d1f] text-5xl md:text-7xl font-black tracking-tighter leading-none mb-2">
                                L'ARTISAN
                            </h1>
                            <p className="text-sm md:text-lg font-bold text-gray-400 uppercase tracking-[0.2em]">
                                Derrière la caméra
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="max-w-2xl mx-auto text-center space-y-8 md:space-y-10">

                            {/* Intro */}
                            <div className="space-y-4">
                                <p className="text-xl md:text-2xl font-medium text-[#1d1d1f] leading-snug">
                                    FEELPROD est né d’un regard porté sur l’humain.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    À l’origine, il y a Philippe Guillaume, thérapeute de profession, passionné d’image et de mouvement.<br className="hidden md:block" />
                                    Depuis toujours, une même recherche traverse son parcours :<br />
                                    <span className="text-gray-800 font-medium">aller à la rencontre de ce qui est vivant, sensible et lumineux chez les personnes.</span>
                                </p>
                            </div>

                            {/* Citation */}
                            <div className="relative py-6 px-4">
                                <span className="text-4xl text-[#fca00b] opacity-40 font-serif block mb-2">“</span>
                                <p className="text-lg md:text-xl italic text-gray-700 font-serif leading-relaxed">
                                    Dans mon métier de thérapeute, je vais chercher les ressources qui permettent au corps et à l’être de se remettre en mouvement.<br />
                                    Avec l’image, je fais exactement la même chose.
                                </p>
                            </div>

                            {/* Histoire */}
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                Très tôt, bien avant l’ère des smartphones, il s’intéresse à la vidéo. Le sport, le geste, le rythme, la présence. Il traverse les évolutions technologiques — vidéo, photo, son, montage — non par fascination pour l’outil, mais pour affiner sa manière de capter le réel.
                            </p>

                            {/* Approche */}
                            <div className="space-y-3">
                                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#fca00b]">Danse • Sport • Événements • Entreprises</p>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    FEELPROD accompagne des moments de vie avec une approche sensible et discrète : observer, ressentir, révéler sans jamais forcer.
                                </p>
                                <div className="pt-2">
                                    <p className="text-lg md:text-xl font-medium text-[#1d1d1f]">L’outil s’efface au profit du regard.</p>
                                    <p className="text-lg md:text-xl font-light text-gray-500">La technique sert l’émotion.</p>
                                </div>
                            </div>

                            {/* Conclusion */}
                            <div className="pt-10 border-t border-gray-100 mt-10">
                                <p className="text-2xl md:text-3xl font-bold text-[#1d1d1f] leading-tight mb-3">
                                    FEELPROD se situe à l’endroit où l’humain rencontre l’image.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 mb-1 font-light">
                                    Un espace où l’on révèle la lumière, le mouvement et la justesse d’un instant.
                                </p>
                                <p className="text-sm md:text-base text-[#fca00b] font-bold uppercase tracking-widest mt-6">
                                    Pour donner à voir ce qui est déjà là, pleinement vivant.
                                </p>
                            </div>

                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
