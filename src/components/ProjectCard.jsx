import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(167, 139, 250, 0.3)" }}
    >
      {/* Project Image */}
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.name}
          className="project-image"
        />
        <div className="image-overlay" />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-extract">{project.extract}</p>
        <p className="project-description">{project.description}</p>

        {/* Icon Links */}
        <div className="project-links">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            whileHover={{ scale: 1.2, color: "#a78bfa" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            href={project.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            whileHover={{ scale: 1.2, color: "#a78bfa" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Project"
            whileHover={{ scale: 1.2, color: "#a78bfa" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
