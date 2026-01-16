"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";
import { CartModal } from "./CartModal";

export function Header() {
    const cartCount = useCartStore((state) => state.selectedModules.length);
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="text-xl font-bold font-sans tracking-tight text-slate-900">
                            위플 마켓
                        </Link>
                        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                            <Link href="#services" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('module-docking')?.scrollIntoView({ behavior: 'smooth' });
                            }} className="hover:text-indigo-600 transition-colors">
                                서비스 목록
                            </Link>
                            <Link href="#pricing" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('performance-chart')?.scrollIntoView({ behavior: 'smooth' });
                            }} className="hover:text-indigo-600 transition-colors">
                                요금 안내
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
                        <div
                            className="flex items-center gap-2 cursor-pointer group"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <span className="group-hover:text-indigo-600 transition-colors">장바구니</span>
                            <div className="relative">
                                <ShoppingCart className="w-5 h-5 text-slate-900 group-hover:text-indigo-600 transition-colors" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
