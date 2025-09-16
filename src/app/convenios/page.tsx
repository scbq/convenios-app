import data from "../../../data/convenios.json";
import type { Convenio } from "../../../types/convenio";
import FilterBar from "../../components/FilterBar";
import CatalogList from "../../components/CatalogList";

function uniq<T>(arr: T[]) { return Array.from(new Set(arr)); }

export default function ConveniosPage() {
  const convenios = data as unknown as Convenio[];
  const areas = uniq(convenios.flatMap(c => c.area)).sort();
  const instituciones = uniq(convenios.map(c => c.institucion)).sort();

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Convenios</h2>
      <FilterBar areas={areas} instituciones={instituciones} />
      <CatalogList items={convenios} />
    </section>
  );
}
