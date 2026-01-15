"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: 'cyan' | 'indigo' | 'default';
    glow?: boolean;
}

export function NeonButton({ children, className, variant = 'default', glow = true, ...props }: NeonButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative px-8 py-3 font-bold transition-all duration-300 rounded-xl shadow-lg overflow-hidden group",
                variant === 'cyan' && "bg-cyan-500 text-white shadow-cyan-500/25 hover:bg-cyan-600",
                variant === 'indigo' && "bg-indigo-600 text-white shadow-indigo-600/25 hover:bg-indigo-700",
                variant === 'default' && "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-indigo-500/30",
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>

            {/* Shine Effect */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
        </motion.button>
    );
}
NeonButton.displayName = "NeonButton";
