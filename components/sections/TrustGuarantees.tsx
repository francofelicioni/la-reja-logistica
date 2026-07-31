"use client";

import Container from "@/components/ui/Container";
import {
  ShieldCheckIcon,
  ChatBubbleIcon,
  EyeIcon,
} from "@/components/ui/icons";
import { useInView } from "@/hooks/useInView";
import type { ComponentType, SVGProps } from "react";

const guarantees: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}[] = [
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
  const delay = `${200 + index * 120}ms`;

  return (
    <div
      className={`group flex gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-dark/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6 ${
        isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/15 transition-colors duration-300 group-hover:bg-brand/25">
        <Icon className="h-6 w-6 text-brand-dark" />
      </div>
      <div className="min-w-0">
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
                className={`text-sm font-semibold uppercase tracking-wide text-brand-dark/60 ${
                  isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
                }`}
              >
                Tu tranquilidad, nuestra prioridad
              </p>
              <h2
                className={`mt-3 text-3xl font-bold text-brand-dark sm:text-4xl ${
                  isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
                }`}
                style={{ animationDelay: "80ms" }}
              >
                Garantías y confianza
              </h2>
              <p
                className={`mt-4 text-base leading-relaxed text-brand-dark/70 ${
                  isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
                }`}
                style={{ animationDelay: "160ms" }}
              >
                Cada envío implica tu reputación como vendedor. Por eso
                trabajamos con reglas claras, comunicación directa y total
                responsabilidad cuando algo depende de nosotros.
              </p>
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

          <div
            className={`mt-10 flex flex-col items-center justify-center gap-4 border-t border-brand-dark/10 pt-8 sm:flex-row sm:gap-8 ${
              isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
            }`}
            style={{ animationDelay: "560ms" }}
          >
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2 text-sm font-semibold text-brand-dark/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                {signal}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
