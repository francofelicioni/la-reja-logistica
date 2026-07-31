"use client";

import { useState } from "react";
import { useSegment } from "@/components/context/SegmentContext";
import { content } from "@/lib/content";
import {
  ORIGIN,
  RATES_EFFECTIVE_DATE,
  MIN_WEEKLY_VOLUME,
  formatARS,
  getZonePrice,
  getWholesaleZonePrice,
} from "@/lib/zones";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import ZoneSelect from "@/components/ui/ZoneSelect";
import Container from "@/components/ui/Container";

export default function RateCalculator() {
  const { segment } = useSegment();
  const [zona, setZona] = useState("");
  const { calculator } = content[segment];

  const price = zona ? getZonePrice(zona) : undefined;
  const wholesalePrice = zona ? getWholesaleZonePrice(zona) : undefined;
  const isEmpresa = segment === "empresa";

  const whatsappHref = buildWhatsAppLink(
    `Hola! Quiero cotizar envíos de alto volumen (150+ semanales) desde ${ORIGIN}${
      zona ? ` hacia ${zona}` : ""
    }.`
  );

  return (
    <section className="bg-brand-light py-16 sm:py-24" id="calculadora">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-md sm:p-10">
          <h2 className="text-center text-2xl font-bold text-brand-dark sm:text-3xl">
            {calculator.title}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
                Origen
              </label>
              <div className="mt-1 rounded-xl border border-brand-dark/10 bg-brand-light/60 px-4 py-3 text-brand-dark">
                {ORIGIN}
              </div>
            </div>

            <div>
              <label
                htmlFor="zona-calculadora"
                className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60"
              >
                Destino
              </label>
              <ZoneSelect
                id="zona-calculadora"
                value={zona}
                onChange={setZona}
                className="mt-1"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            {isEmpresa ? (
              wholesalePrice !== undefined ? (
                <div>
                  {price !== undefined && wholesalePrice < price && (
                    <p className="text-sm text-brand-dark/40 line-through">
                      {formatARS(price)}
                    </p>
                  )}
                  <p className="text-4xl font-bold text-brand-dark">
                    {formatARS(wholesalePrice)}
                  </p>
                  <p className="mt-1 text-xs text-brand-dark/60">+ IVA</p>
                  <p className="mt-3 text-sm text-brand-dark/70">
                    Tarifa preferencial para {MIN_WEEKLY_VOLUME}+ envíos
                    semanales.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-full bg-brand-dark px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                  >
                    Cotizar por WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <p className="text-sm text-brand-dark/70">{calculator.note}</p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-full bg-brand-dark px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                  >
                    Cotizar por WhatsApp
                  </a>
                </>
              )
            ) : price !== undefined ? (
              <div>
                <p className="text-4xl font-bold text-brand-dark">
                  {formatARS(price)}
                </p>
                <p className="mt-1 text-xs text-brand-dark/60">+ IVA</p>
              </div>
            ) : (
              <p className="text-sm text-brand-dark/60">{calculator.note}</p>
            )}
          </div>

          <div className="mt-8 space-y-1.5 border-t border-brand-dark/10 pt-5 text-xs text-brand-dark/60">
            <p>
              Precios sin IVA, vigentes desde el {RATES_EFFECTIVE_DATE}. Válidos
              para envíos de hasta 20kg y hasta 50x50x50cm. Por encima de esa
              medida se cobra 1 envío y medio.
            </p>
            <p>
              Entregas entre las 15/16 y las 22hs, sin posibilidad de elegir
              horario.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
