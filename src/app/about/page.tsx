import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/data/content";
import CtaBanner from "@/components/CtaBanner";
import Pill from "@/components/Pill";

export const metadata: Metadata = {
  title: "About Me",
  description: profile.headline,
};

export default function AboutPage() {
  return (
    <>
      {/* Plain header, like the sample's About page */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div className="grid gap-14 lg:grid-cols-[1fr_380px] lg:gap-24">
          <div>
            <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-7xl">
              About {profile.name}
            </h1>
            <p className="mt-4 text-sm text-faint">
              {profile.title} · {profile.pronouns}
            </p>
            <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted sm:text-xl">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Pill href={profile.resume}>Download my résumé</Pill>
              <Pill href={`mailto:${profile.email}`} variant="outline">
                Email me
              </Pill>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm lg:mt-4">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              priority
              placeholder="blur"
              sizes="380px"
              className="aspect-[4/5] w-full rounded-sm object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ---------- Personal statement ---------- */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-[380px_1fr] lg:gap-24">
          <div>
            <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              It all started with a small step…
            </h2>
            <p className="mt-5 text-muted">
              Personal statement &amp; research interests
            </p>
          </div>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
            {profile.statement.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Education & interests ---------- */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-8 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="text-3xl font-light tracking-tight">Education</h2>
            <div className="mt-6 border-l-2 border-ink pl-5">
              <p className="text-lg">University of Maryland, College Park</p>
              <p className="mt-1 text-muted">
                Ph.D., Electrical &amp; Electronics Engineering — Microelectronics
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-light tracking-tight">Research interests</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
