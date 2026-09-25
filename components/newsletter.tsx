"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.25em] text-primary uppercase">Club CEIBA</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Sé la primera en enterarte</h2>
        <p className="mt-4 text-muted-foreground">
          Lanzamientos, ediciones limitadas y un 10% de descuento en tu primera compra.
        </p>
        {enviado ? (
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm">
            <Check className="size-4 text-primary" /> ¡Gracias! Revisa tu correo para confirmar tu suscripción.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEnviado(true);
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">Correo electrónico</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="tu@correo.com"
              className="h-12 flex-1 rounded-md border border-input bg-card px-4 text-sm outline-none focus:border-primary"
            />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm text-primary-foreground transition-opacity hover:opacity-90">
              Suscribirme <ArrowRight className="size-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
