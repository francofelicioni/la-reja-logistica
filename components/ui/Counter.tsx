"use client";

import { useCounter } from "@/hooks/useCounter";

export default function Counter({
  target,
  suffix = "",
  prefix = "",
  className = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const { value, ref } = useCounter(target);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
