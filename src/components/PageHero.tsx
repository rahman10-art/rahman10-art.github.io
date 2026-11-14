import Image, { type StaticImageData } from "next/image";

export default function PageHero({
  image,
  title,
  subtitle,
  children,
  size = "md",
  align = "left",
}: {
  image: StaticImageData;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  size?: "md" | "lg";
  align?: "left" | "center";
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden text-white ${
        size === "lg"
          ? "min-h-[88svh] sm:min-h-[92svh]"
          : "min-h-[60svh] sm:min-h-[64svh]"
      }`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="-z-10 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/35 to-black/45"
      />
      <div
        className={`mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-8 sm:pb-20 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <h1
          className={`font-light leading-[1.08] tracking-tight ${
            size === "lg"
              ? "max-w-4xl text-4xl sm:text-6xl lg:text-7xl"
              : "text-4xl sm:text-6xl"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-5 max-w-2xl text-lg font-light text-white/85 sm:text-xl ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div
            className={`mt-9 flex flex-wrap gap-3 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
