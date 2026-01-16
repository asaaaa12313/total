"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EVIDENCE_IMAGES: string[] = [
    // Waiting for new data from user
];

export function Evidence() {
    return (
        <section id="evidence" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">
                    Our Portfolio
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                    성공적인 마케팅 실행 증거
                </h2>
                <p className="text-slate-600 font-medium text-lg">
                    위플마켓과 함께 성장한 브랜드들의 실제 포트폴리오입니다.
                </p>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

                {/* Marquee Track */}
                <motion.div
                    className="flex gap-6 items-center whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60, // Slower duration for more images
                            ease: "linear",
                        },
                    }}
                >
                    {/* We render the images twice to create a seamless infinite loop */}
                    {[...EVIDENCE_IMAGES, ...EVIDENCE_IMAGES].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-100 group bg-slate-50"
                        >
                            <Image
                                src={src}
                                alt={`Portfolio Evidence ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
