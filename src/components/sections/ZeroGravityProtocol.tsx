"use client";

import { motion } from "framer-motion";
import { Handshake, PiggyBank, ShieldCheck } from "lucide-react";

const PROMISES = [
    {
        icon: Handshake,
        title: "약정 없음 (No Contract)",
        subtitle: "원하는 만큼만 자유롭게",
        desc: "불필요한 장기 약정 없이, 1회 단위로 필요한 만큼만 서비스를 이용하세요."
    },
    {
        icon: PiggyBank,
        title: "관리비 없음 (No Surcharge)",
        subtitle: "불필요한 고정 지출 0원",
        desc: "매달 나가는 관리비 걱정 없이, 오직 서비스 이용료만 합리적으로 지불하세요."
    },
    {
        icon: ShieldCheck,
        title: "위약금 없음 (No Penalty)",
        subtitle: "언제든 부담 없이 중단",
        desc: "서비스 해지 시 발생하는 위약금 걱정 끝. 만족스럽지 않다면 언제든 멈출 수 있습니다."
    }
];

export function ZeroGravityProtocol() {
    return (
        <section className="py-24 bg-white relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-3 block">Service Principles</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">위플 마켓의 3가지 약속</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROMISES.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="flex-1"
                        >
                            <div className="h-full flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-10 h-10 text-indigo-600" />
                                </div>
                                <div className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-wide">{item.title}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.subtitle}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
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
