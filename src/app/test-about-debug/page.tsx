"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

// ==========================================
// MODE TABLE DE MIXAGE (CONTROLE TOTAL)
// ==========================================
const mixStyles = `
  /* Structure de base */
  .mixer-mode section {
      position: relative;
      border: 2px solid #ddd;
  }
  
  /* INDICATEURS DE PADDING (BLEU CIEL) */
  .mixer-pad-top, .mixer-pad-bot {
      background: rgba(0, 255, 255, 0.2);
      border-top: 1px dashed cyan;
      border-bottom: 1px dashed cyan;
      color: #008B8B;
      font-size: 10px;
      font-family: monospace;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
      z-index: 50;
  }
  .mixer-pad-top::before { content: attr(data-id) " [PADDING HAUT]"; font-weight: bold; }
  .mixer-pad-bot::before { content: attr(data-id) " [PADDING BAS]"; font-weight: bold; }

  /* INDICATEURS DE MARGE (ORANGE) */
  .mixer-margin {
      background: rgba(255, 165, 0, 0.2);
      border: 1px dashed orange;
      color: #D2691E;
      font-size: 10px;
      text-align: center;
      width: 100%;
      display: block;
      position: relative;
  }
  .mixer-margin::after { content: attr(data-id); font-weight: bold; display: block; }
  
  /* SPACERS STRUCTURELS (ROSE) */
  .mixer-spacer {
      background: repeating-linear-gradient(45deg, #ff00ff20, #ff00ff20 10px, #ff00ff40 10px, #ff00ff40 20px);
      outline: 2px solid magenta;
      color: magenta;
      font-weight: bold;
      text-align: center;
      font-size: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .mixer-spacer::after { content: attr(data-id); background: white; padding: 0 4px; }

  /* ETIQUETTE SECTION */
  .mixer-label {
      position: absolute;
      top: 0; right: 0;
      background: black;
      color: white;
      font-size: 12px;
      padding: 4px;
      z-index: 100;
  }
`;

export default function AboutPageDebug() {
    return (
        <main className="bg-white min-h-screen mixer-mode">
            <style>{mixStyles}</style>
            <Navbar />

            <div className="fixed top-20 left-4 z-50 bg-black text-white p-4 rounded shadow-xl text-xs font-mono">
                <h1 className="text-xl font-bold text-yellow-500 mb-2">TABLE DE MIXAGE</h1>
                <p>🟦 BLEU = PADDING SECTION (Espace Interne)</p>
                <p>🟧 ORANGE = MARGIN TITRE (Espace sous/sur Titre)</p>
                <p>🟪 ROSE = SPACER (Séparateur)</p>
                <p className="mt-2 text-gray-400">Nommez l'ID pour modifier/supprimer.</p>
            </div>

            {/* ==================== BLOC A : HERO ==================== */}
            <section className="relative h-screen bg-black" data-label="BLOC A">
                <div className="mixer-label">SECTION A (HERO)</div>
                <div className="absolute inset-0">
                    <img src="/assets/images/ap_barrio stab.jpg" className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="absolute bottom-0 w-full text-center pb-32">
                    <h1 className="text-6xl text-white font-bold">L'ART DU<br />MOUVEMENT</h1>
                </div>
            </section>

            {/* ==================== BLOC B : ORIGINE ==================== */}
            <section className="bg-white relative z-10 container mx-auto" data-label="BLOC B">
                <div className="mixer-label">SECTION B</div>

                {/* PADDING HAUT */}
                <div className="mixer-pad-top h-24 md:h-32" data-id="PAD-HAUT-B (py-32)"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
                    <div>
                        <h2 className="text-4xl font-bold text-[#FF9F1C]">Tout a commencé par...</h2>
                        {/* MARGE SOUS TITRE */}
                        <div className="mixer-margin h-6 mb-6" data-id="MARG-TITRE-B (mb-6)"></div>
                        <p>Texte Bloc B...</p>
                    </div>
                    <div><img src="/assets/images/ap_blonde.png" className="w-full rounded" /></div>
                </div>

                {/* PADDING BAS */}
                <div className="mixer-pad-bot h-24 md:h-32" data-id="PAD-BAS-B (py-32)"></div>
            </section>

            {/* SPACER 1 (Entre B et C) */}
            <div className="mixer-spacer h-6 md:h-12 lg:h-16" data-id="SPACER-1"></div>


            {/* ==================== BLOC C : FUSION ==================== */}
            <section className="bg-gray-50 relative z-10" data-label="BLOC C">
                <div className="mixer-label">SECTION C</div>

                {/* PADDING HAUT */}
                <div className="mixer-pad-top h-24 md:h-32" data-id="PAD-HAUT-C (py-32)"></div>

                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div><img src="/assets/images/ap_pont alex.jpg" className="w-full h-64 object-cover" /></div>
                    <div>
                        <h2 className="text-4xl font-bold">Corps & Caméra</h2>
                        {/* MARGE SOUS TITRE */}
                        <div className="mixer-margin h-6 mb-6" data-id="MARG-TITRE-C (mb-6)"></div>
                        <p>Texte Bloc C...</p>
                    </div>
                </div>

                {/* PADDING BAS C - LE COUPABLE POTENTIEL */}
                <div className="mixer-pad-bot h-24 md:h-32" data-id="PAD-BAS-C (py-32)"></div>
            </section>

            {/* SPACER 2 (Entre C et D) */}
            {/* Note : En Prod, j'ai déplacé ce spacer DANS D. Ici je le montre ENTRE pour que vous décidiez où il va/sa taille. */}
            <div className="mixer-spacer h-6 md:h-12 lg:h-16" data-id="SPACER-2"></div>


            {/* ==================== BLOC D : GALERIE ==================== */}
            <section className="bg-white relative z-10 overflow-hidden" data-label="BLOC D">
                <div className="mixer-label">SECTION D</div>

                {/* PADDING HAUT D (Actuellement 0, mais je mets une ligne pour le montrer) */}
                <div className="mixer-pad-top h-0 border-2 border-red-500" data-id="PAD-HAUT-D (pt-0)"></div>

                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold">Dans l'Instant</h2>
                    {/* MARGE SOUS TITRE D */}
                    <div className="mixer-margin h-4 mb-4" data-id="MARG-TITRE-D (mb-4)"></div>
                    <p>Les images en mouvement</p>
                </div>

                <div className="flex justify-center px-4 mt-8">
                    <div className="w-full max-w-5xl h-64 bg-gray-200 flex items-center justify-center">IMAGE GALERIE</div>
                </div>

                {/* PADDING BAS D */}
                <div className="mixer-pad-bot h-0 border-2 border-red-500" data-id="PAD-BAS-D (pb-0)"></div>
            </section>

            {/* SPACER 3 (Entre D et Outro) */}
            <div className="mixer-spacer h-6 md:h-12 lg:h-16" data-id="SPACER-3"></div>

            {/* ==================== OUTRO ==================== */}
            <section className="bg-white relative z-10 flex flex-col items-center" data-label="OUTRO">
                <div className="mixer-label">SECTION OUTRO</div>

                {/* PADDING HAUT OUTRO */}
                <div className="mixer-pad-top h-0 border-2 border-red-500" data-id="PAD-HAUT-OUTRO (pt-0)"></div>

                <div className="w-[90%] text-center mt-4">
                    <blockquote className="text-2xl italic">"Nous sculptons des émotions."</blockquote>
                </div>

                {/* PADDING BAS OUTRO */}
                <div className="mixer-pad-bot h-24 md:h-32" data-id="PAD-BAS-OUTRO (pb-32)"></div>
            </section>

        </main>
    );
}
