import Image from "next/image";
import type { Project } from "@/data/projects";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        stroke="none"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

export function ProjectRow({ project }: { project: Project }) {
  const visualHref = project.demoUrl ?? project.repoUrl;

  return (
    <article className="project" data-reveal>
      <VisualLink href={visualHref} tone={project.tone}>
        <Image
          src={project.image}
          alt={`Screenshot of the ${project.name} website`}
          fill
          unoptimized
          className="project-shot"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <span className="view-project">
          {project.demoUrl ? "Live demo" : project.repoLabel} <ArrowIcon />
        </span>
      </VisualLink>

      <div className="project-copy">
        <h2>{project.name}</h2>
        <p className="summary">{project.summary}</p>
        <p className="meta mono">{project.tech.join(" · ")}</p>
        {project.repoUrl && (
          <a
            className="project-repo-link"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon /> {project.repoLabel}
          </a>
        )}
      </div>
    </article>
  );
}

function VisualLink({
  href,
  tone,
  children,
}: {
  href: string | null;
  tone: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return <div className={`project-visual ${tone}`}>{children}</div>;
  }
  return (
    <a
      className={`project-visual ${tone}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
