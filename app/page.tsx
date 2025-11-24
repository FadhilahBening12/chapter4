import Image from "next/image";
export default function Page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 lg:px-16 py-12">
      {/* GRID UTAMA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-fade-in">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-2 space-y-8">

          {/* === HEADLINE CARD === */}
          <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <Image
              src="/images/berita/zoh.png"
              alt="Atletik SEA Games 2023"
              width={1000}
              height={500}
              className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-700"

            />
            <div className="absolute top-5 left-5 bg-red-600/90 backdrop-blur text-white text-sm px-4 py-1.5 rounded-md font-semibold shadow">
              Headline Atletik
            </div>

            <div className="absolute bottom-8 left-8 text-white max-w-xl drop-shadow-lg">
              <h1 className="text-4xl font-extrabold leading-snug tracking-tight">
                Lalu Zohri Pecahkan Rekor SEA Games 2023 di Nomor 100 Meter
              </h1>
              <p className="text-sm mt-3 opacity-95">
                Catatan waktu 10.15 detik membawa pulang medali emas untuk Indonesia
              </p>
            </div>
          </div>

          {/* === GRID BERITA MINI === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">

            {/* Card 1 */}
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white/70 backdrop-blur">
              <div className="relative flex-shrink-0">
                <Image
                  src="/images/berita/berlin.png"
                  alt="Marathon Jakarta"
                  width={140}
                  height={90}
                  className="w-32 h-24 object-cover rounded-md"
                />
                <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Marathon
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Atlet Marathon Indonesia Siap Hadapi Kompetisi Internasional di Berlin
                </p>
                <span className="text-xs text-gray-500 mt-1 block">2 jam yang lalu</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white/70 backdrop-blur">
              <div className="relative flex-shrink-0">
                <Image
                  src="/images/berita/lompat.png"
                  alt="Lompat Galah"
                  width={140}
                  height={90}
                  className="w-32 h-24 object-cover rounded-md"
                />
                <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Lompat Galah
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Atlet Lompat Galah Indonesia Raih Prestasi Terbaik di Kejuaraan Asia
                </p>
                <span className="text-xs text-gray-500 mt-1 block">5 jam yang lalu</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white/70 backdrop-blur">
              <div className="relative flex-shrink-0">
                <Image
                  src="/images/berita/decat.png"
                  alt="Decathlon"
                  width={140}
                  height={90}
                  className="w-32 h-24 object-cover rounded-md"
                />
                <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Decathlon
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Atlet Decathlon Nasional Persiapkan Diri untuk Olimpiade 2024
                </p>
                <span className="text-xs text-gray-500 mt-1 block">1 hari yang lalu</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white/70 backdrop-blur">
              <div className="relative flex-shrink-0">
                <Image
                  src="/images/berita/relay.png"
                  alt="Estafet 4x100m"
                  width={140}
                  height={90}
                  className="w-32 h-24 object-cover rounded-md"
                />
                <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Estafet
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Tim Estafet 4x100 Meter Putra Indonesia Pecahkan Rekor Nasional
                </p>
                <span className="text-xs text-gray-500 mt-1 block">2 hari yang lalu</span>
              </div>
            </div>

          </div>

          {/* === BERITA TERBARU === */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">Berita Terbaru</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Pusat Pelatihan Atletik Nasional Dibuka di Jakarta",
                  desc: "Fasilitas baru dilengkapi dengan teknologi terkini untuk mendukung atlet",
                  time: "3 jam yang lalu",
                  category: "Fasilitas"
                },
                {
                  title: "Atlet Lompat Jauh Indonesia Targetkan Medali Asian Games",
                  desc: "Persiapan intensif dilakukan selama 6 bulan ke depan",
                  time: "6 jam yang lalu",
                  category: "Lompat Jauh"
                },
                {
                  title: "Kejuaraan Atletik Pelajar ASEAN Akan Digunakan di Bali",
                  desc: "Event internasional pertama pasca pandemi untuk kategori pelajar",
                  time: "1 hari yang lalu",
                  category: "Event"
                }
              ].map((news, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-white cursor-pointer transition-colors shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500">{news.time}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{news.title}</h3>
                  <p className="text-sm text-gray-600">{news.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= RIGHT SIDE (TERPOPULER) ================= */}
        <div className="space-y-8">

          <h2 className="text-2xl font-bold border-b pb-2">Terpopuler</h2>

          {/* Promo Card */}
          <div className="border rounded-lg p-4 hover:bg-white cursor-pointer bg-gradient-to-r from-orange-50 to-red-50 shadow-sm hover:shadow-md transition-all duration-300">
            <p className="text-orange-600 font-semibold">ATHLETICS NOW!</p>
            <p className="text-sm font-medium">
              Update terbaru dunia atletik Indonesia dan internasional hanya di sini!
            </p>
          </div>

          {/* Ranking List */}
          <div className="space-y-4">
            {[
              {
                rank: 1,
                title: "Lalu Zohri Persiapkan Diri untuk Olimpiade Paris 2024",
                views: "15.2k"
              },
              {
                rank: 2,
                title: "Rekor Lari 400 Meter Putri Indonesia Dipecahkan Atlet Muda",
                views: "12.8k"
              },
              {
                rank: 3,
                title: "Jadwal Kejuaraan Atletik Nasional 2024 Diumumkan",
                views: "10.5k"
              },
              {
                rank: 4,
                title: "Atlet Pelari Gawang Indonesia Raih Medali Perak SEA Games",
                views: "9.3k"
              },
              {
                rank: 5,
                title: "Teknik Start Blok yang Benar untuk Pelari Sprint Pemula",
                views: "8.7k"
              }
            ].map((item) => (
              <div key={item.rank} className="flex gap-4 p-3 rounded-lg hover:bg-white cursor-pointer transition-colors shadow-sm">
                <div className={`text-2xl font-extrabold w-8 flex items-center justify-center ${
                  item.rank === 1 ? 'text-yellow-500' : 
                  item.rank === 2 ? 'text-gray-400' : 
                  item.rank === 3 ? 'text-orange-700' : 'text-gray-400'
                }`}>
                  {item.rank}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-snug mb-1">
                    {item.title}
                  </p>
                  <span className="text-xs text-gray-500">{item.views} dilihat</span>
                </div>
              </div>
            ))}
          </div>

          {/* Jadwal Event */}
          <div className="mt-8 p-4 border rounded-lg bg-gray-50 shadow-sm">
            <h3 className="font-bold text-lg mb-3">Jadwal Event Mendatang</h3>
            <div className="space-y-3">
              {[
                { event: "Kejuaraan Atletik Nasional", date: "15 Mar 2024", location: "Jakarta" },
                { event: "ASEAN University Games", date: "22 Apr 2024", location: "Bangkok" },
                { event: "Asian Athletics Championships", date: "10 Jun 2024", location: "Tokyo" }
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between items-center p-2 hover:bg-white rounded shadow-sm">
                  <div>
                    <p className="font-medium text-sm">{schedule.event}</p>
                    <p className="text-xs text-gray-600">{schedule.location}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-semibold">
                    {schedule.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}