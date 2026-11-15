import type { Metadata } from "next";
import Link from "next/link";
import {
  heroImages,
  profile,
  projects,
  publications,
  skills,
} from "@/data/content";
import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";

export const metadata: Metadata = {
  title: "Professional Summary",
  description:
    "A condensed view of my projects, publications, skills and résumé.",
};

/** The three projects highlighted on this page, in order. */
const highlightSlugs = ["spike-sorting-vlsi", "iss-cream-pedestal", "fructocare-capsule"];

export default function SummaryPage() {
  const highlights = highlightSlugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p) => p !== undefined);

  return (
    <>
      <PageHero
        image={heroImages.summary}
        title="Professional Summary"
        subtitle="A condensed view of my projects, publications, skills and résumé."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-8 sm:py-24">
        <p className="text-lg leading-relaxed text-muted sm:text-xl">
          {profile.about[0]} This page is a selected summary of my work to date,
          including highlighted projects, publications and technical skills.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Pill href={profile.resume} variant="outline">
            Download résumé
          </Pill>
          <Pill href="/about/">About me</Pill>
          <Pill href="/projects/" variant="outline">
            All projects
          </Pill>
        </div>
      </section>

      {/* ---------- Project highlights ---------- */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            Project highlights
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Three projects that best show my skills as an engineer, with links to
            the full case studies.
          </p>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {highlights.map((p) => (
              <article key={p.slug} className="flex flex-col">
                <h3 className="text-2xl font-light leading-snug tracking-tight">
                  <Link
                    href={`/projects/${p.slug}/`}
                    className="underline decoration-line underline-offset-[6px] hover:decoration-ink"
                  >
                    {p.shortTitle}
                  </Link>
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>
                <ul className="mt-5 space-y-1.5 text-sm">
                  {p.metrics.slice(0, 3).map((m) => (
                    <li key={m.label} className="flex gap-2">
                      <span className="font-mono font-semibold">{m.value}</span>
                      <span className="text-faint">{m.label}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Publications ---------- */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            Publications
          </h2>
          <ul className="mt-10 space-y-6">
            {publications.map((pub) => (
              <li key={pub.title} className="max-w-4xl">
                <p className="font-semibold leading-snug">{pub.title}</p>
                <p className="mt-1 text-muted">
                  {pub.venue} —{" "}
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink underline underline-offset-4 hover:text-accent"
                  >
                    Publication link
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            Skills &amp; tools
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="border-b border-ink pb-3 text-lg">{g.group}</h3>
                <ul className="mt-4 space-y-2 text-muted">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
