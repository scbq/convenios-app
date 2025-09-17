import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Las páginas renderizan su propio contenido (ej: el héroe de /convenios) */}
        {children}

        {/* Footer global */}
        <footer className="mt-12 border-t">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">C</span>
                  <span className="font-semibold">Convenios Institucionales</span>
                </div>
                <p className="text-sm text-gray-600">
                  Explora convenios por área e institución. Guarda tus favoritos.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">Enlaces</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="hover:underline">Catálogo</a></li>
                  <li><a href="/convenios?favoritos=1" className="hover:underline">Favoritos</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li>Correo: <a className="hover:underline" href="mailto:contacto@tuinstitucion.cl">contacto@tuinstitucion.cl</a></li>
                  <li>Teléfono: <a className="hover:underline" href="tel:+56912345678">+56 9 1234 5678</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-10 border-t pt-6 text-sm text-gray-600">
              © {new Date().getFullYear()} — Plataforma de convenios
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
