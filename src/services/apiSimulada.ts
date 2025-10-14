// Simulación de una base de datos en memoria

export interface Deuda {
  id: number;
  ci: string;
  proveedor: string;
  servicio: string;
  periodo: string;
  monto: number;
  vencimiento: string;
  estado: "PENDIENTE" | "PAGADA" | "CANCELADA";
}

// Datos simulados (como si provinieran de PostgreSQL)
export const deudasSimuladas: Deuda[] = [
  {
    id: 1,
    ci: "12345678",
    proveedor: "CRE",
    servicio: "Energía Eléctrica",
    periodo: "Septiembre 2025",
    monto: 145.8,
    vencimiento: "2025-10-25",
    estado: "PENDIENTE",
  },
  {
    id: 2,
    ci: "98765432",
    proveedor: "SAGUAPAC",
    servicio: "Agua Potable",
    periodo: "Octubre 2025",
    monto: 89.5,
    vencimiento: "2025-11-05",
    estado: "PENDIENTE",
  },
  {
    id: 3,
    ci: "65432109",
    proveedor: "COTAS",
    servicio: "Internet Hogar",
    periodo: "Octubre 2025",
    monto: 210.0,
    vencimiento: "2025-11-10",
    estado: "PENDIENTE",
  },
  {
    id: 4,
    ci: "45678901",
    proveedor: "SAGUAPAC",
    servicio: "Agua Potable",
    periodo: "Agosto 2025",
    monto: 75.3,
    vencimiento: "2025-09-05",
    estado: "CANCELADA",
  },
];

// Función para buscar deuda según CI/NIT y proveedor
export const buscarDeuda = (ci: string, proveedor: string): Deuda | null => {
  const deuda = deudasSimuladas.find(
    (d) =>
      d.ci.trim() === ci.trim() &&
      d.proveedor.toLowerCase() === proveedor.toLowerCase()
  );

  return deuda || null;
};

// Función opcional para registrar cambios de estado (simulación)
export const actualizarEstadoDeuda = (
  id: number,
  nuevoEstado: Deuda["estado"]
): void => {
  const index = deudasSimuladas.findIndex((d) => d.id === id);
  if (index !== -1) {
    deudasSimuladas[index].estado = nuevoEstado;
  }
};

// Simulación de retardo de red (opcional)
export const esperar = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
