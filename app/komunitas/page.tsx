"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function KomunitasPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&auto=format&fit=crop&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[3px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-600 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow">
            {t.komunitas.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t.komunitas.hero.title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            {t.komunitas.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.komunitas.stats.map((stat: any, idx: number) => (
            <div key={idx} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-black text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs: Event & Galeri */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("events")}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === "events"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {t.komunitas.tabs.events}
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === "gallery"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {t.komunitas.tabs.gallery}
          </button>
        </div>

        {/* Tab Content: Events */}
        {activeTab === "events" && (
          <div className="space-y-8">
            {/* Event Mendatang */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-blue-600">📅</span> {t.komunitas.upcoming.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.komunitas.upcoming.events.map((event: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {event.date}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {event.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">{event.location}</span>
                        <Link
                          href={event.link}
                          className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                        >
                          {language === "id" ? "Daftar →" : "Register →"}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Sebelumnya */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-slate-400">📋</span> {t.komunitas.past.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.komunitas.past.events.map((event: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 opacity-80 hover:opacity-100 transition-all duration-300 group">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-2">{event.desc}</p>
                      <span className="text-xs text-slate-400">{event.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Gallery */}
        {activeTab === "gallery" && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {t.komunitas.gallery.images.map((image: string, idx: number) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {t.komunitas.gallery.view}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Join Community */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t.komunitas.join.title}
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            {t.komunitas.join.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontak"
              className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
            >
              {t.komunitas.join.button} <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}