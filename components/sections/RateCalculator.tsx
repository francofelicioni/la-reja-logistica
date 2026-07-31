"use client";

import { useSegment } from "@/components/context/SegmentContext";
import { useQuoteDraft } from "@/components/context/QuoteDraftContext";
import { content } from "@/lib/content";
import {
  RATES_EFFECTIVE_DATE,
  MIN_WEEKLY_VOLUME,
  formatARS,
  getZonePrice,
  getWholesaleZonePrice,
} from "@/lib/zones";
import ZoneSelect from "@/components/ui/ZoneSelect";
import Container from "@/components/ui/Container";

export default function RateCalculator() {
  const { segment } = useSegment();
  const { destino, setDestino } = useQuoteDraft();
  const { calculator, cta } = content[segment];

  const price = destino ? getZonePrice(destino) : undefined;
  const wholesalePrice = destino ? getWholesaleZonePrice(destino) : undefined;
  const isEmpresa = segment === "empresa";

  return (
    <section className="bg-brand-light py-16 sm:py-24" id="calculadora">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-md sm:p-10">
          <h2 className="text-center text-2xl font-bold text-brand-dark sm:text-3xl">
            {calculator.title}
          </h2>

          <div className="mt-8">
            <label
              htmlFor="zona-calculadora"
              className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60"
            >
              Destino
            </label>
            <ZoneSelect
              id="zona-calculadora"
              value={destino}
              onChange={setDestino}
              className="mt-1"
            />
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
                    href="#cotizar"
                    className="mt-4 inline-block rounded-full bg-brand-dark px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                  >
                    {cta.label}
                  </a>
                </div>
              ) : (
                <>
                  <p className="text-sm text-brand-dark/70">{calculator.note}</p>
                  <a
                    href="#cotizar"
                    className="mt-4 inline-block rounded-full bg-brand-dark px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                  >
                    {cta.label}
                  </a>
                </>
              )
            ) : price !== undefined ? (
              <div>
                <p className="text-4xl font-bold text-brand-dark">
                  {formatARS(price)}
                </p>
                <p className="mt-1 text-xs text-brand-dark/60">+ IVA</p>
                <a
                  href="#cotizar"
                  className="mt-4 inline-block rounded-full bg-brand-dark px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                >
                  {cta.label}
                </a>
              </div>
            ) : (
              <>
                <p className="text-sm text-brand-dark/60">{calculator.note}</p>
                <a
                  href="#cotizar"
                  className="mt-4 inline-block rounded-full bg-brand-dark px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                >
                  {cta.label}
                </a>
              </>
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
