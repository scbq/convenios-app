"use client";
import { useFavorites } from "../hooks/useFavorites";

export default function FavoriteButton({ id, size = "sm" }:{ id: string; size?: "sm"|"md" }) {
  const { has, toggle } = useFavorites();
  const active = has(id);
  const base = "rounded-full border transition px-3 py-1 text-xs";
  const cls = active
    ? "bg-amber-100 border-amber-300 text-amber-900"
    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50";

  return (
    <button
      aria-pressed={active}
      onClick={(e) => { e.preventDefault(); toggle(id); }}
      className={`${base} ${cls} ${size === "md" ? "text-sm px-3.5 py-1.5" : ""}`}
      title={active ? "Quitar de favoritos" : "Añadir a favoritos"}
    >
      {active ? "★ Favorito" : "☆ Favorito"}
    </button>
  );
}
