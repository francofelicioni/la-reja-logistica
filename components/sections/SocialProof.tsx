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
  "+50 clientes activos",
  "Vendedores MercadoLíder",
  "E-commerce propio",
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
      className={`group flex h-40 flex-col items-center justify-center gap-2.5 rounded-2xl bg-brand-light/60 px-4 py-3 ring-1 ring-brand-dark/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-md ${
        isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-brand-dark/5 transition-shadow duration-300 group-hover:shadow-md">
        <Image
          src={client.logo}
          alt={client.name}
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-1 text-center">
        <h3 className="text-xs font-bold leading-tight text-brand-dark sm:text-sm">
          {client.name}
        </h3>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-dark/50 sm:text-xs">
          {client.category}
        </p>
      </div>
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
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14">
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
                Trabajamos con más de 50 clientes activos que confían en
                nosotros. Estos son algunos de los vendedores MercadoLíder con
                los que operamos todos los días.
              </p>
              <div
                className={`mt-6 inline-flex items-center gap-4 rounded-2xl bg-brand-light/60 px-5 py-4 ring-1 ring-brand-dark/5 ${
                  isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
                }`}
                style={{ animationDelay: "240ms" }}
              >
                <span className="text-3xl font-bold leading-none text-brand-dark">
                  +50
                </span>
                <p className="text-sm leading-snug text-brand-dark/70">
                  clientes activos
                  <br />
                  que confían en nosotros
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-3">
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
