"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const CreativeTechCollage = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center overflow-hidden my-10 pointer-events-none select-none">

            {/* 1. ÉLÉMENTS GRAPHIQUES ARR IÈRE-PLAN (Style BD) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[800px] h-[800px] border-[2px] border-black rounded-full animate-spin-slow opacity-20 border-dashed"></div>
                <div className="absolute w-[600px] h-[600px] border-[2px] border-black rotate-45 opacity-20"></div>
            </div>

            {/* 2. SONY CAMERA (Gauche - Flottant) */}
            <motion.div
                initial={{ x: -100, opacity: 0, rotate: -10 }}
                animate={{ x: 0, opacity: 1, rotate: -5 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute left-[5%] md:left-[15%] top-[10%] md:top-[20%] w-40 md:w-80 z-10"
            >
                <div className="relative border-4 border-black bg-white p-2 shadow-[8px_8px_0px_#9C27B0] rotate-[-5deg] hover:rotate-[0deg] transition-transform duration-300 transform-gpu">
                    <div className="aspect-square relative overflow-hidden bg-purple-100">
                        <Image
                            src="/assets/images/contact/sony-camera.png"
                            alt="Sony Alpha Camera"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -top-3 -left-3 bg-purple-600 text-white font-black text-xs px-2 py-1 border-2 border-black -rotate-6">CAPTURE</div>
                </div>
            </motion.div>

            {/* 3. IPHONE CAGE (Droite - Flottant) */}
            <motion.div
                initial={{ x: 100, opacity: 0, rotate: 10 }}
                animate={{ x: 0, opacity: 1, rotate: 5 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="absolute right-[5%] md:right-[15%] top-[5%] md:top-[10%] w-32 md:w-72 z-20"
            >
                <div className="relative border-4 border-black bg-white p-2 shadow-[8px_8px_0px_#FF9800] rotate-[5deg] hover:rotate-[0deg] transition-transform duration-300 transform-gpu">
                    <div className="aspect-square relative overflow-hidden bg-orange-100">
                        <Image
                            src="/assets/images/contact/iphone-cage.png"
                            alt="iPhone Cage"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white font-black text-xs px-2 py-1 border-2 border-black rotate-6">MOBILE</div>
                </div>
            </motion.div>

            {/* 4. SETUP ACCESSORIES (Bas Centre - Ancrage) */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                className="absolute bottom-[20%] md:bottom-[10%] w-48 md:w-96 z-30"
            >
                <div className="relative border-4 border-black bg-white p-2 shadow-[8px_8px_0px_#F44336] hover:scale-105 transition-transform duration-300 transform-gpu">
                    <div className="aspect-video relative overflow-hidden bg-red-100">
                        <Image
                            src="/assets/images/contact/setup-accessories.png"
                            alt="Setup Accessories"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white font-black text-xs px-4 py-1 border-2 border-black">FULL GEAR</div>
                </div>
            </motion.div>

        </div>
    );
};
