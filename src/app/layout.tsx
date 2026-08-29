import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Archivo_Black, Instrument_Serif } from "next/font/google";
import { ThemeScript } from "@/components/theme-script";
import { siteConfig } from "@/lib/site";
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

// Space Grotesk ships no italic, so the emphasized line in the About headline
// would get a synthetic slant. This is the real italic that runs there instead.
const instrumentSerif = Instrument_Serif({
  variable: "--font-editorial-face",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-watermark-face",
  weight: "400",
  subsets: ["latin"],
});

const title = `${siteConfig.name} — ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} — Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "AI Engineer",
    "LLM",
    "RAG",
    "Agent harness",
    "LangGraph",
    "MCP",
    "Nguyen Son Tung",
    "AI Engineer Vietnam",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ff6a1a" },
    { media: "(prefers-color-scheme: dark)", color: "#140b06" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  email: `mailto:${siteConfig.email}`,
  url: siteConfig.url,
  description: siteConfig.description,
  address: { "@type": "PostalAddress", addressLocality: "Ho Chi Minh City", addressCountry: "VN" },
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.instagram],
  knowsAbout: ["Retrieval-Augmented Generation", "LLM agents", "Agent harness engineering", "Computer vision"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
