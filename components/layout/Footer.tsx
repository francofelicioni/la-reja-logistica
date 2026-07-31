import Image from "next/image";
import Container from "@/components/ui/Container";
import { MapPinIcon } from "@/components/ui/icons";
import { ADDRESS, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <Container className="py-12">
        <div className="grid gap-8 justify-items-center text-center sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/logo.png"
                alt="La Reja Envíos Express"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <span className="text-lg font-bold">La Reja Envíos Express</span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Logística de última milla para vendedores de MercadoLibre Flex y
              tiendas online en CABA y GBA.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="tel:+541155744001" className="inline-block hover:text-white">
                  WhatsApp: 11-5574-4001
                </a>
              </li>
              <li>
                <a href="tel:+541154162008" className="inline-block hover:text-white">
                  WhatsApp: 11-5416-2008
                </a>
              </li>
              <li>
                <a
                  href="mailto:lareja.envios@gmail.com"
                  className="inline-block hover:text-white"
                >
                  lareja.envios@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 hover:text-white"
                >
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{ADDRESS}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
              Horario de atención
            </h3>
            <p className="mt-4 text-sm text-white/80">Lunes a sábado</p>
            <p className="mb-2 text-sm text-white/80">8:00 a 22:00 hs.</p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 sm:mt-12">
          <iframe
            title="Ubicación de La Reja Envíos Express"
            src={GOOGLE_MAPS_EMBED_URL}
            className="aspect-[16/9] w-full min-h-[220px] border-0 sm:min-h-[280px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-center text-xs text-white/50">
            La Reja Envíos Express - Todos los precios publicados no incluyen IVA
            y están sujetos a modificaciones sin previo aviso.
          </p>
        </Container>
      </div>
    </footer>
  );
}
