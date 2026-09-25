export const img = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMAGES = {
  hero: "1483985988355-763728e1935b",
  tienda: "1441986300917-64674bd600d8",
  percheroClaro: "1490481651871-ab68de25d43d",
  vitrina: "1445205170230-053b83016050",
  percheroNeutro: "1558769132-cb1aea458c5e",
  abrigoCuadros: "1485968579580-b6d095142e6e",
  abrigoAzul: "1539109136881-3be0616acf4b",
  chaquetaUrbana: "1520975954732-35dd22299614",
  tejidos: "1556905055-8f358a7a47b2",
} as const;

export type Categoria = "Mujer" | "Hombre" | "Básicos" | "Abrigos";

export type Producto = {
  id: string;
  nombre: string;
  precio: number;
  categoria: Categoria;
  imagen: string;
  nuevo?: boolean;
  color: string;
};

export const productos: Producto[] = [
  { id: "poncho-andino", nombre: "Poncho tejido Andino", precio: 189, categoria: "Mujer", imagen: "1434389677669-e08b4cac3105", nuevo: true, color: "Crudo" },
  { id: "bomber-cobre", nombre: "Bomber Cobre", precio: 259, categoria: "Abrigos", imagen: "1591047139829-d91aecb6caea", nuevo: true, color: "Terracota" },
  { id: "polo-esencial-blanco", nombre: "Polo Esencial", precio: 59, categoria: "Básicos", imagen: "1521572163474-6864f9cf17ab", color: "Blanco" },
  { id: "casaca-cuero", nombre: "Casaca de cuero Noche", precio: 449, categoria: "Abrigos", imagen: "1551028719-00167b16eac5", color: "Negro" },
  { id: "jean-recto", nombre: "Jean Recto Índigo", precio: 169, categoria: "Hombre", imagen: "1542272604-787c3835535d", color: "Índigo" },
  { id: "pantalon-rosa", nombre: "Pantalón Jogger Rosa Tierra", precio: 149, categoria: "Mujer", imagen: "1594633312681-425c7b97ccd1", nuevo: true, color: "Rosa" },
  { id: "polo-bosque", nombre: "Polo Pima Bosque", precio: 69, categoria: "Básicos", imagen: "1523381210434-271e8be1f52b", color: "Verde" },
  { id: "polo-negro", nombre: "Polo Sello Ceiba", precio: 79, categoria: "Hombre", imagen: "1618354691373-d851c5c3a990", color: "Negro" },
];

export const categorias: Categoria[] = ["Mujer", "Hombre", "Básicos", "Abrigos"];

export const formatPrecio = (n: number) =>
  new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" }).format(n);

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/coleccion", label: "Colección" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];
