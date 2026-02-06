"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

// ==========================================
// MODE DIAGNOSTIC AVANCÉ (ESPACES + STRUCTURE)
// ==========================================
const debugStyles = `
  /* Révélateur de structure */
  .debug-mode * { 
      outline: 1px solid rgba(255, 0, 0, 0.05); /* Outline très discret pour ne pas gêner */
  }
  .debug-mode section { 
      border-left: 5px solid blue !important; /* Marqueur bleu à gauche seulement */
      border-right: 5px solid blue !important; 
      position: relative;
  }
  
  /* LABEL SECTION */
  .debug-mode [data-label]::after {
      content: attr(data-label);
      position: absolute;
      top: 0; right: 0;
      background: blue; color: white;
      font-size: 10px; padding: 2px 6px;
      z-index: 100;
      font-weight: bold;
  }
  
  /* VISUALISATION DES PADDINGS (LES BLANCS) */
  .debug-mode section::before {
      content: '↕️ ' attr(data-pt);
      display: block;
      height: 20px;
      background: rgba(0, 255, 0, 0.15); /* Vert clair */
      color: green;
      font-size: 10px;
      text-align: center;
      position: absolute;
      top: 0; left: 0; right: 0;
      border-bottom: 1px dashed green;
      z-index: 50;
      pointer-events: none;
  }
  
  /* SPACERS VIOLETS */
  .debug-mode .spacer-mobile {
      background: repeating-linear-gradient(
        45deg,
        rgba(255,0,255,0.2),
        rgba(255,0,255,0.2) 10px,
        rgba(255,0,255,0.4) 10px,
        rgba(255,0,255,0.4) 20px
      );
      outline: 2px solid magenta !important;
      position: relative;
      min-height: 20px; 
      margin-top: 5px; margin-bottom: 5px; /* Petit décalage pour visibilité */
  }
  .debug-mode .spacer-mobile::before {
      content: attr(data-name);
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      color: magenta;
      font-weight: bold;
      font-size: 11px;
      background: rgba(255,255,255,0.9);
      padding: 0 4px;
      white-space: nowrap;
      z-index: 50;
  }
`;

export default function AboutPageDebug() {
    return (
        <main className="bg-white min-h-screen debug-mode">
            <style>{debugStyles}</style>
            <Navbar />

            <div className="fixed top-20 left-4 z-50 bg-black text-white p-4 rounded shadow-xl text-xs font-mono">
                <h1 className="text-xl font-bold text-yellow-500 mb-2">MODE DEBUG ESPACES</h1>
                <p>🟦 Bleu = Limite Section</p>
                <p>🟪 Violet = SPACER (Barre Rose)</p>
                <p>🟩 Zone Verte = Espace Blanc (Padding)</p>
            </div>

            {/* ==================== BLOC A : HERO ==================== */}
            <section className="relative h-screen overflow-hidden bg-black z-0" data-label="BLOC A : HERO">
                <div className="absolute inset-0">
                    <img src="/assets/images/ap_barrio stab.jpg" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[90%] text-center pb-32">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center leading-none" style={{ fontFamily: 'var(--font-luckiest-guy)' }}>
                        L'ART DU<br />MOUVEMENT
                    </h1>
                </div>
            </section>

            {/* ==================== BLOC B : ORIGINE ==================== */}
            {/* Z-INDEX 10 et BG-WHITE pour éviter tout chevauchement */}
            <section className="bg-white relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
                data-label="BLOC B : ORIGINE"
                data-pt="PADDING HAUT: py-24">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="w-[90%] mx-auto lg:w-full justify-self-center lg:justify-self-start">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF9F1C]" style={{ fontFamily: 'var(--font-chewy)' }}>
                            Tout a commencé par...
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                            Un regard différent. Une volonté de capturer non pas ce qui est visible, mais ce qui est ressenti.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                            Nous ne sommes pas de simples observateurs. Nous sommes des traducteurs d'instants.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <img src="/assets/images/ap_blonde.png" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* SPACER 1 */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16" data-name="SPACER 1 (Après Bloc B)"></div>
            </section>

            {/* ==================== BLOC C : FUSION ==================== */}
            <section className="bg-gray-50 relative z-10 py-24 md:py-32"
                data-label="BLOC C : FUSION"
                data-pt="PADDING HAUT: py-24">

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative h-[500px] md:h-[600px] order-2 lg:order-1">
                            <div className="absolute left-0 top-0 w-[60%] h-[75%] rounded-xl overflow-hidden shadow-lg border-4 border-white">
                                <img src="/assets/images/ap_pont alex.jpg" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div className="absolute right-0 bottom-0 w-[65%] h-[80%] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10">
                                <img src="/assets/images/ap_stabbvaw.JPG" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 w-[90%] mx-auto lg:w-full justify-self-center lg:justify-self-start">
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

                {/* SPACER 2 */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16" data-name="SPACER 2 (Après Bloc C)"></div>
            </section>

            {/* ==================== BLOC D : GALERIE ==================== */}
            <section className="bg-white relative z-10 pb-0 pt-0 md:pb-0 md:pt-0 overflow-hidden"
                data-label="BLOC D : GALERIE (IMAGE UNIQUE)"
                data-pt="PADDING HAUT: pt-0 (AUCUN)">

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1d1d1f]" style={{ fontFamily: 'var(--font-chewy)' }}>Dans l'Instant</h2>
                    <p className="text-center text-gray-600 text-lg">Les images en mouvement</p>
                </div>

                <div className="flex justify-center px-4">
                    <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                        <img src="/assets/images/ap_barriophil.jpg" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* SPACER 3 */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16" data-name="SPACER 3 (Après Galerie)"></div>
            </section>

            {/* ==================== OUTRO ==================== */}
            <section className="bg-white relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-0 md:pb-32 md:pt-0 flex flex-col items-center"
                data-label="OUTRO : CITATION"
                data-pt="PADDING HAUT: pt-0 (AUCUN)">

                {/* Spacer redondant interne ? On l'affiche s'il y est toujours */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16" data-name="SPACER INTERNE OUTRO"></div>

                <div className="max-w-4xl mx-auto text-center w-[90%] md:w-[70%]">
                    <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed">
                        "Nous ne capturons pas des images.<br />
                        Nous sculptons des <span className="font-bold text-[#FF9F1C]" style={{ fontFamily: 'var(--font-chewy)' }}>émotions</span>."
                    </blockquote>
                </div>
            </section>

        </main>
    );
}
