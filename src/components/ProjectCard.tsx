import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/content";
import Tag from "./Tag";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]"
    >
      <div className="figure-frame relative aspect-[16/10] overflow-hidden border-b border-line">
        <Image
          src={project.cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-faint">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="text-accent">{project.category}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug tracking-tight">
          {project.shortTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        {project.metrics[0] && (
          <p className="mt-4 font-mono text-sm">
            <span className="font-semibold text-ink">
              {project.metrics[0].value}
            </span>{" "}
            <span className="text-faint">{project.metrics[0].label}</span>
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <span className="mt-auto pt-5 text-sm font-medium text-accent">
          Read case study{" "}
          <span className="inline-block transition group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
