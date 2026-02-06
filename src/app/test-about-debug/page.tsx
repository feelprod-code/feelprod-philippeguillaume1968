"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

// ==========================================
// MODE DIAGNOSTIC AVANCÉ (SANS BRUIT VISUEL)
// ==========================================
const debugStyles = `
  /* Révélateur de structure */
  .debug-mode * { 
      /* outline: 1px solid rgba(255, 0, 0, 0.05); */ /* Désactivé pour clarté */
  }
  .debug-mode section { 
      /* border-left: 5px solid blue !important; */
      position: relative;
  }
  
  /* LABEL SECTION (Discret en haut à droite) */
  .debug-mode [data-label]::after {
      content: attr(data-label);
      position: absolute;
      top: 0; right: 0;
      background: blue; color: white;
      font-size: 9px; padding: 2px 4px;
      z-index: 100;
      opacity: 0.5;
  }
  
  /* SPACERS VIOLETS */
  .debug-mode .spacer-mobile {
      background: magenta; /* Plein magenta pour bien voir la barre */
      position: relative;
      /* min-height: 20px; */ /* On laisse la hauteur naturelle (h-6) */
      margin-top: 0 !important; margin-bottom: 0 !important; /* Zéro marge externe */
  }
  .debug-mode .spacer-mobile::before {
      content: attr(data-name);
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: bold;
      font-size: 10px;
      white-space: nowrap;
      z-index: 50;
  }
  .debug-mode section::before {
      content: '↕️ ' attr(data-pt);
      display: block;
      height: 20px;
      background: rgba(0, 255, 0, 0.15); /* Vert clair */
      color: green;
      font-size: 10px;
      text-align: center;
      position: absolute; /* ABSOLUTE pour ne pas créer de faux espace */
      top: 0; left: 0; right: 0;
      border-bottom: 1px dashed green;
      z-index: 50;
      pointer-events: none;
  }
`;

export default function AboutPageDebug() {
    return (
        <main className="bg-white min-h-screen debug-mode">
            <style>{debugStyles}</style>
            <Navbar />

            <div className="fixed top-20 left-4 z-50 bg-black text-white p-4 rounded shadow-xl text-xs font-mono">
                <h1 className="text-xl font-bold text-yellow-500 mb-2">MODE DEBUG "COLLAGE"</h1>
                <p>🟪 Barre Magenta = SPACER</p>
                <p>Si vous voyez du blanc entre le Magenta et le contenu, c'est un problème.</p>
            </div>

            {/* ==================== BLOC A : HERO ==================== */}
            <section className="relative h-screen overflow-hidden bg-black z-0" data-label="BLOC A">
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
            <section className="bg-white relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32" data-label="BLOC B">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="w-[90%] mx-auto lg:w-full justify-self-center lg:justify-self-start">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF9F1C]" style={{ fontFamily: 'var(--font-chewy)' }}>
                            Tout a commencé par...
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                            Description Bloc B...
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <img src="/assets/images/ap_blonde.png" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* SPACER 1 : Est-il collé au bas ? */}
                {/* Attention, la section a py-24, donc il y a du padding SOUS le contenu avant ce spacer si le spacer est hors section ? Non, il est DANS la section. Donc il est avant le padding-bottom ? Non.
                    Si py-24 est sur la section, le spacer est DEDANS. Donc il est décalé du bord bas de 24.
                    C'est peut-être ça le problème pour le spacer 1.
                */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16" data-name="SPACER 1"></div>
            </section>

            {/* ==================== BLOC C : FUSION ==================== */}
            {/* Ici on veut coller le Spacer 1 (fin Bloc B) à Bloc C ?
                 Si Spacer 1 est DANS Bloc B (qui a pb-32), alors il y a 32 de blanc SOUS le spacer 1.
                 C'EST ÇA LE PROBLÈME GÉNERAL !!
                 Les Spacers sont DANS les sections qui ont du padding-bottom.
             */}
            <section className="bg-gray-50 relative z-10 py-24 md:py-32" data-label="BLOC C">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center">Contenu Bloc C...</p>
                </div>
            </section>

            {/* ==================== BLOC D : GALERIE CINÉTIQUE ==================== */}
            {/* J'AI MIS pt-0 ICI. Donc le haut de D colle au bas de C (qui a pb-32).
                Donc entre Spacer 2 et Titre D, il y a le pb-32 de la section C !
                VOILÀ LE BLANC.
            */}
            <section className="bg-white relative z-10 pb-0 pt-0 md:pb-0 md:pt-0 overflow-hidden" data-label="BLOC D">
                {/* SPACER 2 (Déplacé ici pour toucher le titre) */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16" data-name="SPACER 2"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4 mt-0">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1d1d1f]" style={{ fontFamily: 'var(--font-chewy)' }}>Dans l'Instant</h2>
                    <p className="text-center text-gray-600 text-lg">Les images en mouvement</p>
                </div>

                <div className="flex justify-center px-4">
                    <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                        <img src="/assets/images/ap_barriophil.jpg" className="w-full h-full object-cover" />
                    </div>
                </div>

            </section>

            {/* ==================== OUTRO ==================== */}
            {/* pt-0. Donc touche le bas de D (Spacer 3). C'est bon. */}
            <section className="bg-white relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-0 md:pb-32 md:pt-0 flex flex-col items-center" data-label="OUTRO">
                {/* SPACER 3 (Déplacé ici pour toucher la citation) */}
                <div className="spacer-mobile h-6 md:h-12 lg:h-16" data-name="SPACER 3"></div>

                <div className="max-w-4xl mx-auto text-center w-[90%] md:w-[70%]">
                    <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed">
                        "Nous ne capturons pas des images... emotions."
                    </blockquote>
                </div>
            </section>

        </main>
    );
}
