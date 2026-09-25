"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const campo =
  "w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

export function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  if (enviado) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-md border border-border bg-card p-8">
        <CheckCircle2 className="size-8 text-primary" />
        <h2 className="text-3xl">¡Mensaje recibido!</h2>
        <p className="text-muted-foreground">
          Gracias por escribirnos. Te responderemos en menos de 24 horas hábiles.
        </p>
        <button onClick={() => setEnviado(false)} className="text-sm text-primary underline-offset-4 hover:underline">
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className="text-sm">Nombre</label>
        <input id="nombre" name="nombre" required className={campo} placeholder="Tu nombre" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm">Correo electrónico</label>
        <input id="email" name="email" type="email" required className={campo} placeholder="tu@correo.com" />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="motivo" className="text-sm">Motivo</label>
        <select id="motivo" name="motivo" className={campo} defaultValue="pedido">
          <option value="pedido">Consulta sobre un pedido</option>
          <option value="cambios">Cambios y devoluciones</option>
          <option value="mayorista">Ventas mayoristas</option>
          <option value="prensa">Prensa y colaboraciones</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="mensaje" className="text-sm">Mensaje</label>
        <textarea id="mensaje" name="mensaje" required rows={5} className={campo} placeholder="¿En qué podemos ayudarte?" />
      </div>
      <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-foreground px-6 text-sm text-background transition-opacity hover:opacity-90 sm:col-span-2 sm:justify-self-start">
        Enviar mensaje <Send className="size-4" />
      </button>
    </form>
  );
}
