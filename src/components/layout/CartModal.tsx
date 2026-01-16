"use client";

import { useCartStore } from "@/store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import { useEffect } from "react";

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
    const { selectedModules, totalPrice, removeFromCart } = useCartStore();
    const total = totalPrice().toLocaleString();

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed top-20 right-4 md:right-20 w-full max-w-md bg-white rounded-2xl shadow-2xl z-[70] overflow-hidden border border-slate-200"
                    >
                        <div className="bg-slate-50 p-6 border-b border-slate-200 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">장바구니</h3>
                                <p className="text-xs text-slate-500 font-medium mt-1">
                                    선택한 서비스 {selectedModules.length}개
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {selectedModules.length > 0 ? (
                            <div className="p-0">
                                <div className="max-h-[60vh] overflow-y-auto p-6 space-y-4">
                                    {/* Receipt Style Container */}
                                    <div className="bg-white rounded-xl border-2 border-dashed border-slate-200 p-5 space-y-4 relative">

                                        <div className="space-y-4">
                                            {selectedModules.map(m => (
                                                <div key={m.id} className="flex justify-between items-start group pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                                                    <div className="flex-1 pr-4">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 uppercase">
                                                                {m.category}
                                                            </span>
                                                        </div>
                                                        <div className="text-sm font-bold text-slate-800">
                                                            {m.name}
                                                        </div>
                                                        <div className="text-[12px] text-slate-400 mt-1 line-clamp-1">
                                                            {m.description}
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end gap-2">
                                                        <span className="text-sm font-bold text-slate-900 font-mono">
                                                            {m.price.toLocaleString()} 원
                                                        </span>
                                                        <button
                                                            onClick={() => removeFromCart(m.id)}
                                                            className="text-xs text-rose-500 hover:text-rose-700 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <Trash2 className="w-3 h-3" /> 삭제
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-bold text-slate-600">예상 견적 합계</span>
                                        <span className="text-2xl font-black text-indigo-600 font-mono">{total} 원</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            onClose();
                                            document.getElementById('launch-sequence')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-200"
                                    >
                                        컨설팅 신청하러 가기
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-12 text-center">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Trash2 className="w-8 h-8 text-slate-300" />
                                </div>
                                <h4 className="text-slate-900 font-bold mb-2">장바구니가 비어있습니다</h4>
                                <p className="text-slate-500 text-sm mb-6">서비스를 선택하여 견적을 확인해보세요.</p>
                                <button
                                    onClick={() => {
                                        onClose();
                                        document.getElementById('module-docking')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-6 py-2 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 text-sm"
                                >
                                    서비스 보러가기
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
