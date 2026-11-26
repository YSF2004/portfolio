"use client";
import { useEffect, useRef, useState } from "react";
export function ContactControls() {
  const [status, setStatus] = useState("Copy email");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try { await navigator.clipboard.writeText("aitaddiyoussef1@gmail.com"); setStatus("Copied ✓"); }
    catch { setStatus("Use email link"); }
    timer.current = setTimeout(() => setStatus("Copy email"), 3000);
  }
  return <div className="contact-controls"><a className="email-link" href="mailto:aitaddiyoussef1@gmail.com">Email me ↗</a><button onClick={copy} aria-live="polite">{status}</button></div>;
}
