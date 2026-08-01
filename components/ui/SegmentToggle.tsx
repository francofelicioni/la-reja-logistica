"use client";

import { useSegment } from "@/components/context/SegmentContext";
import { SEGMENT_LABELS, type Segment } from "@/lib/content";

const SEGMENTS: Segment[] = ["individual", "empresa"];

type SegmentToggleProps = {
  className?: string;
  variant?: "hero" | "light";
  labels?: Record<Segment, string>;
};

export default function SegmentToggle({
  className = "",
  variant = "hero",
  labels = SEGMENT_LABELS,
}: SegmentToggleProps) {
  const { segment, setSegment } = useSegment();

  const containerClass =
    variant === "light"
      ? "bg-brand-light p-1"
      : "bg-white/20 p-1 backdrop-blur-sm";

  const inactiveClass =
    variant === "light"
      ? "text-brand-dark/60 hover:text-brand-dark"
      : "text-brand-dark/80 hover:text-brand-dark";

  return (
    <div
      role="tablist"
      aria-label="Segmento de cliente"
      className={`inline-flex rounded-full ${containerClass} ${className}`}
    >
      {SEGMENTS.map((s) => {
        const active = s === segment;
        return (
          <button
            key={s}
            role="tab"
            aria-selected={active}
            onClick={() => setSegment(s)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
              active ? "bg-brand-dark text-white" : inactiveClass
            }`}
          >
            {labels[s]}
          </button>
        );
      })}
    </div>
  );
}
