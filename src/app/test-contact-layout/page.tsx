"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CreativeTechCollage } from "@/components/CreativeTechCollage";

export default function TestContactLayout() {
    return (
        <main className="min-h-screen bg-neutral-200 pb-40 font-sans relative overflow-x-hidden">
            {/* HEADER DEBUG */}
            <div className="fixed top-0 left-0 right-0 bg-neutral-900 text-white p-4 z-[9999] flex justify-between items-center shadow-lg border-b border-white/20">
                <div>
                    <h1 className="font-bold text-xl text-yellow-500">DEBUG CONTACT V2 (ANIMATED)</h1>
                    <p className="text-[10px] text-gray-400">🟦 SECTION | 🟩 CONTENT | 🩷 MEDIA | 🟥 MARGINS</p>
                </div>
                <Link href="/contact" className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition">
                    VOIR PROD
                </Link>
            </div>

            <div className="pt-32 px-4 md:px-10 max-w-7xl mx-auto relative border-4 border-blue-600 border-dashed bg-white/50 flex flex-col items-center">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 z-50">SECTION PRINCIPALE</div>

                {/* 1. INTRO (Zone Verte) */}
                <div className="relative border-4 border-green-500 p-2 mb-0 md:mb-10">
                    <div className="absolute top-0 left-0 bg-green-600 text-white text-xs px-2 py-1">CONTENT (INTRO)</div>

                    {/* Visualisation Margin Bottom */}
                    <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 h-[40px] w-px border-l-2 border-red-500 border-dashed flex items-center justify-center">
                        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1 whitespace-nowrap">MB-10 (40px)</span>
                    </div>

                    <div className="text-center relative z-10 p-10">
                        <h1 className="text-5xl md:text-8xl font-black mb-4 uppercase tracking-tighter transform -rotate-1" style={{ fontFamily: 'var(--font-comic), sans-serif' }}>
                            LET'S CREATE !
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-2xl mx-auto">
                            Votre vision. Notre technique.
                        </p>
                    </div>
                </div>

                {/* ANIMATION (Zone Rose - Media) */}
                <div className="relative border-4 border-pink-500 p-2 my-10 bg-pink-50/30">
                    <div className="absolute top-0 left-0 bg-pink-600 text-white text-xs px-2 py-1 z-50">MEDIA / ANIM (COLLAGE)</div>
                    <CreativeTechCollage />
                </div>

                {/* 2. FORMULAIRE (Zone Verte - Content) */}
                <div className="relative border-4 border-green-500 p-2 mt-[-50px] z-40 bg-green-50/30 w-[90%] md:w-full max-w-2xl">
                    <div className="absolute top-0 right-0 bg-green-600 text-white text-xs px-2 py-1 z-50">CONTENT (FORM)</div>
                    {/* Visualisation Negative Margin */}
                    <div className="absolute top-[-50px] right-10 h-[50px] border-l-2 border-red-500 border-dashed flex items-center justify-center">
                        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1 whitespace-nowrap">MT -50px (OVERLAP)</span>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="relative border-[3px] border-black bg-white p-6 md:p-10 shadow-[12px_12px_0px_#000000] rounded-3xl opacity-90">
                            {/* HEADER FORM */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 border-[3px] border-black px-6 py-2 rounded-full shadow-[4px_4px_0px_#000]">
                                <span className="font-black text-lg uppercase tracking-widest text-black">SIGNAL D'APPEL</span>
                            </div>

                            <form className="space-y-6 mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="font-bold text-xs uppercase px-2 text-gray-500">Prénom</label>
                                        <input type="text" className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-bold" placeholder="Bruce" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="font-bold text-xs uppercase px-2 text-gray-500">Nom</label>
                                        <input type="text" className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-bold" placeholder="Wayne" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="font-bold text-xs uppercase px-2 text-gray-500">Email</label>
                                        <input type="email" className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-bold" placeholder="batman@gotham.city" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="font-bold text-xs uppercase px-2 text-gray-500">Téléphone</label>
                                        <input type="tel" className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-bold" placeholder="06..." />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="font-bold text-xs uppercase px-2 text-gray-500">Projet</label>
                                    <textarea rows={4} className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-medium" placeholder="Racontez-nous tout..."></textarea>
                                </div>

                                <button className="w-full bg-black text-white font-black text-xl py-4 rounded-xl border-2 border-transparent hover:bg-yellow-400 hover:text-black hover:border-black transition-all shadow-[8px_8px_0px_#666] hover:shadow-[4px_4px_0px_#000] transform hover:translate-y-1">
                                    ENVOYER LE SIGNAL ! 🚀
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}
