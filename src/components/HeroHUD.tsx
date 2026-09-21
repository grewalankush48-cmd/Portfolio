'use client';

import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import TypewriterText from './TypewriterText';
import { ShieldAlert, Terminal, ArrowDown, ExternalLink, Activity, Radio, Cpu, Lock, Crosshair, Flame, Skull } from 'lucide-react';

export default function HeroHUD() {
  const roles = [
    'OFFENSIVE RED TEAM CYBERSECURITY CADET',
    'PYTHON EXPLOIT & TOOL CRAFTSMAN',
    'OWASP TOP 10 VULNERABILITY RESEARCHER',
    'UPES DEHRADUN // DEFENSE RESEARCH LAB',
    'ZERO-DAY HEURISTICS & RAW SOCKETS',
  ];

  return (
    <section id="home" className="relative pt-32 pb-14 overflow-hidden border-b border-red-500/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Command & Identity */}
          <div className="lg:col-span-7 space-y-5">
            {/* Status & Tactical Target Lock */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-950/80 border border-red-500/50 text-red-300 shadow-[0_0_20px_rgba(255,0,51,0.35)]">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span className="font-semibold">{personalInfo.availability}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e0205] border border-red-900/60 text-[11px] font-mono text-red-300">
                <Crosshair className="w-3.5 h-3.5 text-red-500 animate-spin" style={{ animationDuration: '8s' }} />
                <span>RED_OPERATION: 2026_ACTIVE</span>
              </div>
            </div>

            {/* Dynamic Typewriter Effect for Cyber Roles */}
            <div className="font-mono text-xs text-red-400 flex items-center gap-2 tracking-widest min-h-[28px]">
              <span className="text-red-600">// DEPLOYED_ROLE:</span>
              <TypewriterText
                phrases={roles}
                typingSpeed={50}
                deletingSpeed={30}
                pauseDuration={2400}
                className="text-red-300 font-bold border-b border-red-500/60 pb-0.5"
              />
            </div>

            {/* Headline with Hacker Decrypt Text Scrambler */}
            <div className="space-y-1">
              <div className="text-xs font-mono text-red-500/80 uppercase tracking-widest flex items-center gap-2">
                <Skull className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>CYBER_DEFENSE_OPERATOR // CLEARANCE: ALPHA</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none font-orbitron">
                <DecryptedText text="ANKUSH" speed={45} delay={100} className="text-white" />{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600 blood-glow">
                  <DecryptedText text="GREWAL" speed={45} delay={350} />
                </span>
              </h1>
            </div>

            {/* Tagline & Compact Bio */}
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl font-sans">
              Undergraduate Computer Applications student at UPES specializing in offensive penetration testing, web vulnerability discovery, raw network socket inspection, and custom Python security tool development.
            </p>

            {/* Tactical Action Buttons in Glowing Blood Red */}
            <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs">
              <a
                href="#operations"
                id="hero-engage-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold transition-all shadow-[0_0_25px_rgba(255,0,51,0.4)] hover:shadow-[0_0_35px_rgba(255,0,51,0.7)] transform hover:-translate-y-0.5"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>OPERATIONS DECK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#terminal"
                id="hero-terminal-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-red-500/50 bg-red-950/40 hover:bg-red-900/60 text-red-200 hover:border-red-400 transition-all shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5 text-red-400" />
                <span>KALI CONSOLE</span>
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noreferrer"
                id="hero-resume-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-red-900/60 bg-[#0c0104] hover:bg-red-950 text-slate-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                <span>RESUME</span>
              </a>
            </div>

            {/* Tactical Metrics Row */}
            <div className="grid grid-cols-4 gap-2 pt-4 border-t border-red-900/40 font-mono text-center">
              <div className="bg-[#0b0103] border border-red-500/25 p-2 rounded">
                <div className="text-red-400 font-bold text-base font-orbitron">6+</div>
                <div className="text-[10px] text-slate-400">Tools Built</div>
              </div>
              <div className="bg-[#0b0103] border border-red-500/25 p-2 rounded">
                <div className="text-rose-400 font-bold text-base font-orbitron">UPES</div>
                <div className="text-[10px] text-slate-400">BCA Track</div>
              </div>
              <div className="bg-[#0b0103] border border-red-500/25 p-2 rounded">
                <div className="text-red-300 font-bold text-base font-orbitron">OWASP</div>
                <div className="text-[10px] text-slate-400">Top 10 Labs</div>
              </div>
              <div className="bg-[#0b0103] border border-amber-500/25 p-2 rounded">
                <div className="text-amber-400 font-bold text-base font-orbitron">0-DAY</div>
                <div className="text-[10px] text-slate-400">Heuristics</div>
              </div>
            </div>
          </div>

          {/* Right Column: 360° Blood Red Sonar Radar with Laser HUD Rings */}
          <div className="lg:col-span-5">
            <div className="cyber-card-blood rounded-xl p-5 relative overflow-hidden border border-red-500/35 shadow-2xl shadow-red-950/40">
              {/* Blood Red Corner Brackets */}
              <div className="hud-corner-tl"></div>
              <div className="hud-corner-tr"></div>
              <div className="hud-corner-bl"></div>
              <div className="hud-corner-br"></div>

              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-red-500/20 pb-3 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                  <span className="text-red-300 font-bold font-orbitron">RADAR_SWEEP // BLOOD_SONAR</span>
                </div>
                <span className="text-[11px] text-red-300 px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40">
                  SHIELDS: 100%
                </span>
              </div>

              {/* Blood Red Sonar Radar Widget with Dual Spinning Rings */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto my-2 flex items-center justify-center">
                {/* Outer spinning ring with ticks */}
                <div className="absolute inset-0 rounded-full border border-red-500/30 border-dashed animate-hud-spin"></div>

                {/* Inner reverse spinning ring */}
                <div className="absolute inset-4 rounded-full border border-red-500/20 border-dotted animate-hud-spin-reverse"></div>

                {/* Concentric solid rings */}
                <div className="absolute inset-10 rounded-full border border-red-500/40"></div>
                <div className="absolute inset-18 rounded-full border border-red-500/60 shadow-[0_0_12px_rgba(255,0,51,0.2)]"></div>

                {/* Crosshairs */}
                <div className="absolute w-full h-[1px] bg-red-500/30"></div>
                <div className="absolute h-full w-[1px] bg-red-500/30"></div>

                {/* 360° Blood Red Radar Sweep Cone */}
                <div
                  className="absolute inset-0 rounded-full animate-radar-red pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, rgba(255, 0, 51, 0.5) 0deg, rgba(255, 0, 51, 0.08) 60deg, transparent 60deg)',
                  }}
                ></div>

                {/* Center Core */}
                <div className="w-5 h-5 rounded-full bg-red-600 shadow-[0_0_20px_#ff0033] flex items-center justify-center z-10 animate-heartbeat">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                {/* Threat Blips */}
                <div className="absolute top-12 right-16 w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_#ff0033] animate-ping" style={{ animationDuration: '2.2s' }}></div>
                <div className="absolute bottom-14 left-18 w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#ff0055] animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-22 left-12 w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>

                {/* Degree markings */}
                <span className="absolute top-1 text-[9px] font-mono text-red-500/80">000°</span>
                <span className="absolute right-1 text-[9px] font-mono text-red-500/80">090°</span>
                <span className="absolute bottom-1 text-[9px] font-mono text-red-500/80">180°</span>
                <span className="absolute left-1 text-[9px] font-mono text-red-500/80">270°</span>
              </div>

              {/* Bottom Real-time Telemetry Grid */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-red-500/20 font-mono text-[11px]">
                <div className="bg-[#0a0103] p-2 rounded border border-red-900/60">
                  <span className="text-red-500 block text-[9px]">ENCRYPT_ALGO</span>
                  <span className="text-red-200 font-bold">AES-256-GCM</span>
                </div>
                <div className="bg-[#0a0103] p-2 rounded border border-red-900/60">
                  <span className="text-red-500 block text-[9px]">PACKET_MONITOR</span>
                  <span className="text-rose-300 font-bold">SCAPY // TCP_SNIFF</span>
                </div>
                <div className="bg-[#0a0103] p-2 rounded border border-red-900/60">
                  <span className="text-red-500 block text-[9px]">CORE_OS</span>
                  <span className="text-red-300 font-bold">KALI RED x86_64</span>
                </div>
                <div className="bg-[#0a0103] p-2 rounded border border-red-900/60">
                  <span className="text-red-500 block text-[9px]">AIRGAP_LATENCY</span>
                  <span className="text-rose-400 font-bold">6ms [UPES_NODE]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
