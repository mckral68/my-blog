"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Loadingg from "./loading";
import { FiSun } from "react-icons/fi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <Loadingg />;
  }
  if (mounted) {
    if (resolvedTheme === "dark") {
      return <FiSun onClick={() => setTheme("light")} />;
    }
    if (resolvedTheme === "light") {
      return <FiSun onClick={() => setTheme("dark")} />;
    }
  }
};

export default ThemeSwitch;
