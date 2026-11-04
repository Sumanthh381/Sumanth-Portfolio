import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";
const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Sumanth N M | AI Engineer", template: "%s | Sumanth N M" },
  description:
    "Engineering Intelligence. Building What’s Next. Explore Sumanth N M’s work in AI engineering, retrieval systems, MCP integrations and intelligent automation.",
  applicationName: "Sumanth N M — AI Engineer",
  authors: [{ name: "Sumanth N M" }],
  keywords: [
    "Sumanth N M",
    "AI Engineer",
    "Generative AI",
    "RAG",
    "MCP",
    "Python",
    "India",
  ],
  openGraph: {
    title: "Sumanth N M | AI Engineer",
    description: "Engineering Intelligence. Building What’s Next.",
    type: "website",
    locale: "en_IN",
    siteName: "Sumanth N M",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumanth N M | AI Engineer",
    description:
      "Intelligent applications, retrieval systems and agentic workflows.",
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#080B12" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
