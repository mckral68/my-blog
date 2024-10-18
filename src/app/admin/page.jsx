"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "loading") return; // Yükleniyorsa bir şey yapma
    if (!session) {
      router.push("/admin/login"); // Oturum yoksa yönlendir
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Yükleniyor...</div>; // Yükleniyor durumu
  }
  // Eğer session null ise, bu noktada yönlendirme yapılacak.
  if (!session) {
    return null; // Yönlendirme gerçekleştiği için burada bir şey render etmeyin.
  }

  return (
    <div>
      <h1>Admin Sayfası</h1>
      <p>Hoş geldin, {session.user?.name}!</p>
    </div>
  );
};

export default AdminPage;
