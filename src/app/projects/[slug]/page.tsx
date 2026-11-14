import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/content";
import Tag from "@/components/Tag";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.shortTitle, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-8 sm:pt-36">
      <Link
        href="/projects/"
        className="font-mono text-xs uppercase tracking-wider text-muted hover:text-accent"
      >
        ← All projects
      </Link>

      {/* ---------- Header ---------- */}
      <header className="mt-8 max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          {String(index + 1).padStart(2, "0")} · {project.category}
        </p>
        <h1 className="mt-3 text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
          {project.title}
        </h1>
        {project.affiliation && (
          <p className="mt-4 text-sm text-faint">{project.affiliation}</p>
        )}
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {project.links && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-6 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-bg transition hover:opacity-85"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ---------- Key metrics ---------- */}
      <dl className="mt-12 grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-line gap-px md:grid-cols-4">
        {project.metrics.map((m) => (
          <div key={m.label} className="bg-surface p-5">
            <dt className="text-xs text-faint">{m.label}</dt>
            <dd className="mt-1 font-mono text-xl font-semibold tracking-tight sm:text-2xl">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* ---------- Body ---------- */}
      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-12">
          {project.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-light tracking-tight">
                {s.heading}
              </h2>
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-4 space-y-2 text-muted">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.steps && (
                <ol className="mt-5 space-y-4">
                  {s.steps.map((st, i) => (
                    <li
                      key={st.title}
                      className="flex gap-4 rounded-xl border border-line bg-surface p-4"
                    >
                      <span className="font-mono text-sm font-semibold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-semibold">{st.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {st.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}

          {project.tables?.map((t) => (
            <section key={t.caption}>
              <h2 className="text-2xl font-light tracking-tight">
                {t.caption}
              </h2>
              <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-surface">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-line font-mono text-xs uppercase tracking-wider text-faint">
                    <tr>
                      {t.columns.map((c) => (
                        <th key={c} className="px-4 py-3 font-medium">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r) => (
                      <tr key={r[0]} className="border-b border-line last:border-0">
                        {r.map((cell, ci) => (
                          <td
                            key={ci}
                            className={
                              ci === 0
                                ? "px-4 py-3 text-muted"
                                : "px-4 py-3 font-mono"
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        {/* ---------- Figures ---------- */}
        <div className="space-y-6">
          {project.figures.map((f, i) => (
            <figure
              key={f.caption}
              className="overflow-hidden rounded-xl border border-line bg-surface"
            >
              <a
                href={f.src.src}
                target="_blank"
                rel="noopener noreferrer"
                className="figure-frame block"
                title="Open full size"
              >
                <Image
                  src={f.src}
                  alt={f.caption}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="mx-auto h-auto max-h-[460px] w-auto p-4"
                />
              </a>
              <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
                <span className="font-mono text-xs text-faint">
                  Fig. {i + 1}
                </span>{" "}
                — {f.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* ---------- Next ---------- */}
      <Link
        href={`/projects/${next.slug}/`}
        className="group mt-20 flex items-center justify-between gap-6 rounded-xl border border-line bg-surface p-6 transition hover:border-accent/50"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-faint">
            Next project
          </p>
          <p className="mt-1 text-2xl font-light tracking-tight">{next.shortTitle}</p>
        </div>
        <span className="text-2xl text-accent transition group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}
