import "./Projects.css";
import { PROJECTS_DATA } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

const lensRef = useRef(null);
const titleRef = useRef(null);

useEffect(() => {


const lens = lensRef.current;
const title = titleRef.current;

// Lens expand animation
gsap.to(lens, {
  clipPath: "circle(1200px at center)",
  ease: "none",
  scrollTrigger: {
    trigger: ".projects-hero",
    start: "top top",
    end: "+=800",
    scrub: true,
  }
});

// Title move + fade
gsap.to(title, {
  y: -250,
  opacity: 0,
  scrollTrigger: {
    trigger: ".projects-hero",
    start: "top top",
    end: "+=400",
    scrub: true,
  }
});


}, []);

return (


<section id="projects" className="projects-section">

  {/* HERO */}
  <div className="projects-hero">
<div className="latest-circle">
  <div className="latest-title">
    <span className="latest-outline">LATEST</span>
    <span className="latest-solid">PROJECTS</span>
  </div>
</div>

    <div ref={lensRef} className="code-lens"></div>

  </div>

  {/* PROJECT CARDS */}
  <div className="projects-grid">

    {PROJECTS_DATA.map((project, index) => (
      <ProjectCard
        key={project.id}
        project={project}
        rotate={index % 2 === 0 ? "-3deg" : "3deg"}
      />
    ))}

  </div>

</section>


);
}
