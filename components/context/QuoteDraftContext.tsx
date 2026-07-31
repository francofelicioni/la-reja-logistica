"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type QuoteDraftContextValue = {
  destino: string;
  setDestino: (destino: string) => void;
};

const QuoteDraftContext = createContext<QuoteDraftContextValue | undefined>(
  undefined
);

export function QuoteDraftProvider({ children }: { children: ReactNode }) {
  const [destino, setDestino] = useState("");

  return (
    <QuoteDraftContext.Provider value={{ destino, setDestino }}>
      {children}
    </QuoteDraftContext.Provider>
  );
}

export function useQuoteDraft(): QuoteDraftContextValue {
  const ctx = useContext(QuoteDraftContext);
  if (!ctx) {
    throw new Error("useQuoteDraft debe usarse dentro de QuoteDraftProvider");
  }
  return ctx;
}
