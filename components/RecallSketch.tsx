"use client";

import { useState } from "react";

const cards = [
  { question: "What gives an interface a clear visual hierarchy?", answer: "Differences in size, weight, contrast, and spacing guide attention in a deliberate order." },
  { question: "Why should an interaction acknowledge an action?", answer: "Feedback confirms that an input was received and makes the resulting state understandable." },
];

export function RecallSketch() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [complete, setComplete] = useState(false);

  function next() {
    if (index === cards.length - 1) setComplete(true);
    else { setIndex(index + 1); setRevealed(false); }
  }

  return <section className="recall-sketch" aria-label="Sample recall interaction">
    <div className="sketch-heading"><span>Kelus / Interaction sketch</span><span className="sketch-counter">{complete ? "Complete" : `${index + 1} of ${cards.length}`}</span></div>
    <p className="sketch-disclaimer">A small portfolio prototype with sample content. Your answers aren’t saved.</p>
    <div className="recall-card">
      <div aria-live="polite" aria-atomic="true">
        {complete ? <><span className="recall-label">Session complete</span><h3>A little practice, a clearer idea.</h3><p>You’ve explored the recall loop: pause, remember, then check.</p></> : <><span className="recall-label">Take a moment to recall</span><h3>{cards[index].question}</h3><div id="recall-answer" className={`recall-answer${revealed ? " is-revealed" : ""}`}><p>{revealed ? cards[index].answer : "Think of your answer before revealing the note."}</p></div></>}
      </div>
      <div className="recall-controls">
        {complete ? <button className="sketch-primary" onClick={() => { setIndex(0); setRevealed(false); setComplete(false); }}>Try again</button> : <>
          <button className="sketch-primary" aria-expanded={revealed} aria-controls="recall-answer" onClick={() => revealed ? next() : setRevealed(true)}>{revealed ? index === cards.length - 1 ? "Finish practice" : "Next question" : "Reveal answer"}<span aria-hidden="true">→</span></button>
          <span className="recall-hint">{revealed ? "Compare it with what you remembered." : "No timer. Just a moment to think."}</span>
        </>}
      </div>
    </div>
  </section>;
}
