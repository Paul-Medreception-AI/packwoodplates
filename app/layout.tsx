import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Packwood Plates | Custom Laser-Cut Metal License Plate Art",
  description:
    "Bold, handcrafted steel license plate art for teams, families, businesses, and events. Built in the USA for collectors.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#F7F3EA] text-[#0B2A3A] ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />

          <main className="flex-1">{children}</main>

          <footer className="border-t border-[#0EA5A8]/20 bg-[#062338]">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between text-white/85">
              <div className="space-y-1">
                <p className="text-base font-semibold text-white">Packwood Plates</p>
                <p className="text-xs uppercase tracking-[0.32em] text-white/70">Handcrafted in the USA</p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <a
                  href="https://instagram.com/pkwdpl8s"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Packwood Plates on Instagram"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:border-[#5EEAD4]/60 hover:text-[#5EEAD4]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37a4 4 0 1 1-7.37-2.37 4 4 0 0 1 7.37 2.37Z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
