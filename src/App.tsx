import { useState } from 'react';
import {
  personalInfo,
  skillsData,
  projectsData,
  educationData,
  socialLinks,
} from './data/portfolioData';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="website">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar" id="main-nav">
        <div className="nav-container">
          <div className="logo" id="site-logo">
            {personalInfo.name} <span>{personalInfo.lastName}</span>
          </div>

          <button
            className="menu-button"
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${menuOpen ? 'show' : ''}`} id="nav-links-menu">
            <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a>
            <a href="#education" onClick={() => setMenuOpen(false)}>EDUCATION</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-cv"
              id="github-profile-link"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-grid"></div>

        <div className="hero-container">
          <div className="hero-left">
            <div className="online-status" id="status-pill">
              <span></span> {personalInfo.availability}
            </div>

            <div className="hero-label">{personalInfo.headlineCategory}</div>

            <h1>
              {personalInfo.name} <br />
              <span>{personalInfo.lastName}</span>
            </h1>

            <h2>
              {personalInfo.tagline}
            </h2>

            <p className="hero-description">{personalInfo.bio}</p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button" id="btn-view-projects">
                VIEW PROJECTS <span>↓</span>
              </a>
              <a href="#contact" className="outline-button" id="btn-contact-me">
                GET IN TOUCH
              </a>
            </div>

            <div className="social-row">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="social-hero-github"
              >
                GITHUB ↗
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                id="social-hero-email"
              >
                EMAIL ↗
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                id="social-hero-linkedin"
              >
                LINKEDIN ↗
              </a>
            </div>
          </div>

          {/* TERMINAL */}
          <div className="terminal-card" id="terminal-preview">
            <div className="terminal-header">
              <div className="terminal-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>{personalInfo.terminalUser}</span>
              <span>● ONLINE</span>
            </div>

            <div className="terminal-body">
              <p className="terminal-green">$ whoami</p>
              <p>
                <b>{personalInfo.fullName}</b> — {personalInfo.tagline}
              </p>
              <br />
              <p className="terminal-green">$ cat focus_areas.txt</p>
              <p>
                - Penetration Testing & Vulnerability Assessment<br />
                - Python Security Tooling & Network Automation<br />
                - Hardened Linux Systems & Web App Defense
              </p>
              <br />
              <p className="terminal-green">$ ping -c 1 defense-grid</p>
              <p>64 bytes from security-lab: icmp_seq=1 ttl=64 time=0.042 ms</p>
              <p className="terminal-green">$ sys_status</p>
              <p>
                STATUS: <b>READY_FOR_DEPLOYMENT</b>
              </p>
              <p>
                PROMPT: <span className="cursor-line">█</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="dashboard-section" id="about">
        <div className="section-title">
          <span>01 /</span>
          <h2>ABOUT ME</h2>
        </div>

        <div className="about-layout">
          <div className="large-card about-main" id="about-card-main">
            <div className="card-top">
              <span>PROFILE</span>
              <span>01</span>
            </div>

            <h3>Security Analyst & Practical Tool Builder</h3>

            {personalInfo.longBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="side-cards">
            <div className="info-card" id="info-focus">
              <span>PRIMARY FOCUS</span>
              <strong>{personalInfo.focus}</strong>
            </div>

            <div className="info-card" id="info-interest">
              <span>INTEREST</span>
              <strong>{personalInfo.interest}</strong>
            </div>

            <div className="info-card" id="info-location">
              <span>LOCATION</span>
              <strong>{personalInfo.location}</strong>
            </div>

            <div className="info-card" id="info-role">
              <span>ROLE LEVEL</span>
              <strong>{personalInfo.experienceLevel}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="dashboard-section" id="skills">
        <div className="section-title">
          <span>02 /</span>
          <h2>TECHNICAL SKILLS</h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div className="skill-card" key={skill.number} id={`skill-card-${skill.number}`}>
              <div className="skill-number">{skill.number}</div>
              <div className="skill-content">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
              <div className="skill-arrow">↗</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="dashboard-section" id="projects">
        <div className="section-title">
          <span>03 /</span>
          <h2>FEATURED PROJECTS</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.number} id={`project-card-${project.number}`}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-icon">&lt;/&gt;</div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                id={`project-link-${project.number}`}
              >
                VIEW ON GITHUB <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="dashboard-section" id="education">
        <div className="section-title">
          <span>04 /</span>
          <h2>EDUCATION & CERTIFICATIONS</h2>
        </div>

        <div className="education-card" id="education-main-card">
          <div className="education-main">
            <div className="education-label">LEARNING PATHWAY</div>
            <h3>Continuous Security Research</h3>
            <p>
              Actively mastering offensive tactics and defensive architectures through
              rigorous practical labs, university systems engineering, and dedicated
              cybersecurity platforms.
            </p>
          </div>

          <div className="learning-list">
            {educationData.map((item) => (
              <div className="learning-item" key={item.number} id={`edu-item-${item.number}`}>
                <span>{item.number}</span>
                <div>
                  <strong>{item.title}</strong>
                  <div style={{ color: '#64748b', fontSize: '11px', marginTop: '3px' }}>
                    {item.institution} ({item.period})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="dashboard-section contact-section" id="contact">
        <div className="section-title">
          <span>05 /</span>
          <h2>GET IN TOUCH</h2>
        </div>

        <div className="contact-card" id="contact-main-card">
          <div>
            <div className="contact-label">COMMUNICATION</div>
            <h3>Let's Collaborate</h3>
            <p>
              Open for cybersecurity consulting, security auditing roles, and open-source
              development. Feel free to reach out directly via email or GitHub.
            </p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`} id="contact-email-link">
              <span>EMAIL</span>
              {personalInfo.email}
              <b>↗</b>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              id="contact-github-link"
            >
              <span>GITHUB</span>
              {personalInfo.githubUser}
              <b>↗</b>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              id="contact-linkedin-link"
            >
              <span>LINKEDIN</span>
              LinkedIn Profile
              <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer" id="main-footer">
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</div>
          <div>CYBERSECURITY &amp; SYSTEM DEFENSE</div>
        </div>
      </footer>
    </div>
  );
}
