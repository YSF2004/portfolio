export type Project = {
  slug: string;
  name: string;
  tone: "caffeine" | "moqef" | "kelus";
  category: string;
  summary: string;
  image: string;
  tech: string[];
  demoUrl: string | null;
  repoUrl: string | null;
  repoLabel: string;
};

export const projects: Project[] = [
  {
    slug: "caffeine",
    name: "Caffeine",
    tone: "caffeine",
    category: "Static site",
    summary:
      "My first HTML and CSS project, built two years ago: a warm, multi-page site for a specialty coffee space — home, about, history, gallery, products and contact — built around a cream-and-espresso palette.",
    image: "/projects/caffeine-hd.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://caffeine-site.vercel.app",
    repoUrl: "https://github.com/YSF2004/caffeine",
    repoLabel: "View code",
  },
  {
    slug: "digi-moqef",
    name: "Digi Moqef",
    tone: "moqef",
    category: "Marketing site",
    summary:
      "A bold, editorial home-services booking studio: plumbing, electrical, AC, painting, handyman and cleaning, dispatched same day.",
    image: "/projects/digimoqef-hd.jpg",
    tech: ["HTML", "CSS", "JavaScript", "oklch"],
    demoUrl: "https://digimoqef-site.vercel.app",
    repoUrl: "https://github.com/youssef-2420/digi2",
    repoLabel: "View code",
  },
  {
    slug: "kelus",
    name: "Kelus",
    tone: "kelus",
    category: "Study app",
    summary:
      "A local-first study app that turns a student's own notes into short recall sessions and an adaptive study plan.",
    image: "/projects/kelus-hd.jpg",
    tech: ["Next.js", "TypeScript", "Supabase"],
    demoUrl: "https://kelus-seven.vercel.app",
    repoUrl: null,
    repoLabel: "Private repo",
  },
];
