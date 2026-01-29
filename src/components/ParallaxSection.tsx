"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function ParallaxSection({ children, className, id }: ParallaxSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Background Parallax: Move slightly slower (y ranges from -10% to 10%)
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={ref} className={`relative overflow-hidden ${className || ""}`} id={id}>
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
                {/* This div expects the video/bg to be absolute positioned inside it */}
            </motion.div>
            {children}
        </section>
    );
}
