import Link from "next/link";
import Image from "next/image";
import type { Convenio } from "../../types/convenio";
import FavoriteButton from "./FavoriteButton";

const FALLBACK = "/convenios/placeholder.jpg"; // opcional

export default function ConvenioCard({ c }: { c: Convenio }) {
  const src = c.image || FALLBACK;
  const alt = `${c.institucion} — ${c.titulo}`;

  return (
    <article
      className="
        group rounded-2xl border p-4 bg-white
        transition-all duration-200 transform-gpu
        hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300
        focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:-translate-y-0.5
      "
    >
      {/* Imagen con zoom sutil al hover */}
      <div className="mb-3 overflow-hidden rounded-xl bg-gray-50">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={src}
            alt={alt}
            fill
            className="
              object-fill object-center
              transition-transform duration-300
              group-hover:scale-[1.05]
              motion-reduce:transform-none motion-reduce:transition-none
            "
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={false}
          />
        </div>
      </div>

      {/* Cabecera */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold leading-snug">{c.titulo}</h3>
        <FavoriteButton id={c.id} />
      </div>

      {/* Metadatos */}
      <p className="text-sm text-gray-600 mt-1">{c.institucion}</p>
      {c.resumen && <p className="text-sm mt-2 line-clamp-2">{c.resumen}</p>}

      {/* Áreas */}
      <div className="mt-3 flex flex-wrap gap-2">
        {c.area.map(a => (
          <span key={a} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{a}</span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/convenios/${c.slug}`}
        className="
          mt-4 inline-block text-sm font-medium underline
          transition-colors
          group-hover:text-indigo-600 group-hover:no-underline
          focus-visible:outline-none
        "
      >
        Ver detalles
      </Link>
    </article>
  );
}
