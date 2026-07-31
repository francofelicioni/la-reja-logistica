export type Zone = {
  zona: string;
  precio: number;
};

export const ORIGIN = "Vicente López";

export const ZONES: Zone[] = [
  { zona: "Vicente López", precio: 3500 },
  { zona: "San Isidro", precio: 3500 },
  { zona: "San Martín", precio: 4100 },
  { zona: "CABA", precio: 4400 },
  { zona: "3 de Febrero", precio: 5000 },
  { zona: "San Fernando", precio: 5000 },
  { zona: "Hurlingham", precio: 7400 },
  { zona: "Ituzaingó", precio: 7400 },
  { zona: "La Matanza Norte", precio: 7400 },
  { zona: "Lanús", precio: 7400 },
  { zona: "Lomas de Zamora", precio: 7400 },
  { zona: "Malvinas Argentinas", precio: 7400 },
  { zona: "Morón", precio: 7400 },
  { zona: "San Miguel", precio: 7400 },
  { zona: "Tigre", precio: 7400 },
  { zona: "Quilmes", precio: 7400 },
  { zona: "Avellaneda", precio: 7400 },
  { zona: "Nordelta", precio: 7400 },
  { zona: "Florencio Varela", precio: 7700 },
  { zona: "José C. Paz", precio: 7700 },
  { zona: "La Matanza Sur", precio: 7700 },
  { zona: "Merlo", precio: 7700 },
  { zona: "Moreno", precio: 7700 },
  { zona: "Almirante Brown", precio: 7700 },
  { zona: "Berazategui", precio: 7700 },
  { zona: "Esteban Echeverría", precio: 8200 },
  { zona: "Ingeniero Maschwitz", precio: 8200 },
  { zona: "Del Viso", precio: 8200 },
  { zona: "Pilar", precio: 8200 },
  { zona: "Villa Rosa", precio: 8200 },
  { zona: "Garín", precio: 8200 },
  { zona: "Derqui", precio: 8200 },
  { zona: "Escobar", precio: 8200 },
  { zona: "Ezeiza", precio: 8800 },
  { zona: "Cañuelas", precio: 8800 },
  { zona: "Berisso", precio: 8800 },
  { zona: "Ensenada", precio: 8800 },
  { zona: "La Plata Centro", precio: 8800 },
  { zona: "La Plata Norte", precio: 8800 },
  { zona: "La Plata Oeste", precio: 8800 },
  { zona: "Guernica", precio: 8800 },
  { zona: "Zárate", precio: 8800 },
  { zona: "Campana", precio: 8800 },
  { zona: "San Vicente", precio: 8800 },
  { zona: "Marcos Paz", precio: 8800 },
  { zona: "Luján", precio: 8800 },
  { zona: "General Rodríguez", precio: 8800 },
];

export const RATES_EFFECTIVE_DATE = "05/08/2025";

export const MIN_WEEKLY_VOLUME = 150;

// Tarifa preferencial para clientes con 150+ envíos semanales.
export const WHOLESALE_ZONES: Zone[] = [
  { zona: "Vicente López", precio: 3300 },
  { zona: "San Isidro", precio: 3300 },
  { zona: "San Martín", precio: 4400 },
  { zona: "CABA", precio: 3700 },
  { zona: "3 de Febrero", precio: 4400 },
  { zona: "San Fernando", precio: 4400 },
  { zona: "Hurlingham", precio: 5200 },
  { zona: "Ituzaingó", precio: 5200 },
  { zona: "La Matanza Norte", precio: 5200 },
  { zona: "Lanús", precio: 5200 },
  { zona: "Lomas de Zamora", precio: 5200 },
  { zona: "Malvinas Argentinas", precio: 5200 },
  { zona: "Morón", precio: 5200 },
  { zona: "San Miguel", precio: 5200 },
  { zona: "Tigre", precio: 5200 },
  { zona: "Quilmes", precio: 5200 },
  { zona: "Avellaneda", precio: 5200 },
  { zona: "Nordelta", precio: 5200 },
  { zona: "Florencio Varela", precio: 6000 },
  { zona: "José C. Paz", precio: 6000 },
  { zona: "La Matanza Sur", precio: 6000 },
  { zona: "Merlo", precio: 6000 },
  { zona: "Moreno", precio: 6000 },
  { zona: "Almirante Brown", precio: 6000 },
  { zona: "Berazategui", precio: 6000 },
  { zona: "Esteban Echeverría", precio: 6600 },
  { zona: "Ingeniero Maschwitz", precio: 6600 },
  { zona: "Del Viso", precio: 6600 },
  { zona: "Pilar", precio: 6600 },
  { zona: "Villa Rosa", precio: 6600 },
  { zona: "Garín", precio: 6600 },
  { zona: "Derqui", precio: 6600 },
  { zona: "Escobar", precio: 6600 },
  { zona: "Ezeiza", precio: 6600 },
  { zona: "Cañuelas", precio: 8000 },
  { zona: "Berisso", precio: 8000 },
  { zona: "Ensenada", precio: 8000 },
  { zona: "La Plata Centro", precio: 8000 },
  { zona: "La Plata Norte", precio: 8000 },
  { zona: "La Plata Oeste", precio: 8000 },
  { zona: "Guernica", precio: 8000 },
  { zona: "Zárate", precio: 8000 },
  { zona: "Campana", precio: 8000 },
  { zona: "San Vicente", precio: 8000 },
  { zona: "Marcos Paz", precio: 8000 },
  { zona: "Luján", precio: 8000 },
  { zona: "General Rodríguez", precio: 8000 },
];

export function getZonePrice(zona: string): number | undefined {
  return ZONES.find((z) => z.zona === zona)?.precio;
}

export function getWholesaleZonePrice(zona: string): number | undefined {
  return WHOLESALE_ZONES.find((z) => z.zona === zona)?.precio;
}

export function formatARS(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
