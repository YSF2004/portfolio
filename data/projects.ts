export type Project = {
  slug: string;
  name: string;
  number: string;
  tone: "caffeine" | "moqef" | "kelus";
  mark: string;
  category: string;
  summary: string;
  image: string;
  tech: string[];
  repoUrl: string | null;
  repoLabel: string;
};

export const projects: Project[] = [
  {
    slug: "caffeine",
    name: "Caffeine",
    number: "01",
    tone: "caffeine",
    mark: "C",
    category: "Static site",
    summary:
      "A warm, multi-page site for a specialty coffee space — home, about, history, gallery, products and contact — built around a cream-and-espresso palette.",
    image: "/projects/caffeine.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/youssef-2420/caffeine",
    repoLabel: "View code",
  },
  {
    slug: "digi-moqef",
    name: "Digi Moqef",
    number: "02",
    tone: "moqef",
    mark: "M",
    category: "Marketing site",
    summary:
      "A bold, editorial home-services booking studio: plumbing, electrical, AC, painting, handyman and cleaning, dispatched same day.",
    image: "/projects/digimoqef.jpg",
    tech: ["HTML", "CSS", "JavaScript", "oklch"],
    repoUrl: "https://github.com/youssef-2420/digi2",
    repoLabel: "View code",
  },
  {
    slug: "kelus",
    name: "Kelus",
    number: "03",
    tone: "kelus",
    mark: "K",
    category: "Study app",
    summary:
      "A local-first study app that turns a student's own notes into short recall sessions and an adaptive study plan.",
    image: "/projects/kelus.jpg",
    tech: ["Next.js", "TypeScript", "Supabase"],
    repoUrl: "https://github.com/youssef-2420/kelus",
    repoLabel: "Private repo",
  },
];
