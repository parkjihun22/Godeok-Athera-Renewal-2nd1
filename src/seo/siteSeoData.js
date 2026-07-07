const SITE_URL = "https://www.godeok-athera.co.kr";

export const siteSeo = {
  siteName: "고덕신도시 아테라",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultTitle: "고덕신도시 아테라 | 평택 고덕 A-63BL 630세대",

  defaultDescription:
    "고덕신도시 아테라 공식 홈페이지입니다. 경기도 평택시 평택고덕국제화계획지구 A-63BL에 공급되는 총 630세대 프리미엄 브랜드 아파트로, 전용 74㎡A·74㎡B·84㎡A·84㎡B·84㎡C 타입, 사업안내, 입지환경, 공급정보, 청약정보, 분양가 상담, 견본주택과 모델하우스 방문예약 정보를 안내합니다.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "평택시",
    streetAddress: "평택고덕국제화계획지구 A-63BL",
    block: "A-63BL",
    households: "630세대",
    scale: "지하 1층 ~ 지상 27층, 6개동, 총 630세대",
    unitTypes: ["74㎡A", "74㎡B", "84㎡A", "84㎡B", "84㎡C"],
    brand: "ATHERA",
    brands: ["고덕신도시 아테라", "ATHERA", "금호건설"],
    developer: "LH한국토지주택공사 · 금호건설 컨소시엄",
    contractor: "금호건설(주)",
    navigationSchemaName: "고덕신도시 아테라 주요 메뉴",
  },

  keywords: [
    "고덕신도시 아테라",
    "평택 고덕 아테라",
    "고덕 아테라",
    "평택고덕국제화계획지구 A-63BL",
    "고덕국제신도시 아파트",
    "평택 고덕 아파트",
    "평택 아파트 분양",
    "평택 고덕 분양",
    "고덕신도시 아테라 분양",
    "고덕신도시 아테라 청약",
    "고덕신도시 아테라 분양가",
    "고덕신도시 아테라 모집공고",
    "고덕신도시 아테라 공급안내",
    "고덕신도시 아테라 모델하우스",
    "고덕신도시 아테라 견본주택",
    "고덕신도시 아테라 방문예약",
    "고덕신도시 아테라 관심고객등록",
    "고덕신도시 아테라 74A",
    "고덕신도시 아테라 74B",
    "고덕신도시 아테라 84A",
    "고덕신도시 아테라 84B",
    "고덕신도시 아테라 84C",
    "삼성전자 평택캠퍼스 직주근접",
    "평택지제역 생활권",
    "금호건설 아테라",
    "ATHERA",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드 소개", path: "/Brand/intro" },
      { name: "홍보 영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업개요",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "모집공고안내", path: "/SalesInfo/announcement" },
      { name: "계약서류안내", path: "/SalesInfo/guide" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지 배치도", path: "/ComplexGuide/intro" },
      { name: "호수 배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "세대안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "74A㎡", path: "/FloorPlan/59A" },
      { name: "74B㎡", path: "/FloorPlan/59B" },
      { name: "84A㎡", path: "/FloorPlan/84A" },
      { name: "84B㎡", path: "/FloorPlan/84B" },
      { name: "84C㎡", path: "/FloorPlan/114A" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "고덕신도시 아테라 | 평택 고덕 A-63BL 630세대",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 브랜드소개 페이지입니다. 금호건설이 선보이는 ATHERA 브랜드의 주거 가치와 평택 고덕국제신도시 프리미엄 라이프, 단지 콘셉트와 브랜드 철학을 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 홍보영상 페이지입니다. 평택고덕국제화계획지구 A-63BL 입지, 단지 상품성, ATHERA 브랜드 가치와 고덕국제신도시의 미래 주거 가치를 영상으로 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 사업안내 페이지입니다. 경기도 평택시 평택고덕국제화계획지구 A-63BL, 지하 1층~지상 27층, 6개동, 총 630세대 규모의 프리미엄 브랜드 아파트 정보를 확인하세요.",
    menu: "사업개요",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 분양일정 안내 페이지입니다. 특별공급, 일반공급, 당첨자 발표, 서류접수, 정당계약 등 청약 전 확인해야 할 주요 분양 일정을 안내합니다.",
    menu: "사업개요",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 공급안내 페이지입니다. 총 630세대 공급 규모와 전용 74㎡A·74㎡B·84㎡A·84㎡B·84㎡C 타입 구성, 청약 전 확인해야 할 주요 분양 정보와 상담 준비사항을 안내합니다.",
    menu: "분양안내",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 입주자 모집공고 안내 페이지입니다. 공급 위치, 공급 타입, 청약 일정, 공급 조건, 계약 조건, 유의사항 등 분양 전 반드시 확인해야 할 공고 정보를 제공합니다.",
    menu: "분양안내",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 계약서류안내 페이지입니다. 청약 당첨 후 계약 진행, 자격 확인, 제출서류, 계약 준비사항과 모델하우스 상담 전 확인해야 할 주요 내용을 안내합니다.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 입지환경 안내 페이지입니다. 평택고덕국제화계획지구 A-63BL 입지, 삼성전자 평택캠퍼스 직주근접, 평택지제역 생활권, 광역교통망과 고덕국제신도시 생활 인프라를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 프리미엄 안내 페이지입니다. 평택 고덕국제신도시의 입지 가치, 삼성전자 평택캠퍼스 직주근접성, 생활 인프라, ATHERA 브랜드 설계와 미래가치를 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지 배치도 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 단지 배치도 안내 페이지입니다. 총 630세대 규모의 단지 구성과 동선, 조망, 채광, 통풍, 생활 편의와 쾌적성을 고려한 단지 설계를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수 배치도 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 호수 배치도 안내 페이지입니다. 동·호수 구성과 단지 내 위치, 세대별 배치 흐름, 주거 동선을 확인하고 관심 타입을 비교해 보세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 커뮤니티 안내 페이지입니다. 입주민의 건강, 여가, 휴식과 소통을 고려한 커뮤니티 시설과 프리미엄 단지 생활 가치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan59A: page({
    path: "/FloorPlan/59A",
    title: "74A 타입 평면도 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 74A 타입 평면도 안내 페이지입니다. 전용 74㎡A의 공간 구성, 수납 계획, 생활 동선과 실거주에 적합한 평면 특장점을 확인하세요.",
    menu: "세대안내",
  }),

  floorPlan59B: page({
    path: "/FloorPlan/59B",
    title: "74B 타입 평면도 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 74B 타입 평면도 안내 페이지입니다. 전용 74㎡B의 공간 활용, 세대 구성, 수납 계획과 라이프스타일에 맞춘 주거 동선을 확인하세요.",
    menu: "세대안내",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/84A",
    title: "84A 타입 평면도 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 84A 타입 평면도 안내 페이지입니다. 선호도 높은 전용 84㎡A의 공간 구성, 주거 동선, 수납과 가족 중심의 평면 특장점을 확인하세요.",
    menu: "세대안내",
  }),

  floorPlan84B: page({
    path: "/FloorPlan/84B",
    title: "84B 타입 평면도 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 84B 타입 평면도 안내 페이지입니다. 전용 84㎡B의 세대 구성, 공간 활용, 수납 계획과 실거주 중심의 주거 동선을 확인하세요.",
    menu: "세대안내",
  }),

  floorPlan84C: page({
    path: "/FloorPlan/114A",
    title: "84C 타입 평면도 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 84C 타입 평면도 안내 페이지입니다. 전용 84㎡C의 공간 구성, 생활 동선, 수납 계획과 프리미엄 주거 특장점을 확인하세요.",
    menu: "세대안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 E-모델하우스 페이지입니다. 74A·74B·84A·84B·84C 타입별 실내 구조, 공간 구성, 주거 동선과 유니트 특장점을 온라인으로 확인하세요.",
    menu: "세대안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 고덕신도시 아테라",
    description:
      "고덕신도시 아테라 관심고객등록 및 모델하우스 방문예약 페이지입니다. 분양 일정, 공급정보, 청약 안내, 분양가 상담, 타입별 평면 안내와 견본주택 방문 상담을 빠르게 신청하세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 고덕신도시 아테라",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 고덕신도시 아테라 홈페이지의 사업안내, 분양안내, 입지환경, 단지안내, 세대안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

const normalizeSeoPath = (pathname = "/") => {
  let cleanPath = pathname || "/";

  try {
    if (/^https?:\/\//.test(cleanPath)) {
      cleanPath = new URL(cleanPath).pathname;
    }
  } catch {
    cleanPath = "/";
  }

  cleanPath = decodeURI(cleanPath)
    .split("?")[0]
    .split("#")[0]
    .replace(/\/$/, "");

  return cleanPath.toLowerCase() || "/";
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    normalizeSeoPath(value.path),
    key,
  ])
);

export const seoPageList = Object.values(seoPages).filter(
  (item) => item.robots !== "noindex, follow"
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteSeo.siteUrl}${normalizedPath}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const normalizedPath = normalizeSeoPath(pathname);
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) return seoPages.customer;
  if (normalizedPath.includes("/promotion/customer")) return seoPages.customer;

  return seoPages.notFound;
};