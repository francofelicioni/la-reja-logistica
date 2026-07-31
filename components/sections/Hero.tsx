"use client";

import Image from "next/image";
import { useSegment } from "@/components/context/SegmentContext";
import { content } from "@/lib/content";
import SegmentToggle from "@/components/ui/SegmentToggle";
import Container from "@/components/ui/Container";

export default function Hero() {
  const { segment } = useSegment();
  const { hero } = content[segment];

  return (
    <section className="relative overflow-hidden bg-brand pb-16 pt-10 sm:pb-24 sm:pt-14">
      <Container className="flex flex-col items-center text-center">
        <Image
          src="/logo.png"
          alt="La Reja Envíos Express"
          width={88}
          height={88}
          className="rounded-2xl shadow-md"
          priority
        />

        <SegmentToggle className="mt-8" />

        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-dark/70">
          {hero.eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold leading-tight text-brand-dark sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-balance text-base text-brand-dark/80 sm:text-lg">
          {hero.subtitle}
        </p>

        <a
          href="#cotizar"
          className="mt-8 rounded-full bg-brand-dark px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
        >
          {hero.ctaLabel}
        </a>
      </Container>
    </section>
  );
}
