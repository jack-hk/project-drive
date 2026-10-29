import type { MouseEvent } from "react";
import type { HeroContent } from "@/content/site";
import { scrollToTitle } from "@/lib/scroll-to-title";

type HeroProps = {
  hero: HeroContent;
};

export function Hero({ hero }: HeroProps) {
  const onContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTitle("contact");
  };

  return (
    <section aria-labelledby="hero-title" className="pt-16 md:pt-0">
      <div className="hero-image-frame">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          className="hero-image block h-64 w-full object-cover sm:h-80 md:h-[28rem]"
        />
      </div>
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative z-10 -mt-12 max-w-xl bg-paper px-6 py-8 shadow-sm md:-mt-20 md:px-8 md:py-10">
          <p className="text-sm font-semibold tracking-widest text-blue uppercase">{hero.kicker}</p>
          <h1 id="hero-title" className="mt-3 text-4xl leading-tight font-semibold text-ink md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-stone">{hero.lede}</p>
          <a
            href={hero.action.href}
            onClick={onContact}
            className="press mt-6 inline-flex min-h-11 items-center rounded-full bg-blue-deep px-6 text-sm font-semibold text-paper hover:bg-blue-ink"
          >
            {hero.action.label}
          </a>
        </div>
      </div>
    </section>
  );
}
