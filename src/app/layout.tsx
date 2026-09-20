import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

/*
 * Fonts are self-hosted (files and SIL Open Font Licences live in ./fonts), so
 * builds do not depend on reaching Google Fonts. Both are variable fonts.
 * Only the Latin subset is included; add the latin-ext files if copy needs
 * characters outside it.
 */
const newsreader = localFont({
  src: "./fonts/newsreader-latin-opsz.woff2",
  variable: "--font-newsreader",
  weight: "200 800",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const hankenGrotesk = localFont({
  src: "./fonts/hanken-grotesk-latin-wght.woff2",
  variable: "--font-hanken",
  weight: "100 900",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  /*
   * PLACEHOLDER SITE: keep search engines out until real content is in place.
   * Remove this `robots` entry when the site is ready to be indexed.
   */
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f7f5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hankenGrotesk.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only rounded-[2px] bg-petrol px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
