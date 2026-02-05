"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import Reveal from "@/components/Reveal";
import Link from "next/link";

/* -------------------------------------------------------------
   ITEMS DATA (VERSION DEBUG SPACING)
   ------------------------------------------------------------- */
const itemsPromo = [
    { videoId: "exnbHE-BgYw", image: "/assets/images/1-RELLE.png", alt: "RELLE" },
    { videoId: "AGUxUQ5bwXk", image: "/assets/images/2-BARRIOLATINOSALSA.png", alt: "BARRIO" },
    { videoId: "STp41rTjP-Q", image: "/assets/images/3-LARTISTEVENT.png", alt: "ARTIST" },
];

const itemsImmersion = [
    { videoId: "dp8Tt0_H7is", image: "/assets/images/7-BAGARTLAND.png", alt: "BAGART" },
    { videoId: "5XSxn3IJvG8", image: "/assets/images/8-BARRIOCARNAVAL.png", alt: "BARRIO" },
    { videoId: "GsFDEIkVxAo", image: "/assets/images/9-KARMA.png", alt: "KARMA" },
];

const itemsSouvenirs = [
    { videoId: "025yJW0B3GQ", image: "/assets/images/12-ANNIALLEMAGNE.png", alt: "ANNI" },
    { videoId: "ucJyA0cVRdg", image: "/assets/images/13-MARIAGE.png", alt: "MARIAGE" },
    { videoId: "v6BcNiiB9DA", image: "/assets/images/15-THEOSURF.png", alt: "THEO" },
];

const itemsPodcast = [
    { link: "#", image: "/assets/images/tdt1.png", alt: "Podcast 1" },
    { link: "#", image: "/assets/images/TDT2.png", alt: "Podcast 2" },
    { link: "#", image: "/assets/images/TDT3.png", alt: "Podcast 3" },
];

const itemsMusique = [
    { link: "#", image: "/assets/images/music_tu_crois.jpg", alt: "Music 1" },
    { link: "#", image: "/assets/images/music_charenton.jpg", alt: "Music 2" },
    { link: "#", image: "/assets/images/music_summer_2025.jpg", alt: "Music 3" },
];

export default function DebugSpacingPage() {
    const handleOpenModal = () => console.log("Debug: Open Modal");

    return (
        <main className="min-h-screen bg-neutral-400 pb-40">
            {/* HEADER DEBUG */}
            <div className="fixed top-0 left-0 right-0 bg-neutral-900 text-white p-4 z-[9999] flex justify-between items-center shadow-lg border-b border-white/20">
                <div>
                    <h1 className="font-bold text-xl text-yellow-500">MODE DEBUG MÉTROLOGIE V5</h1>
                    <p className="text-[10px] text-gray-400">
                        🟦 SECTION | 🟩 HEADER | 🩷 VIDÉO (CONTAINER) | 🟥 ESPACES (VALEURS)
                    </p>
                </div>
                <Link href="/" className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition">
                    RETOUR SITE
                </Link>
            </div>

            <div className="pt-32 space-y-16 px-4">

                {/* 1. HERO */}
                <div className="relative border-4 border-blue-600 bg-white">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 z-50">SECTION: HERO (REF)</div>
                    <div className="h-[20vh] flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 m-4">
                        (HERO SIMPLIFIÉ)
                    </div>
                </div>

                {/* 2. PROMO */}
                <div className="relative">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 z-50 pointer-events-none">SECTION: PROMO</div>
                    <SectionWithParallaxDebug id="evasion" theme="theme-arcade" className="pb-2 md:pb-24">
                        <div className="section-header header-promo pr-[5%] relative border-4 border-green-500 box-border p-2 pb-16" style={{ "--comic-color": "#4CC9F0" } as React.CSSProperties}>
                            <div className="absolute top-0 left-0 bg-green-600 text-white text-[10px] px-1 pointer-events-none">HEADER</div>
                            <Reveal>
                                <div className="relative border-2 border-yellow-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-yellow-600 text-[8px] font-bold">TITLE</span>
                                    <h2 className="service-logo title-promo">Promo</h2>
                                </div>
                                <br />
                                <div className="relative border-2 border-cyan-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-cyan-600 text-[8px] font-bold">SUB</span>
                                    <p className="service-tagline subtitle-promo" style={{ fontSize: '20px' }}>Nouveaux regards</p>
                                </div>
                                <div className="explanation-box explanation-promo bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm border-2 border-purple-500 mt-8">
                                    <span className="absolute top-0 right-0 bg-purple-600 text-white text-[8px] px-1">TXT BOX</span>
                                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-purple-600 text-[10px] font-bold">⬇ MARGIN 20px ⬇</span>
                                    <p className="text-sm leading-relaxed font-light font-sans">
                                        Partez à la découverte d'artistes et de lieux d'exception...
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* MESURE INTERMÉDIAIRE */}
                        <div className="flex justify-center my-2">
                            <span className="bg-gray-800 text-white text-[9px] px-2 rounded-full">↕ ESPACE AUTO (REVEAL) ↕</span>
                        </div>

                        <Reveal delay={0.2}>
                            <div className="relative border-4 border-orange-500 mt-0 box-border">
                                <div className="absolute top-0 left-0 bg-orange-600 text-white text-[10px] px-1 z-50 pointer-events-none">CAROUSEL</div>
                                <InfiniteCarousel variant="small" onOpen={handleOpenModal} items={itemsPromo} />
                            </div>
                        </Reveal>

                        {/* MESURE ESPACE SOUS */}
                        <div className="espace-sous-promo relative w-full border-2 border-red-500 border-dashed bg-red-50/50" style={{ minHeight: '3vh' }}>
                            <span className="text-red-600 font-bold bg-white text-[10px] px-1 absolute bottom-0 right-0 pointer-events-none border border-red-200 shadow-sm">
                                ↕ ESPACE SOUS: 3vh (Mobile) / 4vh (Desktop) ↕
                            </span>
                        </div>
                    </SectionWithParallaxDebug>
                </div>

                {/* 3. IMMERSION */}
                <div className="relative">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 z-50 pointer-events-none">SECTION: IMMERSION</div>
                    <SectionWithParallaxDebug id="adrenaline" theme="theme-music" zoomVideo>
                        <div className="section-header header-immersion pr-[5%] relative border-4 border-green-500 box-border p-2 pb-16" style={{ "--comic-color": "#F7E733" } as React.CSSProperties}>
                            <div className="absolute top-0 left-0 bg-green-600 text-white text-[10px] px-1 pointer-events-none">HEADER</div>
                            <Reveal>
                                <div className="relative border-2 border-yellow-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-yellow-600 text-[8px] font-bold">TITLE</span>
                                    <h2 className="service-logo title-immersion">Immersion</h2>
                                </div>
                                <div className="relative border-2 border-cyan-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-cyan-600 text-[8px] font-bold">SUB</span>
                                    <p className="service-tagline subtitle-immersion" style={{ fontSize: '20px' }}>Au cœur de l'action.</p>
                                </div>
                                <div className="explanation-box explanation-immersion bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm border-2 border-purple-500 mt-8">
                                    <span className="absolute top-0 right-0 bg-purple-600 text-white text-[8px] px-1">TXT BOX</span>
                                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-purple-600 text-[10px] font-bold">⬇ MARGIN 20px ⬇</span>
                                    <p className="text-sm leading-relaxed font-light font-sans">
                                        Des carnavals vibrants aux compétitions sportives intenses...
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        <div className="flex justify-center my-2">
                            <span className="bg-gray-800 text-white text-[9px] px-2 rounded-full">↕ ESPACE AUTO ↕</span>
                        </div>

                        <Reveal delay={0.2}>
                            <div className="relative border-4 border-orange-500 mt-0 box-border">
                                <div className="absolute top-0 left-0 bg-orange-600 text-white text-[10px] px-1 z-50 pointer-events-none">CAROUSEL</div>
                                <InfiniteCarousel variant="small" onOpen={handleOpenModal} items={itemsImmersion} />
                            </div>
                        </Reveal>

                        <div className="espace-sous-immersion relative w-full border-2 border-red-500 border-dashed bg-red-50/50" style={{ minHeight: '3vh' }}>
                            <span className="text-red-600 font-bold bg-white text-[10px] px-1 absolute bottom-0 right-0 pointer-events-none border border-red-200 shadow-sm">
                                ↕ ESPACE SOUS: 3vh (Mobile) / 4vh (Desktop) ↕
                            </span>
                        </div>
                    </SectionWithParallaxDebug>
                </div>

                {/* 4. SOUVENIRS */}
                <div className="relative">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 z-50 pointer-events-none">SECTION: SOUVENIRS</div>
                    <SectionWithParallaxDebug id="souvenirs" theme="theme-tv" className="souvenirs-only md:pt-0">
                        <div className="section-header header-souvenirs pr-[5%] relative border-4 border-green-500 box-border p-2 pb-16" style={{ "--comic-color": "#FF9F1C" } as React.CSSProperties}>
                            <div className="absolute top-0 left-0 bg-green-600 text-white text-[10px] px-1 pointer-events-none">HEADER</div>
                            <Reveal>
                                <div className="relative border-2 border-yellow-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-yellow-600 text-[8px] font-bold">TITLE</span>
                                    <h2 className="service-logo title-souvenirs">Souvenirs</h2>
                                </div>
                                <div className="relative border-2 border-cyan-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-cyan-600 text-[8px] font-bold">SUB</span>
                                    <p className="service-tagline subtitle-souvenirs" style={{ fontSize: '20px' }}>Des moments inoubliables.</p>
                                </div>
                                <div className="explanation-box explanation-souvenirs bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm border-2 border-purple-500 mt-8">
                                    <span className="absolute top-0 right-0 bg-purple-600 text-white text-[8px] px-1">TXT BOX</span>
                                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-purple-600 text-[10px] font-bold">⬇ MARGIN 20px ⬇</span>
                                    <p className="text-sm leading-relaxed font-light font-sans">
                                        La magie de l'iPhone pour capturer l'authenticité...
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        <div className="flex justify-center my-2">
                            <span className="bg-gray-800 text-white text-[9px] px-2 rounded-full">↕ ESPACE AUTO ↕</span>
                        </div>

                        <Reveal delay={0.2}>
                            <div className="relative border-4 border-orange-500 mt-0 box-border">
                                <div className="absolute top-0 left-0 bg-orange-600 text-white text-[10px] px-1 z-50 pointer-events-none">CAROUSEL</div>
                                <InfiniteCarousel variant="small" onOpen={handleOpenModal} items={itemsSouvenirs} />
                            </div>
                        </Reveal>

                        <div className="espace-sous-souvenirs relative w-full border-2 border-red-500 border-dashed bg-red-50/50" style={{ minHeight: '0vh' }}>
                            <span className="text-red-600 font-bold bg-white text-[10px] px-1 absolute bottom-0 right-0 pointer-events-none border border-red-200 shadow-sm">
                                ↕ ESPACE SOUS: 0vh (Target) ↕
                            </span>
                        </div>
                    </SectionWithParallaxDebug>
                </div>

                {/* 5. PODCASTS */}
                <div className="relative">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 z-50 pointer-events-none">SECTION: PODCASTS</div>
                    <section className="section-podcast-container relative border-4 border-blue-600 border-dashed box-border bg-white">
                        <div className="spacing-section-top relative w-full border-2 border-red-500 border-dashed bg-red-50/50" style={{ minHeight: '0vh' }}>
                            <span className="text-red-600 font-bold bg-white text-[10px] px-1 pointer-events-none">↕ SPACING TOP: 0vh (Mobile) ↕</span>
                        </div>

                        <div className="section-header header-podcasts px-[5%] relative border-4 border-green-500 box-border p-2 pb-16" style={{ "--comic-color": "#4CAF50" } as React.CSSProperties}>
                            <div className="absolute top-0 left-0 bg-green-600 text-white text-[10px] px-1 pointer-events-none">HEADER</div>
                            <Reveal>
                                <div className="relative border-2 border-yellow-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-yellow-600 text-[8px] font-bold">TITLE</span>
                                    <h2 className="service-logo title-podcasts">Podcasts</h2>
                                </div>
                                <br />
                                <div className="relative border-2 border-cyan-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-cyan-600 text-[8px] font-bold">SUB</span>
                                    <p className="service-tagline subtitle-podcasts text-gray-500" style={{ fontSize: '20px' }}>La santé autrement...</p>
                                </div>
                                <div className="explanation-box explanation-podcasts bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm border-2 border-purple-500 mt-8">
                                    <span className="absolute top-0 right-0 bg-purple-600 text-white text-[8px] px-1">TXT BOX</span>
                                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-purple-600 text-[10px] font-bold">⬇ MARGIN 20px ⬇</span>
                                    <p className="text-sm leading-relaxed font-light font-sans">
                                        L'alliance de la technique...
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        <div className="flex justify-center my-2">
                            <span className="bg-gray-800 text-white text-[9px] px-2 rounded-full">↕ ESPACE AUTO ↕</span>
                        </div>

                        <Reveal delay={0.2}>
                            <div className="relative border-4 border-orange-500 mt-0 box-border">
                                <div className="absolute top-0 left-0 bg-orange-600 text-white text-[10px] px-1 z-50 pointer-events-none">CAROUSEL</div>
                                <InfiniteCarousel variant="square" items={itemsPodcast} />
                            </div>
                        </Reveal>

                        <div className="espace-sous-podcasts relative w-full border-2 border-red-500 border-dashed bg-red-50/50" style={{ minHeight: '0vh' }}>
                            <span className="text-red-600 font-bold bg-white text-[10px] px-1 absolute bottom-0 right-0 pointer-events-none border border-red-200 shadow-sm">
                                ↕ ESPACE SOUS: 0vh (Mobile) ↕
                            </span>
                        </div>
                    </section>
                </div>

                {/* 6. MUSIQUES */}
                <div className="relative">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 z-50 pointer-events-none">SECTION: MUSIQUES</div>
                    <section className="section-musiques-container relative border-4 border-blue-600 border-dashed box-border bg-white">
                        <div className="spacing-section-top relative w-full border-2 border-red-500 border-dashed bg-red-50/50" style={{ minHeight: '0vh' }}>
                            <span className="text-red-600 font-bold bg-white text-[10px] px-1 pointer-events-none">↕ SPACING TOP: 0vh (Mobile) ↕</span>
                        </div>

                        <div className="section-header header-musiques px-[5%] relative border-4 border-green-500 box-border p-2 pb-16" style={{ "--comic-color": "#9C27B0" } as React.CSSProperties}>
                            <div className="absolute top-0 left-0 bg-green-600 text-white text-[10px] px-1 pointer-events-none">HEADER</div>
                            <Reveal>
                                <div className="relative border-2 border-yellow-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-yellow-600 text-[8px] font-bold">TITLE</span>
                                    <h2 className="service-logo title-musiques">Musiques</h2>
                                </div>
                                <br />
                                <div className="relative border-2 border-cyan-400 inline-block mb-10 w-full md:w-auto">
                                    <span className="absolute -top-3 left-0 text-cyan-600 text-[8px] font-bold">SUB</span>
                                    <p className="service-tagline subtitle-musiques text-gray-500" style={{ fontSize: '20px' }}>Vibration sonore.</p>
                                </div>
                                <div className="explanation-box explanation-musiques bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm border-2 border-purple-500 mt-8">
                                    <span className="absolute top-0 right-0 bg-purple-600 text-white text-[8px] px-1">TXT BOX</span>
                                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-purple-600 text-[10px] font-bold">⬇ MARGIN 20px ⬇</span>
                                    <p className="text-sm leading-relaxed font-light font-sans">
                                        La création musicale comme fil conducteur...
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        <div className="flex justify-center my-2">
                            <span className="bg-gray-800 text-white text-[9px] px-2 rounded-full">↕ ESPACE AUTO ↕</span>
                        </div>

                        <Reveal delay={0.2}>
                            <div className="relative border-4 border-orange-500 mt-0 box-border">
                                <div className="absolute top-0 left-0 bg-orange-600 text-white text-[10px] px-1 z-50 pointer-events-none">CAROUSEL</div>
                                <InfiniteCarousel variant="square-small" items={itemsMusique} />
                            </div>
                        </Reveal>
                    </section>
                </div>
            </div>
        </main>
    );
}

// Wrapper local pour simuler/debugger SectionWithParallax avec Cadre Rose pour la Vidéo
function SectionWithParallaxDebug({ id, theme, children, zoomVideo, className }: { id: string, theme: string, children: React.ReactNode, zoomVideo?: boolean, className?: string }) {
    const videoSrcMap: Record<string, string> = {
        "souvenirs": "/assets/videos/tv.mp4",
        "adrenaline": "/assets/videos/karma.mp4",
        "evasion": "/assets/videos/divers.mp4"
    };

    return (
        <section className={`service-section ${theme} overflow-hidden ${className || ""} relative border-4 border-blue-600 border-dashed box-border`} id={id}>
            {/* VIDEO CONTAINER (DEBUG: ROSE) */}
            <div className={`video-background absolute inset-0 -top-[10%] opacity-30 pointer-events-none border-4 border-pink-500 border-dashed box-border bg-pink-50/10 z-0`}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[10px] px-2 font-bold shadow-md z-50">
                    🩷 VIDEO CONTAINER (Mobile: 40vh / Desktop: 70vh) 🩷
                </div>
                <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
                    <source src={videoSrcMap[id]} type="video/mp4" />
                </video>
            </div>
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </section>
    )
}
