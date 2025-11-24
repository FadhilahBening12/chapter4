import Image from "next/image";
import Sidebar from "@/components/sidebar"; 

export default function ProfilPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER PROFIL */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Foto Profil */}
            <div className="relative w-48 h-48 flex-shrink-0">
  <Image
    src="/images/profil/2.png"
    alt="Foto Profil"
    width={200}
    height={200}
    className="w-full h-full object-cover rounded-2xl"
  />

              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#1a365d] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Atlet Nasional
              </div>
            </div>

            {/* Informasi Utama */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-bold text-[#1a365d] mb-2">Mark Lee</h1>
              <p className="text-xl text-gray-600 mb-4">Pelari Sprint 100juta m & 200.000m</p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold">
                  🏃‍♂️ Tim Nasional
                </div>
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-semibold">
                  ⭐ Atlet Berprestasi
                </div>
                <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-lg font-semibold">
                  🥇 Medalis Emas
                </div>
              </div>

              {/* Statistik Cepat */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1a365d]">10.15s</div>
                  <div className="text-sm text-gray-500">100m PB</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1a365d]">5</div>
                  <div className="text-sm text-gray-500">Medali Emas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1a365d]">23</div>
                  <div className="text-sm text-gray-500">Usia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GRID INFORMASI DETAIL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI - DATA PRIBADI */}
          <div className="lg:col-span-1 space-y-6">
            {/* Informasi Pribadi */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#1a365d] mb-4">Informasi Pribadi</h2>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Nama Lengkap</span>
                  <span className="font-semibold">Mark Lee</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Tempat Lahir</span>
                  <span className="font-semibold">Jakarta</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Tanggal Lahir</span>
                  <span className="font-semibold">15 Maret 2001</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Tinggi Badan</span>
                  <span className="font-semibold">178 cm</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Berat Badan</span>
                  <span className="font-semibold">68 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Klub</span>
                  <span className="font-semibold">Persatuan Atletik DKI Jakarta</span>
                </div>
              </div>
            </div>

            {/* Kontak */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#1a365d] mb-4">Kontak</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    📧
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold">mark.atlet@email.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    📱
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telepon</p>
                    <p className="font-semibold">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Alamat</p>
                    <p className="font-semibold">Jakarta Selatan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM TENGAH & KANAN */}
          <div className="lg:col-span-2 space-y-6">
            {/* Prestasi */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#1a365d] mb-4">Prestasi & Medali</h2>
              <div className="space-y-4">
                {[
                  { event: "SEA Games 2023", medal: "🥇", category: "100m Putra", result: "10.15s", year: "2023" },
                  { event: "Kejuaraan Nasional 2023", medal: "🥇", category: "200m Putra", result: "20.45s", year: "2023" },
                  { event: "Asian Games 2022", medal: "🥈", category: "100m Putra", result: "10.20s", year: "2022" },
                  { event: "SEA Games 2021", medal: "🥇", category: "4x100m Estafet", result: "38.90s", year: "2021" },
                ].map((prestasi, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{prestasi.medal}</span>
                      <div>
                        <p className="font-semibold">{prestasi.event}</p>
                        <p className="text-sm text-gray-600">{prestasi.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#1a365d]">{prestasi.result}</p>
                      <p className="text-sm text-gray-500">{prestasi.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target & Rencana */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#1a365d] mb-4">Target & Rencana</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                  <p className="text-sm opacity-90">Target Waktu</p>
                  <p className="text-2xl font-bold">10.05s</p>
                  <p className="text-sm opacity-90">100m - Olimpiade 2024</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                  <p className="text-sm opacity-90">Target Peringkat</p>
                  <p className="text-2xl font-bold">Top 8</p>
                  <p className="text-sm opacity-90">Olimpiade Paris 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}