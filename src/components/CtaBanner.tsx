import Image from "next/image";
import { heroImages } from "@/data/content";
import Pill from "./Pill";

export default function CtaBanner({
  title = "Explore analog & space electronics with Muntaha Rahman",
  href = "/projects/",
  label = "View projects",
}: {
  title?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <Image
        src={heroImages.banner}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        className="-z-10 object-cover object-[50%_30%]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#0b2a3d]/70" />
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-8 sm:py-32">
        <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-5xl">
          {title}
        </h2>
        <div className="mt-9">
          <Pill href={href} variant="mint">
            {label}
          </Pill>
        </div>
      </div>
    </section>
  );
}
