import data from "../../data/convenios.json";
import { normalizarEstado } from "../../lib/utils";
import Link from "next/link";
import type { Convenio } from "../../types/convenio";

export default function HomePage() {
  const convenios = data as unknown as Convenio[];
  const vigentes = convenios.filter(c => normalizarEstado(c.estado, c.fechaTermino) === "Vigente").length;
  const proximos = convenios.filter(c => normalizarEstado(c.estado, c.fechaTermino) === "Próximo a vencer").length;
  const vencidos = convenios.filter(c => normalizarEstado(c.estado, c.fechaTermino) === "Vencido").length;

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold">Explora convenios por área e institución</h2>
        <p className="text-gray-600">Busca, filtra y revisa detalles y beneficios.</p>
        <Link href="/convenios" className="inline-block mt-2 px-4 py-2 rounded-xl border hover:bg-gray-50">
          Ver convenios
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Vigentes", value: vigentes },
          { label: "Próximos a vencer", value: proximos },
          { label: "Vencidos", value: vencidos },
        ].map(x => (
          <div key={x.label} className="rounded-2xl border p-5">
            <p className="text-sm text-gray-500">{x.label}</p>
            <p className="text-2xl font-semibold mt-1">{x.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
