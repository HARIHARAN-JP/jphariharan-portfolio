import "./index.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">&lt;Hariharan /&gt;</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>J P Hariharan</h1>

          <h2>.NET Developer</h2>

          <p className="hero-text">
            I build responsive and user-friendly web applications using C#,
            ASP.NET Core, Web API, SQL Server and React.js.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/hariharan-jp-35b573322/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:jphariharan09@gmail.com">Email</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-title">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Computer Science Engineering graduate and an aspiring
              .NET Developer with training in modern web development.
            </p>

            <p>
              I have hands-on knowledge of C#, ASP.NET Core, Web API,
              Entity Framework Core, SQL Server and React.js. I enjoy
              building web applications and learning new technologies.
            </p>

            <p>
              I am currently looking for an opportunity where I can improve
              my technical skills, contribute to real-world projects and
              grow as a software developer.
            </p>
          </div>

          <div className="about-info">
            <div className="info-box">
              <h3>Education</h3>
              <p>B.E. Computer Science Engineering</p>
            </div>

            <div className="info-box">
              <h3>Experience</h3>
              <p>.NET Developer Training</p>
            </div>

            <div className="info-box">
              <h3>Location</h3>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-title">
          <p>My Technical Skills</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>

            <div className="skill-list">
              <span>C#</span>
              <span>ASP.NET Core</span>
              <span>Web API</span>
              <span>Entity Framework Core</span>
              <span>ADO.NET</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Database</h3>

            <div className="skill-list">
              <span>MS SQL Server</span>
              <span>Stored Procedures</span>
              <span>LINQ</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Other Technologies</h3>

            <div className="skill-list">
              <span>JWT Authentication</span>
              <span>REST API</span>
              <span>Dependency Injection</span>
              <span>Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-title">
          <p>My Recent Work</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-container">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-content">
              <p className="project-type">Web Application</p>

              <h3>Resort Management System</h3>

              <ul className="project-description">
                <li>
                  Created an Admin Login system using SQL Server and
                  implemented username/password validation using ADO.NET.
                </li>

                <li>
                  Developed an Admin Dashboard to manage registered users,
                  including viewing, creating, updating and deleting user
                  details using Entity Framework.
                </li>

                <li>
                  Created a User Registration module to collect and store
                  customer details in the SQL Server database.
                </li>

                <li>
                  Implemented an admin-controlled management flow allowing
                  authorized admin users to manage registered users and room
                  information.
                </li>

                <li>
                  Developed a user-facing hostel and room details page using
                  HTML and CSS.
                </li>
              </ul>

              <div className="project-tech">
                <span>C#</span>
                <span>ASP.NET Core</span>
                <span>ADO.NET</span>
                <span>EF Core</span>
                <span>SQL Server</span>
              </div>

              <div className="project-buttons">
                <a href="#" className="project-btn">
                  GitHub
                </a>

                <a href="#" className="project-btn">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-content">
              <p className="project-type">Full Stack Project</p>

              <h3>Employee Management System</h3>

              <ul className="project-description">
                <li>
                  Developed a full-stack web application using ASP.NET Core
                  Web API, React.js, JWT and SQL Server.
                </li>

                <li>
                  Implemented user registration and login with JWT-based
                  authentication.
                </li>

                <li>
                  Implemented role-based authorization for Admin and normal
                  users.
                </li>

                <li>
                  Admin users can add, update and delete employee records.
                </li>

                <li>
                  Normal users can securely view employee details based on
                  their permissions.
                </li>
              </ul>

              <div className="project-tech">
                <span>ASP.NET Core</span>
                <span>Web API</span>
                <span>React.js</span>
                <span>SQL Server</span>
                <span>JWT</span>
                <span>REST API</span>
              </div>

              <div className="project-buttons">
                <a href="#" className="project-btn">
                  GitHub
                </a>

                <a href="#" className="project-btn">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="section-title">
          <p>My Background</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <div className="education-year">
            <span>BE</span>
          </div>

          <div className="education-content">
            <h3>Bachelor of Engineering - Computer Science</h3>

            <p className="education-college">
              Computer Science and Engineering
            </p>

            <p>
              Completed my engineering degree in Computer Science and
              Engineering with a CGPA of 7.9.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-title">
          <p>My Professional Journey</p>
          <h2>Experience</h2>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>.NET Developer Trainee</h3>
              <p>Besant Technologies</p>
            </div>

            <span>Training</span>
          </div>

          <p className="experience-description">
            Completed .NET developer training with hands-on practice in C#,
            ASP.NET Core, Web API, Entity Framework Core, ADO.NET, SQL Server
            and React.js.
          </p>

          <div className="experience-skills">
            <span>C#</span>
            <span>ASP.NET Core</span>
            <span>ADO.NET</span>
            <span>Web API</span>
            <span>EF Core</span>
            <span>SQL Server</span>
            <span>React.js</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-title">
          <p>Get In Touch</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container">
          <div className="contact-text">
            <h3>Let's Work Together</h3>

            <p>
              I am currently looking for opportunities as a .NET Developer
              or Full Stack .NET Developer. If you have an opportunity or
              would like to connect, feel free to contact me.
            </p>
          </div>

          <div className="contact-details">
            <a
              href="mailto:jphariharan09@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">✉</div>

              <div>
                <h4>Email</h4>
                <p>jphariharan09@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919384137739" className="contact-item">
              <div className="contact-icon">☎</div>

              <div>
                <h4>Phone</h4>
                <p>+91 9384137739</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/hariharan-jp-35b573322/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">in</div>

              <div>
                <h4>LinkedIn</h4>
                <p>Connect with me</p>
              </div>
            </a>

            <a
              href="#"
              className="contact-item"
            >
              <div className="contact-icon">Git</div>

              <div>
                <h4>GitHub</h4>
                <p>View my projects</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>J P Hariharan</h3>

          <p>.NET Developer | Full Stack .NET Developer</p>

          <p className="copyright">
            © {new Date().getFullYear()} J P Hariharan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;