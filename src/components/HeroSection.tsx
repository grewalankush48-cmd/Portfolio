import { personalInfo } from '../data/portfolioData';
import { Shield, Terminal, ArrowDown, ExternalLink, Code2, Lock, Cpu } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/60">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Headline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Category Tag */}
            <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">
              // {personalInfo.headlineCategory}
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Defending Systems.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Auditing Vulnerabilities.
              </span>
            </h1>

            {/* Tagline & Bio */}
            <p className="text-lg text-slate-300 font-medium leading-relaxed">
              {personalInfo.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              {personalInfo.bio} {personalInfo.bioSecondary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-md shadow-emerald-500/20"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href="#terminal"
                id="hero-cta-terminal"
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:border-slate-500 transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>LAUNCH TERMINAL</span>
              </a>
              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
              >
                <span>GET IN TOUCH</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 font-mono">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-xs text-slate-400">Security Tools Built</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-emerald-400">UPES</div>
                <div className="text-xs text-slate-400">BCA Cyber Track</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-cyan-400">Kali &amp; Python</div>
                <div className="text-xs text-slate-400">Core Toolkit</div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Simulation Snapshot */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 shadow-2xl shadow-black overflow-hidden font-mono text-xs">
              {/* Header Bar */}
              <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-slate-400 text-[11px] ml-2 font-mono">bash // security-audit.sh</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">LIVE_NODE: READY</span>
              </div>

              {/* Terminal Body */}
              <div className="p-4 space-y-2.5 text-slate-300 leading-relaxed">
                <div className="text-slate-400">
                  <span className="text-emerald-400">ankush@kali-box</span>:<span className="text-cyan-400">~</span>$ whoami
                </div>
                <div className="text-emerald-300 pl-2 border-l-2 border-emerald-500/40">
                  Ankush Grewal // Cybersecurity Analyst &amp; Developer
                </div>

                <div className="text-slate-400 pt-1">
                  <span className="text-emerald-400">ankush@kali-box</span>:<span className="text-cyan-400">~</span>$ cat /proc/specialization
                </div>
                <div className="text-slate-300 pl-2 border-l-2 border-cyan-500/40 space-y-0.5">
                  <p>• Web Vulnerability Scanning &amp; Header Auditing</p>
                  <p>• Python Security Tooling &amp; Raw Sockets</p>
                  <p>• Penetration Testing (OWASP Top 10, NIST)</p>
                  <p>• Linux System Hardening &amp; Packet Analysis</p>
                </div>

                <div className="text-slate-400 pt-1">
                  <span className="text-emerald-400">ankush@kali-box</span>:<span className="text-cyan-400">~</span>$ security-status --verbose
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">THREAT_RADAR</span>
                    <span className="text-emerald-400 font-bold">PASSING (0 CVES)</span>
                  </div>
                  <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">CIPHER_SUITE</span>
                    <span className="text-cyan-400 font-bold">AES-256-GCM / TLS 1.3</span>
                  </div>
                </div>

                <div className="text-slate-400 pt-1 flex items-center gap-1.5">
                  <span className="text-emerald-400">ankush@kali-box</span>:<span className="text-cyan-400">~</span>$ 
                  <span className="w-2 h-4 bg-emerald-400 inline-block animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
