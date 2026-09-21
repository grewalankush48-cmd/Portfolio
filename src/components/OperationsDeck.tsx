'use client';

import { useState } from 'react';
import { projectsData, skillsData, educationData, personalInfo } from '../data/portfolioData';
import { Shield, Terminal, Cpu, GraduationCap, Mail, ExternalLink, Github, CheckCircle2, Copy, Check, Send, Sparkles, AlertCircle } from 'lucide-react';

export default function OperationsDeck() {
  const [activeTab, setActiveTab] = useState<'tools' | 'skills' | 'education' | 'comms'>('tools');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTag, setSelectedTag] = useState('All');
  const [simulatingProject, setSimulatingProject] = useState<string | null>(null);

  const tags = ['All', 'Python', 'OWASP Top 10', 'Next.js', 'Scapy', 'WebCrypto API'];

  const filteredProjects = selectedTag === 'All'
    ? projectsData
    : projectsData.filter((p) => p.tags.includes(selectedTag));

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const runSimulation = (projectId: string) => {
    setSimulatingProject(projectId);
    setTimeout(() => {
      setSimulatingProject(null);
    }, 2400);
  };

  return (
    <section id="operations" className="py-12 border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>TACTICAL COMMAND CENTER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Operations Matrix &amp; Cyber Arsenal
            </h2>
          </div>

          {/* Quick HUD Navigation Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#060914] border border-cyan-500/30 rounded-lg font-mono text-xs shadow-lg">
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-3.5 py-1.5 rounded flex items-center gap-1.5 transition-all ${
                activeTab === 'tools'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>TOOLS ({projectsData.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`px-3.5 py-1.5 rounded flex items-center gap-1.5 transition-all ${
                activeTab === 'skills'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>SKILLS ({skillsData.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 rounded flex items-center gap-1.5 transition-all ${
                activeTab === 'education'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMICS</span>
            </button>

            <button
              onClick={() => setActiveTab('comms')}
              className={`px-3.5 py-1.5 rounded flex items-center gap-1.5 transition-all ${
                activeTab === 'comms'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>COMMS</span>
            </button>
          </div>
        </div>

        {/* ================= TAB 1: SECURITY TOOLS (PROJECTS) ================= */}
        {activeTab === 'tools' && (
          <div className="space-y-6">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 font-mono text-xs items-center">
              <span className="text-slate-500 text-[11px] mr-1">FILTER_BY_STACK:</span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                    selectedTag === tag
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-[0_0_10px_rgba(0,245,255,0.2)]'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Grid of 6 Cyber Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="cyber-card rounded-xl p-5 flex flex-col justify-between space-y-4 relative group"
                >
                  {/* Glowing Corner Brackets */}
                  <div className="hud-bracket-tl"></div>
                  <div className="hud-bracket-tr"></div>
                  <div className="hud-bracket-bl"></div>
                  <div className="hud-bracket-br"></div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          CORE_TOOL
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {project.architectureNotes && (
                      <div className="p-2 rounded bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-slate-400 leading-tight">
                        <span className="text-cyan-400 block mb-0.5">// Architecture Heuristic:</span>
                        {project.architectureNotes}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-800/80 font-mono">
                    {project.metrics && (
                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-1.5 py-0.2 rounded bg-slate-950 border border-slate-800 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions: Live Test & GitHub */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <button
                        onClick={() => runSimulation(project.id)}
                        disabled={simulatingProject === project.id}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 text-[11px] flex items-center gap-1 transition-colors"
                      >
                        {simulatingProject === project.id ? (
                          <>
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                            <span className="text-amber-300">AUDITING...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3 text-cyan-400" />
                            <span>SIMULATE AUDIT</span>
                          </>
                        )}
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white"
                      >
                        <Github className="w-3.5 h-3.5 text-cyan-400" />
                        <span>REPO</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    </div>

                    {/* Live Simulation Output Box */}
                    {simulatingProject === project.id && (
                      <div className="p-2 rounded bg-cyan-950/80 border border-cyan-400/40 text-[10px] text-cyan-200 animate-fadeIn">
                        [SIMULATION] Executing automated vulnerability sweep on sandbox... Passed TLS 1.3 verification. Zero leaks found!
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 2: SKILL ARSENAL ================= */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="cyber-card rounded-xl p-4 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-[10px] text-cyan-400 uppercase tracking-wider">
                      // {skill.category}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300 font-bold">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white">
                    {skill.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800 font-mono">
                  {/* Glowing Meter */}
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-full shadow-[0_0_8px_#00f5ff]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  {/* Tool chips */}
                  <div className="flex flex-wrap gap-1">
                    {skill.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.2 rounded bg-slate-950/80 border border-slate-800 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= TAB 3: ACADEMICS & EDUCATION ================= */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {educationData.map((item) => (
              <div
                key={item.id}
                className="cyber-card rounded-xl p-5 space-y-3 font-mono"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-[10px] text-cyan-400 tracking-wider">
                      // PERIOD: {item.period}
                    </span>
                    <h3 className="text-base font-bold text-white font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs text-emerald-300">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                    {item.status}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ================= TAB 4: ENCRYPTED COMMS ================= */}
        {activeTab === 'comms' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-6 space-y-4">
              <div className="cyber-card rounded-xl p-6 space-y-5 font-mono">
                <div className="flex items-center gap-2 text-cyan-400 text-xs">
                  <Mail className="w-4 h-4" />
                  <span className="font-bold">TRANSMISSION_CHANNELS</span>
                </div>

                {/* Email Box */}
                <div className="p-3.5 rounded bg-slate-950 border border-cyan-500/30 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-slate-400">ENCRYPTED EMAIL</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-white hover:text-cyan-300">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-300 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Social Nodes */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded bg-slate-950 border border-slate-800 hover:border-cyan-400 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>/{personalInfo.githubUser}</span>
                  </a>

                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded bg-slate-950 border border-slate-800 hover:border-cyan-400 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="cyber-card rounded-xl p-6 space-y-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Send className="w-4 h-4" />
                  <span className="font-bold">DIRECT TRANSMISSION DISPATCH</span>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Transmission received! Ankush will reply shortly.");
                  }}
                  className="space-y-3"
                >
                  <div>
                    <label className="text-slate-400 block text-[10px] mb-1">CALLSIGN / NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Security Recruiter"
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 focus:border-cyan-400 text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[10px] mb-1">RETURN EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 focus:border-cyan-400 text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[10px] mb-1">MESSAGE PAYLOAD</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Discuss internship, DevSecOps role, or security tooling..."
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 focus:border-cyan-400 text-white outline-none font-sans"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/20"
                  >
                    DISPATCH ENCRYPTED MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
