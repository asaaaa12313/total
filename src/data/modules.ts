import { Module } from "@/store/useCartStore";

export const WIPLE_MODULES: Module[] = [
    // SIGNAL (Viral Marketing)
    {
        id: "signal-seo-optimization-single",
        name: "네이버/당근/블로그 SEO 최적화 (단품)",
        category: "SIGNAL",
        description: "검색 엔진 점유율 확보를 위한 필수 신호 증폭기",
        price: 30000,
    },
    {
        id: "signal-seo-optimization-pack",
        name: "네이버/당근/블로그 SEO 최적화 (3개 묶음)",
        category: "SIGNAL",
        description: "알뜰팩으로 더 저렴하게 검색 장악",
        price: 80000,
    },
    {
        id: "signal-blog-single",
        name: "매장 블로그 원고 (1건 맛보기)",
        category: "SIGNAL",
        description: "전문 작가의 고품질 원고 1건 체험",
        price: 20000,
    },
    {
        id: "signal-blog-bulk",
        name: "매장 블로그 원고 (10건 대용량)",
        category: "SIGNAL",
        description: "정기적인 콘텐츠 발행을 위한 대용량 패키지",
        price: 150000,
    },
    {
        id: "signal-review-unlimited",
        name: "체험단 모집 (무제한)",
        category: "SIGNAL",
        description: "월 8만원으로 누리는 무제한 체험단 마케팅",
        price: 80000,
    },

    // VISUAL (Content Creation)
    {
        id: "visual-shooting",
        name: "사진/영상 촬영",
        category: "VISUAL",
        description: "사진 20-25장 + 영상 40-50장 (수도권 방문 / 보정본 원본 제공)",
        price: 400000,
    },
    {
        id: "visual-shortform",
        name: "숏폼 제작",
        category: "VISUAL",
        description: "건당 5만원 (영상 원본 제공 시) - 임팩트 있는 숏폼 영상",
        price: 50000,
    },
    {
        id: "visual-design",
        name: "디자인 시안",
        category: "VISUAL",
        description: "카드뉴스, 배너, 팝업 등 눈길을 사로잡는 디자인",
        price: 30000,
    },

    // BOOST (Ad Operation)
    {
        id: "boost-sns-setting",
        name: "SNS 광고 세팅",
        category: "BOOST",
        description: "인스타/유튜브 타겟 정밀 설정 및 효율적인 광고 집행",
        price: 100000,
    },
    {
        id: "boost-sns-operation",
        name: "SNS 광고 운영",
        category: "BOOST",
        description: "세팅 + 타겟 + 소재등록에 성과보고서까지",
        price: 200000,
    },
    {
        id: "boost-place-search",
        name: "플레이스 검색광고",
        category: "BOOST",
        description: "광고 세팅 + 제외 키워드 설정 + 지역 타겟팅 최적화",
        price: 50000,
    }
];
