"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <nav aria-label="Global" className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 inline-flex items-center gap-2">
            <span className="sr-only">Convenios Institucionales</span>
            {/* Marca simple (círculo con “C”). Cambia por tu logo si quieres */}
            <span
              aria-hidden
              className="inline-flex size-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold"
              title="Convenios"
            >
              C
            </span>
            <span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">
              Convenios Institucionales
            </span>
          </Link>
        </div>

        {/* Botón menú móvil */}
        <div className="flex lg:hidden">
          <button
            type="button"
            aria-label="Abrir menú principal"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Nav desktop */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">Catálogo</Link>
          <Link href="/convenios?favoritos=1" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">Favoritos</Link>
        </div>

        {/* Lado derecho (vacío por ahora) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Coloca aquí login / enlace externo si lo necesitas */}
        </div>
      </nav>

      {/* Slide-over móvil */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" id="mobile-menu">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

          {/* Panel */}
          <div className="fixed inset-y-0 right-0 w-full sm:max-w-sm bg-white shadow-xl p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 inline-flex items-center gap-2" onClick={() => setOpen(false)}>
                <span className="sr-only">Convenios Institucionales</span>
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">C</span>
                <span className="font-semibold text-gray-900">Convenios Institucionales</span>
              </Link>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    Catálogo
                  </Link>
                  <Link
                    href="/convenios?favoritos=1"
                    onClick={() => setOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    Favoritos
                  </Link>
                </div>
                {/* Área extra para login/contacto si quieres */}
                {/* <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-100">Iniciar sesión</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
