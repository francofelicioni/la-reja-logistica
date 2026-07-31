"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const href = buildWhatsAppLink(
    "Hola! Quiero cotizar un envío con La Reja Envíos Express."
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current sm:h-8 sm:w-8">
        <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.44 1.73 6.37L3.2 28.8l6.6-1.7a12.74 12.74 0 0 0 6.2 1.58h.01c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.68-12.81-12.68Zm0 23.15h-.01a10.5 10.5 0 0 1-5.36-1.47l-.38-.23-3.92 1.02 1.05-3.82-.25-.39a10.42 10.42 0 0 1-1.6-5.56c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.44 1.1 7.42 3.08a10.42 10.42 0 0 1 3.07 7.42c0 5.79-4.72 10.45-10.52 10.45Zm5.75-7.84c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.19.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.19.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.4 4.77.76.33 1.35.53 1.81.67.76.24 1.45.21 2 .13.61-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    </a>
  );
}
