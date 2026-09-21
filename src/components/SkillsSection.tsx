'use client';

import { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Shield, Terminal, Cpu, Cloud, Code } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Defensive' | 'Offensive' | 'Programming' | 'Systems' | 'Cloud'>('All');

  const categories = ['All', 'Defensive', 'Offensive', 'Programming', 'Systems', 'Cloud'] as const;

  const filteredSkills = activeTab === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Security Arsenal &amp; Tech Stack
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            Proficiencies across ethical penetration testing, automated vulnerability inspection, Python socket scripting, and Unix hardening.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1.5 rounded transition-colors ${
                activeTab === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-slate-900/50 border border-slate-800 hover:border-slate-700 p-5 rounded-lg space-y-4 transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                    // {skill.category}
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {skill.title}
                  </h3>
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {skill.level}%
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Tools Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skill.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
