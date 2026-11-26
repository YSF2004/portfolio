export type Project = {
  slug: string;
  name: string;
  tone: "caffeine" | "moqef" | "kelus";
  summary: string;
  category: string;
  detail: string;
  image: string;
  demoUrl: string | null;
  repoUrl: string | null;
  repoLabel: string;
};

const entries: Project[] = [
  {
    category: "Web development · HTML & CSS",
    detail: "My first HTML and CSS project. A multi-page exploration of a coffee brand, spanning its story, gallery, products and contact page. The cream-and-espresso palette ties the experience together.",
    slug: "caffeine",
    name: "Caffeine",
    tone: "caffeine",
    summary:
      "A specialty coffee website, and the beginning of my journey building for the web.",
    image: "/projects/caffeine-hd.jpg",
    demoUrl: "https://caffeine-site.vercel.app",
    repoUrl: "https://github.com/YSF2004/caffeine",
    repoLabel: "View code",
  },
  {
    category: "Product design · Home services",
    detail: "A booking concept for plumbing, electrical, AC, painting, handyman and cleaning services. The editorial layout gives each service a clear place and keeps booking within reach.",
    slug: "digi-moqef",
    name: "Digi Moqef",
    tone: "moqef",
    summary:
      "An editorial approach to finding and booking everyday home services.",
    image: "/projects/digimoqef-hero.jpg",
    demoUrl: "https://digimoqef-site.vercel.app",
    repoUrl: "https://github.com/youssef-2420/digi2",
    repoLabel: "View code",
  },
  {
    category: "Product design · Study tools",
    detail: "A local-first study app built around a student’s own notes. Short recall sessions and an adaptive study plan help turn source material into a repeatable study routine. Source code is private.",
    slug: "kelus",
    name: "Kelus",
    tone: "kelus",
    summary:
      "A local-first study app that turns a student's own notes into short recall sessions and an adaptive study plan.",
    image: "/projects/kelus-site.jpg",
    demoUrl: "https://kelus.me",
    repoUrl: null,
    repoLabel: "Private repo",
  },
];

export const projects = [entries[2], entries[1], entries[0]];
