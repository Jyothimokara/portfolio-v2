import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

/* ═══════════════════════════════════════════════════════════
   PROJECT DATA
════════════════════════════════════════════════════════════ */

const PROJECTS_DATA = [
  {
    id: 1,
    name: "Hospital Website",
    image:  "https://i.postimg.cc/3JRq56GK/Screenshot-2026-03-01-201338.png",
    extract: "Responsive patient-focused medical website",
    description: "A clean and accessible hospital website showing departments, doctors, appointments, and emergency information with smooth navigation.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    live:  "https://mhospital.netlify.app/"
  },
  {
    id: 2,
    name: "College Website",
    image: "https://i.postimg.cc/vBk0T4WK/Screenshot-2026-03-02-130145.png",
    extract: "Multi-page academic information platform",
    description: "A structured and mobile-friendly college website presenting courses, admissions, campus details, and events.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    live: "https://stalwart-malasada-dd8fbc.netlify.app/"
  },
  {
    id: 3,
    name: "Infinitium AI Creator Companion",
    image: "https://i.postimg.cc/50GcbkHk/Screenshot-2026-03-02-121520.png",
    extract: "AI powered creator workflow platform",
    description: "A full-stack AI platform that generates structured ideas and content using prompt context and modular architecture.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    live: "https://infinitum-ai-creator-companion.netlify.app/#/login"
  },
  {
    id: 4,
    name: "Children AI Friendly Talk Tool",
    image: "https://i.postimg.cc/MZcM52tg/Screenshot-2026-03-02-102644.png",
    extract: "Safe AI chat tool for kids",
    description: "A child-friendly conversational AI with guided prompts, simple UI, and context-aware educational responses.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    live: "https://ai-friendlytalk.netlify.app/"
  },
  {
    id: 5,
    name: "Food Munch Website",
    image: "https://i.postimg.cc/g04FsdpV/Screenshot-2026-03-01-173101.png",
    extract: "HTML, CSS (Full Website Implementation)",
    description: "A visually rich food ordering website featuring menu sections, offers, and a clean user interface focused on usability and branding..",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    live: "https://food-munch-2026.netlify.app/"
  },
  {
    id: 6,
    name: "Dating Landing Page",
    image: "https://i.postimg.cc/tgRWj9VT/Screenshot-2026-03-02-125320.pngtps://images.unsplash.com/photo-1513631537007-08449b1ce552?w=500&h=300&fit=crop",
    extract: "Modern high-conversion landing page",
    description: "A minimal and responsive dating platform landing page with strong CTA and visual hierarchy.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    live: "https://dating-landing-page.netlify.app/"
  }
];

/* ═══════════════════════════════════════════════════════════
   PROJECTS COMPONENT
════════════════════════════════════════════════════════════ */

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="portfolio-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title">Latest Projects</h2>
          <p className="projects-subtitle">
            A showcase of my recent work and creative endeavors
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
