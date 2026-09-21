'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Shield, Terminal, Menu, X, ExternalLink, Download } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'TERMINAL', href: '#terminal' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-slate-950/60 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          id="nav-brand-logo"
          className="flex items-center gap-2.5 font-mono group"
        >
          <div className="w-8 h-8 rounded bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
            <Shield className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>{personalInfo.name}</span>
              <span className="text-emerald-400 font-normal">{personalInfo.lastName}</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              SEC_ID // ANALYST
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase()}`}
              className="hover:text-emerald-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noreferrer"
            id="nav-resume-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:border-slate-500 transition-all"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>RESUME</span>
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            id="nav-github-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-sm shadow-emerald-500/20"
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
          className="md:hidden p-2 rounded text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-4 space-y-3 font-mono text-sm"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-emerald-400 border-b border-slate-900 last:border-b-0"
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
              className="flex items-center justify-center gap-2 py-2 rounded text-xs border border-slate-700 bg-slate-900 text-slate-200"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              Download Resume (PDF)
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 rounded text-xs bg-emerald-500 text-slate-950 font-bold"
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
