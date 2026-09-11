"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function SektorDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language } = useLanguage();
  const t = translations[language];

  // Cari data sektor berdasarkan slug
  const sectorData = t.sektor.sectors.items.find(
    (item: any) => {
      const itemSlug = item.link.split('/').pop();
      return itemSlug === slug;
    }
  );

  // Jika tidak ditemukan, tampilkan 404
  if (!sectorData) {
    notFound();
  }

  // Mapping slug ke title untuk breadcrumb
  const slugToTitle: { [key: string]: string } = {
    manufaktur: "Manufaktur, Industri & UMKM Teknis",
    agribisnis: "Agribisnis & Bio-Teknologi",
    pendidikan: "Pendidikan & Pelatihan",
    komersial: "Komersial, Properti & Manajemen Fasilitas",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${sectorData.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80"})`,
          }}
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[3px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">{sectorData.icon}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            {sectorData.title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            {sectorData.subtitle}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 px-6 md:px-12 lg:px-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/sektor" className="hover:text-blue-600 transition-colors">Sektor</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{sectorData.title}</span>
          </nav>
        </div>
      </section>

      {/* Detail Sektor */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Konten Utama */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{sectorData.icon}</span>
                <span className="text-sm font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
                  Sektor #{sectorData.id}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                Tentang Sektor Ini
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {sectorData.description}
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Solusi yang Kami Tawarkan
              </h3>
              <ul className="space-y-3 mb-8">
                {sectorData.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="font-bold text-slate-900 mb-2">Tertarik dengan solusi untuk sektor ini?</h4>
                <p className="text-sm text-slate-600 mb-4">Konsultasikan kebutuhan spesifik sektor Anda dengan tim ahli kami.</p>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                >
                  Konsultasi Sekarang <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Sektor Lainnya */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Sektor Lainnya</h3>
              <div className="space-y-3">
                {t.sektor.sectors.items
                  .filter((item: any) => item.id !== sectorData.id)
                  .map((item: any) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          {item.features?.[0] || "Lihat detail"}
                        </div>
                      </div>
                      <span className="text-slate-400 group-hover:text-blue-600 transition-colors">→</span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Hubungi Kami */}
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-3xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Butuh Bantuan?</h3>
              <p className="text-sm text-slate-300 mb-4">Tim kami siap membantu Anda.</p>
              <Link
                href="/kontak"
                className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg transition-all w-full text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}