"use client";
import React from "react";
import Link from "next/link";

export default function TestContactLayout() {
    return (
        <main className="min-h-screen bg-neutral-100 pb-40 relative overflow-x-hidden font-sans">
            {/* FORCE RESET FONT SUR MAIN POUR ÉVITER H1 GLOBAL */}

            {/* HEADER DEBUG */}
            <div className="fixed top-0 left-0 right-0 bg-neutral-900 text-white p-2 z-[9999] flex justify-between items-center shadow-lg border-b border-white/20 text-xs font-sans">
                <div>
                    <h1 className="font-bold text-yellow-500 font-sans text-xl">DEBUG V4 - FINAL CHECK</h1>
                    <p className="text-gray-400">🟥 ZONE INTERDITE (NAVBAR) | 🟦 CONTENU (Doit être dessous)</p>
                </div>
                <Link href="/contact" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition">
                    VOIR PROD
                </Link>
            </div>

            {/* SIMULATION NAVBAR (Zone Rouge "Interdite") */}
            {/* 100px fixed */}
            <div className="fixed top-0 left-0 right-0 h-[100px] border-b-4 border-red-500 bg-red-500/10 z-[5000] pointer-events-none flex items-end justify-center pb-2">
                <span className="text-red-600 font-bold bg-white px-2">NAVBAR ZONE (0-100px)</span>
            </div>

            {/* SPACER PHYSIQUE (Blindage contre chevauchement) */}
            {/* Au lieu de Padding, on met un bloc vide. C'est inratable. */}
            <div className="w-full h-[150px] bg-yellow-200/50 flex items-center justify-center border-b-2 border-yellow-600">
                <span className="font-bold text-yellow-800">SPACER PHYSIQUE (150px) - Visible = OK</span>
            </div>

            {/* CONTENEUR PRINCIPAL */}
            <div className="px-4 flex flex-col items-center border-4 border-blue-500 border-dashed relative mt-10">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1">START CONTENT</div>

                {/* TITRE */}
                {/* On FORCE font-sans pour écraser le globals.css h1 */}
                <div className="mb-24 text-center border-2 border-green-500 p-2 w-full relative mt-10">
                    <span className="absolute -top-3 left-0 bg-green-500 text-white text-xs px-1">TITRE</span>
                    <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-neutral-900 uppercase font-sans !font-sans" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                        Contact (Font Clean)
                    </h1>
                    <p className="text-xs text-red-500 mt-2">Ce titre doit être fin et clean, pas Comic.</p>
                </div>

                {/* FORMULAIRE */}
                <div className="w-[90%] md:w-full max-w-4xl space-y-20 border-2 border-green-500 p-4 relative bg-white/50">
                    <span className="absolute -top-3 left-0 bg-green-500 text-white text-xs px-1">FORMULAIRE (90%)</span>
                    <div className="h-20 bg-gray-200 w-full animate-pulse"></div>
                    <div className="h-20 bg-gray-200 w-full animate-pulse"></div>
                </div>

            </div>
        </main>
    )
}
