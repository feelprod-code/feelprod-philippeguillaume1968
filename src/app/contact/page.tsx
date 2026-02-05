"use client";
// Force Rebuild Contact
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { CreativeTechCollage } from "@/components/CreativeTechCollage";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        budget: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <main className="bg-white min-h-screen text-black font-sans flex items-center justify-center p-4">
                <div className="text-center relative border-4 border-black p-10 bg-yellow-400 shadow-[12px_12px_0px_#000] rotate-1">
                    <h2 className="text-6xl md:text-8xl font-black mb-4 uppercase transform -rotate-2" style={{ fontFamily: 'var(--font-comic), sans-serif' }}>
                        BOOM ! 💥
                    </h2>
                    <p className="text-2xl font-bold border-t-4 border-black pt-4 mt-4">
                        Message bien reçu, {formData.firstName}.<br />
                        On dérush ça et on vous rappelle.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 bg-black text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition-all"
                    >
                        Nouveau message
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-white min-h-screen text-black font-sans pb-20 overflow-x-hidden">
            <Navbar />

            <div className="pt-32 px-4 md:px-10 max-w-7xl mx-auto relative flex flex-col items-center">

                {/* 1. INTRO + COLLAGE */}
                <div className="text-center mb-0 md:mb-10 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-black mb-4 uppercase tracking-tighter transform -rotate-1" style={{ fontFamily: 'var(--font-comic), sans-serif' }}>
                        LET'S CREATE !
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-2xl mx-auto">
                        Votre vision. Notre technique. <span className="text-purple-600 font-bold">L'alchimie parfaite.</span>
                    </p>
                </div>

                {/* ANIMATION CREATIVE */}
                <CreativeTechCollage />

                {/* 2. FORMULAIRE STYLE BD (Chevauchement léger) */}
                <div className="w-[90%] md:w-full max-w-2xl mt-[-50px] md:mt-[-100px] relative z-40">
                    <div className="relative border-[3px] border-black bg-white p-6 md:p-10 shadow-[12px_12px_0px_#000000] rounded-3xl" style={{ boxShadow: '12px 12px 0px #000' }}>
                        {/* HEADER FORM */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 border-[3px] border-black px-6 py-2 rounded-full shadow-[4px_4px_0px_#000]">
                            <span className="font-black text-lg uppercase tracking-widest text-black">SIGNAL D'APPEL</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="font-bold text-xs uppercase px-2 text-gray-500">Prénom</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-bold"
                                        placeholder="Bruce"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="font-bold text-xs uppercase px-2 text-gray-500">Nom</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                        className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-bold"
                                        placeholder="Wayne"
                                    />
                                </div>
                            </div>

                            {/* Email / Tel */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="font-bold text-xs uppercase px-2 text-gray-500">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-bold"
                                        placeholder="batman@gotham.city"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="font-bold text-xs uppercase px-2 text-gray-500">Téléphone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-bold"
                                        placeholder="06..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="font-bold text-xs uppercase px-2 text-gray-500">Projet</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-gray-50 border-2 border-black rounded-xl p-3 focus:ring-4 focus:ring-yellow-400 focus:border-black transition-all outline-none font-medium"
                                    placeholder="Racontez-nous tout..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white font-black text-xl py-4 rounded-xl border-2 border-transparent hover:bg-yellow-400 hover:text-black hover:border-black transition-all shadow-[8px_8px_0px_#666] hover:shadow-[4px_4px_0px_#000] transform hover:translate-y-1 active:translate-y-2 active:shadow-none"
                            >
                                ENVOYER LE SIGNAL ! 🚀
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    )
}
