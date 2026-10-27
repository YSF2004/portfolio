import { NavBar } from "@/components/NavBar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Supabase",
  "Node.js",
  "Figma",
];

export default function Home() {
  return (
    <div id="top" className="flex-1">
      <NavBar />

      <main>
        {/* Hero */}
        <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24">
          <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.2em] text-accent-ink">
            Full-Stack Developer
          </p>
          <h1
            className="animate-fade-up mt-4 text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Youssef Ait Addi
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
            style={{ animationDelay: "160ms" }}
          >
            I build products end-to-end — from the interface down to the
            data model — with a designer&rsquo;s eye for detail. Three of
            them are below.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted">
              Selected work
            </h2>
            <span className="font-mono text-xs text-muted">
              {String(projects.length).padStart(2, "0")} projects
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted">
              About
            </h2>
            <p className="mt-6 max-w-2xl text-balance text-2xl leading-snug text-ink sm:text-3xl">
              I care about how a product works as much as how it looks.
              Each of these started as a design problem before it became
              code — a study tool that respects a student&rsquo;s own
              notes, a booking site that makes six trades feel like one
              studio, a coffee shop that just wanted to feel warm.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted">
              Contact
            </h2>
            <p className="mt-6 max-w-xl text-balance text-2xl leading-snug text-ink sm:text-3xl">
              Have a product that needs building? I&rsquo;d like to hear
              about it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:aitaddiyoussef1@gmail.com"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                aitaddiyoussef1@gmail.com
              </a>
              <a
                href="https://github.com/youssef-2420"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Youssef Ait Addi</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
