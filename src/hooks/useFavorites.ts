"use client";
import { useEffect, useState, useCallback } from "react";

const KEY = "convenios:favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setFavorites(new Set(JSON.parse(raw) as string[]));
    } catch {}
  }, []);

  const persist = useCallback((next: Set<string>) => {
    setFavorites(new Set(next));
    try { localStorage.setItem(KEY, JSON.stringify(Array.from(next))); } catch {}
  }, []);

  const toggle = useCallback((id: string) => {
    const next = new Set(favorites);
    next.has(id) ? next.delete(id) : next.add(id);
    persist(next);
  }, [favorites, persist]);

  const has = useCallback((id: string) => favorites.has(id), [favorites]);

  const clear = useCallback(() => persist(new Set()), [persist]);

  return { favorites, has, toggle, clear };
}
