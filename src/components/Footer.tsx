'use client';

import { personalInfo } from '../data/portfolioData';
import { ShieldAlert, Heart, Terminal, ArrowUp, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#050102] border-t border-red-500/25 py-10 font-mono text-xs text-slate-400 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-red-950/80 border border-red-500/60 flex items-center justify-center text-red-400">
              <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-orbitron">
                {personalInfo.name} {personalInfo.lastName}
              </div>
              <div className="text-[10px] text-red-400">
                OFFENSIVE SECURITY &amp; PYTHON DEV // UPES DEHRADUN
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 text-red-500" />
              <span>GitHub</span>
            </a>
            <span className="text-red-900">•</span>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <ExternalLink className="w-3.5 h-3.5 text-red-500" />
              <span>LinkedIn</span>
            </a>
            <span className="text-red-900">•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-red-950/50 border border-red-900/60 hover:border-red-500 text-red-300 hover:text-white transition-colors"
              title="Return to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-red-950 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Ankush Grewal. Red Team Cyber Defense Portfolio.
          </div>
          <div className="flex items-center gap-2 text-red-400/70">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
            <span>SYSTEM ENCRYPTED // TLS 1.3 // AIRGAP CERTIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
