"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (result?.error) {
      alert("Hatalı kullanıcı adı veya şifre!"); // Hata durumunu kontrol edin
    } else if (result.ok) {
      router.replace("/admin");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Admin Girişi</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
