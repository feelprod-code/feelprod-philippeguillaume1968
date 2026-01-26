"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

export interface CarouselItem {
    videoId?: string;
    image: string;
    alt?: string;
}

interface InfiniteCarouselProps {
    images?: string[]; // Simple mode (About page)
    items?: CarouselItem[]; // Advanced mode (Home page)
    speed?: number;
    onOpen?: (src?: string, id?: string) => void;
}

export const InfiniteCarousel = ({ images, items, speed = 25, onOpen }: InfiniteCarouselProps) => {
    // Normalize data: transform simple strings into objects if needed
    const data: CarouselItem[] = items || (images ? images.map(img => ({ image: img })) : []);

    return (
        <div className="flex overflow-hidden relative w-full pointer-events-auto z-10">
            <motion.div
                className="flex gap-4 md:gap-8 px-4"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                style={{ width: "fit-content" }}
            >
                {/* On double la liste pour l'effet infini */}
                {[...data, ...data].map((item, index) => (
                    <div
                        key={index}
                        className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] flex-shrink-0 bg-neutral-900 overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => {
                            if (onOpen && item.videoId) {
                                onOpen(undefined, item.videoId);
                            }
                        }}
                    >
                        {/* Play Button Overlay (Only if videoId exists) */}
                        {item.videoId && (
                            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        )}

                        <Image
                            src={item.image}
                            alt={item.alt || `Gallery image ${index}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
