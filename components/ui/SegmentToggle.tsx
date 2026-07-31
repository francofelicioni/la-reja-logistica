"use client";

import { useSegment } from "@/components/context/SegmentContext";
import { SEGMENT_LABELS, type Segment } from "@/lib/content";

const SEGMENTS: Segment[] = ["individual", "empresa"];

export default function SegmentToggle({ className = "" }: { className?: string }) {
  const { segment, setSegment } = useSegment();

  return (
    <div
      role="tablist"
      aria-label="Segmento de cliente"
      className={`inline-flex rounded-full bg-white/20 p-1 backdrop-blur-sm ${className}`}
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
              active
                ? "bg-brand-dark text-white"
                : "text-brand-dark/80 hover:text-brand-dark"
            }`}
          >
            {SEGMENT_LABELS[s]}
          </button>
        );
      })}
    </div>
  );
}
