import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Streaming Festival – riprese video per eventi in diretta streaming",
  description:
    "Streaming Festival: la nuova frontiera dell'entertainment digitale. Musica dal vivo, live streaming, location uniche, riprese da drone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${sora.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
