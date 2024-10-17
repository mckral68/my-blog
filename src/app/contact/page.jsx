"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa"; // İkonları içe aktarın.

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
  const socialMediaLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/software_developer_tr",
      icon: <FaInstagram className="text-pink-500 mr-2" />,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@oguzhan_68",
      icon: <FaYoutube className="text-red-600 mr-2" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/oğuzhan-atilgan-036340237",
      icon: <FaLinkedin className="text-blue-700 mr-2" />,
    },
    {
      name: "E-posta",
      href: "mailto:oguzhanatilgan068@gmail.com",
      icon: <FaEnvelope className="text-gray-700 mr-2" />,
    },
  ];
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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">İletişim</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            İsim
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            E-posta
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">
            Mesaj
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Gönder
        </button>
      </form>
      {status && <p className="mt-4 text-gray-600">{status}</p>}

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Bize Ulaşın</h2>
        <div className="mt-4">
          <p className="text-gray-700">Sosyal Medya:</p>
          <ul className="flex space-x-4 mt-2">
            {socialMediaLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                {link.icon}
                <Link
                  target="_blank"
                  href={link.href}
                  className="text-blue-500 hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
