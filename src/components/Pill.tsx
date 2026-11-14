import Link from "next/link";

type Variant = "dark" | "outline" | "light" | "mint" | "ghost-light";

const styles: Record<Variant, string> = {
  dark: "bg-ink text-bg hover:opacity-85",
  outline: "border border-ink/70 text-ink hover:bg-ink hover:text-bg",
  light: "bg-white text-[#28211e] hover:bg-white/85",
  mint: "bg-pill text-[#1b2b25] hover:brightness-105",
  "ghost-light": "border border-white/70 text-white hover:bg-white hover:text-[#28211e]",
};

/** Rounded uppercase call-to-action button. External links open in a new tab. */
export default function Pill({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  const cls = `inline-flex items-center justify-center rounded-full px-7 py-3 text-xs font-medium uppercase tracking-[0.14em] transition ${styles[variant]}`;
  const external = /^(https?:|mailto:)/.test(href);
  if (external)
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
