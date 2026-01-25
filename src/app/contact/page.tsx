"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate sending
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <main className="bg-white min-h-screen text-[#1d1d1f] font-sans">
            {/* Navigation - Same as Global */}
            <nav className="global-nav">
                <div className="nav-content">
                    <Link href="/" className="nav-title hover:opacity-70 transition-opacity">FEELPROD</Link>
                </div>

                {/* Hamburger Button */}
                <button
                    className="hamburger-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span className={`hamburger-bar ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
                    <span className={`hamburger-bar ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`hamburger-bar ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                    <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>ACCUEIL</Link>
                    <Link href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>À PROPOS</Link>
                    <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
                </div>
            </nav>

            <div className="max-w-[1400px] mx-auto pt-32 pb-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                {/* Left Column: Info */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">CONTACT</h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-light max-w-md">
                            Un projet ? Une idée folle ? <br />
                            Écrivons la suite ensemble.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Nous trouver</p>
                            <p className="text-xl md:text-2xl font-medium">
                                28bis Boulevard de Sébastopol<br />
                                75004 Paris
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Nous écrire</p>
                            <a href="mailto:feelprod@free.fr" className="text-xl md:text-3xl font-bold underline decoration-2 underline-offset-4 decoration-[#fca00b] hover:opacity-70 transition-opacity">
                                feelprod@free.fr
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gray-50 p-8 md:p-12 rounded-[2rem]"
                >
                    {formStatus === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="text-6xl">✨</div>
                            <h3 className="text-2xl font-bold">Message envoyé !</h3>
                            <p className="text-gray-600">Nous vous répondrons sous 24h.</p>
                            <button onClick={() => setFormStatus('idle')} className="text-sm font-bold underline mt-4">Envoyer un autre</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide text-gray-500">Je suis intéressé par</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {['Événementiel', 'Sport / Mouvement', 'Documentaire', 'Institutionnel', 'Autre'].map((option) => (
                                        <label key={option} className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-transparent hover:border-gray-200 cursor-pointer transition-all">
                                            <input type="radio" name="subject" value={option} className="accent-[#fca00b] w-4 h-4" />
                                            <span className="text-sm font-medium">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wide text-gray-500">NOM</label>
                                    <input required type="text" id="name" className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#1d1d1f] transition-colors" placeholder="Votre nom" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wide text-gray-500">EMAIL</label>
                                    <input required type="email" id="email" className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#1d1d1f] transition-colors" placeholder="votre@email.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wide text-gray-500">TÉLÉPHONE</label>
                                <input type="tel" id="phone" className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#1d1d1f] transition-colors" placeholder="06..." />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wide text-gray-500">VOTRE PROJET</label>
                                <textarea required id="message" rows={4} className="w-full bg-white border-2 border-gray-100 rounded-xl p-4 focus:outline-none focus:border-[#1d1d1f] transition-colors resize-none" placeholder="Racontez-nous un peu..."></textarea>
                            </div>

                            <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-[#1d1d1f] text-white py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-[#fca00b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                {formStatus === 'submitting' ? 'Envoi...' : 'Demander un devis'}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
