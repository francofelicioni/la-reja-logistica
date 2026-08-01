"use client";

import { useState, type FormEvent } from "react";
import { useQuoteDraft } from "@/components/context/QuoteDraftContext";
import { useSegment } from "@/components/context/SegmentContext";
import { content, SEGMENT_LABELS, type Segment } from "@/lib/content";
import {
  formatARS,
  getZonePrice,
  getWholesaleZonePrice,
} from "@/lib/zones";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import ZoneSelect from "@/components/ui/ZoneSelect";
import Container from "@/components/ui/Container";

type FormState = {
  nombre: string;
  paquete: string;
  volumen: string;
  telefono: string;
};

const initialState: FormState = {
  nombre: "",
  paquete: "",
  volumen: "",
  telefono: "",
};

export default function QuoteForm() {
  const { segment, setSegment } = useSegment();
  const { destino, setDestino } = useQuoteDraft();
  const [form, setForm] = useState<FormState>(initialState);
  const { cta } = content[segment];

  const estimatedPrice = destino
    ? segment === "empresa"
      ? getWholesaleZonePrice(destino)
      : getZonePrice(destino)
    : undefined;

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = [
      "Hola! Quiero cotizar un envío con La Reja Envíos Express.",
      `Nombre / empresa: ${form.nombre || "-"}`,
      `Segmento: ${SEGMENT_LABELS[segment]}`,
      `Destino: ${destino || "-"}`,
      estimatedPrice !== undefined
        ? `Tarifa estimada: ${formatARS(estimatedPrice)} + IVA`
        : null,
      `Tamaño/peso estimado: ${form.paquete || "-"}`,
      `Volumen semanal estimado: ${form.volumen || "-"}`,
      `WhatsApp de contacto: ${form.telefono || "-"}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-brand-dark py-16 sm:py-24" id="cotizar">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-3 text-white/70">{cta.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-3xl bg-white p-6 shadow-xl sm:grid-cols-2 sm:p-10"
        >
          <div className="sm:col-span-2">
            <label htmlFor="nombre" className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
              Nombre y empresa/marca
            </label>
            <input
              id="nombre"
              type="text"
              required
              value={form.nombre}
              onChange={update("nombre")}
              placeholder="Ej: Juan Pérez — LF Bazar"
              className="mt-1 w-full rounded-xl border border-brand-dark/15 px-4 py-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="segmento" className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
              Segmento
            </label>
            <select
              id="segmento"
              value={segment}
              onChange={(e) => setSegment(e.target.value as Segment)}
              className="mt-1 w-full rounded-xl border border-brand-dark/15 bg-white px-4 py-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            >
              <option value="individual">{SEGMENT_LABELS.individual}</option>
              <option value="empresa">{SEGMENT_LABELS.empresa}</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="destino" className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
              Destino
            </label>
            <ZoneSelect
              id="destino"
              value={destino}
              onChange={setDestino}
              className="mt-1"
            />
            {estimatedPrice !== undefined && (
              <p className="mt-2 text-sm text-brand-dark/70">
                Tarifa estimada:{" "}
                <span className="font-semibold text-brand-dark">
                  {formatARS(estimatedPrice)}
                </span>{" "}
                + IVA
                {segment === "empresa" && (
                  <span className="text-brand-dark/50"> (tarifa preferencial)</span>
                )}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="paquete" className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
              Tamaño/peso estimado
            </label>
            <input
              id="paquete"
              type="text"
              value={form.paquete}
              onChange={update("paquete")}
              placeholder="Ej: 5kg, caja chica"
              className="mt-1 w-full rounded-xl border border-brand-dark/15 px-4 py-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>

          <div>
            <label htmlFor="volumen" className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
              Volumen semanal estimado
            </label>
            <input
              id="volumen"
              type="text"
              value={form.volumen}
              onChange={update("volumen")}
              placeholder="Ej: 20 envíos/semana"
              className="mt-1 w-full rounded-xl border border-brand-dark/15 px-4 py-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="telefono" className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
              WhatsApp de contacto
            </label>
            <input
              id="telefono"
              type="tel"
              required
              value={form.telefono}
              onChange={update("telefono")}
              placeholder="Ej: 11 5555 5555"
              className="mt-1 w-full rounded-xl border border-brand-dark/15 px-4 py-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-brand-dark transition-transform hover:scale-105 sm:col-span-2"
          >
            {cta.label} por WhatsApp
          </button>
        </form>
      </Container>
    </section>
  );
}
