"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

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

export const InfiniteCarousel = ({ images, items, speed = 50, onOpen }: InfiniteCarouselProps) => {
    // Normalize data: transform simple strings into objects if needed
    const data: CarouselItem[] = items || (images ? images.map(img => ({ image: img })) : []);

    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll animation (pauses on hover or drag)
    useAnimationFrame((t, delta) => {
        if (isHovered || isDragging) return;

        const currentX = x.get();
        const containerWidth = containerRef.current?.scrollWidth || 0;
        const halfWidth = containerWidth / 2;

        // Move left by speed pixels per second
        const newX = currentX - (speed * delta) / 1000;

        // Reset when we've scrolled half the width (because we duplicate items)
        if (Math.abs(newX) >= halfWidth) {
            x.set(0);
        } else {
            x.set(newX);
        }
    });

    return (
        <div
            className="flex overflow-hidden relative w-full pointer-events-auto z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                ref={containerRef}
                className="flex gap-4 md:gap-8 px-4"
                style={{
                    x,
                    width: "fit-content",
                    cursor: isDragging ? "grabbing" : "grab"
                }}
                drag="x"
                dragConstraints={{ left: -5000, right: 0 }}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
            >
                {/* On double la liste pour l'effet infini */}
                {[...data, ...data].map((item, index) => (
                    <div
                        key={index}
                        className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] flex-shrink-0 bg-neutral-900 overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => {
                            if (onOpen && item.videoId && !isDragging) {
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
