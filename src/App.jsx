import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Globe,
  GraduationCap,
  Award,
  ArrowUpRight,
} from "lucide-react";

import "./index.css";

// ==========================================
// INLINE SOCIAL ICONS
// ==========================================

function GithubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.35-3.86-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.77 1.08.77 2.18v3.24c0 .3.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

// ==========================================
// PROJECT DATA
// ==========================================

const projects = [
  {
    id: 1,
    title: "OneRail – Train Search and Booking Web Application ",
    description:
      "OneRail is a full-stack train search and booking web application developed using React.js, ASP.NET Core Web API, and SQL Server. It enables users to search trains between Salem Junction and Chennai Egmore, submit booking requests, and receive email confirmations.",
    tech: [
      ".NET",
      "React.js",
      "ASP.NET MVC",
      "ASP.NET Core Web API",
      "ADO.NET",
      "Entity Framework Core",
      "REST APIs",
      "JWT",
    ],
    Project: "https://github.com/HARIHARAN-JP/OneRail/",
  },
  {
    id: 2,
    title: "Resort MaManagement System",
    description:
      "Developed a Resort Management System using ASP.NET MVC, C#, ADO.NET, Entity Framework, and SQL Server to manage room details, user registration, and admin operations. Implemented CRUD functionality, database integration, and an admin dashboard for efficient resort management.",
    tech: [
      ".NET",
      "ASP.NET MVC",
      "ADO.NET",
      "Entity Framework Core",
      "REST APIs",
      "Razor Syntax",
    ],
    Project: "https://github.com/HARIHARAN-JP/ResortMangementProject",
  },
];

// ==========================================
// SKILLS
// ==========================================

const skills = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C#", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      ".NET",
      "ASP.NET MVC",
      " ASP.NET Core Web API",
      "ADO.NET",
      "Entity Framework Core",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "React Router",
      "Context API",
      "Vite",
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    items: ["SQL Server", "Git", "Postman", "IntelliJ IDEA", "VS Code"],
  },
];

// ==========================================
// CERTIFICATIONS
// ==========================================

const certifications = [
  {
    title: ".NET TRAINING",
    organization: "Besant Technologies",
    date: "September 2026",
  },
  {
    title: "FULL STACK TRAINING",
    organization:
      "Future skills prime Nasscom It-Ites ssc cgl And Besant Technologies",
    date: "July 2026",
  },
];

// ==========================================
// MAIN APP
// ==========================================

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="portfolio">
      {/* ==========================================
          NAVBAR
      ========================================== */}

      <header className="navbar">
        <div className="navbar-container">
          <button
            className="navbar-logo"
            onClick={() => scrollToSection("home")}
          >
            <span className="logo-bracket">&lt;</span>
            Hariharan
            <span className="logo-bracket">/&gt;</span>
          </button>

          <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollToSection("home")}>Home</button>

            <button onClick={() => scrollToSection("about")}>About</button>

            <button onClick={() => scrollToSection("skills")}>Skills</button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("education")}>
              Education
            </button>

            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ==========================================
          HERO
      ========================================== */}

      <main>
        <section id="home" className="hero section-container">
          <div className="hero-content">
            <div className="availability-badge">
              <span className="availability-dot"></span>
              Available for opportunities
            </div>

            <p className="hero-small-title">.NET FULL STACK DEVELOPER</p>

            <h1>
              Building modern
              <span> full-stack applications.</span>
            </h1>

            <p className="hero-description">
              I'm Hariharan J P, a fresher Full Stack .NET Developer passionate
              about building scalable web applications using C#, .Net, React.js
              and SQL Server.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                View My Projects
                <ArrowUpRight size={18} />
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </button>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/HARIHARAN-JP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/hariharan-jp-35b573322/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={21} />
              </a>

              <a href="mailto:jphariharan09@gmail.com" aria-label="Email">
                <Mail size={21} />
              </a>
            </div>
          </div>

          {/* CODE CARD */}

          <div className="hero-code-card">
            <div className="code-window-header">
              <div className="code-window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="code-window-title">.Net developer</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">public class</span>{" "}
                <span className="code-green">Developer</span>
              </p>

              <p>{"{"}</p>

              <p className="code-indent">
                <span className="code-purple">String</span> name ={" "}
                <span className="code-yellow">"Hariharan J P"</span>;
              </p>

              <p className="code-indent">
                <span className="code-purple">String</span> role ={" "}
                <span className="code-yellow">".Net Full Stack Developer"</span>
                ;
              </p>

              <p className="code-indent">
                <span className="code-purple">String</span> backend ={" "}
                <span className="code-yellow">".Net"</span>;
              </p>

              <p className="code-indent">
                <span className="code-purple">String</span> frontend ={" "}
                <span className="code-yellow">"React.js"</span>;
              </p>

              <p className="code-indent">
                <span className="code-purple">String</span> database ={" "}
                <span className="code-yellow">"SQL Server"</span>;
              </p>

              <p className="code-indent">
                <span className="code-purple">int</span> experience ={" "}
                <span className="code-orange">0</span>;
              </p>

              <p>{"}"}</p>
            </div>
          </div>
        </section>

        {/* ==========================================
            ABOUT
        ========================================== */}

        <section id="about" className="section">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">ABOUT ME</p>

              <h2>
                Turning ideas into
                <span> working applications.</span>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm a Computer Science Engineering graduate with a strong
                  interest in full-stack web development.
                </p>

                <p>
                  I specialize in C#, .Net, React.js and SQL Server, and enjoy
                  creating complete applications from database design to
                  responsive user interfaces.
                </p>
              </div>

              <div className="about-stats">
                <div className="stat-card">
                  <strong>2025</strong>
                  <span>Graduate</span>
                </div>

                <div className="stat-card">
                  <strong>7.92</strong>
                  <span>CGPA</span>
                </div>

                <div className="stat-card">
                  <strong>4+</strong>
                  <span>Projects</span>
                </div>

                <div className="stat-card">
                  <strong>.Net</strong>
                  <span>Primary Stack</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SKILLS
        ========================================== */}

        <section id="skills" className="section section-dark">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">TECHNICAL SKILLS</p>

              <h2>
                Technologies I<span> work with.</span>
              </h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="skill-card" key={skill.title}>
                    <div className="skill-icon">
                      <Icon size={24} />
                    </div>

                    <h3>{skill.title}</h3>

                    <div className="skill-tags">
                      {skill.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================
            PROJECTS
        ========================================== */}

        <section id="projects" className="section">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">FEATURED PROJECTS</p>

              <h2>
                Things I've
                <span> built.</span>
              </h2>

              <p className="section-description">
                A collection of full-stack applications demonstrating my
                experience with C#, .NET, React.js and SQL Server.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.id}>
                  <div className="project-number">0{project.id}</div>

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.Project}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon size={16} />
                        Frontend + Backend
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            EDUCATION
        ========================================== */}

        <section id="education" className="section section-dark">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">EDUCATION & CERTIFICATIONS</p>

              <h2>
                Learning and
                <span> growing.</span>
              </h2>
            </div>

            <div className="education-grid">
              <div className="education-card">
                <div className="education-icon">
                  <GraduationCap size={25} />
                </div>

                <div>
                  <p className="education-label">EDUCATION</p>

                  <h3>B.E. Computer Science and Engineering</h3>

                  <p>Mahendra College of Engineering</p>

                  <div className="education-meta">
                    <span>2025</span>
                    <span>CGPA: 7.92 / 10</span>
                  </div>
                </div>
              </div>

              <div className="certifications">
                {certifications.map((certification) => (
                  <div className="certification-card" key={certification.title}>
                    <div className="certification-icon">
                      <Award size={22} />
                    </div>

                    <div>
                      <h3>{certification.title}</h3>

                      <p>{certification.organization}</p>

                      <span>{certification.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            CONTACT
        ========================================== */}

        <section id="contact" className="section">
          <div className="section-container">
            <div className="contact-wrapper">
              <div className="section-heading">
                <p className="section-label">CONTACT</p>

                <h2>
                  Let's build something
                  <span> together.</span>
                </h2>

                <p className="section-description">
                  I'm currently looking for opportunities as a fresher Full
                  Stack .Net Developer.
                </p>
              </div>

              <div className="contact-grid">
                <a
                  href="mailto:jphariharan09@gmail.com"
                  className="contact-card"
                >
                  <div className="contact-icon">
                    <Mail size={21} />
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>jphariharan09@gmail.com</strong>
                  </div>
                </a>

                <a href="tel:9384137739" className="contact-card">
                  <div className="contact-icon">
                    <Phone size={21} />
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>+91 93841 37739</strong>
                  </div>
                </a>

                <div className="contact-card">
                  <div className="contact-icon">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>Chennai, Tamil Nadu</strong>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/hariharan-jp-35b573322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-icon">
                    <LinkedinIcon size={21} />
                  </div>

                  <div>
                    <span>LinkedIn</span>
                    <strong>Connect with me</strong>
                  </div>
                </a>
              </div>

              <div className="contact-socials">
                <a
                  href="https://github.com/HARIHARAN-JP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={20} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/hariharan-jp-35b573322/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon size={20} />
                  LinkedIn
                </a>

                <a href="mailto:jphariharan09@gmail.com">
                  <Mail size={20} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <footer className="footer">
        <div className="section-container footer-content">
          <p>© 2026 Hariharan J P All rights reserved.</p>

          <p>Built with React.js</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
