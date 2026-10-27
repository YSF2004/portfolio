import Image from "next/image";
import type { Project } from "@/data/projects";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project" data-reveal>
      {project.repoUrl ? (
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          <ProjectInner project={project} />
        </a>
      ) : (
        <div style={{ cursor: "default" }}>
          <ProjectInner project={project} />
        </div>
      )}
    </article>
  );
}

function ProjectInner({ project }: { project: Project }) {
  return (
    <>
      <div className={`project-visual ${project.tone}`}>
        <Image
          src={project.image}
          alt=""
          fill
          className="project-shot"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <span className="project-number mono">{project.number}</span>
        <div className="project-mark" aria-hidden="true">
          <span>{project.mark}</span>
        </div>
        <span className="view-project">
          {project.repoLabel} <ArrowIcon />
        </span>
      </div>
      <div className="project-copy">
        <div>
          <p className="mono">{project.category}</p>
          <h2>{project.name}</h2>
        </div>
        <p className="summary">{project.summary}</p>
        <p className="meta mono">{project.tech.join(" · ")}</p>
      </div>
    </>
  );
}
