"use client";

import { useMemo, useState } from "react";
import { LayoutGroup } from "framer-motion";
import { ProductCard } from "@/components/product-card";
import { categorias, productos, type Categoria } from "@/lib/data";
import { cn } from "@/lib/utils";

type Orden = "destacados" | "precio-asc" | "precio-desc";

export function CatalogGrid() {
  const [filtro, setFiltro] = useState<Categoria | "Todo">("Todo");
  const [orden, setOrden] = useState<Orden>("destacados");

  const lista = useMemo(() => {
    const base = filtro === "Todo" ? productos : productos.filter((p) => p.categoria === filtro);
    if (orden === "precio-asc") return [...base].sort((a, b) => a.precio - b.precio);
    if (orden === "precio-desc") return [...base].sort((a, b) => b.precio - a.precio);
    return base;
  }, [filtro, orden]);

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
          {(["Todo", ...categorias] as const).map((c) => (
            <button
              key={c}
              onClick={() => setFiltro(c)}
              aria-pressed={filtro === c}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                filtro === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground/40",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Ordenar por
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value as Orden)}
            className="rounded-md border border-input bg-card px-3 py-1.5 text-foreground"
          >
            <option value="destacados">Destacados</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
          </select>
        </label>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">{lista.length} prendas</p>

      <LayoutGroup>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {lista.map((p, i) => (
            <ProductCard key={p.id} producto={p} index={i} />
          ))}
        </div>
      </LayoutGroup>
    </>
  );
}
