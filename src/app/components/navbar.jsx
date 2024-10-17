"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkında", href: "/about" },
    { name: "Gönderi", href: "/posts" },
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Oğuzhan Atılgan
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            Menü
          </button>
        </div>
        {/* Masaüstü Menü Öğeleri */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="text-gray-300 hover:text-white dark:text-gray-200 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <ThemeSwitch />
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
          {menuItems.map((item, index) => (
            <Link
              onClick={closeMenu}
              href={item.href}
              key={index}
              className="text-gray-300 hover:text-white dark:text-gray-200 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
