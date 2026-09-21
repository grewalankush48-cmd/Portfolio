import { personalInfo } from '../data/portfolioData';
import { Shield, ArrowUp, Lock, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="py-8 bg-[#03050c] border-t border-cyan-500/20 font-mono text-xs text-slate-500 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-6 h-6 rounded bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <span>© {new Date().getFullYear()} {personalInfo.fullName}. System Hardened &amp; Monitored.</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-cyan-400/90 flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-emerald-400" />
            TLS 1.3 // AES-256-GCM
          </span>
          <span>·</span>
          <a href="#home" className="hover:text-cyan-300 flex items-center gap-1 transition-colors text-slate-400">
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3 text-cyan-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
