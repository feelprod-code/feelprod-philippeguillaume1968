"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

// ==========================================
// MODE DIAGNOSTIC AVANCÉ (ESPACES)
// ==========================================
const debugStyles = `
  /* Révélateur de structure */
  .debug-mode * { 
      outline: 1px solid rgba(255, 0, 0, 0.1) !important; 
  }
  .debug-mode section { 
      border: 2px solid blue !important;
      position: relative;
  }
  
  /* LABEL SECTION */
  .debug-mode [data-label]::after {
      content: attr(data-label);
      position: absolute;
      top: 0; right: 0;
      background: blue; color: white;
      font-size: 10px; padding: 2px;
      z-index: 100;
  }
  
  /* VISUALISATION DES PADDINGS (LES BLANCS) */
  /* Padding Haut */
  .debug-mode section::before {
      content: '↕️ ESPACE HAUT (Padding Top)';
      display: block;
      height: 20px; /* Indication visuelle seulement, ne change pas la taille réelle */
      background: rgba(0, 255, 0, 0.1); /* Vert très clair */
      color: green;
      font-size: 10px;
      text-align: center;
      position: absolute;
      top: 0; left: 0; right: 0;
      border-bottom: 1px dashed green;
  }

  /* Padding Bas (On utilise un div interne pour le simuler ou on le met en bas) */
  /* Note: difficile de cibler le padding bas avec ::after car déjà utilisé par label. 
     On va ajouter des divs explicites dans le JSX pour montrer les espaces PADDING */

  
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
      min-height: 20px; /* Pour être sûr de voir le texte même si h-0 */
  }
  .debug-mode .spacer-mobile::before {
      content: attr(data-name);
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      color: magenta;
      font-weight: bold;
      font-size: 11px;
      background: rgba(255,255,255,0.8);
      padding: 0 4px;
      white-space: nowrap;
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
                <p>🟩 Zone Verte = Le "Blanc" interne (Padding)</p>
            </div>

            {/* ==================== BLOC A : HERO ==================== */}
            <section className="relative h-screen overflow-hidden" data-label="BLOC A">
                <div className="absolute inset-0">
                    <img src="/assets/images/ap_barrio stab.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[90%] text-center pb-32">
                    <h1 className="text-6xl text-white font-bold">L'ART DU<br />MOUVEMENT</h1>
                </div>
            </section>

            {/* ==================== BLOC B : ORIGINE ==================== */}
            <section className="container mx-auto px-4 py-24 md:py-32" data-label="BLOC B">
                {/* Visualisation Padding Haut */}
                <div className="w-full text-center text-green-600 bg-green-100 border border-green-500 text-xs py-1 mb-4">
                    ⬆️ ESPACE BLANC HAUT (Padding Top: py-24)
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="w-[90%] mx-auto justify-self-center">
                        <h2 className="text-4xl font-bold text-[#FF9F1C] mb-6">Tout a commencé par...</h2>
                        <p className="text-gray-700">Texte bloc B...</p>
                    </div>
                    <div><img src="/assets/images/ap_blonde.png" className="w-full rounded-2xl" /></div>
                </div>

                {/* Visualisation Padding Bas */}
                <div className="w-full text-center text-green-600 bg-green-100 border border-green-500 text-xs py-1 mt-4">
                    ⬇️ ESPACE BLANC BAS (Padding Bottom: py-24)
                </div>

                {/* SPACER 1 */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16 mt-4" data-name="SPACER 1 (La Barre Rose)"></div>
            </section>

            {/* ==================== BLOC C : FUSION ==================== */}
            <section className="bg-gray-50 py-24 md:py-32" data-label="BLOC C">
                {/* Visualisation Padding Haut */}
                <div className="w-full text-center text-green-600 bg-green-100 border border-green-500 text-xs py-1 mb-4">
                    ⬆️ ESPACE BLANC HAUT (Padding Top: py-24) <br /> "SOUS L'ESPACE ROSE précédents"
                </div>

                <div className="container mx-auto px-4">
                    <p className="text-center">Contenu Bloc C (Corps & Caméra)...</p>
                </div>

                {/* Visualisation Padding Bas */}
                <div className="w-full text-center text-green-600 bg-green-100 border border-green-500 text-xs py-1 mt-4">
                    ⬇️ ESPACE BLANC BAS (Padding Bottom: py-24)
                </div>

                {/* SPACER 2 */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16 mt-4" data-name="SPACER 2 (La Barre Rose)"></div>
            </section>

            {/* ==================== BLOC D : GALERIE ==================== */}
            <section className="pb-0 pt-0 md:pb-0 md:pt-0 overflow-hidden" data-label="BLOC D : GALERIE">
                {/* Visualisation Padding Haut */}
                <div className="w-full text-center text-green-600 bg-green-100 border border-green-500 text-xs py-1 mb-4">
                    ⬆️ ESPACE BLANC HAUT (Actuellement: pt-0 / RIEN) <br />
                    (Si vous voyez du blanc, c'est le Spacer Rose du dessus)
                </div>

                <div className="container mx-auto px-4 mb-0">
                    <h2 className="text-4xl font-bold text-center mb-4">Dans l'Instant</h2>
                    <p className="text-center mb-4">Les images en mouvement</p>
                </div>

                <div className="flex justify-center"><div className="w-full h-64 bg-gray-300 rounded">IMAGE VIDEO</div></div>

                {/* Visualisation Padding Bas */}
                <div className="w-full text-center text-green-600 bg-green-100 border border-green-500 text-xs py-1 mt-4">
                    ⬇️ ESPACE BLANC BAS (Actuellement: pb-0) <br /> "AU-DESSUS DE L'ESPACE ROSE suivant"
                </div>

                {/* SPACER 3 */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16 mt-4" data-name="SPACER 3 (La Barre Rose)"></div>
            </section>

            {/* ==================== OUTRO ==================== */}
            <section className="pb-24 pt-0 md:pb-32 md:pt-0 flex flex-col items-center" data-label="OUTRO">
                {/* Visualisation Padding Haut */}
                <div className="w-full text-center text-green-600 bg-green-100 border border-green-500 text-xs py-1 mb-4">
                    ⬆️ ESPACE BLANC HAUT (Actuellement: pt-0)
                </div>

                <div className="spacer-mobile h-6 mb-4" data-name="SPACER INTERNE (Doublon?)"></div>

                <blockquote className="text-2xl italic text-center">"Nous sculptons des émotions"</blockquote>

                {/* Visualisation Padding Bas */}
                <div className="w-full text-center text-green-600 bg-green-100 border border-green-500 text-xs py-1 mt-4">
                    ⬇️ ESPACE BLANC BAS (Padding Bottom: pb-24)
                </div>
            </section>

        </main>
    );
}
