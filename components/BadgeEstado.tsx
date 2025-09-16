export default function BadgeEstado({ estado }: { estado: string }) {
  const map: Record<string, string> = {
    "Vigente": "bg-green-100 text-green-800",
    "Próximo a vencer": "bg-yellow-100 text-yellow-800",
    "Vencido": "bg-red-100 text-red-800",
  };
  const cls = map[estado] ?? "bg-gray-100 text-gray-800";
  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${cls}`}>
      {estado}
    </span>
  );
}
