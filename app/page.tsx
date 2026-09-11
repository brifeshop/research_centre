"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

// Data untuk Hero Carousel (4 Sektor) - Hanya untuk gambar dan warna
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
    colors: {
      badge: "bg-blue-600",
      button: "bg-blue-600 hover:bg-blue-500",
      buttonShadow: "hover:shadow-blue-500/25",
      dot: "bg-blue-500",
    }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1920&auto=format&fit=crop",
    colors: {
      badge: "bg-emerald-600",
      button: "bg-emerald-600 hover:bg-emerald-500",
      buttonShadow: "hover:shadow-emerald-500/25",
      dot: "bg-emerald-500",
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
    colors: {
      badge: "bg-amber-600",
      button: "bg-amber-600 hover:bg-amber-500",
      buttonShadow: "hover:shadow-amber-500/25",
      dot: "bg-amber-500",
    }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop",
    colors: {
      badge: "bg-purple-600",
      button: "bg-purple-600 hover:bg-purple-500",
      buttonShadow: "hover:shadow-purple-500/25",
      dot: "bg-purple-500",
    }
  },
];

// Ikon untuk tab layanan
const slideIcons = ["🔧", "🌱", "📚", "🏗️"];

// Gradient background untuk tab konten
const bgGradients = [
  "from-blue-50 to-blue-100/30",
  "from-emerald-50 to-emerald-100/30",
  "from-amber-50 to-amber-100/30",
  "from-indigo-50 to-indigo-100/30",
];

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  // State untuk Hero Carousel
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const heroIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // State untuk Tab Layanan
  const [currentTabSlide, setCurrentTabSlide] = useState(0);
  const [isTabPaused, setIsTabPaused] = useState(false);
  const tabIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Ref untuk fungsionalitas drag to scroll pada carousel
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Timer untuk hero carousel (10 detik)
  useEffect(() => {
    if (isHeroPaused) return;

    heroIntervalRef.current = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);

    return () => {
      if (heroIntervalRef.current) clearInterval(heroIntervalRef.current);
    };
  }, [isHeroPaused]);

  // Timer untuk tab layanan (5 detik)
  useEffect(() => {
    if (isTabPaused) return;

    tabIntervalRef.current = setInterval(() => {
      setCurrentTabSlide((prev) => (prev + 1) % t.tabLayanan.slides.length);
    }, 5000);

    return () => {
      if (tabIntervalRef.current) clearInterval(tabIntervalRef.current);
    };
  }, [isTabPaused, t]);

  const resetHeroTimer = () => {
    if (heroIntervalRef.current) {
      clearInterval(heroIntervalRef.current);
      heroIntervalRef.current = setInterval(() => {
        setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
      }, 10000);
    }
  };

  const resetTabTimer = () => {
    if (tabIntervalRef.current) {
      clearInterval(tabIntervalRef.current);
      tabIntervalRef.current = setInterval(() => {
        setCurrentTabSlide((prev) => (prev + 1) % t.tabLayanan.slides.length);
      }, 5000);
    }
  };

  const goToHeroSlide = (index: number) => {
    setCurrentHeroSlide(index);
    resetHeroTimer();
  };

  const goToTabSlide = (index: number) => {
    setCurrentTabSlide(index);
    resetTabTimer();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const heroData = t.hero.slides;
  const tabData = t.tabLayanan.slides;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section dengan Full Hero Carousel (Gambar + Teks) */}
      <section 
        className="relative min-h-screen flex items-center text-white pt-24 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
      >
        {/* Background Images dengan Crossfade */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
              index === currentHeroSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
            aria-hidden="true"
          />
        ))}

        {/* Overlay dengan warna sesuai sektor */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${
            currentHeroSlide === 0 ? 'from-blue-950/90 via-blue-900/80 to-slate-950/90' :
            currentHeroSlide === 1 ? 'from-emerald-950/90 via-emerald-900/80 to-slate-950/90' :
            currentHeroSlide === 2 ? 'from-amber-950/90 via-amber-900/80 to-slate-950/90' :
            'from-purple-950/90 via-purple-900/80 to-slate-950/90'
          } backdrop-blur-[3px]`} 
        />

        {/* Konten Hero */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Kolom Kiri: Teks Dinamis */}
          <div className="lg:col-span-7 relative">
            {heroData.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-in-out ${
                  index === currentHeroSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 absolute inset-0 translate-y-6 pointer-events-none"
                }`}
              >
                <span className={`inline-block ${heroSlides[index].colors.badge} text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow`}>
                  {slide.badge}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-md max-w-3xl">
                  {slide.title}
                </h1>
                <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed drop-shadow max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={slide.ctaPrimary.link}
                    className={`${heroSlides[index].colors.button} text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg ${heroSlides[index].colors.buttonShadow}`}
                  >
                    {slide.ctaPrimary.text}
                  </a>
                  <a
                    href={slide.ctaSecondary.link}
                    className="border border-slate-600 hover:border-slate-400 bg-slate-900/50 backdrop-blur-md text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
                  >
                    {slide.ctaSecondary.text}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Kolom Kanan: Box Keunggulan (TETAP) */}
          <div className="lg:col-span-5 bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold mb-3 text-white">
              {t.hero.keunggulan.title}
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {t.hero.keunggulan.desc}
            </p>
            <div className="space-y-3">
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${heroSlides[currentHeroSlide].colors.dot} animate-pulse`}></span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">{t.hero.keunggulan.item1}</span>
              </div>
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${heroSlides[currentHeroSlide].colors.dot}`}></span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">{t.hero.keunggulan.item2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Indikator Dot di Bawah */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToHeroSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentHeroSlide
                  ? `w-10 h-2.5 ${heroSlides[currentHeroSlide].colors.dot}`
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Pilar & Sektor Layanan Kami - VERSI TAB INTERAKTIF */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">{t.tabLayanan.badge}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">{t.tabLayanan.title}</h2>
          <p className="text-slate-600 text-base">{t.tabLayanan.desc}</p>
        </div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-slate-50/80 p-6 md:p-8 rounded-3xl border border-slate-200/80 backdrop-blur-sm"
          onMouseEnter={() => setIsTabPaused(true)}
          onMouseLeave={() => setIsTabPaused(false)}
        >
          {/* Kolom Kiri: Navigasi Tab */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-3">
            {tabData.map((slide, idx) => {
              const isActive = idx === currentTabSlide;
              return (
                <button
                  key={idx}
                  onClick={() => goToTabSlide(idx)}
                  onMouseEnter={() => setCurrentTabSlide(idx)}
                  className={`text-left p-4 md:p-5 rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? 'bg-white shadow-lg border-l-4 border-blue-600 translate-x-1 scale-[1.02]'
                      : 'hover:bg-white/60 opacity-70 hover:opacity-100 hover:scale-[1.01]'
                  }`}
                  aria-label={`Pilih layanan: ${slide.title}`}
                >
                  <div className="flex items-center gap-3">
                    {/* Nomor urut */}
                    <span className={`text-xs font-mono font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                        : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                    }`}>
                      0{idx + 1}
                    </span>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider truncate">
                          {slide.sektor}
                        </span>
                        {isActive && (
                          <span className="flex h-2 w-2 relative flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-slate-900 truncate">
                        {slide.title}
                      </h3>
                      <p className="text-xs text-slate-500 truncate">
                        {slide.subtitle}
                      </p>
                    </div>
                    
                    {/* Icon */}
                    <span className="text-xl opacity-30 group-hover:opacity-60 transition-opacity">
                      {slideIcons[idx]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Kolom Kanan: Area Tampilan Konten */}
          <div className="lg:col-span-7 relative min-h-[400px] bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            {tabData.map((slide, idx) => {
              const isActive = idx === currentTabSlide;

              return (
                <div
                  key={idx}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col justify-between h-full p-8 md:p-10 ${
                    isActive
                      ? 'opacity-100 pointer-events-auto relative z-10 translate-y-0 scale-100'
                      : 'opacity-0 pointer-events-none absolute inset-0 p-8 md:p-10 translate-y-8 scale-95'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${bgGradients[idx]}, white)`,
                  }}
                >
                  {/* Background icon besar */}
                  <div className="absolute -bottom-10 -right-10 text-8xl opacity-5 select-none">
                    {slideIcons[idx]}
                  </div>

                  {/* Decorative blur */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-100/10 blur-2xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-blue-50 text-blue-700 text-xs font-mono font-bold px-3 py-1 rounded-full border border-blue-100">
                        {slide.sektor}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {String(idx + 1).padStart(2, '0')} / {String(tabData.length).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                      {slide.title}
                    </h3>
                    <h4 className="text-sm font-medium text-blue-600 mb-4">
                      {slide.subtitle}
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={slide.link}
                      className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700 group"
                    >
                      {slide.linkText || 'Pelajari Selengkapnya'}
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>

                    {/* Indikator Progress Waktu */}
                    <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full ${
                          isActive && !isTabPaused ? 'w-full transition-all duration-[5000ms] linear' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bagian 4 Solusi Utama Berbentuk Kartu Bergambar */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-slate-100/60 rounded-3xl mb-24 border border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            {t.solusiUtama.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t.solusiUtama.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.solusiUtama.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.solusiUtama.cards.map((card, idx) => {
            const cardColors = [
              "bg-blue-600",
              "bg-emerald-600",
              "bg-slate-800",
              "bg-indigo-600",
            ];
            const cardImages = [
              "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
            ];
            const cardLinks = [
              "/elektronika-iot",
              "/agrikultur",
              "/quality-control",
              "/software-monitoring",
            ];

            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="relative h-60 overflow-hidden bg-slate-900">
                    <img
                      src={cardImages[idx]}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <span className={`absolute bottom-4 left-6 ${cardColors[idx]} text-white text-xs font-mono font-bold px-3 py-1 rounded-md`}>
                      {card.badge}
                    </span>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                      {card.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {card.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <a
                    href={cardLinks[idx]}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    {card.cta} <span>&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bagian Carousel Case Study / Studi Kasus */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden mb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            {t.studiKasus.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t.studiKasus.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.studiKasus.desc}
          </p>
        </div>

        {/* Container Draggable Carousel */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto pb-6 scrollbar-none select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {t.studiKasus.cards.map((card, idx) => {
            const cardImages = [
              "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
            ];
            const tagColors = [
              "bg-blue-50 text-blue-700",
              "bg-emerald-50 text-emerald-700",
              "bg-slate-100 text-slate-700",
              "bg-indigo-50 text-indigo-700",
              "bg-amber-50 text-amber-700",
              "bg-purple-50 text-purple-700",
              "bg-teal-50 text-teal-700",
              "bg-rose-50 text-rose-700",
              "bg-cyan-50 text-cyan-700",
            ];

            return (
              <div key={idx} className="min-w-[280px] max-w-[280px] flex-shrink-0 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={cardImages[idx % cardImages.length]}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`${tagColors[idx % tagColors.length]} text-[10px] font-semibold px-2.5 py-0.5 rounded-full`}>
                        {card.tag}
                      </span>
                      <span className="text-[10px] text-slate-400">{card.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-0">
                  <a href="#" className="inline-flex items-center gap-1 text-blue-600 font-semibold text-xs hover:underline">
                    {card.cta} &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bagian Form Konsultasi 1:1 */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0A4B88] text-white">
        <div className="max-w-4xl mx-auto bg-[#083E70] border border-blue-600/50 p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center justify-center gap-2">
              <span>👋</span> {t.konsultasi.title}
            </h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(language === 'id' ? "Pesan konsultasi terkirim!" : "Consultation message sent!");
            }}
            className="space-y-6"
          >
            <div>
              <textarea
                rows={3}
                placeholder={t.konsultasi.placeholder}
                className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none shadow-sm"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">{t.konsultasi.nama}</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder={t.konsultasi.namaPlaceholder}
                    className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">{t.konsultasi.telepon}</label>
                <div className="flex bg-white text-slate-900 rounded-xl overflow-hidden shadow-sm">
                  <div className="flex items-center gap-1.5 px-3 bg-slate-50 border-r border-slate-200 text-sm font-medium">
                    <span>🇮🇩</span>
                    <span className="text-slate-600">▼</span>
                  </div>
                  <input
                    type="tel"
                    placeholder={t.konsultasi.teleponPlaceholder}
                    className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm px-4 py-3.5 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">{t.konsultasi.email}</label>
                <input
                  type="email"
                  placeholder={t.konsultasi.emailPlaceholder}
                  className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">{t.konsultasi.perusahaan}</label>
                <input
                  type="text"
                  placeholder={t.konsultasi.perusahaanPlaceholder}
                  className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">{t.konsultasi.pekerjaan}</label>
                <select className="w-full bg-white text-slate-500 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm">
                  <option value="">{t.konsultasi.pekerjaanPlaceholder}</option>
                  <option value="engineer">{t.konsultasi.options.pekerjaan.engineer}</option>
                  <option value="researcher">{t.konsultasi.options.pekerjaan.researcher}</option>
                  <option value="manager">{t.konsultasi.options.pekerjaan.manager}</option>
                  <option value="other">{t.konsultasi.options.pekerjaan.other}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">{t.konsultasi.industri}</label>
                <select className="w-full bg-white text-slate-500 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm">
                  <option value="">{t.konsultasi.industriPlaceholder}</option>
                  <option value="manufaktur">{t.konsultasi.options.industri.manufaktur}</option>
                  <option value="agrikultur">{t.konsultasi.options.industri.agrikultur}</option>
                  <option value="iot">{t.konsultasi.options.industri.iot}</option>
                  <option value="lainnya">{t.konsultasi.options.industri.lainnya}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">{t.konsultasi.produk}</label>
                <select className="w-full bg-white text-slate-500 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm">
                  <option value="">{t.konsultasi.produkPlaceholder}</option>
                  <option value="hardware">{t.konsultasi.options.produk.hardware}</option>
                  <option value="qc">{t.konsultasi.options.produk.qc}</option>
                  <option value="dashboard">{t.konsultasi.options.produk.dashboard}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">{t.konsultasi.budget}</label>
                <input
                  type="text"
                  placeholder={t.konsultasi.budgetPlaceholder}
                  className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-white text-slate-900 font-semibold px-8 py-3.5 rounded-full hover:bg-slate-100 transition-all shadow-lg text-sm"
              >
                {t.konsultasi.submit}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Bagian Footer */}
      <footer className="bg-[#052C52] text-white pt-16 pb-12 px-6 md:px-12 lg:px-24 border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Kolom 1: Logo & Esomar Badge */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-2xl font-black tracking-wider flex items-center gap-1">
              <span>{t.navbar.logo}</span>
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            </div>
            <div className="bg-white text-slate-950 p-2.5 rounded-lg inline-flex items-center gap-2 shadow-sm">
              <span className="font-bold text-xs tracking-tighter bg-slate-900 text-white px-2 py-1 rounded">esomar</span>
              <span className="text-[10px] font-semibold text-slate-700 uppercase">Corporate Member 2026</span>
            </div>
          </div>

          {/* Kolom 2: Perusahaan */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-4 text-blue-300">{t.footer.perusahaan}</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="/tentang-kami" className="hover:text-white transition-colors">{t.footer.links.perusahaan.tentang}</a></li>
              <li><a href="/hubungi-kami" className="hover:text-white transition-colors">{t.footer.links.perusahaan.hubungi}</a></li>
              <li><a href="/karier" className="hover:text-white transition-colors">{t.footer.links.perusahaan.karier}</a></li>
              <li><a href="/outlook" className="hover:text-white transition-colors">{t.footer.links.perusahaan.outlook}</a></li>
            </ul>
          </div>

          {/* Kolom 3: Info Tambahan */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-4 text-blue-300">{t.footer.infoTambahan}</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="/faq" className="hover:text-white transition-colors">{t.footer.links.info.faq}</a></li>
              <li><a href="/syarat" className="hover:text-white transition-colors">{t.footer.links.info.syarat}</a></li>
              <li><a href="/privasi" className="hover:text-white transition-colors">{t.footer.links.info.privasi}</a></li>
              <li><a href="/syarat-popsurvey" className="hover:text-white transition-colors">{t.footer.links.info.syaratPopsurvey}</a></li>
              <li><a href="/privasi-popsurvey" className="hover:text-white transition-colors">{t.footer.links.info.privasiPopsurvey}</a></li>
            </ul>
          </div>

          {/* Kolom 4: Solusi */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-4 text-blue-300">{t.footer.solusi}</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="/konsultasi-ai" className="hover:text-white transition-colors">{t.footer.links.solusi.ai}</a></li>
              <li><a href="/solusi-pemasaran" className="hover:text-white transition-colors">{t.footer.links.solusi.pemasaran}</a></li>
              <li><a href="/riset-pasar" className="hover:text-white transition-colors">{t.footer.links.solusi.risetPasar}</a></li>
              <li><a href="/riset-kebijakan" className="hover:text-white transition-colors">{t.footer.links.solusi.kebijakan}</a></li>
              <li><a href="/insight-hub" className="hover:text-white transition-colors">{t.footer.links.solusi.insight}</a></li>
              <li><a href="/popsurvey" className="hover:text-white transition-colors">{t.footer.links.solusi.popsurvey}</a></li>
              <li><a href="/responden" className="hover:text-white transition-colors">{t.footer.links.solusi.responden}</a></li>
            </ul>
          </div>

          {/* Kolom 5: Follow Us & Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-4 text-blue-300">{t.footer.followUs}</h4>
            <div className="flex items-center gap-4 text-slate-300">
              <a href="#" className="hover:text-white transition-colors" aria-label="Website">🌐</a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">✖</a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">in</a>
              <a href="#" className="hover:text-white transition-colors" aria-label="TikTok">iktok</a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">📷</a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">▶</a>
            </div>

            <div>
              <p className="text-xs font-semibold mb-2 text-slate-200">{t.footer.newsletter}</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(language === 'id' ? "Terima kasih telah berlangganan!" : "Thank you for subscribing!");
                }}
                className="flex bg-white rounded-xl overflow-hidden p-1 shadow-sm"
              >
                <input
                  type="email"
                  placeholder={t.footer.newsletterPlaceholder}
                  className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs px-3 py-2 focus:outline-none"
                  required
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-all flex items-center justify-center">
                  <span className="text-xs">&rarr;</span>
                </button>
              </form>
              <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
                {t.footer.newsletterDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Alamat Kantor */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-blue-900/60 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-400">
          <div>
            <p className="font-bold text-slate-300 mb-1">{t.footer.alamat.hub}</p>
            <p>{t.footer.alamat.hubAddress}</p>
          </div>
          <div>
            <p className="font-bold text-slate-300 mb-1">{t.footer.alamat.hq}</p>
            <p>{t.footer.alamat.hqAddress}</p>
          </div>
        </div>
      </footer>

      <footer className="border-t bg-white py-8 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} {t.navbar.logo}. {t.footer.hakCipta}</p>
      </footer>
    </div>
  );
}