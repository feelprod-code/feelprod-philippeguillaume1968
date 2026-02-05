"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Scroll-driven opacities pour sections (Opal-style)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const section1Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.4], [0, 1, 0]);
    const section2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6], [0, 1, 0]);
    const section3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.85], [0, 1, 1]);

    // Parallax subtil pour images
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <main ref={containerRef} className="bg-white relative">
            <Navbar />

            {/* Sticky Navigation avec mix-blend */}
            <div className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-6 mix-blend-difference pointer-events-none">
                <span className="text-white font-bold text-xl">FEELPROD</span>
            </div>

            {/* SECTION HERO (Sticky) */}
            <section className="h-[200vh] relative">
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6"
                >
                    <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none">
                        FEELPROD
                    </h1>
                    <p className="text-2xl md:text-3xl font-light tracking-widest uppercase text-neutral-400 mt-6">
                        L'Émotion par le Mouvement
                    </p>
                </motion.div>
            </section>

            {/* SECTION 1: VISION (Sticky Text + Background Image) */}
            <section className="h-[300vh] relative bg-white">
                {/* Image Background Fixe avec Parallax */}
                <motion.div
                    style={{ y: imageY }}
                    className="sticky top-0 h-screen w-full overflow-hidden"
                >
                    <motion.img
                        style={{ scale: imageScale }}
                        src="/assets/images/ap_pont.jpeg"
                        alt="Paris"
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                </motion.div>

                {/* Text Overlay Sticky */}
                <motion.div
                    style={{ opacity: section1Opacity }}
                    className="sticky top-0 h-screen flex items-center justify-center pointer-events-none"
                >
                    <div className="max-w-4xl px-6 text-center">
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                            Opal was founded in 2020 <br />with a singular idea.
                        </h2>
                        <p className="text-2xl md:text-3xl font-light text-neutral-600 leading-relaxed">
                            Capturer l'invisible dans chaque battement.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 2: MISSION (Sticky Text + Nouvelle Image) */}
            <section className="h-[300vh] relative bg-white">
                {/* Grid d'images qui apparaissent */}
                <div className="sticky top-0 h-screen grid grid-cols-2 gap-4 p-4">
                    <motion.div
                        style={{
                            scale: useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]),
                            opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1])
                        }}
                        className="overflow-hidden"
                    >
                        <img src="/assets/images/ap_steadyphil.JPG" alt="Steadycam" className="w-full h-full object-cover grayscale" />
                    </motion.div>
                    <motion.div
                        style={{
                            scale: useTransform(scrollYProgress, [0.45, 0.55], [0.8, 1]),
                            opacity: useTransform(scrollYProgress, [0.45, 0.55], [0, 1])
                        }}
                        className="overflow-hidden"
                    >
                        <img src="/assets/images/ap_stabbvaw.JPG" alt="Stabilisation" className="w-full h-full object-cover grayscale" />
                    </motion.div>
                    <motion.div
                        style={{
                            scale: useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]),
                            opacity: useTransform(scrollYProgress, [0.5, 0.6], [0, 1])
                        }}
                        className="overflow-hidden"
                    >
                        <img src="/assets/images/ap_barriophil.jpg" alt="En action" className="w-full h-full object-cover grayscale" />
                    </motion.div>
                    <motion.div
                        style={{
                            scale: useTransform(scrollYProgress, [0.55, 0.65], [0.8, 1]),
                            opacity: useTransform(scrollYProgress, [0.55, 0.65], [0, 1])
                        }}
                        className="overflow-hidden"
                    >
                        <img src="/assets/images/ap_pont alex.jpg" alt="Pont" className="w-full h-full object-cover grayscale" />
                    </motion.div>
                </div>

                {/* Texte par-dessus */}
                <motion.div
                    style={{ opacity: section2Opacity }}
                    className="sticky top-0 h-screen flex items-center justify-center pointer-events-none"
                >
                    <div className="max-w-4xl px-6 text-center">
                        <h2 className="text-5xl md:text-8xl font-bold leading-tight text-white mix-blend-difference">
                            The objects you use most often, <br />should be the best things you own.
                        </h2>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 3: PHILOSOPHY (Sticky Final) */}
            <section className="h-[200vh] relative bg-neutral-900">
                <motion.div
                    style={{ opacity: section3Opacity }}
                    className="sticky top-0 h-screen flex items-center justify-center text-white px-6"
                >
                    <div className="max-w-5xl text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">
                            We believe that if you are surrounded by quality, <br />each day is a bit better.
                        </h2>
                        <p className="text-xl md:text-2xl font-light text-neutral-400 mt-10">
                            Here's to more better days.
                        </p>
                        <div className="mt-20">
                            <a href="/contact" className="inline-block text-lg uppercase tracking-[0.3em] border-b-2 border-white pb-2 hover:opacity-50 transition-opacity">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Spacer pour la fin du scroll */}
            <div className="h-screen" />

        </main>
    );
}
