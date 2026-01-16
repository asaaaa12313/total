"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <span className="text-2xl font-bold font-sans tracking-tight text-white">
                        위플 마켓
                    </span>
                    <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-400">
                        <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
                        <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 space-y-4">
                    <div>
                        <h4 className="text-sm font-bold text-white mb-1">주)위즈더플래닝</h4>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-xs text-slate-500 leading-relaxed md:items-center">
                            <span>대표: 정현우</span>
                            <span className="hidden md:inline text-slate-700">|</span>
                            <span>사업자등록번호: 668-81-00391</span>
                            <span className="hidden md:inline text-slate-700">|</span>
                            <span>통신판매업신고: 1698-9120-7020-8511</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 text-xs text-slate-500">
                        <p>주소: 서울시 금천구 디지털로 178 가산퍼블릭 A동 2518호 2519호</p>
                        <p>고객센터: 1670-0704 (운영시간: 오전 10:00 ~ 오후 6:00)</p>
                        <p>이메일: qpqpqp@wiztheplanning.com</p>
                    </div>

                    <p className="text-[10px] text-slate-600 mt-8">
                        © 2024 WIPLE MARKET. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
