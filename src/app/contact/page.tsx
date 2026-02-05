"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
    // Animation séquencée
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    };

    return (
        <main className="bg-white min-h-screen text-neutral-800 font-sans pb-20 overflow-x-hidden">
            <Navbar />

            {/* SPACER (180px) pour éviter chevauchement */}
            <div className="w-full h-[180px]" />

            <div className="px-4 flex flex-col items-center">

                {/* FORMULAIRE */}
                <motion.form
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-[90%] md:w-full max-w-4xl space-y-24"
                >
                    {/* Ligne 1 - Sans Placeholder (retiré) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        <InputGroup label="PRÉNOM" delay={0} />
                        <InputGroup label="NOM" delay={0.2} />
                    </div>

                    {/* Ligne 2 - Sans Placeholder (retiré) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        <InputGroup label="EMAIL" type="email" delay={0.4} />
                        <InputGroup label="TÉLÉPHONE" type="tel" delay={0.6} />
                    </div>

                    {/* Ligne 3 - Racontez-moi (Conservé) */}
                    <InputGroup label="PROJET" isTextArea placeholder="Racontez-moi votre histoire..." delay={0.8} />

                    {/* Bouton Simple - Taille réduite et Police Montserrat */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="pt-20 flex justify-center"
                    >
                        <button className="text-sm md:text-base uppercase tracking-[0.2em] hover:opacity-50 transition-opacity font-bold" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                            Nous Contacter
                        </button>
                    </motion.div>

                </motion.form>
            </div>
        </main>
    );
}

// COMPOSANT INPUT ANIMÉ
const InputGroup = ({ label, type = "text", isTextArea = false, placeholder, delay }: { label: string, type?: string, isTextArea?: boolean, placeholder?: string, delay?: number }) => {

    const variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Ligne se dessine (WIDTH animation)
    const lineVariants = {
        hidden: { width: "0%" },
        visible: {
            width: "100%",
            transition: { duration: 1.2, ease: "easeInOut", delay: 0.2 }
        }
    };

    return (
        <motion.div
            variants={variants}
            className="relative group w-full"
        >
            <label className="block text-sm md:text-base font-bold text-neutral-400 mb-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-neutral-900">
                {label}
            </label>

            {isTextArea ? (
                <textarea
                    rows={1}
                    className="w-full bg-transparent border-none py-4 text-2xl md:text-3xl text-neutral-900 placeholder-neutral-200 focus:outline-none resize-none transition-colors font-light"
                    placeholder={placeholder}
                    style={{ minHeight: '60px' }}
                />
            ) : (
                <input
                    type={type}
                    className="w-full bg-transparent border-none py-4 text-2xl md:text-3xl text-neutral-900 placeholder-neutral-200 focus:outline-none transition-colors font-light"
                    placeholder={placeholder} // Sera undefined si non passé, donc vide
                />
            )}

            {/* LIGNE BASE - GRIS CLAIR/MOYEN (Comme demandé) */}
            <motion.div
                variants={lineVariants}
                className="absolute bottom-0 left-0 h-[2px] bg-neutral-300"
            />

            {/* LIGNE HOVER - GRIS FONCÉ (Optionnel mais joli) */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-neutral-500 w-full scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />

        </motion.div>
    )
}
