// src/components/LanguageToggle.tsx
"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-slate-900/80 border border-slate-700 rounded-full p-1 shadow-inner">
      <button
        onClick={() => {
          if (language !== 'id') toggleLanguage();
        }}
        className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
          language === 'id' 
            ? 'bg-blue-600 text-white' 
            : 'text-slate-300 hover:text-white'
        }`}
      >
        ID
      </button>
      <button
        onClick={() => {
          if (language !== 'en') toggleLanguage();
        }}
        className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
          language === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'text-slate-300 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}