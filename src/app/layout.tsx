import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import SwitchTheme from "./SwitchTheme";
import { ThemeProvider } from "./ThemeProvider";
import Logo from "./Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NutriZeus",
  description: "Plateforme officielle de consultation des proteines des aliments en Côte d'ivoire",
  icons: {
    icon: "/logo-blanc.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="b47ViJBe1Q_NzAfOon2Zru9JP169D67u55rboM_6hno" />      
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <section className="min-h-screen flex flex-col items-center">
            <header className="w-full flex justify-around">
              <div className="flex ms-5">
                <Link href="/" className="flex items-center">
                  <Logo />
                  <h1 className="font-bold text-3xl text-center p-4">NutriZeus</h1>
                </Link>
              </div>
              <div className="flex items-center">
                  <SwitchTheme />
              </div>
            </header>
            <main className="flex-grow flex flex-col justify-center items-center w-full">
              {children}
            </main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
