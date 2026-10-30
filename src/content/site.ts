export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type HeroContent = {
  image: { src: string; alt: string; width: number; height: number };
  kicker: string;
  title: string;
  lede: string;
  action: { href: string; label: string };
};

export type Stat = {
  id: string;
  label: string;
};

export type AboutContent = {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: readonly string[];
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  image: string;
  alt: string;
};

export type SocialId = "facebook" | "instagram" | "tiktok";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
};

export type ContactContent = {
  id: string;
  title: string;
  phone: { display: string; href: string };
  socials: readonly SocialLink[];
  image: { src: string; alt: string };
};

export type SiteContent = {
  brand: string;
  nav: readonly NavItem[];
  hero: HeroContent;
  stats: readonly Stat[];
  about: AboutContent;
  testimonials: readonly Testimonial[];
  contact: ContactContent;
};

export const site: SiteContent = {
  brand: "JHK Driving",
  nav: [
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  hero: {
    image: {
      src: "/images/hero.jpg",
      alt: "A silver car parked on a quiet tree-lined street",
      width: 1600,
      height: 900,
    },
    kicker: "Driving instructor",
    title: "Jason",
    lede: "Patient lessons for new drivers. Safe, confident, passed.",
    action: { href: "#contact", label: "Contact" },
  },
  stats: [
    { id: "years", label: "20+ Years of teaching" },
    { id: "students", label: "Passed 100+ students" },
    { id: "inclusive", label: "Inclusive and for everyone" },
  ],
  about: {
    id: "about",
    title: "Hi, I'm Jason",
    subtitle: "About me",
    paragraphs: [
      "I’m an approved driving instructor with over 10 years of experience. I worked with a driving school until 2018, when I became independent.",
      "I’m patient and work with each pupil using demonstrations and diagrams to build their skills together, helping them become safe, confident drivers and pass their test.",
    ],
  },
  testimonials: [
    {
      id: "maya",
      name: "Luka",
      quote:
        "I find it extremely easy to understand everything he teaches as he breaks down each step and makes it clear and simple to understand. All in all I enjoyed my driving lesson experience.",
      image: "/images/reviews/maya.jpg",
      alt: "Portrait of Luka",
    },
    {
      id: "jonah",
      name: "Rory",
      quote:
        "Would definitely recommend Jason, great teacher, really clear and helpful. Enjoyed the lessons always and got on really well. Thank you for helping me pass.",
      image: "/images/reviews/jonah.jpg",
      alt: "Portrait of Rory",
    },
    {
      id: "amira",
      name: "Lila",
      quote:
        "Passed first time all thanks to Jason! Such an amazing driving instructor couldn’t recommend him more! Jason was very calm and made me feel at ease. Thank you so much Jason!",
      image: "/images/reviews/amira.jpg",
      alt: "Portrait of Lila",
    },
    {
      id: "kenji",
      name: "Charlotte",
      quote:
        "I was very nervous about starting driving lessons as I grew up in a family without a car but Jason understood that and set a pace that was perfect for me! He found the perfect balance of building up slowly enough that I still felt comfortable and helping me step out of my comfort zone.",
      image: "/images/reviews/kenji.jpg",
      alt: "Portrait of Charlotte",
    },
    {
      id: "priya",
      name: "Jake",
      quote:
        "I have passed first time thanks to Jason being a great instructor, he is very calm and very patient and has given me the confidence to drive independently by myself. Thanks so much Jason.",
      image: "/images/reviews/priya.jpg",
      alt: "Portrait of Jake",
    },
    {
      id: "helen",
      name: "Seshagirirao",
      quote:
        "I had Jason as an instructor and he is very kind and patient to teach and correct my mistakes, now I have passed with him. I strongly recommend him for anyone in Brighton and Hove.",
      image: "/images/reviews/helen.jpg",
      alt: "Portrait of Seshagirirao",
    },
  ],
  contact: {
    id: "contact",
    title: "Contact",
    phone: { display: "07769 867633", href: "tel:+447769867633" },
    socials: [
      { id: "facebook", label: "Facebook", href: "https://en-gb.facebook.com/jhkdriving/" },
      { id: "instagram", label: "Instagram", href: "https://www.instagram.com/jhkdriving/" },
      { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/" },
    ],
    image: {
      src: "/images/contact.jpg",
      alt: "",
    },
  },
};
