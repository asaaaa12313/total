"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[var(--bg-main)]">
            {/* Background Elements - Soft Aurora Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-cyan-200/40 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="inline-block px-5 py-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-sm font-bold text-indigo-600 tracking-wide mb-8 shadow-sm">
                        약정 없는 자유로운 마케팅 플랫폼
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 text-slate-900 tracking-tight">
                        비즈니스 성장을 위한<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500">
                            최적의 마케팅 솔루션
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                        복잡한 계약과 불필요한 비용 없이,<br className="hidden md:block" />
                        필요한 서비스만 선택하여 바로 시작하세요.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <button
                            onClick={() => {
                                document.getElementById('module-docking')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all"
                        >
                            서비스 보러가기
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
