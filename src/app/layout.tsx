import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { MainLayout } from "../components/layout/main-layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carlos-perea-portfolio.vercel.app"),
  title: "Carlos Perea - Data Scientist Portfolio",
  description: "Data Scientist & AI Engineer especializado en Inteligencia Artificial, LangChain, LangGraph y Google Cloud. Transformando datos complejos en decisiones inteligentes.",
  keywords: ["Data Scientist", "AI Engineer", "Machine Learning", "LangChain", "Python", "Portfolio"],
  authors: [{ name: "Carlos Perea Vega" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://carlos-perea-portfolio.vercel.app",
    siteName: "Carlos Perea Portfolio",
    title: "Carlos Perea - Data Scientist & AI Engineer",
    description: "Data Scientist & AI Engineer especializado en Inteligencia Artificial, LangChain, LangGraph y Google Cloud. Transformando datos complejos en decisiones inteligentes.",
  },
  twitter: {
    card: "summary",
    title: "Carlos Perea - Data Scientist & AI Engineer",
    description: "Data Scientist & AI Engineer especializado en Inteligencia Artificial, LangChain, LangGraph y Google Cloud.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
