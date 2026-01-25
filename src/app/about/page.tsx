import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-[120px] px-8 bg-white text-[#1d1d1f]">
            <nav className="fixed top-0 left-0 w-full h-[80px] bg-white border-b border-black/10 flex justify-between items-center px-10 z-50">
                <Link href="/" className="font-bold text-xl tracking-widest text-[#1d1d1f] hover:opacity-70 transition-opacity">
                    FEELPROD
                </Link>
                {/* Simplified nav for subpages or standard hamburger reuse if componentized */}
                {/* For now, just a back link to keep it simple or we can duplicate the header logic */}
                <Link href="/" className="text-sm font-semibold tracking-wide hover:underline">
                    RETOUR ACCUEIL
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl mb-8 font-black tracking-tighter" style={{ fontFamily: 'var(--font-comic)' }}>À PROPOS</h1>
                <p className="text-xl leading-relaxed mb-6 font-medium text-gray-800">
                    Bienvenue sur la page À Propos.
                </p>
                <p className="text-lg text-gray-600">
                    Cette page est actuellement en construction. Bientôt, vous découvrirez ici l'histoire de FeelProd et notre vision.
                </p>
            </div>
        </main>
    );
}
