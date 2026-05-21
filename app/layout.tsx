import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "TakTiek — Peergroup Weert",
    template: "%s | TakTiek",
  },
  description:
    "Wekelijkse peergroup voor (vermoedelijk) meer- en hoogbegaafde kinderen in Weert en Nederweert.",
  openGraph: {
    title: "TakTiek",
    description:
      "Een plek voor nieuwsgierige denkers — wekelijkse peergroup in Weert.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fredoka.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
