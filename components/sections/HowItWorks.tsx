"use client";

import Container from "@/components/ui/Container";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "1",
    title: "Recibimos tu paquete",
    description: "Antes de las 13hs en nuestro punto de recepción.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Despachamos el mismo día",
    description: "Tu envío sale a reparto sin esperar al día siguiente.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Entregamos",
    description: "Entre las 15/16 y las 22hs, en la dirección del comprador.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Te confirmamos",
    description: "Seguimiento del envío y confirmación de entrega.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 4 12 14.01l-3-3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function Step({
  step,
  index,
  isInView,
}: {
  step: (typeof steps)[number];
  index: number;
  isInView: boolean;
}) {
  const delay = `${index * 150}ms`;

  return (
    <div
      className={`group relative text-center transition-transform duration-300 hover:-translate-y-1 ${
        isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      <div
        className={`relative mx-auto h-14 w-14 transition-transform duration-300 group-hover:scale-110 ${
          isInView ? "animate-scale-in opacity-0" : "opacity-0"
        }`}
        style={{ animationDelay: delay }}
      >
        <div
          className={`absolute inset-0 rounded-full ${isInView ? "animate-pulse-ring" : ""}`}
          style={{ animationDelay: `${400 + index * 150}ms` }}
          aria-hidden="true"
        />
        <div className="relative flex h-full w-full items-center justify-center rounded-full bg-brand text-brand-dark shadow-sm">
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-dark text-[10px] font-bold text-white">
            {step.number}
          </span>
          {step.icon}
        </div>
      </div>
      <h3 className="mt-4 text-base font-bold text-brand-dark">{step.title}</h3>
      <p className="mt-1 text-sm text-brand-dark/70">{step.description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="bg-white py-16 sm:py-24" id="como-funciona">
      <Container>
        <div ref={ref}>
          <h2
            className={`text-center text-3xl font-bold text-brand-dark sm:text-4xl ${
              isInView ? "animate-fade-in-up opacity-0" : "opacity-0"
            }`}
          >
            Cómo funciona
          </h2>

          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 origin-left bg-brand-light lg:block"
            >
              <div
                className={`h-full bg-brand ${isInView ? "animate-flow-progress" : "scale-x-0"}`}
              />
            </div>

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {steps.map((step, index) => (
                <Step key={step.number} step={step} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
