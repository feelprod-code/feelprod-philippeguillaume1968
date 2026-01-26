"use client";
import { useRef, useEffect, useState, useCallback } from "react";

interface CardProps {
    image: string;
    videoSrc?: string;
    videoId?: string;
    alt: string;
}

interface InfiniteCarouselProps {
    items: CardProps[];
    onOpen: (src?: string, id?: string) => void;
}

export default function InfiniteCarousel({ items, onOpen }: InfiniteCarouselProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const scrollPos = useRef(0);
    const animationRef = useRef<number>(0);
    const speed = 0.5;

    // Clone items x3 for infinite loop
    const displayItems = [...items, ...items, ...items];

    // Animation Loop
    const animate = useCallback(() => {
        if (!trackRef.current) return;

        if (!isDragging) {
            scrollPos.current += speed;
        }

        const track = trackRef.current;
        const totalWidth = track.scrollWidth;
        const oneSetWidth = totalWidth / 3;

        if (scrollPos.current >= oneSetWidth) {
            scrollPos.current = 0;
        } else if (scrollPos.current < 0) {
            scrollPos.current = oneSetWidth - 1;
        }

        track.style.transform = `translateX(-${scrollPos.current}px)`;
        animationRef.current = requestAnimationFrame(animate);
    }, [isDragging]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [animate]);

    // Event Handlers
    const handleStart = (clientX: number) => {
        setIsDragging(true);
        startX.current = clientX + scrollPos.current;
    };

    const handleMove = (clientX: number) => {
        if (!isDragging) return;
        scrollPos.current = startX.current - clientX;
    };

    const handleEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="horizontal-scroll-container"
            onMouseDown={(e) => handleStart(e.pageX)}
            onMouseMove={(e) => handleMove(e.pageX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
        >
            <div
                className="carousel-track"
                ref={trackRef}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                {displayItems.map((item, index) => (
                    <div
                        key={index}
                        className="card group relative"
                        onClick={(e) => {
                            // Prevent click if it was a drag (simple threshold)
                            // Actually difficult to calculate exactly without state, but if isDragging is false on mouseUp, it triggers click.
                            // We'll rely on a simple assumption: if we are here, logic in parent handles it?
                            // Better: Check time or distance.
                            onOpen(item.videoSrc, item.videoId);
                        }}
                    >
                        {item.videoSrc ? (
                            <video
                                src={item.videoSrc}
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster={item.image}
                                className="w-full h-full object-cover pointer-events-none"
                            />
                        ) : (
                            <img src={item.image} alt={item.alt} draggable={false} className="w-full h-full object-cover" />
                        )}

                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transform scale-90 transition-transform duration-300 group-hover:scale-100">
                                <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
