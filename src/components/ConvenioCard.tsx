import Link from "next/link";
import type { Convenio } from "../../types/convenio";
import FavoriteButton from "./FavoriteButton";

export default function ConvenioCard({ c }: { c: Convenio }) {
  return (
    <article className="rounded-2xl border p-4 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold leading-snug">{c.titulo}</h3>
        <div className="flex items-center gap-2">
          <FavoriteButton id={c.id} />
        </div>
      </div>
      <p className="text-sm text-gray-600  mt-1">{c.institucion}</p>
      {c.resumen && <p className="text-sm mt-2 overflow-hidden text-ellipsis">{c.resumen}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {c.area.map(a => (
          <span key={a} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{a}</span>
        ))}
      </div>
      <Link href={`/convenios/${c.slug}`} className="mt-4 inline-block text-sm font-medium underline">
        Ver detalles
      </Link>
    </article>
  );
}
