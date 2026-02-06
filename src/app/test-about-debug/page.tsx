"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

// ==========================================
// MODE DEBUG : CALQUES SUR PROD
// ==========================================
// Ce fichier est une COPIE EXACTE de la PROD, avec des indicateurs visuels superposés.

const debugStyles = `
  /* Les calques de debug ne doivent pas perturber le layout (position absolute ou outline) */
  .debug-overlay { pointer-events: none; z-index: 9999; }
  
  /* BOX SPATIALE (Cadre autour d'une section ou élément) */
  .dbg-box {
      border: 4px solid blue !important; /* EPAISSI */
      position: relative;
  }
  .dbg-box::after {
      content: attr(data-label);
      position: absolute;
      top: 0; right: 0;
      background: blue; color: white;
      font-size: 10px; padding: 1px 4px;
      opacity: 0.7;
  }

  /* VISUALISATION DES MARGES/PADDING (Zone colorée) */
  /* On utilise des divs 'fantômes' en absolute pour montrer l'espace */
  .dbg-space-visu {
      position: absolute;
      left: 0; width: 100%;
      /* HACHURES VERTES TRANSPARENTES */
      background: repeating-linear-gradient(
        45deg,
        rgba(0, 128, 0, 0.15),
        rgba(0, 128, 0, 0.15) 10px,
        transparent 10px,
        transparent 20px
      );
      border-top: 1px dotted green;
      border-bottom: 1px dotted green;
      display: flex; align-items: center; justify-content: center;
      color: green; font-weight: bold; font-size: 10px;
      pointer-events: none;
      z-index: 50;
  }
  
  /* SPACER (Violet) */
  .dbg-spacer {
      outline: 2px solid magenta;
      position: relative;
  }
  .dbg-spacer::before {
      content: attr(data-id);
      position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
      background: magenta; color: white; font-size: 10px; padding: 0 4px;
      z-index: 100;
  }
`;

export default function AboutPageDebug() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // Variantes animations (identiques Prod)
    const fadeInUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
    const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

    return (
        <main ref={containerRef} className="bg-white min-h-screen relative">
            <style>{debugStyles}</style>
            <Navbar />

            <div className="fixed top-20 left-4 z-50 bg-black text-white p-4 rounded shadow-xl text-xs font-mono">
                <h1 className="text-xl font-bold text-yellow-500 mb-2">DEBUG "CALQUES"</h1>
                <p>Ceci est la COPIE EXACTE de la PROD.</p>
                <p>Les cadres bleus = Sections.</p>
                <p>Les cadres Violets = Spacers.</p>
                <p>Nous allons traquer les espaces.</p>
            </div>

            {/* ==================== BLOC A : HERO ==================== */}
            <section className="relative h-screen overflow-hidden dbg-box" data-label="SECTION A">
                <motion.div className="absolute inset-0">
                    <img src="/assets/images/ap_barrio stab.jpg" className="w-full h-full object-cover about-hero-img" />
                    <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 px-4 flex justify-center flex-col items-center w-[90%] md:w-full" style={{ paddingBottom: '200px' }}>
                    <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center leading-none" style={{ fontFamily: 'var(--font-luckiest-guy)' }}>
                        L'ART DU<br />MOUVEMENT
                    </motion.h1>
                </div>
            </section>

            {/* ==================== BLOC B : ORIGINE ==================== */}
            <section className="bg-blue-100 relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0 md:pt-32 md:pb-0 dbg-box" data-label="SECTION B (BLEU)">
                {/* Visualisation du Padding Haut de Section B (qui est de 24 ou 32) */}
                <div className="dbg-space-visu top-0 h-24 md:h-32" style={{ content: '"PADDING HAUT B"' }}>PADDING HAUT SECTION B</div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <motion.div className="lg:sticky lg:top-32 w-[90%] mx-auto lg:w-full lg:mx-0 justify-self-center lg:justify-self-start">
                        <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF9F1C]" style={{ fontFamily: 'var(--font-chewy)' }}>
                            Tout a commencé par...
                        </motion.h2>
                        <motion.p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                            Un regard différent. Une volonté de capturer non pas ce qui est visible, mais ce qui est ressenti.
                        </motion.p>
                        <motion.p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                            Nous ne sommes pas de simples observateurs. Nous sommes des traducteurs d'instants.
                        </motion.p>
                        <motion.p className="text-lg md:text-xl leading-relaxed text-gray-700">
                            Que ce soit au cœur d'un concert... <span className="font-bold text-black">le point où l'image devient vivante</span>.
                        </motion.p>
                    </motion.div>
                    <div className="relative">
                        <div className="sticky top-32">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                                <img src="/assets/images/ap_blonde.png" className="w-full h-full object-cover about-blonde-img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer de sécurité (vide en prod) */}

                {/* Spacer Ajustable (ENTRE B ET C) - ATTENTION il est DANS la section B en prod */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16 dbg-spacer" data-id="SPACER 1"></div>
                {/* Visualisation Padding Bas B (SUPPRIMÉ) */}
                <div className="dbg-space-visu bottom-0 h-0 border-b-2 border-red-500 text-red-500">❌ PADDING BAS B (pb-0)</div>
            </section>

            {/* ==================== BLOC C : FUSION ==================== */}
            <section className="bg-purple-100 relative z-10 pt-8 pb-24 md:pt-12 md:pb-32 dbg-box" data-label="SECTION C (VIOLET)">
                <div className="dbg-space-visu top-0 h-8 md:h-12">PADDING HAUT SECTION C (-2/3)</div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative h-[500px] md:h-[600px] order-2 lg:order-1">
                            <div className="absolute left-0 top-0 w-[60%] h-[75%] rounded-xl overflow-hidden shadow-lg border-4 border-white">
                                <img src="/assets/images/ap_pont alex.jpg" className="w-full h-full object-cover grayscale about-pont-img" />
                            </div>
                            <div className="absolute right-0 bottom-0 w-[65%] h-[80%] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10">
                                <img src="/assets/images/ap_stabbvaw.JPG" className="w-full h-full object-cover about-steady-img" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 w-[90%] mx-auto lg:w-full lg:mx-0 justify-self-center lg:justify-self-start">
                            <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1d1d1f]" style={{ fontFamily: 'var(--font-chewy)' }}>
                                Corps & Caméra
                            </motion.h2>
                            <motion.p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                                La fluidité n'est pas un hasard. Elle naît de la fusion entre l'opérateur et son outil.
                            </motion.p>
                            <motion.p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                                Être au cœur de l'action sans la perturber.
                            </motion.p>
                            <motion.p className="text-lg md:text-xl leading-relaxed text-gray-700">
                                Le corps s'efface... <span className="font-bold text-black">transformer le réel en récit visuel</span>.
                            </motion.p>
                        </div>
                    </div>
                </div>
                {/* Visualisation Padding Bas C */}
                <div className="dbg-space-visu bottom-0 h-24 md:h-32">⬇️ PADDING BAS C (py-24/32)</div>
            </section>

            {/* ==================== BLOC D : GALERIE ==================== */}
            <section className="bg-orange-100 relative z-10 pb-0 pt-0 md:pb-0 md:pt-0 overflow-hidden dbg-box" data-label="SECTION D (ORANGE)">
                {/* SPACER 2 (Début de section D en Prod) */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16 dbg-spacer" data-id="SPACER 2"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4 mt-0 dbg-box" data-label="TITRE D (mt-0)">
                    <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1d1d1f]" style={{ fontFamily: 'var(--font-chewy)' }}>
                        Dans l'Instant
                    </motion.h2>
                    <p className="text-center text-gray-600 text-lg">Les images en mouvement</p>
                </div>

                <div className="flex justify-center px-4">
                    <motion.div className="w-full max-w-5xl">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <img src="/assets/images/ap_barriophil.jpg" className="w-full h-full object-cover about-cine-img" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ==================== OUTRO ==================== */}
            <section className="bg-pink-100 relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-0 md:pb-32 md:pt-0 flex flex-col items-center dbg-box" data-label="OUTRO (ROSE)">
                {/* SPACER 3 (Début de section Outro en Prod) */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16 dbg-spacer" data-id="SPACER 3"></div>

                <motion.div className="max-w-4xl mx-auto text-center w-[90%] md:w-[70%]" style={{ marginTop: 0 }}>
                    <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed">
                        "Nous ne capturons pas des images.<br />
                        Nous sculptons des <span className="font-bold text-[#FF9F1C]" style={{ fontFamily: 'var(--font-chewy)' }}>émotions</span>."
                    </blockquote>
                </motion.div>

                {/* Visualisation Padding Bas */}
                <div className="dbg-space-visu bottom-0 h-24 md:h-32">⬇️ PADDING BAS OUTRO (pb-32)</div>
            </section>
        </main>
    );
}
