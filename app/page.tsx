import { NavBar } from "@/components/NavBar";
import { ProjectRow } from "@/components/ProjectRow";
import { ContactControls } from "@/components/ContactControls";
import { ArrowIcon } from "@/components/Icons";
import { projects } from "@/data/projects";

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <NavBar />
    <main id="main" className="shell">
      <header className="hero" id="top">
        <p className="intro-label">Youssef AIT ADDI <span>Product design & development</span></p>
        <h1>I design interfaces.<br /><span>Then I build them.</span></h1>
        <p className="intro">From study tools to everyday services, I turn useful ideas into working products for the web.</p>
        <div className="hero-links"><a href="#work">Selected work <ArrowIcon down /></a><a href="mailto:aitaddiyoussef1@gmail.com">Get in touch <ArrowIcon /></a></div>
      </header>
      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-head"><h2 id="work-title">Selected work</h2><span className="muted">Design & development</span></div>
        {projects.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}
      </section>
      <section className="about" id="about" aria-labelledby="about-title">
        <h2 id="about-title">A little about me</h2>
        <div><p>I’m Youssef, born and raised in Morocco, and a product designer who also builds. I enjoy turning a useful idea into a clear interface, then following it through to a working product.</p><p>My work spans study tools, service booking, and the first websites that got me started. I care about legible typography, accessible interactions, and knowing when to leave something out.</p><ul className="skills" aria-label="Focus areas"><li>Product thinking</li><li>Interface design</li><li>Web development</li></ul></div>
      </section>
      <section className="contact" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Have something in mind?</h2><p>For opportunities, collaborations, or a simple hello.</p><ContactControls /><div className="social-links"><a href="https://github.com/YSF2004" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a><a href="https://www.linkedin.com/in/youssef-ait-addi-2b794b1a2/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a></div></section>
    </main>
    <footer className="shell"><span>Youssef AIT ADDI <span className="muted">· Portfolio 2026</span></span><a href="#top">Back to top <ArrowIcon /></a></footer>
  </>;
}
