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

            {/* Hero Slideshow Section matching Home layout */}
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
                                className="w-full h-full object-cover object-top"
                                style={{ transform: 'scale(1)' }} /* Reset specific scale if needed, object-cover handles it */
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Placeholder to push content down if needed, but here we want Title BELOW */}
            </section>

            {/* Title & Content Section */}
            <section className="text-center px-6 md:px-20 max-w-4xl mx-auto -mt-20 relative z-10 pb-20">
                <Reveal>
                    <h1 className="text-[#1d1d1f] mb-4">L'ARTISAN</h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="subhead text-3xl font-bold text-gray-400 mb-16">Derrière la caméra</p>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="prose prose-lg text-gray-600 leading-relaxed font-medium space-y-8 text-left md:text-justify">
                        <p>
                            <strong>FEELPROD est né d’un regard porté sur l’humain.</strong><br />
                            À l’origine, il y a Philippe Guillaume, thérapeute de profession, passionné d’image et de mouvement, guidé depuis toujours par une même recherche : révéler ce qui est vivant, sensible et lumineux chez les personnes.
                        </p>

                        <p>
                            FEELPROD n’est pas un simple nom de production.<br />
                            Il exprime une intention.<br />
                            Sentir avant de montrer. Ressentir avant de produire.<br />
                            Mettre en lumière ce qui anime, ce qui vibre, ce qui relie.
                        </p>

                        <blockquote className="border-l-4 border-[#fca00b] pl-6 py-2 italic text-gray-800 text-xl font-serif my-8">
                            « Dans mon métier de thérapeute, je vais chercher chez les personnes leurs ressources, leur capacité à se remettre en mouvement.<br />
                            Avec l’image, je fais exactement la même chose. »
                        </blockquote>

                        <p>
                            Très tôt, Philippe s’intéresse à la vidéo, bien avant l’ère des smartphones. Le sport, le geste, l’effort, la coordination, le mouvement l’attirent naturellement. Il traverse les évolutions technologiques successives — vidéo, photo, montage, diffusion — non par goût de la technique seule, mais parce que chaque outil affine la manière de raconter le réel.
                        </p>

                        <p>
                            FEELPROD s’est construit dans cette liberté : filmer, monter, produire, diffuser.<br />
                            Une approche autonome, légère, complète.<br />
                            Comprendre le son, l’image, le rythme, l’émotion.
                        </p>

                        <p>
                            Danse, sport, événements, entreprises…<br />
                            FEELPROD accompagne des moments de vie, des instants de présence, des projets humains. Toujours avec la même posture : être là sans s’imposer, observer, ressentir, capter l’essentiel.
                        </p>

                        <blockquote className="border-l-4 border-[#fca00b] pl-6 py-2 italic text-gray-800 text-xl font-serif my-8">
                            « Je ne cherche pas à fabriquer une image.<br />
                            Je cherche à révéler ce qui est déjà là. »
                        </blockquote>

                        <p>
                            L’évolution de la photo et de la vidéo mobile renforce cette vision. À l’aise avec une caméra professionnelle comme avec un smartphone, FEELPROD associe naturellement image fixe et image en mouvement. L’outil s’efface au profit du regard.
                        </p>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-8">
                            <p className="font-bold text-lg mb-4">Aujourd’hui, FEELPROD est à la croisée de plusieurs mondes :</p>
                            <ul className="list-none space-y-2 pl-0">
                                <li className="flex items-center gap-2"><span className="text-[#fca00b] text-xl">•</span> la thérapie et la création,</li>
                                <li className="flex items-center gap-2"><span className="text-[#fca00b] text-xl">•</span> le soin et l’image,</li>
                                <li className="flex items-center gap-2"><span className="text-[#fca00b] text-xl">•</span> la technologie et l’humain.</li>
                            </ul>
                        </div>

                        <p>
                            <strong>Une même démarche traverse tout :</strong><br />
                            aller chercher la lumière chez les personnes,<br />
                            la mettre en valeur,<br />
                            l’accompagner,<br />
                            l’immortaliser.
                        </p>

                        <p className="text-xl font-bold text-[#1d1d1f] pt-8 border-t border-gray-100">
                            FEELPROD, c’est une vision sensible de l’image.<br />
                            Une attention portée au vivant.<br />
                            Une vie en mouvement.
                        </p>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
