"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterBar({ areas, instituciones }:{
  areas: string[]; instituciones: string[];
}) {
  const router = useRouter();
  const params = useSearchParams();

  const setParam = (key: string, value: string) => {
    const p = new URLSearchParams(params.toString());
    if (value) p.set(key, value); else p.delete(key);
    router.push(`/convenios?${p.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <input
        defaultValue={params.get("q") ?? ""}
        onChange={e => setParam("q", e.target.value)}
        placeholder="Buscar convenios…"
        className="w-full md:w-64 border rounded-xl px-3 py-2"
      />
      <select
        defaultValue={params.get("area") ?? ""}
        onChange={e => setParam("area", e.target.value)}
        className="border rounded-xl px-3 py-2"
      >
        <option value="">Todas las áreas</option>
        {areas.map(a => <option key={a} value={a}>{a}</option>)}
      </select>

      <select
        defaultValue={params.get("institucion") ?? ""}
        onChange={e => setParam("institucion", e.target.value)}
        className="border rounded-xl px-3 py-2"
      >
        <option value="">Todas las instituciones</option>
        {instituciones.map(i => <option key={i} value={i}>{i}</option>)}
      </select>

      <select
        defaultValue={params.get("estado") ?? ""}
        onChange={e => setParam("estado", e.target.value)}
        className="border rounded-xl px-3 py-2"
      >
        <option value="">Todos los estados</option>
        <option value="Vigente">Vigente</option>
        <option value="Próximo a vencer">Próximo a vencer</option>
        <option value="Vencido">Vencido</option>
      </select>
    </div>
  );
}
