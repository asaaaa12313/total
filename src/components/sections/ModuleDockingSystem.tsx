"use client";

import { useState } from "react";
import { WIPLE_MODULES } from "@/data/modules";
import { useCartStore } from "@/store/useCartStore";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, ShoppingCart } from "lucide-react";

const TABS = ["SIGNAL", "VISUAL", "BOOST"] as const;

const TAB_LABELS: Record<typeof TABS[number], string> = {
    SIGNAL: "바이럴 마케팅",
    VISUAL: "콘텐츠 제작",
    BOOST: "광고 운영"
};

export function ModuleDockingSystem() {
    const [activeTab, setActiveTab] = useState<typeof TABS[number]>("SIGNAL");
    const { addToCart, removeFromCart, isInCart } = useCartStore();

    const filteredModules = WIPLE_MODULES.filter(m => m.category === activeTab);

    return (
        <section id="module-docking" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-3 block">Service Store</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
                        위플 마켓 서비스 목록
                    </h2>
                    <p className="text-slate-600 font-medium text-lg">비즈니스에 필요한 서비스만 골라 합리적으로 시작하세요.</p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300",
                                    activeTab === tab
                                        ? "bg-slate-900 text-white shadow-md shadow-slate-200"
                                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                )}
                            >
                                {TAB_LABELS[tab]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {filteredModules.map((module) => {
                            const added = isInCart(module.id);
                            return (
                                <motion.div
                                    key={module.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={cn(
                                        "h-full flex flex-col justify-between group border p-8 rounded-2xl transition-all duration-300",
                                        added
                                            ? "bg-white border-indigo-500 shadow-md ring-1 ring-indigo-500"
                                            : "bg-white border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300"
                                    )}>
                                        <div>
                                            <div className="flex justify-between items-start mb-4">
                                                <span className={cn(
                                                    "text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider",
                                                    added ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-600"
                                                )}>
                                                    {TAB_LABELS[module.category as keyof typeof TAB_LABELS]}
                                                </span>
                                                <span className="text-xl font-bold text-slate-900">
                                                    {module.price.toLocaleString()} 원
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3 text-slate-900">{module.name}</h3>
                                            <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                                                {module.description}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => added ? removeFromCart(module.id) : addToCart(module)}
                                            className={cn(
                                                "w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-300 text-sm tracking-wide shadow-sm",
                                                added
                                                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                                    : "bg-white border border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50"
                                            )}
                                        >
                                            {added ? (
                                                <>
                                                    <Check className="w-5 h-5" /> 장바구니 담김
                                                </>
                                            ) : (
                                                <>
                                                    <ShoppingCart className="w-5 h-5" /> 장바구니 담기
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
