import { NavBar } from "@/components/NavBar";
import { ProjectRow } from "@/components/ProjectRow";
import { ContactControls } from "@/components/ContactControls";
import { projects } from "@/data/projects";

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <NavBar />
    <main id="main" className="shell">
      <header className="hero" id="top">
        <p className="intro-label"><span className="identity-mark" aria-hidden="true">✳</span> Youssef Ait Addi</p>
        <h1>Thoughtful interfaces.<br /><span>From idea to interaction.</span></h1>
        <p className="intro">I design digital products and build them for the web. Interested in the small details that make something useful feel effortless.</p>
        <div className="hero-links"><a href="#work">Explore my work <span aria-hidden="true">↓</span></a><a href="mailto:aitaddiyoussef1@gmail.com">Get in touch <span aria-hidden="true">↗</span></a></div>
      </header>
      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-head"><h2 id="work-title">Selected work</h2><span className="muted">Design & development</span></div>
        {projects.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}
      </section>
      <section className="about" id="about" aria-labelledby="about-title">
        <h2 id="about-title">A little about me</h2>
        <div><p>I’m Youssef, a product designer who also builds. I enjoy turning a useful idea into a clear interface, then following it through to a working product.</p><p>My work spans study tools, service booking, and the first websites that got me started. I care about legible typography, accessible interactions, and knowing when to leave something out.</p><ul className="skills" aria-label="Focus areas"><li>Product thinking</li><li>Interface design</li><li>Web development</li></ul></div>
      </section>
      <section className="contact" id="contact" aria-labelledby="contact-title"><span className="identity-mark" aria-hidden="true">✳</span><h2 id="contact-title">Good work starts with a conversation.</h2><p>For opportunities, collaborations, or a simple hello.</p><ContactControls /><div className="social-links"><a href="https://github.com/YSF2004" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/youssef-ait-addi-2b794b1a2/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section>
    </main>
    <footer className="shell"><span>Youssef Ait Addi <span className="muted">· Portfolio 2026</span></span><a href="#top">Back to top ↑</a></footer>
  </>;
}
