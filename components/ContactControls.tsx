"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/Icons";

export function ContactControls() {
  const [status, setStatus] = useState("Copy email");
  const [copying, setCopying] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const busy = useRef(false);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copy() {
    if (busy.current) return;
    busy.current = true;
    setCopying(true);
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText("aitaddiyoussef1@gmail.com");
      setStatus("Copied ✓");
    } catch {
      setStatus("Use email link");
    } finally {
      setCopying(false);
      busy.current = false;
    }
    timer.current = setTimeout(() => setStatus("Copy email"), 3000);
  }

  return <div className="contact-controls"><a className="email-link" href="mailto:aitaddiyoussef1@gmail.com">Email me <ArrowIcon /></a><button onClick={copy} disabled={copying} aria-label="Copy email address" aria-live="polite">{copying ? "Copying…" : status}</button></div>;
}
