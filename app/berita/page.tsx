"use client";

import Image from "next/image";

export default function BeritaPage() {

  const titles = [
    "Sprinter Indonesia Tembus Rekor Asia Tenggara di Kejuaraan Bangkok 2025",
    "Tim Estafet Putri Raih Emas Dramatis Setelah Start Sempurna",
    "Pelatih Nasional Ungkap Program Latihan Baru untuk Olimpiade 2028",
    "Drama di Lapangan: Atlet Senior Tantang Pemecah Rekor Baru",
  ];

  // ================= FOTO MINI BERBEDA-BEDA =================
  const miniImages = [
    "/images/berita/0/sprinter.png",
    "/images/berita/0/estafet.png",
    "/images/berita/0/pelatih.png",
    "/images/berita/0/tua.png",
  ];

  // ================= FOTO POPULER BERBEDA ==================
  const populerImages = [
    "/images/berita/1/atlet.png",
    "/images/berita/1/sprint.png",
    "/images/berita/1/kontingen.png",
    "/images/berita/1/lap.png",
    "/images/berita/1/muda.png",
  ];

  const populerTitles = [
    "Atlet Indonesia Cetak Rekor Nasional Baru di Final 200m",
    "Pelatih Ungkap Rahasia Program Latihan Sprint 2025",
    "Kontingen Indonesia Kuasai Podium Kejuaraan Asia",
    "Stadion Baru Resmi Dibangun Untuk Pelatnas Atletik",
    "Atlet Muda Bikin Kejutan di Kejuaraan Internasional",
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 lg:px-16 py-12">
      
      {/* GRID UTAMA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-2 space-y-10">

          {/* === HEADLINE CARD === */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            
            {/* Headline Image */}
            <div className="w-full h-[380px] relative">
              <Image
                src="/images/berita/dpr.png"
                alt="Headline Berita"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Label */}
            <div className="absolute top-5 left-5 bg-red-600 text-white text-xs px-4 py-1.5 rounded-full font-semibold shadow">
              HEADLINE
            </div>

            {/* Headline Text */}
            <div className="absolute bottom-8 left-8 right-8 text-white drop-shadow-lg">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
                Menyoal Kualitas Komunikasi Pimpinan DPR RI di Era Politik Gen Z
              </h1>
              <p className="text-sm mt-3 opacity-90">
                Dinamika baru dalam komunikasi politik generasi digital.
              </p>
            </div>
          </div>

          {/* === GRID BERITA MINI === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="flex gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative w-32 h-24 rounded-md overflow-hidden">
                  <Image
                    src={miniImages[num - 1]} // ← FOTO MINI BERBEDA
                    alt={`Berita ${num}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Text */}
                <div>
                  <p className="font-semibold text-sm leading-tight">
                    {titles[num - 1]}
                  </p>
                  <span className="text-xs text-gray-500 mt-2 block">
                    {num * 2} jam yang lalu
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="space-y-10">

          <h2 className="text-2xl font-bold border-b pb-2">Terpopuler</h2>

          {/* Ranking List */}
          <div className="space-y-5">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="flex gap-4 p-3 bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                {/* Thumbnail populer */}
                <div className="relative w-20 h-16 rounded-md overflow-hidden shadow">
                  <Image
                    src={populerImages[num - 1]} // ← FOTO POPULER BERBEDA
                    alt="populer"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-snug">
                    {populerTitles[num - 1]}
                  </p>
                  <span className="text-xs text-gray-500 block mt-1">
                    {num} hari lalu
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Promo / Newsletter */}
          <div className="bg-blue-50 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
            <h3 className="font-bold text-lg text-blue-700 mb-2">Athletics Daily</h3>
            <p className="text-sm text-gray-700">
              Dapatkan kabar terbaru atletik langsung setiap hari. Gratis, cepat, dan terpercaya.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
