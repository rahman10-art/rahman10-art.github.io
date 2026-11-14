import Image from "next/image";
import {
  profile,
  projects,
  publications,
  skills,
} from "@/data/content";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.seeking}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-mono text-sm text-accent sm:text-base">
              {profile.title} · {profile.pronouns}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {profile.headline}
            </p>
            <p className="mt-3 text-sm text-faint">{profile.role}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-85"
              >
                View projects
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-medium transition hover:border-ink"
              >
                Résumé ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-medium transition hover:border-ink"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-48 sm:w-60 md:w-72">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-2xl border border-dashed border-accent/40"
            />
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              priority
              sizes="(min-width: 768px) 288px, 240px"
              className="relative aspect-[4/5] rounded-xl border border-line object-cover object-top"
            />
          </div>
        </div>

        <ul className="mt-14 flex flex-wrap gap-2">
          {profile.interests.map((i) => (
            <li
              key={i}
              className="rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted"
            >
              {i}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- Projects ---------------- */}
      <section id="projects" className="border-t border-line bg-bg/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            index="01"
            title="Projects"
            subtitle="Research and design work in analog IC design, space instrumentation and biomedical hardware."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section id="about" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_340px]">
          <div>
            <SectionHeading index="02" title="About" />
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="space-y-6 lg:pt-16">
            <div className="rounded-xl border border-line bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-faint">
                Education
              </h3>
              <p className="mt-3 font-semibold">University of Maryland, College Park</p>
              <p className="text-sm text-muted">
                Ph.D., Electrical &amp; Electronics Engineering
              </p>
              <p className="text-sm text-muted">Major: Microelectronics</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-faint">
                Publication
              </h3>
              {publications.map((pub) => (
                <a
                  key={pub.title}
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 block"
                >
                  <p className="font-semibold leading-snug group-hover:text-accent">
                    {pub.title} ↗
                  </p>
                  <p className="mt-1 text-sm text-muted">{pub.venue}</p>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ---------------- Skills ---------------- */}
      <section id="skills" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading index="03" title="Skills & Tools" />
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((g) => (
              <div
                key={g.group}
                className="rounded-xl border border-line bg-surface p-6"
              >
                <h3 className="font-semibold">{g.group}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {g.items.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section id="contact" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="rounded-2xl border border-line bg-ink px-6 py-12 text-bg sm:px-12">
            <p className="font-mono text-xs uppercase tracking-wider opacity-60">
              04 — Contact
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s talk about analog, mixed-signal or hardware roles.
            </h2>
            <p className="mt-4 max-w-xl opacity-70">
              I&apos;m interested in internships and full-time opportunities in
              IC design, space instrumentation and biomedical electronics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg bg-bg px-5 py-2.5 text-sm font-medium text-ink transition hover:opacity-90"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-bg/25 px-5 py-2.5 text-sm font-medium transition hover:border-bg"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-bg/25 px-5 py-2.5 text-sm font-medium transition hover:border-bg"
              >
                Résumé ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
