import Link from "next/link";
import { profile } from "@/data/content";

const nav = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-md bg-ink font-mono text-xs font-semibold text-bg"
          >
            MR
          </span>
          <span className="hidden font-semibold tracking-tight sm:inline">
            {profile.name}
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hidden rounded-md px-3 py-1.5 text-muted transition hover:bg-surface hover:text-ink md:inline-block"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md bg-ink px-3.5 py-1.5 font-medium text-bg transition hover:opacity-85"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
