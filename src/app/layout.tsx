// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import SiteFooter from "../components/SiteFooter";

const THEME_FIX = `
try {
  // elimina .dark y claves comunes
  document.documentElement.classList.remove('dark');
  localStorage.removeItem('theme');
  localStorage.removeItem('color-theme');
  localStorage.removeItem('next-theme');
  // fuerza esquema claro para UI nativa
  document.documentElement.style.colorScheme = 'light';
} catch (e) {}
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Script de pre-hidratación: corre antes de pintar */}
        <script dangerouslySetInnerHTML={{ __html: THEME_FIX }} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
