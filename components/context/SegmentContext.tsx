"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { type Segment } from "@/lib/content";

type SegmentContextValue = {
  segment: Segment;
  setSegment: (segment: Segment) => void;
};

const SegmentContext = createContext<SegmentContextValue | undefined>(undefined);

export function SegmentProvider({ children }: { children: ReactNode }) {
  const [segment, setSegment] = useState<Segment>("individual");

  return (
    <SegmentContext.Provider value={{ segment, setSegment }}>
      {children}
    </SegmentContext.Provider>
  );
}

export function useSegment(): SegmentContextValue {
  const ctx = useContext(SegmentContext);
  if (!ctx) {
    throw new Error("useSegment debe usarse dentro de SegmentProvider");
  }
  return ctx;
}
