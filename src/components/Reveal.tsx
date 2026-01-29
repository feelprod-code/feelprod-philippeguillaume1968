"use client";
import { motion } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string; // Add optional className
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
    return (
        <motion.div
            className={className} // Apply it here
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }} // Physics-based ease
        >
            {children}
        </motion.div>
    );
}
