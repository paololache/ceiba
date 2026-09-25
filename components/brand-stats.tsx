"use client";

import { Leaf, MapPin, Recycle, Scissors, Users, Star } from "lucide-react";
import {
  StatsCounterBlockBaseui,
  type StatItem,
} from "@/components/ui/stats-counter-block-baseui";

const homeStats: StatItem[] = [
  {
    icon: Users,
    value: 18000,
    suffix: "+",
    label: "Clientes que nos visten",
    description: "Una comunidad que crece prenda a prenda",
    bgColor: "bg-orange-600/10",
    iconColor: "text-orange-700",
    barColor: "bg-orange-700",
  },
  {
    icon: Scissors,
    value: 34,
    suffix: "",
    label: "Talleres artesanales aliados",
    description: "En Cusco, Arequipa, Puno y Lima",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-700",
    barColor: "bg-amber-700",
  },
  {
    icon: Leaf,
    value: 92,
    suffix: "%",
    label: "Fibras naturales",
    description: "Algodón pima, alpaca y lino en nuestras colecciones",
    bgColor: "bg-emerald-600/10",
    iconColor: "text-emerald-700",
    barColor: "bg-emerald-700",
  },
  {
    icon: MapPin,
    value: 120,
    suffix: "+",
    label: "Ciudades con envío",
    description: "De Lima a Ciudad de México y Madrid",
    bgColor: "bg-sky-600/10",
    iconColor: "text-sky-700",
    barColor: "bg-sky-700",
  },
];

const aboutStats: StatItem[] = [
  {
    icon: Scissors,
    value: 210,
    suffix: "",
    label: "Artesanas y artesanos",
    description: "Con pago justo y contratos estables",
    bgColor: "bg-orange-600/10",
    iconColor: "text-orange-700",
    barColor: "bg-orange-700",
  },
  {
    icon: Recycle,
    value: 12500,
    suffix: " kg",
    label: "Textil recuperado",
    description: "Retazos convertidos en nuevas prendas desde 2019",
    bgColor: "bg-emerald-600/10",
    iconColor: "text-emerald-700",
    barColor: "bg-emerald-700",
  },
  {
    icon: Star,
    value: 97,
    suffix: "%",
    label: "Reseñas de 5 estrellas",
    description: "Calidad que se siente al primer uso",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-700",
    barColor: "bg-amber-700",
  },
  {
    icon: Leaf,
    value: 60,
    suffix: "%",
    label: "Menos agua",
    description: "Frente a la producción textil convencional",
    bgColor: "bg-sky-600/10",
    iconColor: "text-sky-700",
    barColor: "bg-sky-700",
  },
];

export function HomeStats() {
  return (
    <StatsCounterBlockBaseui
      stats={homeStats}
      badge="Nuestro impacto"
      title="Moda lenta,"
      highlight="impacto real"
      subtitle="Cada prenda CEIBA une diseño contemporáneo con manos expertas de talleres latinoamericanos."
      quote="No hacemos tendencias: hacemos ropa que te acompaña por años. Estos números son la prueba de que otra forma de vestir es posible."
      quoteAuthor="— Valeria Quispe, fundadora de CEIBA"
    />
  );
}

export function AboutStats() {
  return (
    <StatsCounterBlockBaseui
      stats={aboutStats}
      badge="Transparencia"
      title="Lo que medimos,"
      highlight="lo mejoramos"
      subtitle="Publicamos nuestros indicadores cada año porque creemos que la moda debe rendir cuentas."
      quote={null}
    />
  );
}
