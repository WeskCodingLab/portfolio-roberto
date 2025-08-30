import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roberto Miranda | Portfolio",
  description: "Full-Stack & Sistemas | Indra (Proyecto Omega) | Proyectos UPBC | Python/Flask/SQL/Next.js/PHP/",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-roberto-ten.vercel.app"),
  openGraph: {
    title: "Roberto Miranda | Portfolio",
    description: "Proyectos, experiencia y contacto.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-roberto-ten.vercel.app",
    siteName: "Portfolio de Roberto Miranda",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}