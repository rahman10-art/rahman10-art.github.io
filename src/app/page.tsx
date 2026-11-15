import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { heroImages, profile, projects } from "@/data/content";
import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";
import CtaBanner from "@/components/CtaBanner";

function Feature({
  title,
  body,
  image,
  href,
  cta = "Learn more",
  flip = false,
  photo = false,
}: {
  title: string;
  body: string;
  image: StaticImageData;
  href: string;
  cta?: string;
  flip?: boolean;
  photo?: boolean;
}) {
  return (
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-8 sm:py-24 md:grid-cols-2 md:gap-20">
      <div
        className={`overflow-hidden rounded-sm ${photo ? "mx-auto w-full max-w-sm" : "figure-frame"} ${
          flip ? "md:order-2" : ""
        }`}
      >
        <Image
          src={image}
          alt=""
          sizes="(min-width: 768px) 50vw, 100vw"
          placeholder="blur"
          className={
            photo
              ? "aspect-[4/5] w-full object-cover object-top"
              : "aspect-[4/3] w-full object-contain p-6"
          }
        />
      </div>
      <div>
        <h2 className="text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{body}</p>
        <div className="mt-9">
          <Pill href={href}>{cta}</Pill>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const capsule = projects.find((p) => p.slug === "fructocare-capsule")!;

  return (
    <>
      <PageHero
        size="lg"
        image={heroImages.home}
        subtitle={`${profile.name} — ${profile.title}. ${profile.role}.`}
      >
        <Pill href="/about/" variant="ghost-light">
          Learn more
        </Pill>
        <Pill href={profile.resume} variant="light">
          Résumé
        </Pill>
      </PageHero>

      <Feature
        title="Analog & mixed-signal integrated circuits"
        body="I am a fourth-year Ph.D. student at the University of Maryland, College Park, majoring in microelectronics. My research focuses on the design of analog and mixed-signal integrated circuits, from transistor-level circuit blocks to complete analog VLSI systems, for biomedical, sensing and space-exploration applications."
        image={profile.photo}
        photo
        href="/about/"
        cta="About me"
      />

      <Feature
        flip
        title="Electronics for space, sensing and medicine"
        body="My project experience includes radiation-effects analysis for a cosmic-ray instrument aboard the International Space Station, energy harvesting from electrostatic arcing on satellite solar arrays, and rigid-flex PCB design for an ingestible medical device."
        image={
          (capsule.figures.find((f) => f.caption.startsWith("How the capsule works")) ?? capsule.figures[0]).src
        }
        href="/projects/"
        cta="View projects"
      />

      {/* ---------- Project walk-through ---------- */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="border-t border-line pt-20 text-center sm:pt-28">
          <h2 className="mx-auto max-w-3xl text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted">
            Research and design projects in integrated circuits, space instrumentation and biomedical hardware. Each links to a detailed case study covering methods, contributions and results.
          </p>
        </div>

        <div className="divide-y divide-line">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}/`}
              className="group grid items-center gap-8 py-16 md:grid-cols-2 md:gap-20"
            >
              <div
                className={`figure-frame overflow-hidden rounded-sm ${
                  i % 2 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={p.cover}
                  alt=""
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className={i % 2 ? "md:text-right" : ""}>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
                  {p.category}
                </p>
                <h3 className="mt-3 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                  {p.shortTitle}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>
                <p className="mt-6 text-sm font-medium underline underline-offset-4 group-hover:text-accent">
                  Read the case study
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
