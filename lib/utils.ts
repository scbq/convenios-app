export function diasHasta(fechaISO: string) {
  const hoy = new Date();
  const fin = new Date(fechaISO);
  const ms = fin.getTime() - hoy.getTime();
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

export function estadoCalculado(fechaTermino: string) {
  const d = diasHasta(fechaTermino);
  if (d < 0) return "Vencido";
  if (d <= 30) return "Próximo a vencer";
  return "Vigente";
}

export function normalizarEstado(estado?: string, fechaTermino?: string) {
  if (fechaTermino) return estadoCalculado(fechaTermino);
  if (!estado) return "Vigente";
  if (estado.toLowerCase().startsWith("prox")) return "Próximo a vencer";
  return estado;
}
