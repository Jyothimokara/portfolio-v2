import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Code2 } from "lucide-react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState("typing");
  const indexRef = useRef(0);

  const TYPEWRITER_TEXT = "Frontend Developer & Web Developer";

  useEffect(() => {
    let timer;

    if (phase === "typing") {
      if (indexRef.current < TYPEWRITER_TEXT.length) {
        timer = setTimeout(() => {
          setDisplayedText(TYPEWRITER_TEXT.slice(0, indexRef.current + 1));
          indexRef.current++;
        }, 70);
      } else {
        timer = setTimeout(() => setPhase("pausing"), 1000);
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (indexRef.current > 0) {
        timer = setTimeout(() => {
          indexRef.current--;
          setDisplayedText(TYPEWRITER_TEXT.slice(0, indexRef.current));
        }, 40);
      } else {
        timer = setTimeout(() => setPhase("typing"), 500);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, phase]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="portfolio-container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>
              Hey there! I'm Jyothi Mokara
              <br />
              I build things for the web
            </h1>

            <div className="hero-subtitle">
              {displayedText}
              <span className="cursor" />
            </div>

            <p className="hero-description">
              I build responsive, fast, and user-friendly web applications using
              React, JavaScript, and CSS.
            </p>

            <div className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection("projects")}
              >
                <Code2 size={18} /> View Projects
              </motion.button>

              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection("contact")}
              >
                <Mail size={18} /> Get in Touch
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              src="https://i.postimg.cc/2y0vTgKq/Screenshot-2026-03-03-101433.png"
              alt="Hero portrait"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}