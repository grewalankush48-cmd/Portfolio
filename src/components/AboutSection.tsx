import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, Terminal, MapPin, Mail, Award, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      title: 'Vulnerability Assessment & Web Security',
      desc: 'Hands-on auditing for OWASP Top 10 flaws including SQLi, XSS, CSRF, insecure direct object references, and HTTP security header compliance.',
    },
    {
      title: 'Python Tool Development',
      desc: 'Developing automated vulnerability scanners, multi-threaded port reconnaissance utilities, and packet inspection sniffers using Python and Scapy.',
    },
    {
      title: 'Kali Linux & Systems Hardening',
      desc: 'Proficient in Unix internals, bash automation, network configuration, firewall rules (iptables/ufw), and running defensive CTF challenges.',
    },
    {
      title: 'Full-Stack & Secure Engineering',
      desc: 'Modern web engineering with Next.js, React, and TypeScript while enforcing zero-trust client security and secure API practices.',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>ABOUT THE ANALYST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background &amp; Technical Discipline
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            A look into my academic journey at UPES, self-driven cybersecurity labs, and practical defensive tool engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Hello! I am <strong className="text-white">{personalInfo.fullName}</strong>, an aspiring cybersecurity analyst and software developer currently pursuing my Bachelor of Computer Applications (BCA) at the University of Petroleum and Energy Studies (UPES), Dehradun.
              </p>
              <p>
                My passion lies at the intersection of offensive security understanding and defensive software engineering. Rather than just relying on off-the-shelf security scanners, I write custom Python utilities and socket scripts to inspect network traffic, test security headers, and analyze vulnerability attack surfaces.
              </p>
              <p>
                I actively practice on platforms like TryHackMe, PortSwigger Web Security Academy, and build open-source tools with real-world application in DevSecOps and vulnerability triage.
              </p>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-emerald-300">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
              <div className="bg-slate-900/80 border border-slate-800/80 p-3 rounded">
                <div className="text-emerald-400 font-bold text-lg">UPES</div>
                <div className="text-[11px] text-slate-400">BCA 2024-27</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800/80 p-3 rounded">
                <div className="text-cyan-400 font-bold text-lg">Python 3</div>
                <div className="text-[11px] text-slate-400">Tooling &amp; Scapy</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800/80 p-3 rounded">
                <div className="text-amber-400 font-bold text-lg">Kali Linux</div>
                <div className="text-[11px] text-slate-400">Primary OS</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800/80 p-3 rounded">
                <div className="text-emerald-400 font-bold text-lg">Next.js</div>
                <div className="text-[11px] text-slate-400">Secure Web</div>
              </div>
            </div>
          </div>

          {/* Core Competencies Cards */}
          <div className="lg:col-span-5 space-y-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 p-4 rounded-lg space-y-1.5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
