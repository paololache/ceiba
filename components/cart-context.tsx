"use client";

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

type CartContextValue = {
  count: number;
  toast: string | null;
  add: (nombre: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const add = useCallback((nombre: string) => {
    setCount((c) => c + 1);
    setToast(nombre);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  return (
    <CartContext.Provider value={{ count, toast, add }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
