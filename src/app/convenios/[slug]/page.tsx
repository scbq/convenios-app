import data from "../../../../data/convenios.json";
import { notFound } from "next/navigation";
import type { Convenio } from "../../../../types/convenio";
import FavoriteButton from "../../../components/FavoriteButton";
import Image from "next/image";

export default function ConvenioDetail({ params }: { params: { slug: string } }) {
  const convenios = data as unknown as Convenio[];
  const convenio = convenios.find(c => c.slug === params.slug);
  if (!convenio) return notFound();

  const hero = convenio.image ?? "/convenios/placeholder.jpg"; // crea este archivo en /public/convenios si quieres
  const alt = `${convenio.institucion} — ${convenio.titulo}`;

  return (
    <article className="space-y-4">
      {/* Hero con relación 21:9 */}
      <div className="relative overflow-hidden rounded-2xl border">
        <div className="aspect-[21/9]">
          <Image
            src={hero}
            alt={alt}
            fill
            sizes="100vw"
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Cabecera */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">{convenio.titulo}</h2>
          <p className="text-gray-600">{convenio.institucion}</p>
        </div>
        <div className="flex items-center gap-2">
          <FavoriteButton id={convenio.id} size="md" />
        </div>
      </div>

      {/* Resumen */}
      {convenio.resumen && <p className="text-sm">{convenio.resumen}</p>}

      {/* Info principal */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border p-4">
          <h3 className="font-medium mb-2">Información</h3>
          <ul className="space-y-1 text-sm">
            <li><strong>Áreas:</strong> {convenio.area.join(", ")}</li>
            <li><strong>Vigencia:</strong> {convenio.fechaInicio} — {convenio.fechaTermino}</li>
            <li><strong>Región:</strong> {convenio.region}</li>
            <li><strong>Modalidad:</strong> {convenio.modalidad}</li>
          </ul>
        </div>
        <div className="rounded-xl border p-4">
          <h3 className="font-medium mb-2">Contacto</h3>
          <ul className="space-y-1 text-sm">
            {convenio.contacto?.correo && <li><strong>Correo:</strong> {convenio.contacto.correo}</li>}
            {convenio.contacto?.telefono && <li><strong>Teléfono:</strong> {convenio.contacto.telefono}</li>}
            {convenio.enlaceOficial && (
              <li>
                <a href={convenio.enlaceOficial} target="_blank" className="underline">
                  Enlace oficial
                </a>
              </li>
            )}
            {convenio.pdf && (
              <li>
                <a href={convenio.pdf} target="_blank" className="underline">
                  Descargar PDF
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Beneficios */}
      <div className="rounded-xl border p-4">
        <h3 className="font-medium mb-2">Beneficios</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {convenio.beneficios.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>

      {/* Requisitos */}
      <div className="rounded-xl border p-4">
        <h3 className="font-medium mb-2">Requisitos</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {convenio.requisitos.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
    </article>
  );
}
