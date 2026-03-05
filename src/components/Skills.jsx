import { useState } from "react";
import { VscVscode } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";

import {
  SiGit,
  SiGithub,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiNetlify,
  SiFigma,
  SiGooglechrome
} from "react-icons/si";

export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  const marqueeSkills = [
    { name: "VS Code", icon: <VscVscode size={32} color="#007ACC" /> },
    { name: "Git", icon: <SiGit size={32} color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub size={32} color="#ffffff" /> },
    { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
    { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: "HTML5", icon: <SiHtml5 size={32} color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 size={32} color="#1572B6" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={32} color="#7952B3" /> },
    { name: "Framer Motion", icon: <SiFramer size={32} color="#0055FF" /> },
    { name: "Node.js", icon: <SiNodedotjs size={32} color="#339933" /> },
    { name: "Express", icon: <SiExpress size={32} color="#ffffff" /> },
    { name: "MongoDB", icon: <SiMongodb size={32} color="#47A248" /> },
    { name: "Firebase", icon: <SiFirebase size={32} color="#FFCA28" /> },
    { name: "Vite", icon: <SiVite size={32} color="#646CFF" /> },
    { name: "Netlify", icon: <SiNetlify size={32} color="#00C7B7" /> },
    { name: "Figma", icon: <SiFigma size={32} color="#F24E1E" /> },
    { name: "Chrome", icon: <SiGooglechrome size={32} color="#4285F4" /> }
  ];

  const marqueeItems = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="skills" className="skills">
      <div className="portfolio-container">
        <h2>Skills & Expertise</h2>

        {/* ✅ SKILL CARDS */}
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend Skills</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3 / Flexbox / Grid</li>
              <li>Responsive Design</li>
              <li>Framer Motion</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend Skills</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Prompt Engineering</h3>
            <ul>
              <li>Context Engineering</li>
              <li>Meta Prompting</li>
              <li>AI UI Generation</li>
              <li>AI Debug Workflows</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>VS Code</li>
              <li>Git & GitHub</li>
              <li>Figma</li>
              <li>Chrome DevTools</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>

        {/* ✅ MARQUEE */}
        <div
          className="skills-marquee-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="skills-marquee"
            style={{
              animationPlayState: isHovered ? "paused" : "running"
            }}
          >
            {marqueeItems.map((item, idx) => (
              <div className="marquee-item" key={idx}>
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}