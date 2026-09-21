import { useState } from 'react';
import {
  personalInfo,
  skillsData,
  projectsData,
  educationData,
} from './data/portfolioData';
import {
  Shield,
  Terminal,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  FileText,
  Menu,
  X,
  Code2,
  CheckCircle2,
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0b0f17]/90 backdrop-blur-md" id="main-nav">
        <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-mono font-semibold text-slate-100 hover:text-emerald-400 text-sm tracking-tight" id="site-logo">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>{personalInfo.fullName}</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-slate-200 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-200 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-200 transition-colors">Projects</a>
            <a href="#education" className="hover:text-slate-200 transition-colors">Education</a>
            <a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-slate-700 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 transition-colors"
              id="nav-github-link"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 text-slate-400 hover:text-slate-200"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-slate-800 bg-[#0e1420] px-5 py-3 flex flex-col gap-3 text-sm text-slate-300">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">Projects</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">Contact</a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-emerald-400 pt-2 border-t border-slate-800"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile ↗</span>
            </a>
          </div>
        )}
      </nav>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-5 py-10 space-y-16" id="home">
        {/* Simple Header / Hero */}
        <header className="space-y-4 pt-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400" id="status-pill">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{personalInfo.availability}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            {personalInfo.fullName}
          </h1>

          <p className="text-base sm:text-lg text-emerald-400 font-medium">
            {personalInfo.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-3.5 py-2 text-xs font-semibold rounded bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
              id="hero-projects-btn"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-3.5 py-2 text-xs font-semibold rounded border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800/40 transition-colors"
              id="hero-contact-btn"
            >
              Contact Me
            </a>
            <a
              href="/Ankush_Grewal_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
              id="hero-resume-btn"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Compact terminal preview */}
          <div className="mt-6 rounded-md border border-slate-800 bg-[#0e1422] p-4 font-mono text-xs text-slate-300 leading-relaxed shadow-sm" id="terminal-box">
            <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800/80 text-slate-500 text-[11px]">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>{personalInfo.terminalUser}</span>
            </div>
            <p className="text-emerald-400 font-semibold">$ whoami</p>
            <p className="text-slate-300">{personalInfo.fullName} &bull; Security Analyst &amp; Python Developer</p>
            <p className="text-emerald-400 font-semibold mt-2">$ focus</p>
            <p className="text-slate-400">Vulnerability Assessment, Network Defense, Automation Scripting</p>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="space-y-4 pt-4 border-t border-slate-800/70">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>01 //</span>
            <span>About</span>
          </div>
          <h2 className="text-xl font-bold text-slate-100">Profile &amp; Background</h2>
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed max-w-3xl">
            {personalInfo.longBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded border border-slate-800/80 bg-slate-900/40">
              <span className="block text-[10px] font-mono text-slate-500 uppercase">Focus</span>
              <span className="text-xs font-semibold text-slate-200">{personalInfo.focus}</span>
            </div>
            <div className="p-3 rounded border border-slate-800/80 bg-slate-900/40">
              <span className="block text-[10px] font-mono text-slate-500 uppercase">Interest</span>
              <span className="text-xs font-semibold text-slate-200">{personalInfo.interest}</span>
            </div>
            <div className="p-3 rounded border border-slate-800/80 bg-slate-900/40">
              <span className="block text-[10px] font-mono text-slate-500 uppercase">Location</span>
              <span className="text-xs font-semibold text-slate-200">{personalInfo.location}</span>
            </div>
            <div className="p-3 rounded border border-slate-800/80 bg-slate-900/40">
              <span className="block text-[10px] font-mono text-slate-500 uppercase">Level</span>
              <span className="text-xs font-semibold text-slate-200">{personalInfo.experienceLevel}</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-4 pt-4 border-t border-slate-800/70">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>02 //</span>
            <span>Technical Skills</span>
          </div>
          <h2 className="text-xl font-bold text-slate-100">Core Competencies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skillsData.map((skill) => (
              <div
                key={skill.number}
                className="p-3 rounded border border-slate-800 bg-[#0e1420] flex items-start gap-2.5"
                id={`skill-${skill.number}`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">{skill.title}</h3>
                  <p className="text-xs text-slate-400">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-4 pt-4 border-t border-slate-800/70">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>03 //</span>
            <span>Projects</span>
          </div>
          <h2 className="text-xl font-bold text-slate-100">Featured Work</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projectsData.map((project) => (
              <div
                key={project.number}
                className="p-4 rounded-lg border border-slate-800 bg-[#0e1420] flex flex-col justify-between"
                id={`project-${project.number}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>{project.category}</span>
                    <span>{project.number}</span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-100 flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{project.title}</span>
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 ml-2 shrink-0"
                    id={`project-link-${project.number}`}
                  >
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="space-y-4 pt-4 border-t border-slate-800/70">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>04 //</span>
            <span>Education</span>
          </div>
          <h2 className="text-xl font-bold text-slate-100">Academic &amp; Training</h2>

          <div className="space-y-3">
            {educationData.map((item) => (
              <div
                key={item.number}
                className="p-3.5 rounded border border-slate-800 bg-[#0e1420] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                id={`edu-${item.number}`}
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">{item.title}</h3>
                  <p className="text-xs text-slate-400">{item.institution}</p>
                </div>
                <span className="text-xs font-mono text-slate-500">{item.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-4 pt-4 border-t border-slate-800/70">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>05 //</span>
            <span>Contact</span>
          </div>
          <h2 className="text-xl font-bold text-slate-100">Get In Touch</h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Interested in security collaboration, vulnerability research, or tool development?
            Feel free to contact me directly:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3.5 rounded border border-slate-800 bg-[#0e1420] hover:border-slate-700 hover:bg-slate-800/40 transition-colors flex items-center gap-3"
              id="contact-email"
            >
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="overflow-hidden">
                <span className="block text-[10px] font-mono text-slate-500 uppercase">Email</span>
                <span className="text-xs font-medium text-slate-200 truncate block">{personalInfo.email}</span>
              </div>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded border border-slate-800 bg-[#0e1420] hover:border-slate-700 hover:bg-slate-800/40 transition-colors flex items-center gap-3"
              id="contact-github"
            >
              <Github className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="overflow-hidden">
                <span className="block text-[10px] font-mono text-slate-500 uppercase">GitHub</span>
                <span className="text-xs font-medium text-slate-200 truncate block">{personalInfo.githubUser}</span>
              </div>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded border border-slate-800 bg-[#0e1420] hover:border-slate-700 hover:bg-slate-800/40 transition-colors flex items-center gap-3"
              id="contact-linkedin"
            >
              <Linkedin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="overflow-hidden">
                <span className="block text-[10px] font-mono text-slate-500 uppercase">LinkedIn</span>
                <span className="text-xs font-medium text-slate-200 truncate block">Profile</span>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500" id="main-footer">
        <div className="max-w-4xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-600">Cybersecurity &bull; Tooling &bull; Defense</p>
        </div>
      </footer>
    </div>
  );
}
