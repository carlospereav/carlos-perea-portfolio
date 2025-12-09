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
  description: "Data Scientist & AI Engineer specialized in Artificial Intelligence, LangChain, LangGraph and Google Cloud. Transforming complex data into intelligent decisions.",
  keywords: ["Data Scientist", "AI Engineer", "Machine Learning", "LangChain", "Python", "Portfolio"],
  authors: [{ name: "Carlos Perea Vega" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carlos-perea-portfolio.vercel.app",
    siteName: "Carlos Perea Portfolio",
    title: "Carlos Perea - Data Scientist & AI Engineer",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Carlos Perea - Data Scientist & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Perea - Data Scientist & AI Engineer",
    images: ["/opengraph-image"],
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
