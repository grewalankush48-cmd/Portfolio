'use client';

import { useState } from 'react';
import { projectsData, skillsData, educationData, personalInfo } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import { ShieldAlert, Terminal, Cpu, GraduationCap, Mail, ExternalLink, Github, CheckCircle2, Copy, Check, Send, Sparkles, Flame } from 'lucide-react';

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
    <section id="operations" className="py-12 border-b border-red-500/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-semibold">TACTICAL RED-OPS MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-orbitron">
              DEFENSE ARSENAL &amp; VULNERABILITY LABS
            </h2>
          </div>

          {/* Quick HUD Navigation Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#0b0103] border border-red-500/40 rounded-lg font-mono text-xs shadow-lg">
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-3.5 py-1.5 rounded flex items-center gap-1.5 transition-all font-semibold ${
                activeTab === 'tools'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold shadow-[0_0_15px_rgba(255,0,51,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-red-950/50'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>TOOLS ({projectsData.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`px-3.5 py-1.5 rounded flex items-center gap-1.5 transition-all font-semibold ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold shadow-[0_0_15px_rgba(255,0,51,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-red-950/50'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>SKILLS ({skillsData.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 rounded flex items-center gap-1.5 transition-all font-semibold ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold shadow-[0_0_15px_rgba(255,0,51,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-red-950/50'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMICS</span>
            </button>

            <button
              onClick={() => setActiveTab('comms')}
              className={`px-3.5 py-1.5 rounded flex items-center gap-1.5 transition-all font-semibold ${
                activeTab === 'comms'
                  ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold shadow-[0_0_15px_rgba(255,0,51,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-red-950/50'
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
              <span className="text-red-500 text-[11px] mr-1">// FILTER_STACK:</span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                    selectedTag === tag
                      ? 'bg-red-950 text-red-200 border border-red-500 font-bold shadow-[0_0_12px_rgba(255,0,51,0.3)]'
                      : 'bg-[#0a0103] border border-red-950 text-slate-400 hover:text-white hover:border-red-800'
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
                  className="cyber-card-blood rounded-xl p-5 flex flex-col justify-between space-y-4 relative group"
                >
                  {/* Glowing Corner Brackets */}
                  <div className="hud-corner-tl"></div>
                  <div className="hud-corner-tr"></div>
                  <div className="hud-corner-bl"></div>
                  <div className="hud-corner-br"></div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[9px] font-mono text-rose-300 bg-red-950/90 border border-red-500/50 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                          CORE_TOOL
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors font-orbitron">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {project.architectureNotes && (
                      <div className="p-2 rounded bg-[#090103] border border-red-900/60 text-[11px] font-mono text-slate-400 leading-tight">
                        <span className="text-red-400 block mb-0.5">// Architecture:</span>
                        {project.architectureNotes}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-2 border-t border-red-900/40 font-mono">
                    {project.metrics && (
                      <div className="flex items-center gap-1.5 text-[10px] text-red-300">
                        <CheckCircle2 className="w-3 h-3 text-red-500 shrink-0" />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-1.5 py-0.2 rounded bg-[#090103] border border-red-900/60 text-slate-400"
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
                        className="px-2.5 py-1 rounded bg-[#100204] border border-red-500/40 hover:border-red-400 text-red-300 hover:text-white text-[11px] flex items-center gap-1 transition-colors"
                      >
                        {simulatingProject === project.id ? (
                          <>
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                            <span className="text-red-300 font-bold">PENETRATING...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3 text-red-400" />
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
                        <Github className="w-3.5 h-3.5 text-red-400" />
                        <span>REPO</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    </div>

                    {/* Live Simulation Output Box */}
                    {simulatingProject === project.id && (
                      <div className="p-2 rounded bg-red-950/90 border border-red-500/60 text-[10px] text-red-200 animate-fadeIn">
                        [SIMULATION] Sweeping target attack surface... Handshake verified with TLS 1.3 curve X25519. Zero vulnerabilities exposed!
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
                className="cyber-card-blood rounded-xl p-4 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-[10px] text-red-400 uppercase tracking-wider">
                      // {skill.category}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#0a0103] border border-red-500/40 text-red-300 font-bold font-orbitron">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-orbitron">
                    {skill.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-red-900/40 font-mono">
                  {/* Glowing Meter in Blood Red */}
                  <div className="w-full h-1.5 bg-[#080103] rounded-full overflow-hidden border border-red-900/60">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-500 rounded-full shadow-[0_0_10px_#ff0033]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  {/* Tool chips */}
                  <div className="flex flex-wrap gap-1">
                    {skill.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.2 rounded bg-[#0a0103] border border-red-900/60 text-slate-300"
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
                className="cyber-card-blood rounded-xl p-5 space-y-3 font-mono"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-[10px] text-red-400 tracking-wider">
                      // PERIOD: {item.period}
                    </span>
                    <h3 className="text-base font-bold text-white font-orbitron">
                      {item.title}
                    </h3>
                    <p className="text-xs text-rose-300">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/80 border border-red-500/50 text-red-300 font-semibold">
                    {item.status}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
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
              <div className="cyber-card-blood rounded-xl p-6 space-y-5 font-mono">
                <div className="flex items-center gap-2 text-red-400 text-xs font-orbitron">
                  <Mail className="w-4 h-4" />
                  <span className="font-bold">SECURE_TRANSMISSION_CHANNELS</span>
                </div>

                {/* Email Box */}
                <div className="p-3.5 rounded bg-[#090103] border border-red-500/40 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-red-400 font-mono">ENCRYPTED EMAIL</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-white hover:text-red-400">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded bg-red-950 border border-red-500/50 hover:border-red-400 text-red-300 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-red-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Social Nodes */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded bg-[#090103] border border-red-900/60 hover:border-red-500 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-red-400" />
                    <span>/{personalInfo.githubUser}</span>
                  </a>

                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded bg-[#090103] border border-red-900/60 hover:border-red-500 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-rose-400" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="cyber-card-blood rounded-xl p-6 space-y-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-red-400 font-orbitron">
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
                    <label className="text-red-400/80 block text-[10px] mb-1">CALLSIGN / NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Red Team Lead / Recruiter"
                      className="w-full px-3 py-2 rounded bg-[#080103] border border-red-900/60 focus:border-red-500 text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-red-400/80 block text-[10px] mb-1">RETURN EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      className="w-full px-3 py-2 rounded bg-[#080103] border border-red-900/60 focus:border-red-500 text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-red-400/80 block text-[10px] mb-1">MESSAGE PAYLOAD</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Discuss internship, DevSecOps role, or security tooling..."
                      className="w-full px-3 py-2 rounded bg-[#080103] border border-red-900/60 focus:border-red-500 text-white outline-none font-sans"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(255,0,51,0.4)]"
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
