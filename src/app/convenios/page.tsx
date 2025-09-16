import data from "../../../data/convenios.json";
import ConvenioCard from "../../../components/ConvenioCard";
import FilterBar from "../../../components/FilterBar";
import { normalizarEstado } from "../../../lib/utils";
import type { Convenio } from "../../../types/convenio";

function uniq<T>(arr: T[]) { return Array.from(new Set(arr)); }

export default function ConveniosPage({
  searchParams,
}: { searchParams: { q?: string; area?: string; institucion?: string; estado?: string } }) {
  const convenios = data as unknown as Convenio[];

  const areas = uniq(convenios.flatMap(c => c.area)).sort();
  const instituciones = uniq(convenios.map(c => c.institucion)).sort();

  const q = (searchParams.q ?? "").toLowerCase().trim();
  const area = searchParams.area ?? "";
  const institucion = searchParams.institucion ?? "";
  const estado = searchParams.estado ?? "";

  const fil = convenios.filter(c => {
    const estadoCalc = normalizarEstado(c.estado, c.fechaTermino);
    const matchQ = !q || [c.titulo, c.institucion, c.resumen, ...(c.tags || []), ...(c.area || [])]
      .filter(Boolean)
      .map(s => String(s).toLowerCase())
      .some(s => s.includes(q));
    const matchArea = !area || c.area.includes(area);
    const matchInst = !institucion || c.institucion === institucion;
    const matchEst = !estado || estadoCalc === estado;
    return matchQ && matchArea && matchInst && matchEst;
  });

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Convenios</h2>
      <FilterBar areas={areas} instituciones={instituciones} />
      {fil.length === 0 ? (
        <div className="rounded-xl border p-6 text-center text-gray-600">
          Sin resultados. Ajusta los filtros o la búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fil.map(c => <ConvenioCard key={c.id} c={c} />)}
        </div>
      )}
    </section>
  );
}
