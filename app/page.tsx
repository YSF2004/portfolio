import { NavBar } from "@/components/NavBar";
import { ProjectRow } from "@/components/ProjectRow";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

const principles = [
  { n: "01", label: "Product thinking" },
  { n: "02", label: "Interface & interaction design" },
  { n: "03", label: "Full-stack engineering" },
];

export default function Home() {
  return (
    <main className="flex-1">
      <ScrollReveal />
      <NavBar />

      <header className="hero shell" id="top">
        <p className="eyebrow mono animate-fade-up">
          <span /> Selected work · 2026
        </p>
        <h1 className="animate-fade-up" style={{ animationDelay: "80ms" }}>
          Digital products,
          <br />
          <em>made human.</em>
        </h1>
        <div className="hero-foot animate-fade-up" style={{ animationDelay: "160ms" }}>
          <p>
            I shape useful ideas into distinct, thoughtful experiences — from the first sketch to
            the final commit.
          </p>
          <a href="#work">
            Explore selected work <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="work shell" id="work">
        <div className="section-head mono">
          <p>Selected projects</p>
          <p>03 case studies</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="eyebrow mono" data-reveal>
          <span /> What I bring
        </p>
        <div className="about-grid">
          <h2 data-reveal>
            Strategy in mind.
            <br />
            <em>Craft at heart.</em>
          </h2>
          <div data-reveal>
            <p>
              I work across product thinking, interface design, and full-stack development to
              make ideas feel simple, memorable, and ready for the real world.
            </p>
            <ul>
              {principles.map((item) => (
                <li key={item.n}>
                  <span className="mono">{item.n}</span> {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="connect shell" id="contact" data-reveal>
        <div>
          <p className="eyebrow mono">
            <span /> Get in touch
          </p>
          <h2>Let&rsquo;s build something.</h2>
          <p>
            Have a product that needs building? I&rsquo;d like to hear about it — whether that
            means a quick chat or a full-stack build from scratch.
          </p>
        </div>
        <div className="connect-links">
          <a className="connect-link" href="mailto:aitaddiyoussef1@gmail.com">
            aitaddiyoussef1@gmail.com <ArrowIcon />
          </a>
          <a
            className="connect-link"
            href="https://github.com/youssef-2420"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="shell">
        <p className="eyebrow-ish mono">Have a project in mind?</p>
        <a className="mega-link" href="mailto:aitaddiyoussef1@gmail.com">
          Let&rsquo;s make it real <ArrowIcon />
        </a>
        <div className="foot-row mono">
          <span>Portfolio · 2026</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
