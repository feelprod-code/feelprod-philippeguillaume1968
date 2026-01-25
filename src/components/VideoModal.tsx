"use client";
import { useEffect, useRef } from "react";

interface VideoModalProps {
    isOpen: boolean;
    videoSrc?: string;
    videoId?: string;
    onClose: () => void;
}

export default function VideoModal({ isOpen, videoSrc, videoId, onClose }: VideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            if (videoRef.current) {
                // Attempt to play local video
                videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
            }
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed top-0 left-0 w-full h-full z-[10000] flex justify-center items-center"
            aria-hidden={!isOpen}
        >
            <div
                className="absolute top-0 left-0 w-full h-full bg-black/90 backdrop-blur-md"
                onClick={onClose}
            />
            <div className="relative w-[90%] max-w-[1200px] z-10 transition-transform duration-300 scale-100">
                <button
                    className="absolute -top-12 right-0 text-white text-4xl leading-none hover:text-[#fca00b] transition-colors"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black">
                    {videoSrc ? (
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            controls
                            className="absolute top-0 left-0 w-full h-full object-contain"
                            playsInline
                            muted
                            autoPlay
                        />
                    ) : videoId ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`}
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
