import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutWrapper from "./layout-wrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erfgoed Paspoort",
  description: "Jouw digitale paspoort voor het ontdekken van erfgoedlocaties.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { title: "Digitale ervaring", href: "#" },
    { title: "Dienstverlening", href: "#" },
    { title: "Vragen", href: "#" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="ErfgoedPass" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <LayoutWrapper menuItems={menuItems}>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
