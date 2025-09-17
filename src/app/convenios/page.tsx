import data from "../../../data/convenios.json";
import type { Convenio } from "../../../types/convenio";
import FilterBar from "../../components/FilterBar";
import CatalogList from "../../components/CatalogList";
import HeroHeader from "../../components/HeroHeader";

function uniq<T>(arr: T[]) { return Array.from(new Set(arr)); }

export default function ConveniosPage() {
  const convenios = data as unknown as Convenio[];
  const areas = uniq(convenios.flatMap(c => c.area)).sort();
  const instituciones = uniq(convenios.map(c => c.institucion)).sort();

  return (
    <>
      <HeroHeader />
      <main id="contenido" className="mx-auto max-w-6xl px-4 py-10">
        <div id="catalogo" className="space-y-6">
          <h2 className="text-2xl font-semibold">Catálogo de convenios</h2>
          <FilterBar areas={areas} instituciones={instituciones} />
          <CatalogList items={convenios} />
        </div>
      </main>
    </>
  );
}
