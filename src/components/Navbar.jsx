import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { 
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Kelsey Salguera
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({name, href}) => (
              <li key={name} className="group">
                <a href={href}><span className="underline" />{name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a hrefer="#contact" className="contact-btn group">
          <div className="inner">
            Contact Me
          </div>
        </a>
      </div>
    </header>
  )
}

export default Navbar;