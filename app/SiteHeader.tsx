"use client";

import Image from "next/image";
import Link from "next/link";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/sports-teams", label: "Sports Teams" },
  { href: "/custom-plates", label: "Custom Plates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/business-events", label: "Business & Events" },
  { href: "/nameplates", label: "Nameplates" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0EA5A8]/30 bg-gradient-to-r from-[#062338] via-[#08304A] to-[#062338] shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Packwood Plates" width={200} height={56} priority className="h-10 w-auto" />
          <span className="sr-only">Packwood Plates</span>
        </Link>

        <nav className="hidden gap-6 text-[15px] font-medium tracking-wide text-white/90 md:flex">
          {mainNavLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#5EEAD4]">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-[#FF5A5F] px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#FF7A7E]"
        >
          Get Your Plate
        </Link>
      </div>
    </header>
  );
}
