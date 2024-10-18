"use client";
import React, { useState } from "react";
import SocialMediaButons from "@/app/components/SocialMediaButons";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Yükleniyor...");
    // Burada bir API çağrısı yaparak form verilerini gönderebilirsiniz
    try {
      const response = await fetch("/contact/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mesajınız başarıyla gönderildi!");
        setFormData({ name: "", email: "", message: "" }); // Formu sıfırla
      } else {
        setStatus("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Hata:", error);
      setStatus("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">İletişim</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300"
            htmlFor="name"
          >
            Ad Soyad
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300"
            htmlFor="email"
          >
            E-posta
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300"
            htmlFor="message"
          >
            Mesaj
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Gönder
        </button>
      </form>
      {status && (
        <p className="mt-4 text-gray-600 dark:text-gray-400">{status}</p>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Bize Ulaşın</h2>
        <div className="mt-4">
          <p className="text-gray-700 dark:text-gray-300">Sosyal Medya:</p>
          <ul className="flex space-x-2 mt-2">
            <SocialMediaButons />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
