
export default function KapcsolatPage() {
  return (
    <main className="min-h-screen bg-sky-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-sky-800 mb-6">Kapcsolat</h1>

        <p className="text-gray-700 mb-3">
          <span className="font-semibold text-sky-700">Név:</span> Tarcsányi Csongor Márk
        </p>
        <p className="text-gray-700 mb-3">
          <span className="font-semibold text-sky-700">Telefonszám:</span> +36 50 1163345
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-sky-700">Email:</span> tarcsanyi.csongor.mark@ganziskola.hu
        </p>
      </div>
    </main>
  );
}
