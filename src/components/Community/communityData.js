import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "프리미엄 라이프를 완성하는 특화 커뮤니티",

  description:
    "고덕신도시 아테라는 입주민의 라이프스타일을 고려한 다양한 커뮤니티 시설과 쾌적한 단지 설계, 풍부한 조경 공간을 통해 고덕국제신도시를 대표하는 프리미엄 주거환경을 제공합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "고덕신도시 아테라 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "쾌적한 일상을 위한 단지 배치",

      description:
        "고덕신도시 아테라는 채광과 통풍을 고려한 동 배치와 효율적인 보행 동선, 풍부한 녹지와 조경 공간을 계획하여 더욱 쾌적하고 여유로운 주거환경을 제공합니다.",

      image: layoutImage,
      alt: "고덕신도시 아테라 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "생활의 품격을 높이는 특화설계",

      description:
        "실거주 만족도를 높이는 다양한 특화설계와 자연을 담은 조경, 입주민 중심의 공간 계획으로 고덕신도시 아테라만의 차별화된 프리미엄 주거 가치를 완성합니다.",

      image: designImage,
      alt: "고덕신도시 아테라 특화설계",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "일상의 만족을 더하는 커뮤니티",

      description:
        "피트니스센터를 비롯한 다양한 주민공동시설과 커뮤니티 공간을 마련하여 건강과 휴식, 소통이 함께하는 프리미엄 라이프를 제공합니다.",

      image: communityImage,
      alt: "고덕신도시 아테라 커뮤니티",
    },
  ],
};