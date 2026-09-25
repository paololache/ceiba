"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/cart-context";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, toast } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="bg-foreground px-4 py-2 text-center text-[11px] tracking-[0.2em] text-background uppercase">
        Envío gratis en compras desde S/ 250 · Cambios hasta 30 días
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <button
          className="-ml-2 p-2 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Link href="/" className="font-serif text-2xl tracking-[0.18em]">
          CEIBA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-sm text-muted-foreground transition-colors hover:text-foreground",
                pathname === l.href && "text-foreground",
              )}
            >
              {l.label}
              {pathname === l.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-primary"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link href="/coleccion" aria-label="Buscar" className="hidden p-2 sm:block">
            <Search className="size-5" />
          </Link>
          <span className="relative p-2" aria-label={`Bolsa: ${count} ${count === 1 ? "prenda" : "prendas"}`}>
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                className="absolute top-0.5 right-0.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground"
              >
                {count}
              </motion.span>
            )}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <ul className="flex flex-col px-4 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-3 font-serif text-2xl",
                      pathname === l.href ? "text-primary" : "text-foreground",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            role="status"
            className="fixed right-4 bottom-4 z-50 rounded-md bg-foreground px-4 py-3 text-sm text-background shadow-xl"
          >
            <span className="font-medium">{toast}</span> se añadió a tu bolsa
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
