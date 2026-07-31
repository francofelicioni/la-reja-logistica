export type Segment = "individual" | "empresa";

export const SEGMENT_LABELS: Record<Segment, string> = {
  individual: "Vendedor individual",
  empresa: "Empresa / Alto volumen",
};

type SegmentContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
  };
  calculator: {
    title: string;
    note: string;
  };
  cta: {
    title: string;
    subtitle: string;
    label: string;
  };
};

export const content: Record<Segment, SegmentContent> = {
  individual: {
    hero: {
      eyebrow: "Para vendedores de MercadoLibre y tiendas online",
      title: "Entregá en el día con 97% de efectividad",
      subtitle:
        "Cobertura de todo el mapa de venta Flex: CABA y GBA hasta 3er cordón. Retiramos, entregamos y te mantenemos al tanto de cada envío.",
      ctaLabel: "Cotizá tu envío",
    },
    calculator: {
      title: "Calculá el costo de tu envío",
      note: "Precio final según la zona de destino. Sin sorpresas.",
    },
    cta: {
      title: "¿Listo para enviar hoy?",
      subtitle: "Contanos qué necesitás mandar y te respondemos por WhatsApp en minutos.",
      label: "Cotizá tu envío",
    },
  },
  empresa: {
    hero: {
      eyebrow: "Para negocios con 150+ envíos semanales",
      title: "Tarifas preferenciales y atención dedicada",
      subtitle:
        "Escalá tu operación de e-commerce con logística de última milla confiable en CABA y GBA hasta 3er cordón, sin perder margen.",
      ctaLabel: "Hablar con ventas",
    },
    calculator: {
      title: "Simulá tu tarifa preferencial",
      note: "Tarifa preferencial para clientes con 150+ envíos semanales. Si tu volumen es menor, cotizamos igual a medida.",
    },
    cta: {
      title: "Escalemos tu logística juntos",
      subtitle: "Contanos tu volumen semanal y te armamos una propuesta a medida por WhatsApp.",
      label: "Hablar con ventas",
    },
  },
};
