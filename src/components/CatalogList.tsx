"use client";
import { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ConvenioCard from "./ConvenioCard";
import type { Convenio } from "../../types/convenio";
import { useFavorites } from "../hooks/useFavorites";

type Props = { items: Convenio[] };

function cmp(a: number, b: number) { return a < b ? -1 : a > b ? 1 : 0; }

export default function CatalogList({ items }: Props) {
  const params = useSearchParams();
  const router = useRouter();
  const { favorites } = useFavorites();

  const q = (params.get("q") ?? "").toLowerCase().trim();
  const area = params.get("area") ?? "";
  const institucion = params.get("institucion") ?? "";
  const sort = params.get("sort") ?? "proximos";
  const onlyFav = params.get("favoritos") === "1";
  const page = Math.max(1, parseInt(params.get("page") ?? "1", 10) || 1);
  const pageSize = Math.min(24, Math.max(4, parseInt(params.get("pageSize") ?? "8", 10) || 8));

  const filtered = useMemo(() => {
    const byQuery = items.filter(c => {
      const matchQ = !q || [c.titulo, c.institucion, c.resumen, ...(c.tags || []), ...(c.area || [])]
        .filter(Boolean)
        .map(s => String(s).toLowerCase())
        .some(s => s.includes(q));
      const matchArea = !area || c.area.includes(area);
      const matchInst = !institucion || c.institucion === institucion;
      const matchFav = !onlyFav || favorites.has(c.id);
      return matchQ && matchArea && matchInst && matchFav;
    });

    const sorted = byQuery.slice().sort((a, b) => {
      if (sort === "alfabetico") return a.titulo.localeCompare(b.titulo, "es");
      if (sort === "mas-nuevos") return cmp(Date.parse(b.fechaInicio), Date.parse(a.fechaInicio));
      // "proximos": ordenar por fecha de término ascendente
      return cmp(Date.parse(a.fechaTermino), Date.parse(b.fechaTermino));
    });

    return sorted;
  }, [items, q, area, institucion, sort, onlyFav, favorites]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  const setPage = (p: number) => {
    const qp = new URLSearchParams(params.toString());
    qp.set("page", String(p));
    router.push(`/convenios?${qp.toString()}`);
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        {total} resultado{total === 1 ? "" : "s"} — página {safePage} de {totalPages}
      </div>

      {pageItems.length === 0 ? (
        <div className="rounded-xl border p-6 text-center text-gray-600">
          Sin resultados. Ajusta los filtros o la búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageItems.map(c => <ConvenioCard key={c.id} c={c} />)}
        </div>
      )}

      {/* Paginación */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <button
          onClick={() => setPage(Math.max(1, safePage - 1))}
          disabled={safePage <= 1}
          className="px-3 py-1 rounded-lg border disabled:opacity-50"
        >Anterior</button>

        {Array.from({ length: totalPages }).slice(Math.max(0, safePage-3), safePage+2).map((_, idx) => {
          const num = Math.max(1, safePage - 2) + idx;
          if (num > totalPages) return null;
          const active = num === safePage;
          return (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-3 py-1 rounded-lg border ${active ? "bg-gray-900 text-white" : ""}`}
            >{num}</button>
          );
        })}

        <button
          onClick={() => setPage(Math.min(totalPages, safePage + 1))}
          disabled={safePage >= totalPages}
          className="px-3 py-1 rounded-lg border disabled:opacity-50"
        >Siguiente</button>
      </div>
    </div>
  );
}
