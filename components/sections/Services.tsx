import Container from "@/components/ui/Container";
import {
  PackageIcon,
  BoltIcon,
  MapPinIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  ChatBubbleIcon,
} from "@/components/ui/icons";

const services = [
  {
    icon: PackageIcon,
    title: "Retiros y entregas MercadoLibre / tiendas online",
    description:
      "Trabajamos con vendedores de MercadoLibre Flex y e-commerce propios: retiramos en tu depósito y entregamos a tus compradores.",
  },
  {
    icon: BoltIcon,
    title: "Entregas en el día",
    description:
      "Corte de recepción a las 13/14hs, reparto entre las 15/16 y las 22hs. Tu pedido sale el mismo día.",
  },
  {
    icon: MapPinIcon,
    title: "Todo el mapa Flex",
    description:
      "Cobertura completa de CABA y GBA hasta 3er cordón, la misma zona que cubre MercadoLibre Flex.",
  },
  {
    icon: ArrowPathIcon,
    title: "Segunda visita sin cargo",
    description:
      "Si el comprador no está la primera vez, reintentamos la entrega sin costo adicional para vos.",
  },
  {
    icon: ArrowsRightLeftIcon,
    title: "Logística inversa",
    description:
      "Gestionamos cambios y devoluciones al mismo costo que un envío normal.",
  },
  {
    icon: ChatBubbleIcon,
    title: "Soporte constante",
    description:
      "Comunicación directa con vendedores y compradores durante todo el proceso de entrega.",
  },
];

export default function Services() {
  return (
    <section className="bg-brand-light py-16 sm:py-24" id="servicios">
      <Container>
        <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
          Todo lo que necesitás para tu logística
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-dark/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/20">
                <s.icon className="h-6 w-6 text-brand-dark" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-brand-dark">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-brand-dark/70">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
