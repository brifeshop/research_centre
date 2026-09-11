"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ProfilPage() {
  const { language } = useLanguage();
  const t = translations[language];

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
            {t.profil.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t.profil.hero.title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            {t.profil.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">Tentang Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">
              {t.profil.tentang.title}
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              {t.profil.tentang.desc.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-2">🏆</div>
              <div className="font-bold text-slate-900">5+</div>
              <div className="text-xs text-slate-500">Tahun Pengalaman</div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-2">🔧</div>
              <div className="font-bold text-slate-900">50+</div>
              <div className="text-xs text-slate-500">Proyek Selesai</div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-2">🤝</div>
              <div className="font-bold text-slate-900">30+</div>
              <div className="text-xs text-slate-500">Klien Puas</div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-2">🌍</div>
              <div className="font-bold text-slate-900">15+</div>
              <div className="text-xs text-slate-500">Kota di Indonesia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">Visi & Misi</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">
              {t.profil.visiMisi.title}
            </h2>
            <p className="text-slate-600 text-base">
              {t.profil.visiMisi.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 border border-blue-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.profil.visiMisi.visi.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {t.profil.visiMisi.visi.desc}
              </p>
            </div>

            {/* Misi */}
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-3xl p-8 border border-emerald-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.profil.visiMisi.misi.title}</h3>
              <ul className="space-y-3">
                {t.profil.visiMisi.misi.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">Nilai-Nilai</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">
            {t.profil.nilai.title}
          </h2>
          <p className="text-slate-600 text-base">
            {t.profil.nilai.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.profil.nilai.items.map((nilai: any, idx: number) => (
            <div key={idx} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{nilai.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{nilai.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{nilai.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tim */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">Tim Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">
              {t.profil.tim.title}
            </h2>
            <p className="text-slate-600 text-base">
              {t.profil.tim.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.profil.tim.members.map((member: any, idx: number) => (
              <div key={idx} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t.profil.cta.title}
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            {t.profil.cta.desc}
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
          >
            {t.profil.cta.button} <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}