import { personalInfo, skills, projects, education } from "./data";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 space-y-10 text-slate-300">
      {/* Header */}
      <header className="space-y-3 border-b border-slate-800 pb-6" id="header">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          {personalInfo.fullName}
        </h1>
        <p className="text-base text-slate-400">
          Cybersecurity Student &amp; Python Developer based in {personalInfo.location}.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-sm pt-2">
          <a
            href={`mailto:${personalInfo.email}`}
            id="link-email"
          >
            Email
          </a>
          <span>·</span>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            id="link-github"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            id="link-linkedin"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={personalInfo.resumePath}
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
          Hi! I am {personalInfo.fullName}, a Computer Applications student passionate about ethical hacking,
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
          {skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.category}: </strong>
              <span>{skill.items}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="space-y-4" id="projects">
        <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
          Projects
        </h2>

        <div className="space-y-5">
          {projects.map((project) => (
            <div key={project.id} className="space-y-1.5" id={`project-${project.id}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs"
                >
                  View GitHub &rarr;
                </a>
              </div>
              <p className="text-sm text-slate-400">
                {project.description}
              </p>
              <p className="text-xs text-slate-500">
                Technologies: {project.tags.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-3" id="education">
        <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
          Education
        </h2>
        <div className="space-y-3 text-sm">
          {education.map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-white">{item.degree}</p>
              <p className="text-slate-400">{item.institution} ({item.period})</p>
            </div>
          ))}
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
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </li>
          <li>
            <strong>GitHub: </strong>
            <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
              github.com/{personalInfo.githubUser}
            </a>
          </li>
          <li>
            <strong>LinkedIn: </strong>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex justify-between" id="footer">
        <span>© {new Date().getFullYear()} {personalInfo.fullName}</span>
        <span>Personal Portfolio</span>
      </footer>
    </main>
  );
}
