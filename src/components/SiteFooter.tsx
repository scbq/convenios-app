import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <Link href="/" className="inline-flex items-center">
              <span className="relative h-10 w-40 sm:h-12 sm:w-48 overflow-hidden">
                <Image
                  src="/convenios/DIRPLAN.png"
                  alt="DIRPLAN"
                  fill
                  className="object-contain"
                  priority={false}
                />
              </span>
            </Link>
          </div>

          {/* Enlaces + Copyright */}
          <div className="mt-6 sm:mt-0">
            <ul className="flex justify-center gap-6 sm:justify-end">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="/convenios?favoritos=1"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Favoritos
                </Link>
              </li>
            </ul>

            <p className="mt-4 text-center text-sm text-gray-500 sm:text-right">
              © {new Date().getFullYear()} — Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
