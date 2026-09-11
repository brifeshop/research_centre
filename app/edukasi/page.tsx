"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function EdukasiPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState<string>("semua");

  // Filter artikel berdasarkan kategori
  const filteredArticles = activeCategory === "semua"
    ? t.edukasi.articles
    : t.edukasi.articles.filter((a: any) => a.category === activeCategory);

  // Ambil daftar kategori unik untuk filter
  const categories = ["semua", ...new Set(t.edukasi.articles.map((a: any) => a.category))];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&auto=format&fit=crop&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[3px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-600 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow">
            {t.edukasi.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t.edukasi.hero.title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            {t.edukasi.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Artikel Terbaru - Featured */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="text-blue-600">⭐</span> {t.edukasi.featured.title}
          </h2>
          <p className="text-slate-500 text-sm">{t.edukasi.featured.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.edukasi.featured.items.map((article: any, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-transparent" />
                <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {t.edukasi.categories[article.category as keyof typeof t.edukasi.categories] || article.category}
                </span>
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
                  {article.date}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span>👤 {article.author}</span>
                  <span>•</span>
                  <span>📖 {article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <Link
                  href={article.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                >
                  {language === "id" ? "Baca Selengkapnya" : "Read More"} <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter & Semua Artikel */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <h2 className="text-2xl font-bold text-slate-900">
            {t.edukasi.allArticles.title}
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat === "semua"
                  ? (language === "id" ? "Semua" : "All")
                  : t.edukasi.categories[cat as keyof typeof t.edukasi.categories] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Artikel Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">
              {language === "id" ? "Tidak ada artikel dalam kategori ini." : "No articles in this category."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article: any, idx: number) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {t.edukasi.categories[article.category as keyof typeof t.edukasi.categories] || article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>📖 {article.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.link}
                    className="text-blue-600 font-semibold text-xs hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  >
                    {language === "id" ? "Baca" : "Read"} <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter / Subscribe */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-950 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t.edukasi.newsletter.title}
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            {t.edukasi.newsletter.desc}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(language === "id" ? "Terima kasih telah berlangganan!" : "Thank you for subscribing!");
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder={t.edukasi.newsletter.placeholder}
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all"
            >
              {t.edukasi.newsletter.button}
            </button>
          </form>
          <p className="text-xs text-slate-400 mt-4">
            {t.edukasi.newsletter.note}
          </p>
        </div>
      </section>
    </div>
  );
}