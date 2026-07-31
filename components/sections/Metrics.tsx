import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";

const metrics = [
  { target: 97, suffix: "%", label: "Efectividad de entrega" },
  { target: 2, suffix: "%", prefix: "<", label: "Roturas o pérdidas" },
  { target: 6, suffix: " días", label: "Entregamos de lunes a sábado" },
  { target: 3, suffix: "er cordón", label: "Cobertura CABA + GBA" },
];

export default function Metrics() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-4xl font-bold text-brand-dark sm:text-5xl">
                <Counter target={m.target} suffix={m.suffix} prefix={m.prefix ?? ""} />
              </div>
              <p className="mt-2 text-sm text-brand-dark/70">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
