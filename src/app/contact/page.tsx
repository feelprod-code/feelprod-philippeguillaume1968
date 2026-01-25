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
            {/* Navigation */}
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

            {/* Main Content - CENTERED LAYOUT to solve 'stuck to left' */}
            <div className="w-full max-w-3xl mx-auto pt-32 pb-20 px-6">

                {/* Header Section */}
                <div className="text-center space-y-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">CONTACT</h1>
                        <p className="text-lg md:text-xl text-gray-500 font-light max-w-lg mx-auto leading-relaxed">
                            Un projet ? Une idée folle ? <br />
                            Écrivons la suite ensemble.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 pt-4"
                    >
                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Nous trouver</p>
                            <p className="text-lg font-medium">
                                28bis Boulevard de Sébastopol<br />
                                75004 Paris
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Nous écrire</p>
                            <a href="mailto:feelprod@free.fr" className="text-xl font-bold underline decoration-2 underline-offset-4 decoration-[#fca00b] hover:opacity-70 transition-opacity">
                                feelprod@free.fr
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Form Section - Centered Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] shadow-sm relative overflow-hidden"
                >
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#fca00b] opacity-5 rounded-bl-[100%] pointer-events-none"></div>

                    {formStatus === 'success' ? (
                        <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
                            <div className="text-7xl">✨</div>
                            <h3 className="text-3xl font-bold text-[#1d1d1f]">Message envoyé !</h3>
                            <p className="text-gray-600 text-lg">Merci. Nous revenons vers vous rapidememnt.</p>
                            <button onClick={() => setFormStatus('idle')} className="text-sm font-bold uppercase tracking-widest underline mt-4 hover:text-[#fca00b]">Envoyer un autre</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">

                            <div className="text-center mb-8">
                                <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest text-[#1d1d1f]">Formulaire de devis</span>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-center text-sm font-bold uppercase tracking-wide text-gray-500">Quel est votre type de projet ?</label>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {['Événementiel', 'Sport', 'Documentaire', 'Institutionnel', 'Autre'].map((option) => (
                                        <label key={option} className="group relative cursor-pointer">
                                            <input type="radio" name="subject" value={option} className="peer sr-only" />
                                            <span className="block px-4 py-2 bg-white border-2 border-transparent rounded-full text-sm font-medium text-gray-600 peer-checked:bg-[#1d1d1f] peer-checked:text-white peer-checked:border-[#1d1d1f] hover:scale-105 transition-all shadow-sm">
                                                {option}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="ml-2 text-xs font-bold uppercase tracking-widest text-gray-400">NOM</label>
                                    <input required type="text" id="name" className="w-full bg-white rounded-xl border-2 border-transparent p-4 focus:outline-none focus:border-[#fca00b] transition-all font-medium" placeholder="Votre nom" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="ml-2 text-xs font-bold uppercase tracking-widest text-gray-400">EMAIL</label>
                                    <input required type="email" id="email" className="w-full bg-white rounded-xl border-2 border-transparent p-4 focus:outline-none focus:border-[#fca00b] transition-all font-medium" placeholder="votre@email.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="ml-2 text-xs font-bold uppercase tracking-widest text-gray-400">TÉLÉPHONE</label>
                                <input type="tel" id="phone" className="w-full bg-white rounded-xl border-2 border-transparent p-4 focus:outline-none focus:border-[#fca00b] transition-all font-medium" placeholder="Votre numéro" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="ml-2 text-xs font-bold uppercase tracking-widest text-gray-400">DÉTAILS DU PROJET</label>
                                <textarea required id="message" rows={4} className="w-full bg-white rounded-xl border-2 border-transparent p-4 focus:outline-none focus:border-[#fca00b] transition-all resize-none font-medium" placeholder="Racontez-nous..."></textarea>
                            </div>

                            <div className="pt-4">
                                <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-[#1d1d1f] text-white py-5 rounded-xl font-bold tracking-widest uppercase text-lg hover:bg-[#333] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-black/10 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
