"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function PortofolioPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [filter, setFilter] = useState<string>("semua");

  // Filter proyek berdasarkan kategori
  const filteredProjects = filter === "semua" 
    ? t.portofolio.projects 
    : t.portofolio.projects.filter((p: any) => p.category === filter);

  // Ambil daftar kategori unik untuk filter
  const categories = ["semua", ...new Set(t.portofolio.projects.map((p: any) => p.category))];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[3px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-600 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow">
            {t.portofolio.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t.portofolio.hero.title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            {t.portofolio.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Filter & Proyek */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat === "semua" 
                ? (language === "id" ? "Semua Proyek" : "All Projects")
                : t.portofolio.categories[cat as keyof typeof t.portofolio.categories] || cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">{language === "id" ? "Tidak ada proyek dalam kategori ini." : "No projects in this category."}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: any, idx: number) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <Link
                      href={project.link}
                      className="inline-block bg-white text-slate-900 font-semibold text-sm px-4 py-2 rounded-full shadow-lg hover:bg-slate-100 transition-colors"
                    >
                      {language === "id" ? "Lihat Detail" : "View Details"} →
                    </Link>
                  </div>
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {t.portofolio.categories[project.category as keyof typeof t.portofolio.categories] || project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t.portofolio.cta.title}
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            {t.portofolio.cta.desc}
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
          >
            {t.portofolio.cta.button} <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}