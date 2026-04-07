import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import NetworkBackground from "@/components/NetworkBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ponto - Intercert",
  description: "Sistema de rastreamento de tempo moderno para equipes com geolocalização e automação.",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth selection:bg-slate-900 selection:text-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa] text-slate-900 min-h-screen relative`}
      >
        <NetworkBackground />
        <div className="relative z-10 w-full">
          {children}
        </div>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
