import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { heroImages, projects } from "@/data/content";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected research and engineering projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        image={heroImages.projects}
        align="center"
        title="Projects"
        subtitle="Selected research and design projects from my undergraduate and doctoral studies. Each case study describes the problem, approach, my contributions and the results."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}/`} className="group block">
              <div className="figure-frame relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src={p.cover}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[#28211e]/0 transition group-hover:bg-[#28211e]/5" />
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-faint">
                {p.category}
              </p>
              <h2 className="mt-2 text-2xl font-light leading-snug tracking-tight group-hover:underline group-hover:underline-offset-4">
                {p.shortTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner title="Publications, skills and résumé" href="/summary/" label="Professional summary" />
    </>
  );
}
