"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function LayananPage() {
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
            backgroundImage: `url(${t.layanan.hero.bgImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"})`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[3px]" />
        
        {/* Konten Hero */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-600 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow">
            {t.layanan.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t.layanan.hero.title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            {t.layanan.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
              {t.layanan.intro.title}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {t.layanan.intro.desc}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={t.layanan.intro.image || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"}
              alt={t.layanan.intro.title}
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t.layanan.services.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.layanan.services.desc}
          </p>
        </div>

        <div className="space-y-12">
          {t.layanan.services.items.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col`}
            >
              <div className="p-8 md:p-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <span className="text-sm font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
                    {String(service.id).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                >
                  {service.cta} <span>&rarr;</span>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 md:p-10 flex items-center justify-center min-h-[200px] lg:min-h-[300px] lg:w-[300px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {t.layanan.proses.title}
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              {t.layanan.proses.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.layanan.proses.steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-4xl font-black text-blue-600/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < t.layanan.proses.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-300 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t.layanan.cta.title}
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            {t.layanan.cta.desc}
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
          >
            {t.layanan.cta.button} <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}