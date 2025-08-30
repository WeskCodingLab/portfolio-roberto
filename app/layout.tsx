import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Roberto Miranda | Portafolio",
  description:
    "Full-Stack & Systems | Indra (proyecto Omega) | Proyectos UPBC | Python/Flask/SQL/Next.js/PHP/",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-roberto-ten.vercel.app"
  ),
  openGraph: {
    title: "Roberto Miranda | Portafolio",
    description: "Projects, Professional Experience & Contact.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ??
      "https://portfolio-roberto-ten.vercel.app",
    siteName: "Portfolio de Roberto Miranda",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
