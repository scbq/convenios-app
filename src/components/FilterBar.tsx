"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFavorites } from "../hooks/useFavorites";

export default function FilterBar({ areas, instituciones }:{
  areas: string[]; instituciones: string[];
}) {
  const router = useRouter();
  const params = useSearchParams();
  const { favorites } = useFavorites();
  const [favEnabled, setFavEnabled] = useState(params.get("favoritos") === "1");

  useEffect(() => setFavEnabled(params.get("favoritos") === "1"), [params]);

  const setParam = (key: string, value?: string | null) => {
    const p = new URLSearchParams(params.toString());
    if (value && value.length) p.set(key, value); else p.delete(key);
    p.delete("page"); // reset de paginación al cambiar filtros
    router.push(`/convenios?${p.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
      <input
        defaultValue={params.get("q") ?? ""}
        onChange={e => setParam("q", e.target.value)}
        placeholder="Buscar convenios…"
        className="w-full md:w-64 border rounded-xl px-3 py-2 bg-white"
      />

      <select
        defaultValue={params.get("area") ?? ""}
        onChange={e => setParam("area", e.target.value)}
        className="border rounded-xl px-3 py-2 bg-white"
      >
        <option value="">Todas las áreas</option>
        {areas.map(a => <option key={a} value={a}>{a}</option>)}
      </select>

      <select
        defaultValue={params.get("institucion") ?? ""}
        onChange={e => setParam("institucion", e.target.value)}
        className="border rounded-xl px-3 py-2 bg-white"
      >
        <option value="">Todas las instituciones</option>
        {instituciones.map(i => <option key={i} value={i}>{i}</option>)}
      </select>

      {/* Ordenar */}
      <select
        defaultValue={params.get("sort") ?? "proximos"}
        onChange={e => setParam("sort", e.target.value)}
        className="border rounded-xl px-3 py-2 bg-white"
        title="Ordenar"
      >
        <option value="proximos">Próximos a vencer (fecha término ↑)</option>
        <option value="mas-nuevos">Más nuevos (fecha inicio ↓)</option>
        <option value="alfabetico">Alfabético (título)</option>
      </select>

      {/* Solo favoritos */}
      <label className="ml-auto inline-flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={favEnabled}
          onChange={(e) => setParam("favoritos", e.target.checked ? "1" : null)}
          disabled={favorites.size === 0}
          className="size-4"
        />
        Solo favoritos
      </label>
    </div>
  );
}
