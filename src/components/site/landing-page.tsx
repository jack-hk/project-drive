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
    </>
  );
}
