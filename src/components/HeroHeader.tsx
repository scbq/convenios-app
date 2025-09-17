"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroHeader() {
  const [open, setOpen] = useState(false);

  // Cierra con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      {/* HEADER ABSOLUTO SOBRE EL HERO */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto max-w-6xl flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 inline-flex items-center gap-2">
              <span className="sr-only">felipe Institucionales</span>
              <span className="inline-flex size-20 items-center justify-center rounded-full bg-white text-white font-semibold">
                <img src="../../public/convenios/DIRPLAN.png" alt="logo" className="size-20 rounded-full" />
              </span>
              
            </Link>
          </div>

          {/* Móvil: botón hamburguesa */}
          <div className="flex lg:hidden">
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                <path d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold text-white">Catálogo</Link>
            <Link href="/convenios?favoritos=1" className="text-sm font-semibold text-white">Favoritos</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
        </nav>

        {/* Panel móvil (slide-over) */}
        {open && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            <div className="fixed inset-y-0 right-0 w-full sm:max-w-sm bg-gray-900 p-6 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 inline-flex items-center gap-2" onClick={() => setOpen(false)}>
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-indigo-500 text-white font-semibold">C</span>
                  <span className="sr-only">Convenios Institucionales</span>
                </Link>
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-200"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="mt-6">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    <Link href="/" onClick={() => setOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">Catálogo</Link>
                    <Link href="/convenios?favoritos=1" onClick={() => setOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">Favoritos</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* BLOBS SUPERIORES */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="mx-auto max-w-2xl py-28 sm:py-44 lg:py-52">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Convenios para tu comunidad
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300">
            Explora convenios institucionales por áreas e instituciones. Guarda tus favoritos y mantén a mano sus beneficios.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#catalogo" className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400">
              Ver catálogo
            </a>
            <a href="/convenios?favoritos=1" className="text-sm font-semibold text-white">
              Ver favoritos <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* BLOBS INFERIORES */}
      <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
