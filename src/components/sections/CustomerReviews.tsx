"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const REVIEW_IMAGES = [
    "/images/sample2/review_1.png",
    "/images/sample2/review_2.png",
    "/images/sample2/review_3.png",
    "/images/sample2/review_4.png",
    "/images/sample2/review_5.png",
    "/images/sample2/review_6.png",
    "/images/sample2/review_7.png",
    "/images/sample2/review_8.png",
    "/images/sample2/review_9.png",
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
                    className="flex gap-6 items-center whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 80, // Slower duration for readability
                            ease: "linear",
                        },
                    }}
                >
                    {/* We render the images twice to create a seamless infinite loop */}
                    {[...REVIEW_IMAGES, ...REVIEW_IMAGES].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[400px] md:w-[350px] md:h-[480px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-white"
                        >
                            <Image
                                src={src}
                                alt={`Customer Review ${index + 1}`}
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
