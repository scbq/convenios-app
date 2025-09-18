// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import SiteFooter from "../components/SiteFooter";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
