export default function Portfolio() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 space-y-10 text-slate-300">
      {/* Header */}
      <header className="space-y-3 border-b border-slate-800 pb-6" id="header">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Ankush Grewal
        </h1>
        <p className="text-base text-slate-400">
          Cybersecurity Student &amp; Python Developer based in Mohali, India.
        </p>

        <div className="flex flex-wrap gap-4 text-sm pt-2">
          <a href="mailto:grewalankush48@gmail.com" id="link-email">
            Email
          </a>
          <span>·</span>
          <a
            href="https://github.com/grewalankush48-cmd"
            target="_blank"
            rel="noreferrer"
            id="link-github"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/ankush-grewal-9705a6299/"
            target="_blank"
            rel="noreferrer"
            id="link-linkedin"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="/Ankush_Grewal_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            id="link-resume"
          >
            Resume (PDF)
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="space-y-3" id="about">
        <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
          About Me
        </h2>
        <p className="text-sm leading-relaxed text-slate-300">
          Hi! I am Ankush Grewal, a Computer Applications student passionate about ethical hacking,
          network security, and building practical defensive security tools.
        </p>
        <p className="text-sm leading-relaxed text-slate-300">
          I enjoy experimenting with Python scripts, analyzing web vulnerabilities, studying network
          protocols, and learning how systems can be defended against real-world threats.
        </p>
      </section>

      {/* Skills Section */}
      <section className="space-y-3" id="skills">
        <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
          Skills
        </h2>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
          <li><strong>Languages:</strong> Python, JavaScript, HTML/CSS, Bash</li>
          <li><strong>Cybersecurity:</strong> Ethical Hacking, Vulnerability Assessment, Web Security Basics</li>
          <li><strong>Operating Systems &amp; Tools:</strong> Kali Linux, Linux CLI, Git, VS Code</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="space-y-4" id="projects">
        <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
          Projects
        </h2>

        <div className="space-y-5">
          <div className="space-y-1.5" id="project-1">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">
                Web Vulnerability Scanner
              </h3>
              <a
                href="https://github.com/grewalankush48-cmd/web-vulnerability-scanner"
                target="_blank"
                rel="noreferrer"
                className="text-xs"
              >
                View GitHub &rarr;
              </a>
            </div>
            <p className="text-sm text-slate-400">
              A Flask-based security scanner checking SSL/TLS headers, missing security flags, and configuration issues.
            </p>
            <p className="text-xs text-slate-500">
              Technologies: Python, Flask, Security
            </p>
          </div>

          <div className="space-y-1.5" id="project-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">
                CyberPulse
              </h3>
              <a
                href="https://github.com/grewalankush48-cmd/cyberpulse"
                target="_blank"
                rel="noreferrer"
                className="text-xs"
              >
                View GitHub &rarr;
              </a>
            </div>
            <p className="text-sm text-slate-400">
              Cybersecurity news platform gathering real-time RSS updates on CVEs and threat intelligence.
            </p>
            <p className="text-xs text-slate-500">
              Technologies: JavaScript, Next.js, RSS
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-3" id="education">
        <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
          Education
        </h2>
        <div className="space-y-3 text-sm">
          <div id="edu-1">
            <p className="font-semibold text-white">Bachelor of Computer Applications (BCA)</p>
            <p className="text-slate-400">University of Petroleum and Energy Studies (UPES), Dehradun (2024 – 2027)</p>
          </div>
          <div id="edu-2">
            <p className="font-semibold text-white">Practical Security Labs &amp; CTFs</p>
            <p className="text-slate-400">TryHackMe, Kali Linux Tools &amp; Defensive Labs (Ongoing)</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-3" id="contact">
        <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
          Contact
        </h2>
        <p className="text-sm text-slate-400">
          Feel free to reach out to me for project collaborations, internships, or questions:
        </p>
        <ul className="space-y-1.5 text-sm">
          <li>
            <strong>Email: </strong>
            <a href="mailto:grewalankush48@gmail.com">grewalankush48@gmail.com</a>
          </li>
          <li>
            <strong>GitHub: </strong>
            <a href="https://github.com/grewalankush48-cmd" target="_blank" rel="noreferrer">
              github.com/grewalankush48-cmd
            </a>
          </li>
          <li>
            <strong>LinkedIn: </strong>
            <a href="https://www.linkedin.com/in/ankush-grewal-9705a6299/" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex justify-between" id="footer">
        <span>© {new Date().getFullYear()} Ankush Grewal</span>
        <span>Personal Portfolio</span>
      </footer>
    </div>
  );
}
