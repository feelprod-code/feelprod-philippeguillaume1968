"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <main className="bg-white min-h-screen text-black font-sans">
                <nav className="global-nav">
                    <div className="nav-content">
                        <Link href="/" className="nav-title hover:opacity-70 transition-opacity">FEELPROD</Link>
                    </div>
                </nav>

                <div className="min-h-screen flex items-center justify-center px-6">
                    <div className="text-center">
                        <h2 className="text-6xl md:text-7xl font-['Bangers'] mb-8">MESSAGE REÇU</h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Merci {formData.firstName}, je reviens vers vous très vite.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-sm uppercase tracking-widest underline hover:no-underline transition-all"
                        >
                            Nouveau message
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-white min-h-screen text-black font-sans">
            {/* Navigation */}
            <nav className="global-nav">
                <div className="nav-content">
                    <Link href="/" className="nav-title hover:opacity-70 transition-opacity">FEELPROD</Link>
                </div>

                <button
                    className="hamburger-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span className={`hamburger-bar ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
                    <span className={`hamburger-bar ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`hamburger-bar ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
                </button>

                <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                    <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>ACCUEIL</Link>
                    <Link href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>À PROPOS</Link>
                    <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
                </div>
            </nav>
            {/* Flex container to properly center everything */}
            <div className="min-h-screen flex items-start justify-center pt-96 md:pt-56 pb-32 px-10 md:px-6">
                <div className="w-full max-w-[650px]">

                    {/* Title - Centered above card */}
                    <div className="text-center mb-12" style={{ paddingTop: '128px' }}>
                        <h1 className="text-4xl md:text-5xl font-medium mb-4">
                            Une question, un projet ?
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-700">
                            À vous d'entrer en scène !
                        </p>
                    </div>

                    {/* Form Card - Exact rounded corners and spacing from AZ Video */}
                    <div
                        className="bg-[#f9f9f9] rounded-[20px] p-8 md:p-10 shadow-sm md:mx-0"
                        style={{ marginLeft: '64px', marginRight: '64px' }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Row 1: First Name + Last Name (2 columns) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Prénom
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                        placeholder="John"
                                        className="w-full px-4 py-3 text-base bg-white border border-gray-200 rounded-[10px] focus:outline-none focus:border-gray-400 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 text-base bg-white border border-gray-200 rounded-[10px] focus:outline-none focus:border-gray-400 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Email (Full width) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Adresse e-mail
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="jdoe@gmail.com"
                                    className="w-full px-4 py-3 text-base bg-white border border-gray-200 rounded-[10px] focus:outline-none focus:border-gray-400 transition-colors"
                                />
                            </div>

                            {/* Phone (Full width) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Numéro de téléphone
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+33 6 12 34 56 78"
                                    className="w-full px-4 py-3 text-base bg-white border border-gray-200 rounded-[10px] focus:outline-none focus:border-gray-400 transition-colors"
                                />
                            </div>

                            {/* Message (Full width) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description de votre projet
                                </label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Racontez-nous en quelques lignes votre projet..."
                                    rows={5}
                                    className="w-full px-4 py-3 text-base bg-white border border-gray-200 rounded-[10px] focus:outline-none focus:border-gray-400 transition-colors resize-none"
                                />
                            </div>

                            {/* Budget (Full width) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Budget estimé
                                </label>
                                <select
                                    value={formData.budget}
                                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                    className="w-full px-4 py-3 text-base bg-white border border-gray-200 rounded-[10px] focus:outline-none focus:border-gray-400 transition-colors"
                                >
                                    <option value="">Sélectionner...</option>
                                    <option value="< 1000€">Moins de 1 000€</option>
                                    <option value="1000-3000€">1 000€ - 3 000€</option>
                                    <option value="3000-5000€">3 000€ - 5 000€</option>
                                    <option value="5000-10000€">5 000€ - 10 000€</option>
                                    <option value="> 10000€">Plus de 10 000€</option>
                                </select>
                            </div>

                            {/* Submit Button - Full width pill */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-black text-white font-semibold text-base rounded-full hover:bg-gray-800 transition-all"
                                >
                                    Envoyer ma demande
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
