"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animation variants pour les textes
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
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
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    return (
        <main ref={containerRef} className="bg-white min-h-screen">
            <Navbar />

            {/* ==================== BLOC A : HERO SECTION ==================== */}
            <section className="relative h-screen overflow-hidden">
                {/* Image Hero avec zoom subtil */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src="/assets/images/ap_barrio stab.jpg"
                        alt="Action en mouvement"
                        className="w-full h-full object-cover about-hero-img"
                    // IMAGE: ap_barrio stab.jpg | Mobile: 35% | Desktop: 50%
                    />
                    {/* Overlay sombre pour contraste texte */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>

                {/* Titre Parallaxe */}
                <div className={`
                    absolute bottom-0 left-0 w-full z-10
                    container mx-auto px-4 sm:px-6 lg:px-8 
                    pb-32 
                    md:pb-32
                    flex justify-center
                `}>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center leading-none"
                        style={{
                            fontFamily: 'var(--font-luckiest-guy)',
                            textShadow: '4px 4px 0px rgba(0,0,0,0.8)'
                        }}
                    >
                        L'ART DU<br />MOUVEMENT
                    </motion.h1>
                </div>
            </section>

            {/* ==================== BLOC B : L'ORIGINE (Texte Gauche / Image Droite) ==================== */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Colonne Texte */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="lg:sticky lg:top-32"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl font-bold mb-6 text-[#FF9F1C]"
                            style={{ fontFamily: 'var(--font-chewy)' }}
                        >
                            Tout a commencé par...
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                            Un regard différent. Une volonté de capturer non pas ce qui est visible, mais ce qui est ressenti. Derrière chaque prise, il y a une intention, une recherche de l'émotion pure.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                            Nous ne sommes pas de simples observateurs. Nous sommes des traducteurs d'instants. Chaque cadrage, chaque mouvement de caméra est pensé pour amplifier l'instant, pour le transformer en une expérience sensorielle totale.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-gray-700">
                            Que ce soit au cœur d'un concert, dans les rues vibrantes d'un quartier ou face à l'architecture majestueuse d'un monument, nous cherchons toujours la même chose : <span className="font-bold text-black">le point où l'image devient vivante</span>.
                        </motion.p>
                    </motion.div>

                    {/* Colonne Image avec Parallaxe (via margin, pas transform) */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-32"
                        >
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="/assets/images/ap_blonde.png"
                                    alt="Portrait"
                                    className="w-full h-full object-cover about-blonde-img"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Spacer de sécurité */}
                <div className="h-12 md:h-24"></div>
            </section>

            {/* ==================== BLOC C : LA FUSION (Image Gauche / Texte Droite) ==================== */}
            <section className="bg-gray-50 py-24 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Colonne Images Montage (Superposition 2.5D) */}
                        <div className="relative h-[500px] md:h-[600px] order-2 lg:order-1">
                            {/* Image Fond */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="absolute left-0 top-0 w-[60%] h-[75%] rounded-xl overflow-hidden shadow-lg border-4 border-white"
                            >
                                <img
                                    src="/assets/images/ap_pont alex.jpg"
                                    alt="Architecture"
                                    className="w-full h-full object-cover grayscale about-pont-img"
                                />
                            </motion.div>

                            {/* Image Premier Plan */}
                            <motion.div
                                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute right-0 bottom-0 w-[65%] h-[80%] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10"
                            >
                                <img
                                    src="/assets/images/ap_stabbvaw.JPG"
                                    alt="Stabilisation"
                                    className="w-full h-full object-cover about-steady-img"
                                />
                            </motion.div>
                        </div>

                        {/* Colonne Texte */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="order-1 lg:order-2"
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="text-4xl md:text-5xl font-bold mb-6 text-[#1d1d1f]"
                                style={{ fontFamily: 'var(--font-chewy)' }}
                            >
                                Corps & Caméra
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                                La fluidité n'est pas un hasard. Elle naît de la fusion entre l'opérateur et son outil. Le steadicam n'est plus un simple accessoire technique, il devient une extension naturelle du regard, une prothèse sensorielle.
                            </motion.p>

                            <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                                Être au cœur de l'action sans la perturber. C'est cette présence invisible qui permet de capter l'authenticité brute. Une danse subtile entre le cadreur et le sujet, où chaque mouvement est une respiration, chaque pan de caméra une émotion traduite.
                            </motion.p>

                            <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-gray-700">
                                Le corps s'efface. La caméra voit ce que l'œil humain ne peut saisir. C'est là que commence le véritable travail : <span className="font-bold text-black">transformer le réel en récit visuel</span>.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                {/* Spacer de sécurité */}
                <div className="h-12 md:h-24"></div>
            </section>

            {/* ==================== BLOC D : GALERIE CINÉTIQUE ==================== */}
            <section className="py-24 md:py-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1d1d1f]"
                        style={{ fontFamily: 'var(--font-chewy)' }}
                    >
                        Dans l'Instant
                    </motion.h2>
                    <p className="text-center text-gray-600 text-lg">Les images en mouvement</p>
                </div>

                {/* Image unique centrée */}
                <div className="flex justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-5xl"
                    >
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="/assets/images/ap_barriophil.jpg"
                                alt="Vision du cadre"
                                className="w-full h-full object-cover about-cine-img"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ==================== OUTRO : Citation ==================== */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <blockquote className="text-3xl md:text-4xl font-light italic text-gray-800 leading-relaxed">
                        "Nous ne capturons pas des images.<br />
                        Nous sculptons des <span className="font-bold text-[#FF9F1C]" style={{ fontFamily: 'var(--font-chewy)' }}>émotions</span>."
                    </blockquote>
                </motion.div>
            </section>

            {/* Spacer Final */}
            <div className="h-24"></div>
        </main>
    );
}
