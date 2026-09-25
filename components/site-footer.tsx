import Link from "next/link";
import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl tracking-[0.18em]">CEIBA</p>
          <p className="mt-4 max-w-sm text-sm text-background/65">
            Ropa atemporal con raíces latinoamericanas. Diseñada en Lima, tejida
            por talleres locales, hecha para durar.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs tracking-[0.2em] text-background/50 uppercase">Explorar</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-background/80 hover:text-background">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs tracking-[0.2em] text-background/50 uppercase">Contacto</p>
          <ul className="space-y-2 text-sm text-background/80">
            <li className="flex items-center gap-2"><MapPin className="size-4" /> Barranco, Lima</li>
            <li className="flex items-center gap-2"><Phone className="size-4" /> +51 1 555 0192</li>
            <li className="flex items-center gap-2"><Mail className="size-4" /> hola@ceiba.pe</li>
            <li className="flex items-center gap-2"><AtSign className="size-4" /> @ceiba.ropa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-background/50 md:px-6">
          © {new Date().getFullYear()} CEIBA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
