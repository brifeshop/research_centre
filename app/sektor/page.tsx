"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SektorPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section dengan Background Image */}
      <section className="relative min-h-[60vh] flex items-center text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${t.sektor.hero.bgImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"})`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[3px]" />
        
        {/* Konten Hero */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-600 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow">
            {t.sektor.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t.sektor.hero.title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            {t.sektor.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
              {t.sektor.intro.title}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {t.sektor.intro.desc}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={t.sektor.intro.image || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"}
              alt={t.sektor.intro.title}
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t.sektor.sectors.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.sektor.sectors.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.sektor.sectors.items.map((sector) => (
            <div
              key={sector.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <span className="absolute bottom-4 left-6 text-white text-xs font-mono font-bold px-3 py-1 rounded-md bg-blue-600/80">
                  {sector.badge}
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{sector.icon}</span>
                  <span className="text-sm font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
                    {String(sector.id).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">
                  {sector.title}
                </h3>
                <p className="text-sm text-slate-500 italic mb-3">
                  {sector.subtitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {sector.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {sector.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={sector.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1"
                >
                  {sector.cta} <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t.sektor.cta.title}
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            {t.sektor.cta.desc}
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
          >
            {t.sektor.cta.button} <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}