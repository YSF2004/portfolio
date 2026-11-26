"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const [failed, setFailed] = useState(false);
  return <article className={`project ${project.tone}`}>
    <button className="project-visual" onClick={() => dialog.current?.showModal()} aria-label={`Preview ${project.name}`}>
      <Image src={project.image} alt={`${project.name} website overview`} fill preload={index === 0} sizes="(max-width: 760px) 100vw, 760px" className="project-shot" onError={() => setFailed(true)} />
      {failed && <span className="image-fallback">Preview unavailable · Explore the project below</span>}
      <span className="preview-label">Explore preview <span aria-hidden="true">⤢</span></span>
    </button>
    <div className="project-heading"><h3>{project.name}</h3><span>{project.category}</span></div>
    <p className="summary">{project.summary}</p>
    <div className="project-actions">{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Visit website <span aria-hidden="true">↗</span><span className="sr-only"> — {project.name}</span></a>}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">View code <span aria-hidden="true">↗</span><span className="sr-only"> — {project.name}</span></a>}</div>
    <details className="project-details"><summary>Project notes <span aria-hidden="true">+</span></summary><p>{project.detail}</p></details>
    <dialog ref={dialog} className="preview-dialog" aria-labelledby={`${project.slug}-title`} onClose={() => setZoomed(false)} onClick={e => { if(e.target === e.currentTarget) dialog.current?.close(); }}>
      <div className="dialog-toolbar"><h2 id={`${project.slug}-title`}>{project.name}<span className="muted"> / Preview</span></h2><div><button onClick={() => setZoomed(!zoomed)} aria-pressed={zoomed}>{zoomed ? "Fit image" : "Zoom in"}</button><button onClick={() => dialog.current?.close()} aria-label="Close preview">Close <span aria-hidden="true">×</span></button></div></div>
      <div className={`dialog-image ${zoomed ? "zoomed" : ""}`} tabIndex={0} role="region" aria-label={`${project.name} screenshot; scroll to explore`}><Image src={project.image} alt={`${project.name} full website screenshot`} width={1600} height={1100} sizes="95vw" style={{height:"auto"}} /></div>
      <div className="dialog-footer"><span>Original project screenshot</span>{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Open live website ↗</a>}</div>
    </dialog>
  </article>;
}
