"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/components/cart-context";
import { formatPrecio, img, type Producto } from "@/lib/data";

export function ProductCard({ producto, index = 0 }: { producto: Producto; index?: number }) {
  const { add } = useCart();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 4) * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
        <Image
          src={img(producto.imagen, 700)}
          alt={producto.nombre}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {producto.nuevo && (
          <span className="absolute top-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase">
            Nuevo
          </span>
        )}
        <button
          onClick={() => add(producto.nombre)}
          className="absolute right-3 bottom-3 left-3 flex items-center justify-center gap-2 rounded-md bg-foreground py-2.5 text-sm text-background transition-all md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <Plus className="size-4" /> Añadir a la bolsa
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-sans text-sm font-medium">{producto.nombre}</h3>
          <p className="text-xs text-muted-foreground">
            {producto.categoria} · {producto.color}
          </p>
        </div>
        <p className="text-sm whitespace-nowrap">{formatPrecio(producto.precio)}</p>
      </div>
    </motion.article>
  );
}
