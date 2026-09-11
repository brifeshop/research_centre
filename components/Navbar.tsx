// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 border-b border-white/10 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-blue-600 text-white font-black text-lg px-3 py-1.5 rounded-xl tracking-wider shadow-lg group-hover:bg-blue-500 transition-colors">
            SX
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight leading-none text-white drop-shadow">
              {t.navbar.logo}
            </span>
            <span className="text-[10px] tracking-widest text-slate-300 uppercase font-mono mt-0.5">
              {t.navbar.tagline}
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {/* Dropdown Layanan */}
          <div 
            className="relative py-8"
            onMouseEnter={() => setActiveDropdown("layanan")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/layanan"
              className="flex items-center gap-1.5 text-slate-200 hover:text-blue-400 transition-colors"
            >
              {t.navbar.menu.layanan}
              <span className="text-xs transition-transform duration-200">
                {activeDropdown === "layanan" ? "▲" : "▼"}
              </span>
            </Link>
            
            {activeDropdown === "layanan" && (
              <div className="absolute top-20 left-0 w-[520px] bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-2 gap-4 animate-fadeIn">
                <Link href="/layanan/elektronika" className="p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="font-bold text-sm text-blue-600 group-hover:underline">{t.navbar.dropdown.layanan.elektronika.title} →</div>
                  <p className="text-xs text-slate-600 mt-1">{t.navbar.dropdown.layanan.elektronika.desc}</p>
                </Link>
                <Link href="/layanan/agroteknologi" className="p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="font-bold text-sm text-slate-800 group-hover:text-blue-600">{t.navbar.dropdown.layanan.agroteknologi.title} →</div>
                  <p className="text-xs text-slate-600 mt-1">{t.navbar.dropdown.layanan.agroteknologi.desc}</p>
                </Link>
                <Link href="/layanan/edukasi" className="p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="font-bold text-sm text-slate-800 group-hover:text-blue-600">{t.navbar.dropdown.layanan.edukasi.title} →</div>
                  <p className="text-xs text-slate-600 mt-1">{t.navbar.dropdown.layanan.edukasi.desc}</p>
                </Link>
                <Link href="/layanan/instrumentasi" className="p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="font-bold text-sm text-slate-800 group-hover:text-blue-600">{t.navbar.dropdown.layanan.instrumentasi.title} →</div>
                  <p className="text-xs text-slate-600 mt-1">{t.navbar.dropdown.layanan.instrumentasi.desc}</p>
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Sektor */}
          <div 
            className="relative py-8"
            onMouseEnter={() => setActiveDropdown("sektor")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/sektor"
              className="flex items-center gap-1.5 text-slate-200 hover:text-blue-400 transition-colors"
            >
              {t.navbar.menu.sektor}
              <span className="text-xs transition-transform duration-200">
                {activeDropdown === "sektor" ? "▲" : "▼"}
              </span>
            </Link>
            
            {activeDropdown === "sektor" && (
              <div className="absolute top-20 left-0 w-[540px] bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-2 gap-4">
                <Link href="/sektor/manufaktur" className="p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-sm text-slate-900">{t.navbar.dropdown.sektor.manufaktur.title}</div>
                  <div className="text-[10px] text-slate-500 italic">{t.navbar.dropdown.sektor.manufaktur.subtitle}</div>
                  <p className="text-xs text-slate-600 mt-1">{t.navbar.dropdown.sektor.manufaktur.desc}</p>
                </Link>
                <Link href="/sektor/agribisnis" className="p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-sm text-slate-900">{t.navbar.dropdown.sektor.agribisnis.title}</div>
                  <div className="text-[10px] text-slate-500 italic">{t.navbar.dropdown.sektor.agribisnis.subtitle}</div>
                  <p className="text-xs text-slate-600 mt-1">{t.navbar.dropdown.sektor.agribisnis.desc}</p>
                </Link>
                <Link href="/sektor/pendidikan" className="p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-sm text-slate-900">{t.navbar.dropdown.sektor.pendidikan.title}</div>
                  <div className="text-[10px] text-slate-500 italic">{t.navbar.dropdown.sektor.pendidikan.subtitle}</div>
                  <p className="text-xs text-slate-600 mt-1">{t.navbar.dropdown.sektor.pendidikan.desc}</p>
                </Link>
                <Link href="/sektor/komersial" className="p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-sm text-slate-900">{t.navbar.dropdown.sektor.komersial.title}</div>
                  <div className="text-[10px] text-slate-500 italic">{t.navbar.dropdown.sektor.komersial.subtitle}</div>
                  <p className="text-xs text-slate-600 mt-1">{t.navbar.dropdown.sektor.komersial.desc}</p>
                </Link>
              </div>
            )}
          </div>

          {/* Menu Utama - Semua Langsung ke Halaman */}
          <Link href="/portofolio" className="text-slate-200 hover:text-blue-400 transition-colors">
            {t.navbar.menu.portofolio}
          </Link>
          
          <Link href="/komunitas" className="text-slate-200 hover:text-blue-400 transition-colors">
            {t.navbar.menu.komunitas}
          </Link>
          
          <Link href="/edukasi" className="text-slate-200 hover:text-blue-400 transition-colors">
            {t.navbar.menu.edukasi}
          </Link>
          
          <Link href="/profil" className="text-slate-200 hover:text-blue-400 transition-colors">
            {t.navbar.menu.profil}
          </Link>
        </nav>

        {/* Right: Language Toggle & Contact */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Link 
            href="/kontak" 
            className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm px-6 py-2.5 rounded-full shadow-md transition-all"
          >
            {t.navbar.menu.konsultasi}
          </Link>
        </div>
      </div>
    </header>
  );
}