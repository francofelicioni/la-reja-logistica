export const ADDRESS = "Juan de Garay 2760, Olivos, Buenos Aires";

const ADDRESS_QUERY = encodeURIComponent(ADDRESS);

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`;

export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${ADDRESS_QUERY}&hl=es&z=16&output=embed`;
