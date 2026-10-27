export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  repoUrl: string | null;
  repoLabel: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "kelus",
    name: "kelus",
    tagline: "Turns your own notes into a study plan that adapts every answer",
    description:
      "A local-first study app for students revising from their own lecture notes, slides and PDFs. Every question is pulled from a line in the student's material and quoted back; each answer reorders what comes next, with the reason shown in plain language. No chatbot, no invented content — just evidence-driven recall.",
    image: "/projects/kelus.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Radix UI", "OCR"],
    repoUrl: "https://github.com/youssef-2420/kelus",
    repoLabel: "Private repo",
    year: "2026",
  },
  {
    slug: "digi-moqef",
    name: "Digi Moqef",
    tagline: "One call, every fix — a home-services studio booking site",
    description:
      "A bold, editorial marketing site for a home-services studio in Agadir: plumbing, electrical, AC, painting, handyman and cleaning, booked online and dispatched same day. Built on a hand-rolled oklch color system with scroll-reveal animations, a custom cursor and an all-caps display type system.",
    image: "/projects/digimoqef.jpg",
    tech: ["HTML", "CSS", "JavaScript", "oklch design system"],
    repoUrl: "https://github.com/youssef-2420/digi2",
    repoLabel: "View code",
    year: "2026",
  },
  {
    slug: "caffeine",
    name: "Caffeine",
    tagline: "A warm, multi-page site for a specialty coffee space",
    description:
      "A multi-page coffee shop site — home, about, history, gallery, products and contact — built around a cream-and-espresso palette, a hand-lettered script accent and a hero that invites you in for a cup.",
    image: "/projects/caffeine.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/youssef-2420/caffeine",
    repoLabel: "View code",
    year: "2026",
  },
];
