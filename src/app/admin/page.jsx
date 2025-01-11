import Link from "next/link";

const AdminPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Yönetim Paneli</h1>
        <div className="space-y-4">
          <Link href="/admin/posts" className="text-blue-500 dark:text-blue-400 hover:underline">
            Gönderiler
          </Link>
          <br />
          <Link href="/admin/messages" className="text-blue-500 dark:text-blue-400 hover:underline">
            Mesajlar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
