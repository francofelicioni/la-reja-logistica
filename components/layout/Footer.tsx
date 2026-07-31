import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 justify-center">
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
              <a href="tel:+541155744001" className="hover:text-white inline-block">
                WhatsApp: 11-5574-4001
              </a>
            </li>
            <li>
              <a href="tel:+541154162008" className="hover:text-white inline-block">
                WhatsApp: 11-5416-2008
              </a>
            </li>
            <li>
              <a
                href="mailto:lareja.envios@gmail.com"
                className="hover:text-white inline-block"
              >
                lareja.envios@gmail.com
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
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-xs text-white/50 text-center">
            La Reja Envíos Express - Todos los
            precios publicados no incluyen IVA y están sujetos a
            modificaciones sin previo aviso.
          </p>
        </Container>
      </div>
    </footer>
  );
}
