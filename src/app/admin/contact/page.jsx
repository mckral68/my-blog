"use client";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("/contact/api");
        if (!response.ok) {
          throw new Error("Veri çekme hatası");
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Bu mesajı silmek istediğinize emin misiniz?")) {
      try {
        const response = await fetch(`/contact/api/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setContacts(contacts.filter((contact) => contact.id !== id));
        } else {
          throw new Error("Silme işlemi başarısız");
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <h1 className="text-3xl font-bold mb-4">İletişim Gelen Kutusu</h1>
  {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
  <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
    <thead>
      <tr>
        <th className="border-b py-2 dark:border-gray-700">İsim</th>
        <th className="border-b py-2 dark:border-gray-700">E-posta</th>
        <th className="border-b py-2 dark:border-gray-700">Mesaj</th>
        <th className="border-b py-2 dark:border-gray-700">Eylem</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => (
        <tr key={contact.id}>
          <td className="border-b py-2 dark:border-gray-700">{contact.name}</td>
          <td className="border-b py-2 dark:border-gray-700">{contact.email}</td>
          <td className="border-b py-2 dark:border-gray-700">{contact.message}</td>
          <td className="border-b py-2 dark:border-gray-700">
            <button
              onClick={() => handleDelete(contact.id)}
              className="text-red-500 dark:text-red-400 hover:underline"
            >
              Sil
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};
export default AdminPage;
