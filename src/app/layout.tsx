import "../app/globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-semibold">Convenios Institucionales</a>
            <nav className="text-sm flex gap-4 items-center">
              <a href="/" className="hover:underline">Catálogo</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mt-12 border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} — Plataforma de convenios
          </div>
        </footer>
      </body>
    </html>
  );
}
