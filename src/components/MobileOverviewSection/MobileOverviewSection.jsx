// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>고덕신도시 아테라</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>경기도 평택시 평택고덕국제화계획지구 A-63BL</span>
        </li>

        <li>
          <strong>규모</strong>
          <span>지하 1층 ~ 지상 27층, 6개동 / 총 630세대</span>
        </li>

        <li>
          <strong>주택형</strong>
          <span>전용 74㎡A · 74㎡B · 84㎡A · 84㎡B · 84㎡C</span>
        </li>

        <li>
          <strong>시행</strong>
          <span>LH한국토지주택공사 · 금호건설 컨소시엄</span>
        </li>

        <li>
          <strong>시공</strong>
          <span>금호건설(주)</span>
        </li>
      </ul>
    ),
  },

  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="고덕신도시 아테라 입지환경"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="고덕신도시 아테라 생활권"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            고덕국제신도시의 미래가치를 담은<br />
            고덕신도시 아테라 프리미엄 라이프
          </p>
        </div>
  
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
  ];
  
  function PremiumSlider() {
    const slides = [
      {
        img: slide1,
        title: "고덕국제신도시 A-63BL 입지",
        desc:
          "경기도 평택시 평택고덕국제화계획지구 A-63BL<br/>삼성전자 평택캠퍼스와 가까운 직주근접 프리미엄<br/>고덕국제신도시의 미래가치를 품은 브랜드 주거단지",
      },
      {
        img: slide2,
        title: "74㎡ · 84㎡ 선호 평면",
        desc:
          "실수요 선호도가 높은 전용 74㎡·84㎡ 구성<br/>공간 활용성과 실용성을 고려한 특화 설계<br/>라이프스타일에 맞춰 선택 가능한 다양한 평면",
      },
      {
        img: slide3,
        title: "총 630세대 브랜드 단지",
        desc:
          "지하 1층 ~ 지상 27층, 6개동 총 630세대 규모<br/>쾌적한 단지 설계와 효율적인 주거 동선<br/>고덕신도시 아테라만의 품격 있는 주거환경",
      },
      {
        img: slide4,
        title: "교통과 생활을 모두 누리는 입지",
        desc:
          "고덕국제신도시 생활권의 다양한 생활 인프라<br/>삼성전자 평택캠퍼스 직주근접과 광역교통망<br/>평택 고덕의 편리한 생활환경을 누릴 수 있습니다.",
      },
      {
        img: slide5,
        title: "금호건설 아테라 브랜드",
        desc:
          "금호건설이 선보이는 ATHERA 브랜드 주거공간<br/>입주민 중심의 특화설계와 다양한 커뮤니티<br/>쾌적한 조경과 편리한 생활 동선으로 완성하는 프리미엄",
      },
      {
        img: slide6,
        title: "미래가치를 품은 선택",
        desc:
          "고덕국제신도시의 지속적인 개발 비전<br/>실거주와 미래가치를 함께 기대할 수 있는 입지<br/>평택 고덕 아파트의 새로운 선택, 고덕신도시 아테라",
      },
    ];


  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
      <div className={styles.preTitle}>고덕신도시 아테라</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="고덕신도시 아테라 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
