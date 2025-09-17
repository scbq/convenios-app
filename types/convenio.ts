export type Convenio = {
  id: string;
  slug: string;
  titulo: string;
  institucion: string;
  area: string[];
  fechaInicio: string;
  fechaTermino: string;
  region: string;
  modalidad: "Presencial" | "Remoto" | "Mixto" | string;
  beneficios: string[];
  requisitos: string[];
  publicoObjetivo: string;
  contacto?: { correo?: string; telefono?: string };
  enlaceOficial?: string | null;
  pdf?: string | null;
  tags?: string[];
  resumen?: string;

  // NUEVO
  image?: string; // ej. "/convenios/umayor.jpg" (desde /public)
  logo?: string;  // opcional, si quieres mostrar logo pequeño de la institución
};
