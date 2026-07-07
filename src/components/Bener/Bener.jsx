import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "고덕신도시 아테라" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="고덕신도시 아테라 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = ["홍보영상", "브랜드소개", "엘리프고덕센트럴하이"];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];

  const locationTitles = ["입지환경", "입지안내", "프리미엄"];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "74㎡평면도",
    "84㎡평면도",
    "74A㎡평면도",
    "74B㎡평면도",
    "84A㎡평면도",
    "84B㎡평면도",
    "84C㎡평면도",
    "E-모델하우스",
  ];

  
  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕신도시 아테라가 선보이는 고덕국제신도시의 새로운 주거 가치를 만나보세요.
        </div>
  
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          ATHERA 브랜드의 감각적인 설계와 평택 고덕 생활권의 미래가치를 확인하실 수 있습니다.
        </div>
  
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕신도시 아테라의 사업안내부터 공급정보까지 한눈에 확인하세요.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕신도시 아테라의 사업개요와 분양 정보를 안내합니다.
        </div>
  
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕국제화지구 Aab-13BL, 총 996세대 규모의 공급정보를 확인해 보세요.
        </div>
  
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          전용 74㎡ · 84㎡ 타입 구성과 평면 정보를 한곳에서 확인할 수 있습니다.
        </div>
  
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕신도시 아테라
        </div>
      </>
    );
  };
};
