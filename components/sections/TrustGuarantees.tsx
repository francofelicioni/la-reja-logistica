"use client";

import Container from "@/components/ui/Container";
import {
  ShieldCheckIcon,
  ChatBubbleIcon,
  EyeIcon,
  PackageIcon,
} from "@/components/ui/icons";
import { useInView } from "@/hooks/useInView";
import type { ComponentType, SVGProps } from "react";

const guarantees: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}[] = [
  {
    icon: PackageIcon,
    title: "Tus paquetes viajan más seguros",
    description:
      "La mayoría de nuestros envíos se realizan en auto, brindando mayor protección y cuidado durante el traslado.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Nos hacemos cargo",
    description:
      "Si la responsabilidad del daño o la pérdida es nuestra, cubrimos el costo del producto.",
  },
  {
    icon: ChatBubbleIcon,
    title: "Comunicación constante",
    description:
      "Hablamos con vendedores y compradores durante todo el proceso, con seguimiento de cada envío.",
  },
  {
    icon: EyeIcon,
    title: "Transparencia ante todo",
    description:
      "Te contamos exactamente cómo funciona el servicio, sin letra chica ni promesas que no podamos cumplir.",
  },
];

const trustSignals = [
  "97% efectividad de entrega",
  "Cobertura CABA + GBA",
  "Soporte directo por WhatsApp",
];

function reveal(isInView: boolean, animation = "animate-fade-in-up") {
  return isInView ? `${animation} opacity-0` : "opacity-0";
}

function GuaranteeCard({
  guarantee,
  index,
  isInView,
}: {
  guarantee: (typeof guarantees)[number];
  index: number;
  isInView: boolean;
}) {
  const Icon = guarantee.icon;
  const cardDelay = `${320 + index * 120}ms`;
  const iconDelay = `${420 + index * 120}ms`;

  return (
    <div
      className={`group relative flex gap-4 overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:p-6 ${reveal(isInView)}`}
      style={{ animationDelay: cardDelay }}
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-1 origin-top bg-brand ${isInView ? "animate-grow-down" : "scale-y-0"}`}
        style={{ animationDelay: `${380 + index * 120}ms` }}
        aria-hidden="true"
      />
      <div
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/20 transition-colors duration-300 group-hover:bg-brand/30 sm:h-12 sm:w-12 ${reveal(isInView, "animate-scale-in")}`}
        style={{ animationDelay: iconDelay }}
      >
        <div
          className={`absolute inset-0 rounded-xl ${isInView ? "animate-pulse-ring" : ""}`}
          style={{ animationDelay: `${560 + index * 120}ms` }}
          aria-hidden="true"
        />
        <Icon className="relative h-5 w-5 text-brand-dark sm:h-6 sm:w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold text-brand-dark sm:text-lg">
          {guarantee.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-brand-dark/70">
          {guarantee.description}
        </p>
      </div>
    </div>
  );
}

export default function TrustGuarantees() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div
          ref={ref}
          className="overflow-hidden rounded-3xl bg-brand-light p-6 ring-1 ring-brand-dark/5 sm:p-10 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-2 lg:pt-2">
              <p
                className={`text-sm font-semibold uppercase tracking-wide text-brand-dark/60 ${reveal(isInView)}`}
              >
                Tu tranquilidad, nuestra prioridad
              </p>
              <h2
                className={`mt-3 text-balance text-3xl font-bold text-brand-dark sm:text-4xl ${reveal(isInView)}`}
                style={{ animationDelay: "80ms" }}
              >
                Garantías y confianza
              </h2>
              <p
                className={`mt-4 text-balance text-base leading-relaxed text-brand-dark/70 ${reveal(isInView)}`}
                style={{ animationDelay: "160ms" }}
              >
                Cada envío implica tu reputación como vendedor. Por eso
                trabajamos con reglas claras, comunicación directa y total
                responsabilidad cuando algo depende de nosotros.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustSignals.map((signal, index) => (
                  <span
                    key={signal}
                    className={`inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-brand-dark/80 ring-1 ring-brand-dark/5 transition-transform duration-300 hover:-translate-y-0.5 ${reveal(isInView, "animate-scale-in")}`}
                    style={{ animationDelay: `${240 + index * 90}ms` }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:col-span-3">
              {guarantees.map((guarantee, index) => (
                <GuaranteeCard
                  key={guarantee.title}
                  guarantee={guarantee}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
