import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://alifyadhiva.vercel.app"),
  title: "Alifya Awalia Dhiva | Data Engineer, GIS Analyst & Geologist",
  description:
    "Portfolio of Alifya Awalia Dhiva: dashboards, ETL pipelines, database systems, WebGIS and spatial analysis for mining and geological decision-making.",
  openGraph: {
    title: "Alifya Awalia Dhiva | Data Engineer, GIS Analyst & Geologist",
    description: "Dashboards, database systems, WebGIS and spatial analysis for mining decisions.",
    images: ["/img/portrait.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#ece3d8", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
