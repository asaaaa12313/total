"use client";

import { useCartStore } from "@/store/useCartStore";
import { NeonButton } from "../ui/NeonButton";
import { FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingDock() {
    const { selectedModules, totalPrice } = useCartStore();
    const count = selectedModules.length;
    const total = totalPrice().toLocaleString();

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 w-full z-40 bg-white/95 border-t border-slate-200 py-4 backdrop-blur-md shadow-[0_-5px_30px_rgba(0,0,0,0.05)]"
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">선택한 상품 현황</span>
                        <span className="text-sm md:text-lg font-bold text-slate-900">
                            <span className="text-indigo-600">{count}</span>개 상품 선택됨
                        </span>
                    </div>
                    <div className="hidden md:flex flex-col border-l border-slate-300 pl-8">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">예상 견적 합계</span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={total}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-lg font-bold text-slate-900"
                            >
                                {total} 원
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <div className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest animate-pulse">
                            견적서 확인 가능
                        </div>
                    </div>
                    <NeonButton
                        onClick={() => {
                            const section = document.getElementById('launch-sequence');
                            section?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center gap-2 !rounded-full !bg-gradient-to-r !from-indigo-600 !to-violet-600 !shadow-lg !shadow-indigo-500/30 !border-none"
                    >
                        견적서 확인하기 <FileText className="w-4 h-4" />
                    </NeonButton>
                </div>
            </div>
        </motion.div>
    );
}
