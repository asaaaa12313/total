"use client";

import { useCartStore } from "@/store/useCartStore";
import { NeonButton } from "../ui/NeonButton";
import { motion } from "framer-motion";

export function LaunchSequence() {
    const { selectedModules, totalPrice } = useCartStore();
    const total = totalPrice().toLocaleString();

    return (
        <section id="launch-sequence" className="py-24 relative overflow-hidden bg-slate-50">
            {/* Background Grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">
                        신규 고객 혜택
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
                        맞춤형 전략 기획서 무료 제공
                    </h2>
                    <p className="text-slate-600 font-medium text-lg">
                        지금 상담을 요청하시면, 귀사의 비즈니스에 최적화된<br className="hidden md:block" />
                        <span className="text-slate-900 font-bold">마케팅 실행 전략</span>을 제안해드립니다.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/50">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-1">업체명</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400 font-medium"
                                    placeholder="예) 위플 코퍼레이션"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-1">연락처</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400 font-medium"
                                    placeholder="010-0000-0000"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-1">업종</label>
                            <input
                                type="text"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400 font-medium"
                                placeholder="예) 요식업, 패션, 테크..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-1">문의 내용</label>
                            <textarea
                                rows={4}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400 font-medium resize-none"
                                placeholder="귀사의 마케팅 고민을 입력해주세요."
                            />
                        </div>

                        {selectedModules.length > 0 && (
                            <div className="p-6 rounded-2xl border border-indigo-100 bg-indigo-50/30 space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-indigo-100">
                                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">선택한 모듈 견적</span>
                                    <span className="text-xs font-bold text-slate-400">{selectedModules.length}개 항목</span>
                                </div>

                                <div className="space-y-3">
                                    {selectedModules.map(m => (
                                        <div key={m.id} className="flex justify-between items-center">
                                            <span className="text-sm text-slate-700 font-medium">{m.name}</span>
                                            <span className="text-sm font-bold text-slate-900">{m.price.toLocaleString()}원</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-indigo-100 flex justify-between items-center">
                                    <span className="text-base font-bold text-slate-900">예상 총 견적</span>
                                    <span className="text-xl font-bold text-indigo-600">{total}원</span>
                                </div>
                            </div>
                        )}

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <button className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all">
                                기획서 신청하기
                            </button>
                        </motion.div>

                        <p className="text-center text-[11px] text-slate-400 font-medium">
                            작성해주신 정보는 상담 목적으로만 활용되며, 안전하게 보호됩니다.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
