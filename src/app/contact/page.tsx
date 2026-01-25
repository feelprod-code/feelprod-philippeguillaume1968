import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-[120px] px-8 bg-white text-[#1d1d1f]">
            <nav className="fixed top-0 left-0 w-full h-[80px] bg-white border-b border-black/10 flex justify-between items-center px-10 z-50">
                <Link href="/" className="font-bold text-xl tracking-widest text-[#1d1d1f] hover:opacity-70 transition-opacity">
                    FEELPROD
                </Link>
                <Link href="/" className="text-sm font-semibold tracking-wide hover:underline">
                    RETOUR ACCUEIL
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl mb-8 font-black tracking-tighter" style={{ fontFamily: 'var(--font-comic)' }}>CONTACT</h1>
                <p className="text-xl leading-relaxed mb-6 font-medium text-gray-800">
                    Parlons de votre projet.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                    Cette page est en construction. Bientôt un formulaire pour nous joindre directement.
                </p>

                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="font-bold mb-2">Email</p>
                    <a href="mailto:contact@feelprod.com" className="text-blue-600 hover:underline text-lg">contact@feelprod.com</a>
                </div>
            </div>
        </main>
    );
}
