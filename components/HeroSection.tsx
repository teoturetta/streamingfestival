import Image from "next/image";
import Link from "next/link";

const heroTitles = [
  "melodie senza tempo",
  "DJ set artisti internazionali",
  "diretta streaming al tramonto",
  "location uniche segrete",
  "riprese anche da drone",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-festivalWhite">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/PHOTO-2020-05-10-12-52-10-2.jpg"
          alt="Streaming Festival hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-festivalBlack/50" />
      </div>
      <div className="relative z-10 px-4">
        <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6">
          {heroTitles[0]}
        </h1>
        <p className="font-body text-lg md:text-xl mb-8 text-white/90">
          La nuova frontiera dell&apos;entertainment digitale
        </p>
        <Link
          href="#contact"
          className="inline-block px-8 py-3 bg-festivalAccent text-festivalWhite font-semibold uppercase rounded hover:bg-festivalAccent/90 transition-colors"
        >
          Contattaci
        </Link>
      </div>
    </section>
  );
}
