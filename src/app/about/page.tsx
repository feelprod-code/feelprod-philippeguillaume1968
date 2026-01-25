"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const images = [
    "assets/images/steadyphil.JPG",
    "assets/images/travelingphil.JPG",
    "assets/images/barriophil.jpg",
    "assets/images/phil.PNG",
];

export default function AboutPage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="bg-white min-h-screen">
            {/* Navigation (Simple version matching style) */}
            <nav className="fixed top-0 left-0 w-full h-[80px] bg-white/90 backdrop-blur-md border-b border-black/5 flex justify-between items-center px-6 md:px-10 z-50">
                <Link
                    href="/"
                    className="font-bold text-xl tracking-widest text-[#1d1d1f] hover:opacity-70 transition-opacity"
                >
                    FEELPROD
                </Link>
                <Link
                    href="/"
                    className="text-xs md:text-sm font-semibold tracking-wide hover:underline uppercase"
                >
                    Retour Accueil
                </Link>
            </nav>

            {/* Hero Slideshow Section */}
            <section className="relative h-[70vh] w-full overflow-hidden bg-black">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={images[index]}
                            alt="Philippe Guillaume"
                            className="w-full h-full object-cover object-top"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Overlay Title */}
                <div className="absolute inset-0 flex flex-col justify-center items-center z-10 p-4 text-center">
                    <Reveal>
                        <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter drop-shadow-lg mix-blend-overlay opacity-90" style={{ fontFamily: 'var(--font-comic)' }}>
                            L'ARTISAN
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-white/90 text-xl md:text-2xl font-light tracking-widest mt-4 uppercase">
                            Derrière la caméra
                        </p>
                    </Reveal>
                </div>

                {/* Gradient Fade to Content */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
            </section>

            {/* Content Section */}
            <section className="relative z-30 px-6 py-20 md:px-20 max-w-5xl mx-auto -mt-10">
                <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl border border-gray-100">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1d1d1f]">
                            Mon Histoire
                        </h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="prose prose-lg text-gray-600 leading-relaxed font-medium space-y-6">
                            <p>
                                [Votre texte ici... Racontez votre parcours, votre passion pour l'émotion visuelle, et ce qui rend votre approche unique.]
                            </p>
                            <p>
                                Depuis des années, je parcours le monde avec ma caméra pour capturer l'instant T. Que ce soit au cœur de l'action sportive ou dans l'intimité d'un événement, mon objectif reste le même : sublimer le réel.
                            </p>
                            <p>
                                Je ne fais pas que filmer, je raconte des histoires. VOS histoires.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 flex gap-4">
                        <Link href="/contact" className="px-8 py-3 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">
                            Me Contacter
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
