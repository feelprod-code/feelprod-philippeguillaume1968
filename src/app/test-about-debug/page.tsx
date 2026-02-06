"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

// ==========================================
// MODE DIAGNOSTIC ACTIVÉ
// ==========================================
const debugStyles = `
  /* Révélateur de structure */
  .debug-mode * { 
      outline: 1px solid rgba(255, 0, 0, 0.3) !important; 
  }
  .debug-mode section { 
      border: 4px solid blue !important;
      position: relative;
  }
  .debug-mode section::after {
      content: 'SECTION';
      position: absolute;
      top: 0; right: 0;
      background: blue; color: white;
      font-size: 10px; padding: 2px;
  }
  .debug-mode .container { 
      border: 4px solid green !important; 
      background: rgba(0, 255, 0, 0.05);
  }
  /* CIBLE LES CLASSES TAILWIND w-[90%] avec échappement CSS */
  .debug-mode .w-\\[90\\%\\] {
      background: rgba(255, 255, 0, 0.5) !important; /* JAUNE BIEN VISIBLE */
      border: 4px dashed orange !important;
      position: relative;
  }
  .debug-mode .w-\\[90\\%\\]::before {
      content: 'ZONE 90%';
      position: absolute;
      top: -20px; left: 0;
      background: orange; color: black;
      font-weight: bold; font-size: 12px;
  }
  .debug-mode .spacer-mobile {
      background: repeating-linear-gradient(
        45deg,
        rgba(255,0,255,0.2),
        rgba(255,0,255,0.2) 10px,
        rgba(255,0,255,0.4) 10px,
        rgba(255,0,255,0.4) 20px
      );
      outline: 2px solid magenta !important;
  }
  .debug-mode .spacer-mobile::after {
      content: 'SPACER';
      color: magenta;
      font-size: 10px;
      display: block;
      text-align: center;
  }
`;

export default function AboutPageDebug() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const fadeInUp: Variants = {
        hidden: { opacity: 0.5, y: 0 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
    };

    return (
        <main ref={containerRef} className="bg-white min-h-screen debug-mode">
            <style>{debugStyles}</style>
            <Navbar />

            <div className="fixed top-20 left-4 z-50 bg-black text-white p-4 rounded shadow-xl text-xs font-mono">
                <h1 className="text-xl font-bold text-yellow-500 mb-2">MODE DEBUG</h1>
                <p><span className="text-red-400">🟥 Rouge</span> = Limites</p>
                <p><span className="text-blue-400">🟦 Bleu</span> = Sections</p>
                <p><span className="text-green-400">🟩 Vert</span> = Containers</p>
                <p><span className="text-yellow-400">🟨 Jaune</span> = Texte (w-90)</p>
                <p><span className="text-purple-400">🟪 Violet</span> = Spacers</p>
            </div>

            {/* ==================== BLOC A : HERO SECTION ==================== */}
            <section className="relative h-screen overflow-hidden">
                <motion.div className="absolute inset-0">
                    <img
                        src="/assets/images/ap_barrio stab.jpg"
                        alt="Action en mouvement"
                        className="w-full h-full object-cover about-hero-img"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>

                {/* Titre Parallaxe */}
                <div className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 z-10
                    px-4 sm:px-6 lg:px-8 
                    md:pb-32
                    flex justify-center flex-col items-center
                    w-[90%] md:w-full
                `}
                    style={{ paddingBottom: '200px' }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center leading-none"
                        style={{ fontFamily: 'var(--font-luckiest-guy)' }}
                    >
                        L'ART DU<br />MOUVEMENT
                    </motion.h1>
                </div>
            </section>

            {/* ==================== BLOC B : L'ORIGINE ==================== */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <motion.div className="lg:sticky lg:top-32 w-[90%] mx-auto lg:w-full lg:mx-0 justify-self-center lg:justify-self-start">
                        <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF9F1C]" style={{ fontFamily: 'var(--font-chewy)' }}>
                            Tout a commencé par...
                        </motion.h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                            Un regard différent. Une volonté de capturer non pas ce qui est visible, mais ce qui est ressenti.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                            Nous ne sommes pas de simples observateurs. Nous sommes des traducteurs d'instants.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="sticky top-32">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                                <img src="/assets/images/ap_blonde.png" alt="Portrait" className="w-full h-full object-cover about-blonde-img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer Ajustable */}
                <div className="spacer-mobile h-12 md:h-24 lg:h-32"></div>
            </section>

            {/* ==================== BLOC C : LA FUSION ==================== */}
            <section className="bg-gray-50 py-24 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative h-[500px] md:h-[600px] order-2 lg:order-1">
                            <div className="absolute left-0 top-0 w-[60%] h-[75%] rounded-xl overflow-hidden shadow-lg border-4 border-white">
                                <img src="/assets/images/ap_pont alex.jpg" alt="Architecture" className="w-full h-full object-cover grayscale about-pont-img" />
                            </div>
                            <div className="absolute right-0 bottom-0 w-[65%] h-[80%] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10">
                                <img src="/assets/images/ap_stabbvaw.JPG" alt="Stabilisation" className="w-full h-full object-cover about-steady-img" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 w-[90%] mx-auto lg:w-full lg:mx-0 justify-self-center lg:justify-self-start">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1d1d1f]" style={{ fontFamily: 'var(--font-chewy)' }}>
                                Corps & Caméra
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                                La fluidité n'est pas un hasard. Elle naît de la fusion entre l'opérateur et son outil.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                                Être au cœur de l'action sans la perturber. C'est cette présence invisible qui permet de capter l'authenticité brute.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Spacer Ajustable */}
                <div className="spacer-mobile h-12 md:h-24 lg:h-32"></div>
            </section>

            {/* ==================== BLOC D : GALERIE CINÉTIQUE ==================== */}
            <section className="pb-24 pt-0 md:pb-32 md:pt-0 overflow-hidden">
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

                {/* Spacer Ajustable avant Outro */}
                <div className="spacer-mobile h-12 md:h-24 lg:h-32"></div>
            </section>

            {/* ==================== OUTRO ==================== */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center">
                <div className="spacer-mobile h-12 md:h-24 lg:h-32"></div>

                <motion.div
                    className="max-w-4xl mx-auto text-center w-[90%] md:w-[70%]"
                >
                    <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed">
                        "Nous ne capturons pas des images.<br />
                        Nous sculptons des <span className="font-bold text-[#FF9F1C]" style={{ fontFamily: 'var(--font-chewy)' }}>émotions</span>."
                    </blockquote>
                </motion.div>
            </section>

        </main>
    );
}
