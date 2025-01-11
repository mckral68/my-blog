import Link from "next/link";

const AdminPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Yönetim Paneli</h1>
        {/* Linkler */}
        <div className="space-y-4">
          <Link href="/admin/posts" className="text-blue-500 hover:underline text-lg">
            Gönderiler
          </Link>
          <br />
          <Link href="/admin/messages" className="text-blue-500 hover:underline text-lg">
            Mesajlar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
