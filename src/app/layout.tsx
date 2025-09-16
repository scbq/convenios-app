// app/layout.tsx  (o src/app/layout.tsx)
import '../app/globals.css'; // ajusta el path si usas src/
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-semibold">Convenios Institucionales</a>
            <nav className="text-sm flex gap-4">
              <a href="/" className="hover:underline">Inicio</a>
              <a href="/convenios" className="hover:underline">Convenios</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
