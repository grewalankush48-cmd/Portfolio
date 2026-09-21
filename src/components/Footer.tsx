import { personalInfo } from '../data/portfolioData';
import { Shield, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="py-10 bg-slate-950 border-t border-slate-900 font-mono text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Shield className="w-3 h-3" />
          </div>
          <span>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-emerald-400/80">ENCRYPTED_NODE // TLS 1.3</span>
          <span>·</span>
          <a href="#home" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
