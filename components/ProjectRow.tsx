"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { ArrowIcon, CloseIcon, ExpandIcon } from "@/components/Icons";
import { RecallSketch } from "@/components/RecallSketch";

type PreviewMode = "screenshot" | "sketch";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const imageRegion = useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const [opened, setOpened] = useState(false);
  const [mode, setMode] = useState<PreviewMode>("screenshot");
  const [failed, setFailed] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);
  const featured = index === 0;

  useEffect(() => {
    if (opened && !dialog.current?.open) dialog.current?.showModal();
  }, [opened]);

  function openPreview(nextMode: PreviewMode = "screenshot") {
    setMode(nextMode);
    setOpened(true);
  }

  function toggleZoom() {
    setZoomed(!zoomed);
    imageRegion.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  return <article className={`project ${project.tone}${featured ? " project-featured" : ""}`} aria-labelledby={`${project.slug}-name`}>
    <div className="project-heading"><h3 id={`${project.slug}-name`}>{project.name}</h3><span className="project-category">{featured && <span className="featured-label">Featured project</span>}{project.category}</span></div>
    <p className="summary">{project.summary}</p>
    {project.demoUrl ? <a className="project-visual" href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
      <Image src={project.image} alt={`${project.name} homepage`} fill preload={featured} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 808px) calc(100vw - 48px), 760px" className="project-shot" onError={() => setFailed(true)} />
      {failed && <span className="image-fallback">Screenshot unavailable. Visit the website.</span>}
      <span className="preview-label">Visit website <ArrowIcon /></span>
    </a> : <button className="project-visual" onClick={() => openPreview()} aria-label={`Preview ${project.name}`} aria-haspopup="dialog">
      <Image src={project.image} alt={`${project.name} homepage`} fill preload={featured} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 808px) calc(100vw - 48px), 760px" className="project-shot" onError={() => setFailed(true)} />
      <span className="preview-label">View screenshot <ExpandIcon /></span>
    </button>}
    <div className="project-actions">
      {featured && <button className="try-sketch" onClick={() => openPreview("sketch")} aria-haspopup="dialog">Try recall sketch <ArrowIcon /></button>}
      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Visit website <ArrowIcon /><span className="sr-only"> — {project.name} (opens in a new tab)</span></a>}
      {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">View code <ArrowIcon /><span className="sr-only"> — {project.name} (opens in a new tab)</span></a>}
    </div>
    <details className="project-details"><summary>Behind the project<span className="sr-only"> — {project.name}</span><span className="details-plus" aria-hidden="true">+</span></summary><dl>{project.notes.map(note => <div key={note.label}><dt>{note.label}</dt><dd>{note.text}</dd></div>)}</dl></details>
    <dialog ref={dialog} className="preview-dialog" aria-labelledby={`${project.slug}-title`} onClose={() => { setZoomed(false); setOpened(false); setPreviewFailed(false); }} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      {opened && <>
        <div className="dialog-toolbar"><h2 id={`${project.slug}-title`}>{project.name}<span className="muted"> / Preview</span></h2><button className="dialog-close" onClick={() => dialog.current?.close()} aria-label="Close preview"><CloseIcon /></button></div>
        <div className="preview-controls">
          {featured ? <div className="preview-modes" role="group" aria-label="Preview mode"><button aria-pressed={mode === "screenshot"} onClick={() => { setMode("screenshot"); setZoomed(false); }}>Screenshot</button><button aria-pressed={mode === "sketch"} onClick={() => setMode("sketch")}>Recall sketch</button></div> : <span className="preview-type">Homepage screenshot</span>}
          {mode === "screenshot" && !previewFailed && <button className="zoom-control" onClick={toggleZoom} aria-pressed={zoomed}>{zoomed ? "Fit image" : "Actual size"}<ExpandIcon /></button>}
        </div>
        {mode === "sketch" ? <div className="sketch-scroll"><RecallSketch /></div> : <div ref={imageRegion} className={`dialog-image${zoomed ? " zoomed" : ""}`} tabIndex={0} role="region" aria-label={`${project.name} screenshot; use arrow keys to scroll`}>
          {previewFailed ? <p className="preview-error" role="status">The screenshot couldn’t load. You can still explore the live website below.</p> : <Image src={project.image} alt={`${project.name} homepage screenshot`} width={project.width} height={project.height} sizes={zoomed ? `${project.width}px` : "(max-width: 1132px) 95vw, 1100px"} style={{ width: zoomed ? project.width : "100%", height: "auto", maxWidth: zoomed ? "none" : "100%" }} onError={() => setPreviewFailed(true)} />}
        </div>}
        <div className="dialog-footer"><span>{mode === "sketch" ? "Illustrative prototype · Sample content" : zoomed ? "Actual size · Scroll to explore" : "Original project screenshot"}</span>{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Live website <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span></a>}</div>
      </>}
    </dialog>
  </article>;
}
