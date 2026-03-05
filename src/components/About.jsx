export default function About() {
  return (
    <section id="about" className="about">
      <div className="portfolio-container">
        <h2>About Me</h2>

        <div className="about-content">
          {/* LEFT SIDE */}
          <div className="about-text">
            <p>
              I’m a passionate Frontend & Web Developer and an aspiring fresher focused on
              building modern, responsive, and user-friendly web applications. I create
              clean UI, mobile-first designs, and high-performance landing pages using
              React, JavaScript, HTML, and CSS.
            </p>

            <p>
              I also leverage AI-driven workflows including Prompt Engineering, Context
              Engineering, and Meta Prompting to speed up development, generate scalable
              components, and design smarter user experiences.
            </p>

            <ul className="about-list">
              <li>Responsive, mobile-first UI development</li>
              <li>Clean, maintainable, and scalable code practices</li>
              <li>Performance optimization and accessibility focus</li>
              <li>AI-assisted frontend development workflows</li>
            </ul>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="about-highlight">
            <h3>What I Do</h3>
             <ul className="what-list">
    <li>✨ Responsive across all devices</li>
    <li>⚡ Fast and high-performance websites</li>
    <li>♿ Accessible and user-friendly UI</li>
    <li>🎨 Clean, modern UI design</li>
    <li>🧩 Reusable React components</li>
    <li>📱 Mobile-first development</li>
    <li>🚀 Performance optimization</li>
    <li>🔧 Debugging and code optimization</li>
    <li>🤖 AI-assisted frontend workflows</li>
  </ul>
          </div>
        </div>
      </div>
    </section>
  );
}