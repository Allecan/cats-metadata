import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { COUNTRY_CODE, NEXT_PUBLIC_SITE_URL, SITE_NAME } from "@/utils/env";
import { COUNTRY_CODE_NAME } from "@/utils/constants/country-names";

import "./globals.css";
import { METADATA_ICONS } from "@/utils/constants/metadata-icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DEFAULT_URL = NEXT_PUBLIC_SITE_URL
  ? NEXT_PUBLIC_SITE_URL
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  icons: METADATA_ICONS,
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s | ${SITE_NAME} ${COUNTRY_CODE_NAME[COUNTRY_CODE]}`,
    default: `${SITE_NAME} ${COUNTRY_CODE_NAME[COUNTRY_CODE]}`,
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
