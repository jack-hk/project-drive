import type { ContactContent } from "@/content/site";
import { SocialIcon } from "@/components/site/social-icons";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section aria-labelledby="contact" className="relative">
      <img
        src={contact.image.src}
        alt={contact.image.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative flex items-center justify-center px-5 py-10 md:py-12">
        <div className="w-full max-w-lg bg-paper px-6 py-8 text-center shadow-sm md:px-10">
          <h2 id="contact" className="scroll-mt-20 text-3xl font-semibold text-ink md:text-4xl">
            {contact.title}
          </h2>
          <a
            href={contact.phone.href}
            className="mt-4 block text-3xl font-semibold text-blue-deep md:text-4xl"
          >
            {contact.phone.display}
          </a>
          <p className="mt-6 text-sm font-semibold tracking-widest text-stone uppercase">Follow us</p>
          <ul className="mt-3 flex items-center justify-center gap-4">
            {contact.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="press inline-flex size-16 items-center justify-center rounded-full bg-blue-deep text-paper hover:bg-red"
                >
                  <SocialIcon id={social.id} className="size-10" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
