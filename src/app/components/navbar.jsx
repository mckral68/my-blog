"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Hamburger ikonu için import
import ThemeSwitch from "./ThemeSwitch";
import SessionCheck from "./SessionCheck";
import LogoutButton from "./LogoutButton";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isSessionValid = SessionCheck(); // Session kontrolü
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkında", href: "/about" },
    { name: "Gönderi", href: "/posts" },
    { name: "İletişim", href: "/contact" },
  ];
  const adminMenuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Yönetim Paneli", href: "/admin" },
    { name: "Gönderiler", href: "/admin/posts" },
    { name: "Mesajlar", href: "/admin/contact" },
  ];
  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Oğuzhan Atılgan
        </Link>
        <ThemeSwitch />

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-labelledby="toggle-menu"
            className="text-gray-300 focus:outline-none"
          >
            <FiMenu className="w-6 h-6" /> {/* Hamburger ikonu */}
          </button>
        </div>
        {/* Masaüstü Menü Öğeleri */}
        <div className="hidden md:flex space-x-4">
          {!isSessionValid &&
            menuItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-gray-300 hover:text-white dark:text-gray-200 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          {isSessionValid &&
            adminMenuItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-gray-300 hover:text-white dark:text-gray-200 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>
      {/* Mobil Menü */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 dark:bg-gray-900 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-2/3`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-white text-lg font-bold">Menü</div>
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            Kapat
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
  {!isSessionValid &&
    menuItems.map((item, index) => (
      <li key={index}>
        <Link
          href={item.href}
          onClick={toggleMenu}
          className="text-gray-300 hover:text-white dark:text-gray-200 dark:hover:text-white"
        >
          {item.name}
        </Link>
      </li>
    ))}
  {isSessionValid &&
    adminMenuItems.map((item, index) => (
      <li key={index}>
        <Link
          href={item.href}
          onClick={toggleMenu}
          className="text-gray-300 hover:text-white dark:text-gray-200 dark:hover:text-white"
        >
          {item.name}
        </Link>
      </li>
    ))}
  {isSessionValid && <li><LogoutButton /></li>}
</ul>
      </div>
    </nav>
  );
};

export default Navbar;
