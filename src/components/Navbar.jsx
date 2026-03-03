import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const sections = ["hero", "about", "skills", "projects", "contact"];

  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const offset = 120; // navbar height adjustment
        const top = element.offsetTop - offset;
        const bottom = top + element.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;

    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <div
          className={`logo ${active === "hero" ? "active" : ""}`}
          onClick={() => scrollToSection("hero")}
        >
          <span>J</span>M
        </div>

        {/* NAV LINKS */}
        <ul className="nav-links">
          {sections.slice(1).map((item) => (
            <li
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}