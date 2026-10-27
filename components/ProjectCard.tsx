import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-surface-2">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
            <span className="font-mono text-xs text-muted">{project.year}</span>
          </div>
          <p className="mt-1 text-sm text-accent-ink">{project.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-ink"
            >
              {project.repoLabel}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
          ) : (
            <span className="text-sm text-muted">{project.repoLabel}</span>
          )}
        </div>
      </div>
    </article>
  );
}
