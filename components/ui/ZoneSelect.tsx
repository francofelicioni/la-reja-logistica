"use client";

import { ZONES } from "@/lib/zones";

export default function ZoneSelect({
  id,
  value,
  onChange,
  className = "",
}: {
  id: string;
  value: string;
  onChange: (zona: string) => void;
  className?: string;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full rounded-xl border border-brand-dark/15 bg-white px-4 py-3 text-brand-dark focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 ${className}`}
    >
      <option value="" disabled>
        Elegí el destino
      </option>
      {ZONES.map((z) => (
        <option key={z.zona} value={z.zona}>
          {z.zona}
        </option>
      ))}
    </select>
  );
}
