import type { Testimonial } from "@/content/site";

type TestimonialsProps = {
  testimonials: readonly Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section aria-labelledby="reviews-title" className="bg-mist px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 id="reviews-title" className="text-3xl font-semibold text-ink md:text-4xl">
          Testimonials
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review) => (
            <li key={review.id} className="overflow-hidden rounded-lg border border-line bg-card">
              <img
                src={review.image}
                alt={review.alt}
                width={800}
                height={1067}
                className="aspect-square w-full object-cover object-top"
              />
              <figure className="flex flex-col gap-4 p-5">
                <blockquote className="text-base leading-relaxed text-ink">“{review.quote}”</blockquote>
                <figcaption className="text-sm font-medium text-stone">{review.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
