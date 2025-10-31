import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainMenu } from "@/components/main-menu";
import styles from "./layout.module.css";
import { LoginButton } from "@/components/login-button";
import Image from "next/image";
import { Disclaimer } from "@/components/disclaimer";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menuItems = [
    {
      title: "Item 1",
      href: "#",
    },
    {
      title: "Item 2",
      href: "#",
    },
    {
      title: "Item 3",
      href: "#",
    },
  ]

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
          <div className={styles.pageLayout}>
            <div className={styles.mainMenuWrapper}>
              <Image
                src="/erfgoed-paspoort.svg"
                alt="Erfgoed Paspoort"
                width={120}
                height={60}
              />
              <MainMenu items={menuItems} />
              <LoginButton>Login</LoginButton>
            </div>
            {children}

            <Footer className={styles.fullBleed} />
            <Disclaimer className={styles.fullBleed} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
