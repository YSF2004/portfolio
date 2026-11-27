export type Project = {
  slug: string;
  name: string;
  tone: "caffeine" | "moqef" | "kelus";
  summary: string;
  category: string;
  notes: { label: string; text: string }[];
  image: string;
  width: number;
  height: number;
  demoUrl: string | null;
  repoUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: "kelus",
    name: "Kelus",
    tone: "kelus",
    category: "Study tools",
    summary: "Turn your own notes into short recall sessions and a study plan that adapts.",
    notes: [
      { label: "My role", text: "Independent product design and development." },
      { label: "The idea", text: "Make a student’s own notes the starting point for active recall, rather than another document to reread." },
      { label: "My focus", text: "Keep the current question and next action in focus, pairing short recall sessions with an adaptive study-plan concept." },
      { label: "What I shipped", text: "A deployed web product with note-based recall sessions, a study-plan concept, and responsive interfaces." },
    ],
    image: "/projects/kelus-site.jpg", width: 1920, height: 1314,
    demoUrl: "https://kelus.me", repoUrl: "https://github.com/YSF2004/kelus",
  },
  {
    slug: "digi-moqef",
    name: "Digi Moqef",
    tone: "moqef",
    category: "Home services",
    summary: "A clear path from finding a home service to making a booking.",
    notes: [
      { label: "My role", text: "Portfolio concept, interface design, and front-end build." },
      { label: "The idea", text: "Bring plumbing, electrical, AC, painting, handyman, and cleaning services into one booking concept." },
      { label: "My focus", text: "Use distinct service categories and a clear booking path to organize the offer around what someone needs help with." },
      { label: "What I shipped", text: "A deployed home-services website with a responsive browsing and booking concept." },
    ],
    image: "/projects/digimoqef-hero.jpg", width: 1920, height: 1307,
    demoUrl: "https://digimoqef-site.vercel.app", repoUrl: "https://github.com/youssef-2420/digi2",
  },
  {
    slug: "caffeine",
    name: "Caffeine",
    tone: "caffeine",
    category: "HTML & CSS",
    summary: "A specialty coffee website. My first step from visual ideas to working pages.",
    notes: [
      { label: "My role", text: "Independent HTML and CSS design and development project." },
      { label: "The starting point", text: "My first HTML and CSS project: a multi-page site covering a coffee brand’s story, gallery, products, and contact details." },
      { label: "My focus", text: "Translate a cream-and-espresso identity into layouts, navigation, and reusable styles." },
      { label: "What I shipped", text: "A deployed multi-page website covering the brand story, gallery, products, and contact details." },
    ],
    image: "/projects/caffeine-hd.jpg", width: 1440, height: 960,
    demoUrl: "https://caffeine-site.vercel.app", repoUrl: "https://github.com/YSF2004/caffeine",
  },
];
