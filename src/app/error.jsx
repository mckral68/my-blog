"use client";
export default function Error({ error, reset }) {
  console.error("Hata:", error);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Bir hata oluştu!</h1>
      <p>Sayfayı yenilemeyi deneyin veya aşağıdaki butona tıklayın:</p>
      <button
        onClick={() => reset()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Yenile
      </button>
    </div>
  );
}
