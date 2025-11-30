import type { Metadata } from "next";
import { Molle, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const molle = Molle({
  subsets: ["latin"],
  variable: "--font-molle",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pxui | Personal Touch UI Components",
  description: "Components for daily actionable components",
  metadataBase: new URL("https://pxui-docs.vercel.app"),
  openGraph: {
    title: "Pxui | Personal Touch UI Components",
    description: "Components for daily actionable components",
    type: "website",
    locale: "en_US",
    siteName: "Pxui",
    images: [
      {
        url: "https://pxui-docs.vercel.app/og-pxui.png",
        width: 1200,
        height: 630,
        alt: "pxui-img",
      },
    ],
  },
  twitter: {
    title: "Pxui | Personal Touch UI Components",
    description: "Components for daily actionable components",
    card: "summary_large_image",
    images: [
      {
        url: "https://pxui-docs.vercel.app/twitter-pxui.png",
        width: 1200,
        height: 630,
        alt: "pxui-img",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${manrope.variable} ${molle.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
