import { site } from "@/content/site";
import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { StatsBand } from "@/components/site/stats-band";
import { Testimonials } from "@/components/site/testimonials";

export function LandingPage() {
  return (
    <>
      <Navbar brand={site.brand} items={site.nav} />
      <main id="top">
        <Hero hero={site.hero} />
        <StatsBand stats={site.stats} />
        <AboutSection about={site.about} />
        <Testimonials testimonials={site.testimonials} />
        <ContactSection contact={site.contact} />
      </main>
      <footer className="border-t border-stone/20 bg-paper px-5 py-3 text-center text-xs text-stone">
        <p>
          Site maintained by{" "}
          <a
            href="https://github.com/jack-hk"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-deep underline-offset-2 hover:underline"
          >
            <strong>Jack</strong>
          </a>
        </p>
      </footer>
    </>
  );
}
