export const WHATSAPP_NUMBER = "5491155744001";

export function buildWhatsAppLink(message: string, phone: string = WHATSAPP_NUMBER): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
