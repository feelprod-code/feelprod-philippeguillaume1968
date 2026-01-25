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
            {/* Navigation Tweaked: Small "Retour Accueil" top left */}
            <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white">
                <Link href="/" className="text-xs md:text-sm font-bold tracking-widest uppercase hover:opacity-70 transition-opacity">
                    ← Retour Accueil
                </Link>

                {/* Hamburger Button */}
                <button
                    className="hamburger-button relative z-50" // Ensure z-index 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                    style={{ filter: 'invert(1)' }} // Make sure it's visible if needed, or rely on mix-blend
                >
                    <div className="space-y-1.5 cursor-pointer">
                        <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white text-black flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 40 }}>
                    <Link href="/" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMenuOpen(false)}>ACCUEIL</Link>
                    <Link href="/about" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMenuOpen(false)}>À PROPOS</Link>
                    <Link href="/contact" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
                </div>
            </nav>

            {/* Hero Slideshow Section - Full Height for Impact */}
            <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
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
                        {/* Overlay gradient for text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* Content Section */}
            <section className="w-full bg-white relative z-10 -mt-20 md:-mt-32 rounded-t-[3rem] px-6 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-12 md:mb-20">
                            {/* Bigger Title, Reduced Spacing */}
                            <h1 className="text-[#1d1d1f] text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-2">
                                L'ARTISAN
                            </h1>
                            <p className="text-xl md:text-3xl font-bold text-gray-400 uppercase tracking-[0.2em]">
                                Derrière la caméra
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        {/* Text Centered with max-width for "Not blocked left" feel */}
                        <div className="max-w-3xl mx-auto text-center space-y-12 md:space-y-16">

                            {/* Intro - Centered and Punchy */}
                            <div className="space-y-6">
                                <p className="text-2xl md:text-4xl font-light text-[#1d1d1f] leading-tight">
                                    FEELPROD est né d’un regard porté sur l’humain.
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                    À l’origine, il y a Philippe Guillaume, thérapeute de profession, passionné d’image et de mouvement.<br className="hidden md:block" />
                                    Depuis toujours, une même recherche traverse son parcours :<br />
                                    <span className="text-[#1d1d1f] font-medium">aller à la rencontre de ce qui est vivant, sensible et lumineux chez les personnes.</span>
                                </p>
                            </div>

                            {/* Citation - Centered Style */}
                            <div className="relative py-8 px-4 md:px-12">
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-[#fca00b] opacity-30 font-serif">“</span>
                                <p className="text-xl md:text-2xl italic text-gray-800 font-serif leading-relaxed relative z-10">
                                    Dans mon métier de thérapeute, je vais chercher les ressources qui permettent au corps et à l’être de se remettre en mouvement.<br />
                                    Avec l’image, je fais exactement la même chose.
                                </p>
                            </div>

                            {/* Histoire */}
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                Très tôt, bien avant l’ère des smartphones, il s’intéresse à la vidéo. Le sport, le geste, le rythme, la présence. Il traverse les évolutions technologiques — vidéo, photo, son, montage — non par fascination pour l’outil, mais pour affiner sa manière de capter le réel.
                            </p>

                            {/* Approche */}
                            <div className="space-y-4">
                                <p className="text-lg font-bold uppercase tracking-widest text-gray-400">Danse • Sport • Événements • Entreprises</p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                    FEELPROD accompagne des moments de vie avec une approche sensible et discrète : observer, ressentir, révéler sans jamais forcer.
                                </p>
                                <div className="pt-4">
                                    <p className="text-2xl md:text-3xl font-medium text-[#1d1d1f]">L’outil s’efface au profit du regard.</p>
                                    <p className="text-2xl md:text-3xl font-light text-gray-500">La technique sert l’émotion.</p>
                                </div>
                            </div>

                            {/* Conclusion Refondue */}
                            <div className="pt-16 md:pt-24 border-t border-gray-100 mt-16 pb-8">
                                <p className="text-3xl md:text-5xl font-bold text-[#1d1d1f] leading-tight mb-6">
                                    FEELPROD se situe à l’endroit où l’humain rencontre l’image.
                                </p>
                                <p className="text-xl md:text-2xl text-gray-600 mb-2 font-light">
                                    Un espace où l’on révèle la lumière, le mouvement et la justesse d’un instant.
                                </p>
                                <p className="text-xl md:text-2xl text-[#fca00b] font-bold uppercase tracking-widest mt-8">
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
