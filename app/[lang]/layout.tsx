import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { MatrixRain } from "@/components/matrix-rain";
import { getDictionary } from "./dictionaries";
import "../globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      siteName: site.name,
      locale: locale === "es" ? "es_PA" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="site-bg" aria-hidden />
        <MatrixRain />
        <div className="scanlines" aria-hidden />
        {children}
      </body>
    </html>
  );
}
