"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function KontakPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    
    // Simulasi pengiriman
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[3px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-600 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow">
            {t.kontak.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t.kontak.hero.title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            {t.kontak.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Info Kontak */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.kontak.info.map((item: any, idx: number) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 text-center group">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form & Peta */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              {t.kontak.form.title}
            </h2>
            <p className="text-slate-600 text-sm mb-8">
              {t.kontak.form.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.kontak.form.nama}
                  </label>
                  <input
                    type="text"
                    placeholder={t.kontak.form.namaPlaceholder}
                    className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-slate-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.kontak.form.email}
                  </label>
                  <input
                    type="email"
                    placeholder={t.kontak.form.emailPlaceholder}
                    className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-slate-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.kontak.form.telepon}
                </label>
                <input
                  type="tel"
                  placeholder={t.kontak.form.teleponPlaceholder}
                  className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.kontak.form.perusahaan}
                </label>
                <input
                  type="text"
                  placeholder={t.kontak.form.perusahaanPlaceholder}
                  className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.kontak.form.pesan}
                </label>
                <textarea
                  rows={5}
                  placeholder={t.kontak.form.pesanPlaceholder}
                  className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none border border-slate-200"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className={`w-full font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg text-white ${
                  formStatus === "loading"
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500 hover:shadow-blue-500/25"
                }`}
              >
                {formStatus === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.kontak.form.sending}
                  </span>
                ) : formStatus === "success" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {t.kontak.form.success}
                  </span>
                ) : (
                  t.kontak.form.submit
                )}
              </button>
            </form>
          </div>

          {/* Peta & Alamat */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {t.kontak.alamat.title}
              </h3>
              <div className="space-y-4">
                {t.kontak.alamat.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{item.label}</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.06186938758!2d106.8143679!3d-6.2626482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3cb7315460f%3A0x6e1fcee36210b15c!2sTebet%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SlondoX Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Pertanyaan Umum */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              {t.kontak.faq.title}
            </h2>
            <p className="text-slate-600 text-base">
              {t.kontak.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.kontak.faq.items.map((item: any, idx: number) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900 group-open:text-blue-600 transition-colors">
                    {item.question}
                  </span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300 text-xl">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}