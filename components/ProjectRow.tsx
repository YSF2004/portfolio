"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { ArrowIcon } from "@/components/Icons";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [failed, setFailed] = useState(false);
  const featured = index === 0;

  return <article className={`project ${project.tone}${featured ? " project-featured" : ""}`} aria-labelledby={`${project.slug}-name`}>
    <div className="project-heading"><h3 id={`${project.slug}-name`}>{project.name}</h3><span className="project-category">{featured && <span className="featured-label">Featured project</span>}{project.category}</span></div>
    <p className="summary">{project.summary}</p>
    {project.demoUrl ? <a className="project-visual" href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
      <Image src={project.image} alt={`${project.name} homepage`} fill preload={featured} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 808px) calc(100vw - 48px), 760px" className="project-shot" onError={() => setFailed(true)} />
      {failed && <span className="image-fallback">Screenshot unavailable. Visit the website.</span>}
      <span className="preview-label">Visit website <ArrowIcon /></span>
    </a> : <div className="project-visual" aria-label={`${project.name} homepage preview`}>
      <Image src={project.image} alt={`${project.name} homepage`} fill preload={featured} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 808px) calc(100vw - 48px), 760px" className="project-shot" onError={() => setFailed(true)} />
      {failed && <span className="image-fallback">Screenshot unavailable.</span>}
    </div>}
    <div className="project-actions">
      {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">View code <ArrowIcon /><span className="sr-only"> — {project.name} (opens in a new tab)</span></a>}
    </div>
    <details className="project-details"><summary>Behind the project<span className="sr-only"> — {project.name}</span><span className="details-plus" aria-hidden="true">+</span></summary><dl>{project.notes.map(note => <div key={note.label}><dt>{note.label}</dt><dd>{note.text}</dd></div>)}</dl></details>
  </article>;
}
