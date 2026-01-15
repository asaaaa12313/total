"use client";

import { motion } from "framer-motion";

export function PerformanceChart() {
    return (
        <section id="performance-chart" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-3 block">Comparison</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
                        비용 효율 비교
                    </h2>
                    <p className="text-slate-600 font-medium text-lg">일반 대행사와 위플 마켓의 차이를 확인하세요.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* General Agency */}
                    <div className="relative p-8 rounded-2xl border border-slate-200 bg-slate-50">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            기존 방식
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-center text-slate-500">일반 대행사</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-slate-500 font-medium">
                                <span className="w-2 h-2 rounded-full bg-rose-400" />
                                불합리한 장기 약정 계약
                            </li>
                            <li className="flex items-center gap-4 text-slate-500 font-medium">
                                <span className="w-2 h-2 rounded-full bg-rose-400" />
                                관리비 + 위약금 이중 부과
                            </li>
                            <li className="flex items-center gap-4 text-slate-500 font-medium">
                                <span className="w-2 h-2 rounded-full bg-rose-400" />
                                전문성이 부족한 인력 배치
                            </li>
                        </ul>
                    </div>

                    {/* Wiple Market */}
                    <div className="relative p-8 rounded-2xl border border-violet-100 bg-white shadow-xl shadow-violet-100/50 transform md:-translate-y-4 transition-transform hover:-translate-y-5 duration-300">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg shadow-indigo-500/20 tracking-wide">
                            위플 솔루션
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-center text-slate-900">위플 마켓</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-slate-800 font-bold">
                                <span className="w-2.5 h-2.5 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                                필요할 때만 1회 단위 이용
                            </li>
                            <li className="flex items-center gap-4 text-slate-800 font-bold">
                                <span className="w-2.5 h-2.5 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                                투명한 서비스 정찰제
                            </li>
                            <li className="flex items-center gap-4 text-slate-800 font-bold">
                                <span className="w-2.5 h-2.5 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                                검증된 마케터 전담 팀 배치
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
