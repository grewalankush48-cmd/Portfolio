'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ShieldAlert, Menu, X, ExternalLink, Download, Radio, Flame } from 'lucide-react';

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
    { name: 'ARSENAL', href: '#operations' },
    { name: 'TERMINAL', href: '#terminal' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 w-full z-50 bg-[#080103]/90 backdrop-blur-xl border-b border-red-500/30 shadow-2xl shadow-black/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          id="nav-brand-logo"
          className="flex items-center gap-3 font-orbitron group"
        >
          <div className="w-9 h-9 rounded bg-red-950/80 border border-red-500/60 flex items-center justify-center text-red-400 group-hover:border-red-400 group-hover:shadow-[0_0_20px_#ff0033] transition-all relative">
            <ShieldAlert className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold tracking-wider text-white flex items-center gap-1.5">
              <span>{personalInfo.name}</span>
              <span className="text-red-500 font-normal">{personalInfo.lastName}</span>
            </div>
            <span className="text-[10px] text-red-400/80 font-mono tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              DEFCON_1 // RED_TEAM
            </span>
          </div>
        </a>

        {/* Live Audio Frequency Spectrum & Military LED Clock */}
        <div className="hidden lg:flex items-center gap-4 px-3 py-1 rounded bg-[#0d0205] border border-red-900/60 font-mono text-[11px]">
          {/* Blood Red Animated Equalizer */}
          <div className="flex items-end gap-0.5 h-4 px-1">
            <span className="w-1 bg-red-500 rounded-sm animate-pulse" style={{ height: '70%' }}></span>
            <span className="w-1 bg-rose-400 rounded-sm animate-pulse" style={{ height: '100%', animationDelay: '0.2s' }}></span>
            <span className="w-1 bg-red-600 rounded-sm animate-pulse" style={{ height: '45%', animationDelay: '0.4s' }}></span>
            <span className="w-1 bg-red-400 rounded-sm animate-pulse" style={{ height: '85%', animationDelay: '0.1s' }}></span>
            <span className="w-1 bg-rose-500 rounded-sm animate-pulse" style={{ height: '55%', animationDelay: '0.3s' }}></span>
          </div>
          <span className="text-red-900">|</span>
          <div className="text-slate-300 flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-red-500 animate-pulse" />
            <span className="text-slate-400">RED_TIME:</span>
            <span className="text-red-400 font-bold font-mono tracking-widest">{timeStr || '00:00:00'}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase()}`}
              className="hover:text-red-400 transition-colors py-1 relative group tracking-wider font-semibold"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 via-rose-500 to-red-400 transition-all duration-200 group-hover:w-full shadow-[0_0_8px_#ff0033]"></span>
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-red-500/40 bg-red-950/40 hover:bg-red-900/60 text-red-200 hover:border-red-400 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-red-400" />
            <span>RESUME.PDF</span>
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            id="nav-github-btn"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all shadow-lg shadow-red-600/30 hover:shadow-red-500/50"
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
          className="md:hidden p-2 rounded text-red-400 hover:text-white hover:bg-red-950/80 border border-red-900/60 transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5 text-red-400" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-[#080103]/98 border-b border-red-500/40 px-6 py-5 space-y-3 font-mono text-sm backdrop-blur-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-red-400 border-b border-red-950 last:border-b-0"
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
              className="flex items-center justify-center gap-2 py-2.5 rounded text-xs border border-red-500/40 bg-red-950/50 text-red-300"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume (PDF)
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded text-xs bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold"
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
