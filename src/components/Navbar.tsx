'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Shield, Terminal, Menu, X, ExternalLink, Download, Radio } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'OPERATIONS', href: '#operations' },
    { name: 'SECURITY_TOOLS', href: '#operations' },
    { name: 'TERMINAL', href: '#terminal' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 w-full z-50 bg-[#04060f]/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl shadow-black/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          id="nav-brand-logo"
          className="flex items-center gap-3 font-mono group"
        >
          <div className="w-9 h-9 rounded bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all relative">
            <Shield className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>{personalInfo.name}</span>
              <span className="text-cyan-400 font-normal">{personalInfo.lastName}</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              SYS_ID // CYBER_DEFENSE
            </span>
          </div>
        </a>

        {/* Live Audio/Frequency Visualizer & Military Clock */}
        <div className="hidden lg:flex items-center gap-4 px-3 py-1 rounded bg-slate-950/90 border border-slate-800 font-mono text-[11px]">
          {/* Animated Audio Equalizer */}
          <div className="flex items-end gap-0.5 h-3.5 px-1">
            <span className="w-1 bg-cyan-400 rounded-sm animate-pulse" style={{ height: '60%' }}></span>
            <span className="w-1 bg-emerald-400 rounded-sm animate-pulse" style={{ height: '100%', animationDelay: '0.2s' }}></span>
            <span className="w-1 bg-cyan-400 rounded-sm animate-pulse" style={{ height: '40%', animationDelay: '0.4s' }}></span>
            <span className="w-1 bg-emerald-300 rounded-sm animate-pulse" style={{ height: '80%', animationDelay: '0.1s' }}></span>
            <span className="w-1 bg-cyan-400 rounded-sm animate-pulse" style={{ height: '50%', animationDelay: '0.3s' }}></span>
          </div>
          <span className="text-slate-500">|</span>
          <div className="text-slate-300 flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span className="text-slate-400">SYS_TIME:</span>
            <span className="text-emerald-400 font-bold">{timeStr || '00:00:00'}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors py-1 relative group tracking-wider"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 font-mono">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noreferrer"
            id="nav-resume-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-200 hover:border-cyan-400 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>RESUME.PDF</span>
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            id="nav-github-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 transition-all shadow-lg shadow-cyan-500/20"
          >
            <span>GITHUB</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          id="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-[#04060f]/98 border-b border-cyan-500/30 px-6 py-5 space-y-3 font-mono text-sm backdrop-blur-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-cyan-400 border-b border-slate-900 last:border-b-0"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded text-xs border border-cyan-500/30 bg-cyan-950/50 text-cyan-300"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume (PDF)
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded text-xs bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
