# CEIBA — Ropa hecha con raíces

Sitio web de la marca de ropa CEIBA, construido con **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui** y **framer-motion**.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Inicio: hero, colecciones, favoritos, estadísticas, lookbook y newsletter |
| `/coleccion` | Catálogo con filtros por categoría y orden por precio |
| `/nosotros` | Historia, valores, indicadores de impacto y línea de tiempo |
| `/contacto` | Formulario de contacto y tiendas |

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Vercel

1. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio de GitHub.
2. Vercel detecta Next.js automáticamente; no hace falta cambiar ninguna configuración:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
   - **Node.js:** 20.x o superior
3. No se necesitan variables de entorno.
4. Pulsa **Deploy**.

Las imágenes se cargan desde `images.unsplash.com` (permitido en `next.config.ts`) y se optimizan con `next/image`.

## Estructura

```
app/                  Páginas (App Router)
components/           Componentes del sitio
components/ui/        Componentes shadcn (incl. stats-counter-block-baseui)
lib/data.ts           Productos, imágenes y navegación
```

> Los formularios (contacto y newsletter) solo muestran un mensaje de confirmación; aún no envían datos a un servidor.
