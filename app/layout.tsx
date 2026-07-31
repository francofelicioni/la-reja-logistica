import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { QuoteDraftProvider } from "@/components/context/QuoteDraftContext";
import { SegmentProvider } from "@/components/context/SegmentContext";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "La Reja Envíos Express | Entregas en el día para MercadoLibre Flex",
  description:
    "Logística de última milla en CABA y GBA. 97% de efectividad de entrega, cobertura de todo el mapa Flex, cotizá tu envío por WhatsApp en segundos.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#58CCD0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={spaceGrotesk.variable}>
      <body className="font-display antialiased bg-white text-brand-dark">
        <SegmentProvider>
          <QuoteDraftProvider>
            {children}
            <FloatingWhatsApp />
          </QuoteDraftProvider>
        </SegmentProvider>
      </body>
    </html>
  );
}
