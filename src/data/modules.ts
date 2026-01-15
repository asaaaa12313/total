import { Module } from "@/store/useCartStore";

export const WIPLE_MODULES: Module[] = [
    // SIGNAL (Viral)
    {
        id: "signal-search-optimization",
        name: "검색 최적화 (SEO)",
        category: "SIGNAL",
        description: "검색 엔진 점유율 확보를 위한 필수 신호 증폭기",
        price: 30000,
    },
    {
        id: "signal-blog-editorial",
        name: "블로그 원고 (Editorial)",
        category: "SIGNAL",
        description: "알고리즘에 최적화된 고밀도 텍스트 데이터",
        price: 15000,
    },
    {
        id: "signal-review-unlimited",
        name: "무제한 체험단 (Unlimited)",
        category: "SIGNAL",
        description: "월 8만원으로 누리는 무제한 체험단 마케팅",
        price: 80000,
    },

    // VISUAL (Content)
    {
        id: "visual-data-set",
        name: "비주얼 데이터 세트 (Visual)",
        category: "VISUAL",
        description: "브랜드 이미지를 각인시키는 고해상도 시각 자원",
        price: 400000,
    },
    {
        id: "visual-short-form",
        name: "숏폼 콘텐츠 (Short-form)",
        category: "VISUAL",
        description: "60초 이내에 소비자를 사로잡는 임팩트 영상",
        price: 30000,
    },

    // BOOST (Ads)
    {
        id: "boost-sns-targeting",
        name: "SNS 정밀 타겟팅 (Targeting)",
        category: "BOOST",
        description: "정밀 타겟 설정을 통한 고효율 도달 시스템",
        price: 100000,
    }
];
