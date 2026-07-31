"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useInView } from "@/hooks/useInView";

const clients = [
  {
    name: "LF Bazar",
    logo: "/clients/lf-bazar.jpg",
    category: "Bazar y hogar",
  },
  {
    name: "Farmacia Veterinaria Garay",
    logo: "/clients/farmacia-veterinaria-garay.jpg",
    category: "Farmacia veterinaria",
  },
  {
    name: "Online Mega (Darvita)",
    logo: "/clients/online-mega-darvita.webp",
    category: "Tienda online",
  },
];

const highlights = [
  "Vendedores MercadoLíder",
  "E-commerce propio",
  "Alto volumen semanal",
];

function ClientCard({
  client,
  index,
  isInView,
}: {
  client: (typeof clients)[number];
  index: number;
  isInView: boolean;
}) {
  const delay = `${200 + index * 120}ms`;

  return (
    <div
      className={`group flex flex-col items-center rounded-2xl bg-brand-light/60 p-5 ring-1 ring-brand-dark/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-md sm:p-6 ${
        isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      <div className="flex h-24 w-full items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-dark/5 transition-shadow duration-300 group-hover:shadow-md">
        <Image
          src={client.logo}
          alt={client.name}
          width={80}
          height={80}
          className="max-h-16 w-auto max-w-full object-contain"
        />
      </div>
      <h3 className="mt-4 text-center text-sm font-bold leading-snug text-brand-dark sm:text-base">
        {client.name}
      </h3>
      <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-brand-dark/50">
        {client.category}
      </p>
    </div>
  );
}

export default function SocialProof() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="bg-brand-light py-16 sm:py-24">
      <Container>
        <div
          ref={ref}
          className="overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-brand-dark/5 sm:p-10 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-2 lg:pt-2">
              <p
                className={`text-sm font-semibold uppercase tracking-wide text-brand-dark/60 ${
                  isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
                }`}
              >
                Clientes que ya confían
              </p>
              <h2
                className={`mt-3 text-3xl font-bold text-brand-dark sm:text-4xl ${
                  isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
                }`}
                style={{ animationDelay: "80ms" }}
              >
                Vendedores MercadoLíder que eligen La Reja
              </h2>
              <p
                className={`mt-4 text-base leading-relaxed text-brand-dark/70 ${
                  isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
                }`}
                style={{ animationDelay: "160ms" }}
              >
                Trabajamos con tiendas de distintos rubros que necesitan
                entregas confiables, en el día y con la misma calidad de
                servicio en cada envío.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-3">
              {clients.map((client, index) => (
                <ClientCard
                  key={client.name}
                  client={client}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          <div
            className={`mt-10 flex flex-col items-center justify-center gap-4 border-t border-brand-dark/10 pt-8 sm:flex-row sm:gap-8 ${
              isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
            }`}
            style={{ animationDelay: "560ms" }}
          >
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 text-sm font-semibold text-brand-dark/80"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                />
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
