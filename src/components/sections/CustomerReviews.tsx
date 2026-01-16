"use client";

import { motion } from "framer-motion";
import { User, MessageCircle } from "lucide-react";

interface Review {
    id: number;
    name: string;
    role: string;
    message: string;
    time: string;
    reply: string;
    footer: string;
}

const REVIEWS: Review[] = [
    {
        id: 1,
        name: "신OO",
        role: "대표님",
        message: "매번 키워드 고민하느라 머리 아팠는데 알아서 잡아주니 너무 편해요. 사업에만 집중할 수 있네요.",
        time: "오전 11:45",
        reply: "골치 아픈 건 저희에게 맡기시고 사업에만 전념하세요!",
        footer: "키워드 고민 해결, 사업에만 집중합니다."
    },
    {
        id: 2,
        name: "장OO",
        role: "점주님",
        message: "배달 앱 리뷰 관리보다 블로그 유입이 훨씬 구매 전환이 좋네요. 진작 할 걸 그랬습니다.",
        time: "오후 7:20",
        reply: "블로그가 생각보다 구매 전환율이 높죠! 빠른 판단 굿입니다.",
        footer: "배달 앱보다 블로그 유입 효과가 좋네요."
    },
    {
        id: 3,
        name: "서OO",
        role: "원장님",
        message: "학원생 모집 기간이라 바빴는데, 알아서 홍보해주니 상담 전화 받느라 바쁘네요 ㅎㅎ 행복한 비명!",
        time: "오후 3:40",
        reply: "원장님 실력이 좋아서 소문이 금방 난 것 같습니다 ^^",
        footer: "학원생 모집, 상담 전화 받느라 바쁩니다."
    },
    {
        id: 4,
        name: "김OO",
        role: "대표님",
        message: "마케팅은 처음이라 막막했는데 1:1로 설명해주시고 방향 잡아주셔서 든든합니다.",
        time: "오전 09:20",
        reply: "처음이 가장 중요합니다. 끝까지 든든한 파트너가 되어드릴게요!",
        footer: "막막했던 마케팅, 든든한 파트너를 만났습니다."
    },
    {
        id: 5,
        name: "박OO",
        role: "실장님",
        message: "단순 노출이 아니라 실제 문의로 이어지는게 신기해요. 매출이 눈에 띄게 늘었습니다.",
        time: "오후 2:15",
        reply: "정확한 타겟팅의 힘이죠! 매출 상승 축하드립니다 :)",
        footer: "단순 노출을 넘어 실제 매출 상승까지!"
    },
    {
        id: 6,
        name: "이OO",
        role: "대표님",
        message: "다른 대행사 쓰다가 효과 없어서 옮겼는데, 확실히 퀄리티가 다르네요. 글 하나하나 신경 쓴 게 보입니다.",
        time: "오전 10:30",
        reply: "진정성 있는 콘텐츠가 결국 고객의 마음을 움직입니다.",
        footer: "타 대행사와는 차원이 다른 콘텐츠 퀄리티."
    }
];

export function CustomerReviews() {
    return (
        <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">
                    Voices
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                    고객 후기 경험담
                </h2>
                <p className="text-slate-600 font-medium text-lg">
                    위플마켓을 통해 변화를 경험한 고객님들의 생생한 후기입니다.
                </p>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent" />

                {/* Marquee Track */}
                <motion.div
                    className="flex gap-8 items-center whitespace-nowrap px-4"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60, // Slower duration for readability
                            ease: "linear",
                        },
                    }}
                >
                    {/* Render reviews twice for seamless loop */}
                    {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="relative w-[320px] bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex-shrink-0 flex flex-col h-[420px] justify-between"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center">
                                    <User className="w-5 h-5 text-slate-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">
                                        {review.name} <span className="font-normal text-slate-500">{review.role}</span>
                                    </h4>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 space-y-4 font-medium text-sm">
                                {/* Customer Message */}
                                <div className="flex flex-col items-start gap-1">
                                    <div className="bg-slate-100 text-slate-700 p-4 rounded-2xl rounded-tl-sm leading-relaxed relative">
                                        {review.message}
                                    </div>
                                    <span className="text-[10px] text-slate-400 pl-1">{review.time}</span>
                                </div>

                                {/* Reply Message */}
                                <div className="flex flex-col items-end gap-1">
                                    <div className="bg-yellow-300 text-slate-900 p-4 rounded-2xl rounded-tr-sm leading-relaxed font-bold shadow-sm">
                                        {review.reply}
                                    </div>
                                </div>
                            </div>

                            {/* Footer Quote */}
                            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                                <p className="text-slate-800 font-bold text-sm">
                                    "{review.footer}"
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
