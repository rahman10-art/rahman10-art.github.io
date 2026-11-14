"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About Me" },
  { href: "/summary/", label: "Professional Summary" },
];

const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

export default function Header() {
  const pathname = norm(usePathname() || "/");
  // Pages without a photo header (About, case studies) get a solid bar.
  const hasHero =
    pathname !== "/about/" && !/^\/projects\/[^/]+\/$/.test(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const overlay = hasHero && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overlay
          ? "bg-transparent text-white"
          : "border-b border-line bg-bg/90 text-ink backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:h-20 sm:px-8">
        <Link href="/" className="text-xl font-light tracking-tight sm:text-2xl">
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {nav.map((n) => {
            const active =
              n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`underline-offset-[6px] transition hover:underline ${
                  active ? "underline" : ""
                } ${overlay ? "opacity-95" : ""}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 grid h-10 w-10 place-items-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-current transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-current transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-4 pb-8 pt-4 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="block py-3 text-2xl font-light tracking-tight"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
