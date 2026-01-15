"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Layers, Zap } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0f1115]">
            {/* Background - Dark Grid */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Radial Gradient Glow */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.15),transparent_70%)]" />

            {/* Floating Glass Elements (Motion Graphics) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Element 1 - Purple/Pink */}
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[10%] w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-center justify-center"
                >
                    <Zap className="w-10 h-10 text-white/80 drop-shadow-lg" />
                </motion.div>

                {/* Element 2 - Orange/Yellow */}
                <motion.div
                    animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] right-[10%] w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-center justify-center"
                >
                    <Layers className="w-12 h-12 text-white/80 drop-shadow-lg" />
                </motion.div>

                {/* Element 3 - Cyan/Blue */}
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[25%] right-[20%] w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-center justify-center"
                >
                    <Box className="w-8 h-8 text-white/80 drop-shadow-lg" />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <motion.span
                        animate={{ boxShadow: ["0 0 0px rgba(139,92,246,0)", "0 0 20px rgba(139,92,246,0.5)", "0 0 0px rgba(139,92,246,0)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block px-5 py-2 rounded-full border border-violet-500/30 bg-violet-900/20 backdrop-blur-md text-sm font-bold text-violet-300 tracking-wide mb-8"
                    >
                        약정 없는 자유로운 마케팅 플랫폼
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 text-white tracking-tight drop-shadow-2xl">
                        비즈니스 성장을 위한<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 animate-gradient-x">
                            최적의 마케팅 솔루션
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                        복잡한 계약과 불필요한 비용 없이,<br className="hidden md:block" />
                        필요한 서비스만 선택하여 바로 시작하세요.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <button
                            onClick={() => {
                                document.getElementById('module-docking')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group relative px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)] transition-all overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                서비스 보러가기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-fuchsia-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
