"use client";
import { useEffect } from "react";

export default function ForceLight() {
  useEffect(() => {
    // Quita cualquier clase .dark previa y limpia claves comunes
    document.documentElement.classList.remove("dark");
    try {
      localStorage.removeItem("theme");
      localStorage.removeItem("color-theme");
      localStorage.removeItem("next-theme");
    } catch {}
  }, []);
  return null;
}
