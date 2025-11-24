import { beritaList } from "@/data/berita";

type Props = {
  params: {
    id: string;
  };
};

export default async function DetailBerita({ params }: Props) {
  const { id } = params;

  // Pastikan id dibandingkan sebagai string
  const berita = beritaList.find((b) => b.id.toString() === id);

  if (!berita) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Berita tidak ditemukan</h1>
        <p className="text-gray-600 mt-2">ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">{berita.nama}</h1>
      <p className="text-gray-500">{berita.tanggal}</p>

      <p className="text-lg leading-relaxed mt-4">{berita.isi}</p>
    </div>
  );
}
