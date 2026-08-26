import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Archivo_Black } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display-face",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-watermark-face",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyen Son Tung — AI Engineer",
  description: "AI Engineer specializing in RAG, LLM agents, and agent harness engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
