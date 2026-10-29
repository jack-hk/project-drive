import type { AboutContent } from "@/content/site";

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section aria-labelledby="about" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold tracking-widest text-red uppercase">{about.subtitle}</p>
        <h2 id="about" className="mt-3 scroll-mt-20 text-3xl font-semibold text-ink md:text-4xl">
          {about.title}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-stone">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
