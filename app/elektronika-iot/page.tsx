import Navbar from "@/components/Navbar";

export default function ElektronikaIoTPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar Kustom SlondoX */}
      <Navbar />

      {/* Hero Layanan Flagship */}
      <section className="bg-blue-900 text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-blue-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-block">
            Layanan Utama (Flagship)
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Desain Elektronika Presisi & Solusi Sistem IoT Terintegrasi
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Layanan komersial utama SlondoX yang didukung oleh praktisi berpengalaman nyata dalam perancangan PCB kustom, mikrokontroler, dan modul sensor untuk kebutuhan industri.
          </p>
          <a href="#konsultasi" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors inline-block">
            Ajukan Konsultasi Proyek
          </a>
        </div>
      </section>

      {/* Detail Jasa */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Cakupan Kapabilitas Teknis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-blue-600 font-mono text-sm mb-2">01 / HARDWARE</div>
            <h3 className="text-xl font-bold mb-3">Desain PCB Kustom</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Skematik layout PCB multi-layer, optimasi jalur sinyal, pemilihan komponen berstandar industri, hingga persiapan file manufaktur (Gerber).
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-blue-600 font-mono text-sm mb-2">02 / EMBEDDED</div>
            <h3 className="text-xl font-bold mb-3">Pengembangan Modul IoT</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Integrasi mikrokontroler (ESP32/STM32), protokol komunikasi nirkabel (MQTT, HTTP, LoRa), dan manajemen daya perangkat tertanam.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-blue-600 font-mono text-sm mb-2">03 / SENSOR</div>
            <h3 className="text-xl font-bold mb-3">Aplikasi & Akuisisi Sensor</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kalibrasi sinyal sensor industri, pengolahan data mentah, dan antarmuka akuisisi data real-time untuk pemantauan operasional.
            </p>
          </div>
        </div>
      </section>

      {/* Alur Proses Kerja Transparan */}
      <section className="bg-slate-100 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Bagaimana Kami Bekerja</h2>
          <p className="text-slate-600 text-center mb-16">Transparansi tahapan kerja untuk memastikan spesifikasi teknis sesuai sasaran.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <span className="text-blue-600 font-bold text-lg">Tahap 1</span>
              <h4 className="font-bold mt-2 mb-1">Analisis Kebutuhan</h4>
              <p className="text-xs text-slate-600">Bedah spesifikasi fungsional, batasan lingkungan, dan parameter teknis perangkat.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <span className="text-blue-600 font-bold text-lg">Tahap 2</span>
              <h4 className="font-bold mt-2 mb-1">Skematik & Prototyping</h4>
              <p className="text-xs text-slate-600">Perancangan layout PCB awal dan pengujian modul sensor secara modular.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <span className="text-blue-600 font-bold text-lg">Tahap 3</span>
              <h4 className="font-bold mt-2 mb-1">Validasi & Testing</h4>
              <p className="text-xs text-slate-600">Uji coba ketahanan sistem, kalibrasi akurasi, dan debugging firmware.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <span className="text-blue-600 font-bold text-lg">Tahap 4</span>
              <h4 className="font-bold mt-2 mb-1">Dokumentasi & Handover</h4>
              <p className="text-xs text-slate-600">Penyerahan file sumber lengkap, panduan operasional, dan laporan teknis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Konsultasi Sederhana */}
      <section id="konsultasi" className="py-20 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Konsultasikan Kebutuhan Hardware Anda</h2>
          <p className="text-slate-600 text-sm mb-6">Sampaikan detail proyek elektronika atau IoT yang ingin Anda kembangkan bersama SlondoX.</p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nama / Instansi</label>
              <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Masukkan nama Anda" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email / Kontak WhatsApp</label>
              <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="email@domain.com atau 0812..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Deskripsi Proyek / Kebutuhan</label>
              <textarea rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jelaskan secara ringkas modul atau sistem yang ingin dibuat..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Kirim Permintaan Konsultasi
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} SlondoX. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}