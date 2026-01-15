import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Wiple Market - Anti-Gravity Platform",
  description: "Gravity Off. Growth On. 마케팅의 물리적 제약을 제거한 모듈형 비즈니스 솔루션.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body
        className={`${rajdhani.variable} antialiased bg-[var(--bg-space)] text-white overflow-x-hidden`}
        style={{ fontFamily: "var(--font-pretendard), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
