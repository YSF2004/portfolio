export function NavBar() {
  return <nav className="nav shell" aria-label="Main navigation">
    <a className="brand" href="#top" aria-label="Youssef Ait Addi, home">ya<span>↗</span></a>
    <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></div>
  </nav>;
}
