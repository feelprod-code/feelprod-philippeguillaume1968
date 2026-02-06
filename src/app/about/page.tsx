"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

// --- ANIMATION VARIANTS (STITCH STYLE) ---
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const imageReveal: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" }
    }
};

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen pt-32 md:pt-64 pb-20">
            <Navbar />

            {/* --- HEADER SECTION --- */}
            <section className="px-6 md:px-12 mb-24 md:mb-32 mt-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-6xl md:text-8xl font-light tracking-tight text-[#1d1d1f] mb-8"
                        style={{ fontFamily: 'var(--font-comic)' }}
                    >
                        L'ART DU<br />MOUVEMENT
                    </motion.h1>
                    <motion.div variants={fadeInUp} className="h-1 w-24 bg-black mx-auto mb-8"></motion.div>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 max-w-2xl mx-auto"
                        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                    >
                        Plus qu'une image, une vibration. Nous capturons l'énergie de l'instant pour la rendre éternelle.
                    </motion.p>
                </motion.div>
            </section>

            {/* --- SECTION 1: LA PHILOSOPHIE (Image SteadyPhil) --- */}
            <section className="px-6 md:px-12 mb-24 md:mb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                    {/* Image Animated Wrapper */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:order-1 order-2">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                            variants={imageReveal}
                            className="w-full h-full"
                        >
                            <img
                                src="/assets/images/ap_steadyphil.JPG"
                                alt="Philosophie de l'image"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="md:order-2 order-1"
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-[#1d1d1f]" style={{ fontFamily: 'var(--font-chewy)' }}>
                            Sculpter le Temps
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-gray-700 mb-6 font-light">
                            Dans un monde où tout s'accélère, nous choisissons de donner du poids à chaque seconde. Notre approche n'est pas seulement technique, elle est sensorielle.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-gray-700 font-light">
                            Que ce soit l'architecture majestueuse d'un pont parisien ou l'effervescence d'une foule, nous cherchons la ligne de fuite, le point d'équilibre. L'image ne doit pas seulement être vue, elle doit être ressentie.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* --- SECTION 2: LA TECHNIQUE (Double Image Verticale) --- */}
            <section className="px-6 md:px-12 mb-24 md:mb-32 bg-gray-50 py-24 rounded-[40px] mx-4 md:mx-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-[#1d1d1f]" style={{ fontFamily: 'var(--font-chewy)' }}>
                            Corps & Caméra
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-gray-700 mb-6 font-light">
                            La fluidité n'est pas un hasard. Elle naît de la fusion entre l'opérateur et son outil. Le steadicam n'est plus un accessoire, il devient une extension du regard.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-gray-700 font-light">
                            Être au cœur de l'action sans la perturber. C'est cette présence invisible qui permet de capter l'authenticité brute. Une danse subtile entre le cadreur et le sujet, où chaque mouvement est une respiration.
                        </motion.p>
                    </motion.div>

                    {/* Image Grid (Double Vertical 9:16) */}
                    <div className="flex gap-4 md:gap-8 justify-center h-[500px] md:h-[600px]">
                        {/* Image 1: Pont Alex (N&B, 9:16) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-1/2 h-full rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src="/assets/images/ap_pont alex.jpg"
                                alt="Pont Alexandre III"
                                className="w-full h-full object-cover grayscale" // Forced Grayscale
                            />
                        </motion.div>

                        {/* Image 2: Barrio Stab (Couleur, 9:16, légèrement décalée) */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-1/2 h-full rounded-2xl overflow-hidden shadow-lg mt-8 md:mt-12" // Décalage vertical
                        >
                            <img
                                src="/assets/images/ap_barrio stab.jpg"
                                alt="Stabilisation Action"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* --- SECTION 3: HAUTEUR & VISION (Image Barrio Haut) --- */}
            <section className="px-6 md:px-12 mb-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-5xl mx-auto text-center mb-16"
                >
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-[#1d1d1f]" style={{ fontFamily: 'var(--font-chewy)' }}>
                        Changer de Perspective
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
                        Prendre de la hauteur pour comprendre l'ensemble.
                    </motion.p>
                </motion.div>

                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <img
                            src="/assets/images/ap_barriohaut.jpg"
                            alt="Vue en hauteur"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Overlay Text */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-white text-3xl md:text-5xl font-bold tracking-widest uppercase text-center drop-shadow-lg"
                            style={{ fontFamily: 'var(--font-comic)' }}
                        >
                            Immersion Totale
                        </motion.span>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-20 text-center bg-[#1d1d1f] text-white">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'var(--font-comic)' }}>
                        PRÊT À CRÉER ?
                    </motion.h2>
                    <motion.div variants={fadeInUp}>
                        <a
                            href="/contact"
                            className="inline-block px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/50"
                        >
                            PARLONS DE VOTRE PROJET
                        </a>
                    </motion.div>
                </motion.div>
            </section>

        </main>
    );
}
