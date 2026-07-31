import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-dark/5 bg-white/90 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="La Reja Envíos Express"
            width={40}
            height={40}
            className="rounded-lg"
            priority
          />
          <span className="text-sm font-bold leading-tight sm:text-base">
            La Reja
            <br className="sm:hidden" /> Envíos Express
          </span>
        </div>
        <a
          href="#cotizar"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white sm:px-5"
        >
          Cotizar
        </a>
      </Container>
    </header>
  );
}
