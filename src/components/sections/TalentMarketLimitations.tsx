"use client";

import { motion } from "framer-motion";
import { XCircle, AlertTriangle, FileQuestion, BadgeAlert } from "lucide-react";

const LIMITATIONS = [
    {
        icon: BadgeAlert,
        title: "검증되지 않은 전문가",
        desc: "포트폴리오만 믿고 맡겼다가 낭패를 봅니다."
    },
    {
        icon: FileQuestion,
        title: "기획의 부담",
        desc: "기획안을 직접 만들어야 결과물이 나옵니다."
    },
    {
        icon: AlertTriangle,
        title: "디자인 퀄리티",
        desc: "일관성 없는 디자인으로 브랜드 이미지를 해칩니다."
    },
    {
        icon: XCircle,
        title: "책임 소재 불분명",
        desc: "문제 발생 시 해결이 어렵고 환불이 복잡합니다."
    }
];

export function TalentMarketLimitations() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,0,0,0.2),transparent_70%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-rose-500 font-bold tracking-widest text-sm uppercase mb-3 block animate-pulse">Warning: Market Risks</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        재능 마켓의 <span className="text-rose-500">한계</span>
                    </h2>
                    <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">
                        저렴한 가격 뒤에 숨겨진 리스크, 경험해보셨나요?<br className="hidden md:block" />
                        개인 프리랜서 위주의 재능 마켓은 명확한 한계가 존재합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {LIMITATIONS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <div className="h-full bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-rose-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
