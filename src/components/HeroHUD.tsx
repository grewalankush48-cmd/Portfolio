'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Shield, Terminal, ArrowDown, ExternalLink, Activity, Radio, Cpu, Lock, Crosshair } from 'lucide-react';

export default function HeroHUD() {
  const roles = [
    'ETHICAL HACKER & PENTESTER',
    'PYTHON SECURITY TOOL BUILDER',
    'VULNERABILITY RESEARCHER',
    'UPES BCA CYBERSECURITY CADET',
    'NETWORK PACKET FORENSICS',
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section id="home" className="relative pt-32 pb-14 overflow-hidden border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Command & Identity */}
          <div className="lg:col-span-7 space-y-5">
            {/* Status & Tactical Target Lock */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{personalInfo.availability}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400">
                <Crosshair className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span>TARGET: DEVSECOPS_2026</span>
              </div>
            </div>

            {/* Rotating Cyber Discipline */}
            <div className="font-mono text-xs text-emerald-400 flex items-center gap-2 tracking-widest">
              <span className="text-slate-500">// ACTIVE_DISCIPLINE:</span>
              <span className="font-bold border-b border-emerald-500/60 pb-0.5 text-emerald-300">
                {roles[roleIndex]}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                SYS_PROFILE // AUTHORIZED OPERATOR
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                ANKUSH{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 cyber-glow-cyan">
                  GREWAL
                </span>
              </h1>
            </div>

            {/* Tagline & Compact Bio */}
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              Undergraduate Computer Applications student at UPES specializing in ethical penetration testing, vulnerability discovery, network protocol inspection, and automated Python security tooling.
            </p>

            {/* Tactical Action Triggers */}
            <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs">
              <a
                href="#operations"
                id="hero-engage-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transform hover:-translate-y-0.5"
              >
                <Shield className="w-4 h-4" />
                <span>OPERATIONS DECK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#terminal"
                id="hero-terminal-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-300 hover:border-cyan-300 transition-all shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>KALI CONSOLE</span>
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noreferrer"
                id="hero-resume-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-slate-800 bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                <span>RESUME</span>
              </a>
            </div>

            {/* Quick Tactical Metrics Row */}
            <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-800/80 font-mono text-center">
              <div className="bg-[#060914] border border-cyan-500/20 p-2 rounded">
                <div className="text-cyan-400 font-bold text-base">6+</div>
                <div className="text-[10px] text-slate-400">Tools Built</div>
              </div>
              <div className="bg-[#060914] border border-emerald-500/20 p-2 rounded">
                <div className="text-emerald-400 font-bold text-base">UPES</div>
                <div className="text-[10px] text-slate-400">BCA Track</div>
              </div>
              <div className="bg-[#060914] border border-purple-500/20 p-2 rounded">
                <div className="text-purple-300 font-bold text-base">OWASP</div>
                <div className="text-[10px] text-slate-400">Top 10 Labs</div>
              </div>
              <div className="bg-[#060914] border border-amber-500/20 p-2 rounded">
                <div className="text-amber-400 font-bold text-base">0-DAY</div>
                <div className="text-[10px] text-slate-400">Heuristics</div>
              </div>
            </div>
          </div>

          {/* Right Column: 360° Rotating Cyber Sonar Radar & Telemetry HUD */}
          <div className="lg:col-span-5">
            <div className="cyber-card rounded-xl p-5 relative overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/30">
              {/* Corner Brackets */}
              <div className="hud-bracket-tl"></div>
              <div className="hud-bracket-tr"></div>
              <div className="hud-bracket-bl"></div>
              <div className="hud-bracket-br"></div>

              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="text-cyan-300 font-bold">RADAR_SWEEP // ACTIVE_SONAR</span>
                </div>
                <span className="text-[11px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                  SHIELDS: 99.8%
                </span>
              </div>

              {/* Circular Sonar Radar Canvas / Widget */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto my-3 flex items-center justify-center">
                {/* Concentric rings */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/20"></div>
                <div className="absolute inset-6 rounded-full border border-cyan-500/30 border-dashed"></div>
                <div className="absolute inset-12 rounded-full border border-cyan-500/40"></div>
                <div className="absolute inset-20 rounded-full border border-emerald-500/50"></div>

                {/* Crosshairs */}
                <div className="absolute w-full h-[1px] bg-cyan-500/20"></div>
                <div className="absolute h-full w-[1px] bg-cyan-500/20"></div>

                {/* 360° Rotating Radar Sweep Cone */}
                <div
                  className="absolute inset-0 rounded-full animate-radar pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, rgba(0, 245, 255, 0.4) 0deg, rgba(0, 245, 255, 0.05) 60deg, transparent 60deg)',
                  }}
                ></div>

                {/* Center Core */}
                <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#00f5ff] flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>

                {/* Radar Blips (Threat targets detected & secured) */}
                <div className="absolute top-10 right-14 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-ping" style={{ animationDuration: '2.5s' }}></div>
                <div className="absolute bottom-12 left-16 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5ff] animate-ping" style={{ animationDuration: '3.2s' }}></div>
                <div className="absolute top-20 left-10 w-1.5 h-1.5 rounded-full bg-amber-400"></div>

                {/* Degree markings */}
                <span className="absolute top-1 text-[9px] font-mono text-cyan-400/70">000°</span>
                <span className="absolute right-1 text-[9px] font-mono text-cyan-400/70">090°</span>
                <span className="absolute bottom-1 text-[9px] font-mono text-cyan-400/70">180°</span>
                <span className="absolute left-1 text-[9px] font-mono text-cyan-400/70">270°</span>
              </div>

              {/* Bottom Real-time Telemetry Grid */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-cyan-500/20 font-mono text-[11px]">
                <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">ENCRYPT_ALGO</span>
                  <span className="text-cyan-300 font-bold">AES-256-GCM</span>
                </div>
                <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">ACTIVE_MONITOR</span>
                  <span className="text-emerald-400 font-bold">SCAPY // TCP_DUMP</span>
                </div>
                <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">CORE_OS</span>
                  <span className="text-purple-300 font-bold">KALI LINUX x86_64</span>
                </div>
                <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">LATENCY</span>
                  <span className="text-cyan-400 font-bold">9ms [UPES_NODE]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
