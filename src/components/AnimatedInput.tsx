"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    textarea?: boolean;
}

export default function AnimatedInput({ label, textarea = false, ...props }: AnimatedInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsFocused(true);
        if (props.onFocus) props.onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsFocused(false);
        if (props.onBlur) props.onBlur(e);
    };

    const wrapperVariants = {
        idle: { scale: 1, boxShadow: "0px 2px 4px rgba(0,0,0,0.03)" },
        focused: { scale: 1.02, boxShadow: "0px 10px 25px rgba(0,0,0,0.08), 0px 0px 0px 1px #000000" } // Subtle ring
    };

    const Component = textarea ? "textarea" : "input";

    return (
        <div className="group">
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isFocused ? "text-black" : "text-gray-500"}`}>
                {label}
            </label>
            <motion.div
                variants={wrapperVariants}
                initial="idle"
                animate={isFocused ? "focused" : "idle"}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-[12px] overflow-hidden"
            >
                <Component
                    {...(props as any)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`w-full px-5 py-4 text-base bg-transparent border-none outline-none text-black placeholder:text-gray-300 ${textarea ? "resize-none min-h-[150px]" : ""
                        }`}
                />
            </motion.div>
        </div>
    );
}
