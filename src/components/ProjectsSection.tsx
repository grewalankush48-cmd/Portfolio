'use client';

import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Github, Terminal, Shield, CheckCircle } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'Python', 'OWASP Top 10', 'Next.js', 'Scapy', 'WebCrypto API', 'Kali Linux'];

  const filteredProjects = selectedTag === 'All'
    ? projectsData
    : projectsData.filter((p) => p.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>SECURITY REPOSITORIES &amp; RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered Defensive &amp; Auditing Tools
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            Real security tools crafted for vulnerability discovery, TLS inspection, threat feed monitoring, and packet intrusion alerting.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedTag === tag
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-lg p-5 flex flex-col justify-between space-y-4 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2 py-0.5 rounded">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {project.architectureNotes && (
                  <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/80 text-[11px] font-mono text-slate-400 leading-normal">
                    <span className="text-emerald-400 block mb-0.5">// Architecture:</span>
                    {project.architectureNotes}
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800/60">
                {/* Metrics */}
                {project.metrics && (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* External Link */}
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 group/link"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
