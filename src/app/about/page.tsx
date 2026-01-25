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

            {/* Content Section with Fixed Layout */}
            <section className="w-full bg-white relative z-10 py-16 md:py-24">
                {/* Main Fluid Container with safe continuous margins - 85% width on mobile ensures no edge touching */}
                <div className="w-[85%] max-w-4xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-16">
                            <h1 className="text-[#1d1d1f] mb-4 text-4xl md:text-7xl font-bold tracking-tighter">L'ARTISAN</h1>
                            <p className="text-xl md:text-3xl font-bold text-gray-400 uppercase tracking-widest">Derrière la caméra</p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="w-full max-w-2xl mx-auto">
                            <div className="text-lg leading-loose text-gray-800 font-light tracking-wide text-left md:text-justify">
                                <p className="mb-8">
                                    <span className="text-5xl font-bold text-[#1d1d1f] mr-4 float-left leading-none mt-2 font-serif">F</span>
                                    <strong>EELPROD est né d’un regard porté sur l’humain.</strong><br />
                                    À l’origine, il y a Philippe Guillaume, thérapeute de profession, passionné d’image et de mouvement, guidé depuis toujours par une même recherche : révéler ce qui est vivant, sensible et lumineux chez les personnes.
                                </p>

                                <p className="mb-8">
                                    FEELPROD n’est pas un simple nom de production.<br />
                                    Il exprime une intention.<br />
                                    Sentir avant de montrer. Ressentir avant de produire.<br />
                                    Mettre en lumière ce qui anime, ce qui vibre, ce qui relie.
                                </p>

                                <div className="my-12 pl-8 border-l-4 border-[#fca00b] py-6 bg-gray-50 rounded-r-xl">
                                    <p className="italic text-xl text-gray-700 font-serif leading-relaxed">
                                        « Dans mon métier de thérapeute, je vais chercher chez les personnes leurs ressources, leur capacité à se remettre en mouvement. Avec l’image, je fais exactement la même chose. »
                                    </p>
                                </div>

                                <p className="mb-8">
                                    Très tôt, Philippe s’intéresse à la vidéo, bien avant l’ère des smartphones. Le sport, le geste, l’effort, la coordination, le mouvement l’attirent naturellement. Il traverse les évolutions technologiques successives — vidéo, photo, montage, diffusion — non par goût de la technique seule, mais parce que chaque outil affine la manière de raconter le réel.
                                </p>

                                <p className="mb-8">
                                    FEELPROD s’est construit dans cette liberté : filmer, monter, produire, diffuser.<br />
                                    Une approche autonome, légère, complète.<br />
                                    Comprendre le son, l’image, le rythme, l’émotion.
                                </p>

                                <p className="mb-12">
                                    Danse, sport, événements, entreprises…<br />
                                    FEELPROD accompagne des moments de vie, des instants de présence, des projets humains. Toujours avec la même posture : être là sans s’imposer, observer, ressentir, capter l’essentiel.
                                </p>

                                <div className="my-12 pl-8 border-l-4 border-[#fca00b] py-6 bg-gray-50 rounded-r-xl">
                                    <p className="italic text-xl text-gray-700 font-serif leading-relaxed">
                                        « Je ne cherche pas à fabriquer une image. Je cherche à révéler ce qui est déjà là. »
                                    </p>
                                </div>

                                <p className="mb-8">
                                    L’évolution de la photo et de la vidéo mobile renforce cette vision. À l’aise avec une caméra professionnelle comme avec un smartphone, FEELPROD associe naturellement image fixe et image en mouvement. L’outil s’efface au profit du regard.
                                </p>

                                <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-3xl my-16 shadow-lg shadow-gray-100/50">
                                    <h3 className="font-bold text-[#1d1d1f] text-center mb-8 text-sm uppercase tracking-[0.25em] font-sans">Aujourd’hui, FEELPROD est à la croisée de plusieurs mondes</h3>
                                    <ul className="space-y-6 text-center text-gray-700 font-medium text-lg list-none p-0">
                                        <li className="flex flex-col md:flex-row items-center justify-center gap-3">
                                            <span className="hidden md:block w-2 h-2 bg-[#fca00b] rounded-full"></span>
                                            la thérapie et la création
                                        </li>
                                        <li className="flex flex-col md:flex-row items-center justify-center gap-3">
                                            <span className="hidden md:block w-2 h-2 bg-[#fca00b] rounded-full"></span>
                                            le soin et l’image
                                        </li>
                                        <li className="flex flex-col md:flex-row items-center justify-center gap-3">
                                            <span className="hidden md:block w-2 h-2 bg-[#fca00b] rounded-full"></span>
                                            la technologie et l’humain
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-20 text-center px-4">
                                    <p className="text-xl font-medium text-[#1d1d1f] mb-3">Une même démarche traverse tout :</p>
                                    <p className="italic text-gray-500 font-light text-2xl font-serif">aller chercher la lumière chez les personnes, la mettre en valeur, l’accompagner, l’immortaliser.</p>
                                </div>

                                <div className="text-center pt-16 border-t border-gray-100 mt-16 pb-12 w-full">
                                    <div className="inline-block text-center transform hover:scale-105 transition-transform duration-500">
                                        <p className="text-4xl md:text-5xl font-black text-[#1d1d1f] leading-none mb-6 tracking-tighter">
                                            FEELPROD
                                        </p>
                                        <p className="text-xl text-gray-500 font-normal mb-1">c’est une vision sensible de l’image.</p>
                                        <p className="text-2xl text-gray-800 font-medium mb-1">Une attention portée au vivant.</p>
                                        <p className="text-2xl text-[#fca00b] font-bold uppercase tracking-widest mt-6">Une vie en mouvement.</p>
                                    </div>
                                </div>
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
