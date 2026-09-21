'use client';

import { Shield, AlertTriangle, Radio, Activity, Cpu, Lock } from 'lucide-react';

export default function ThreatTicker() {
  const telemetryItems = [
    { icon: Shield, text: 'DEFENSE MATRIX: ACTIVE', color: 'text-emerald-400', badge: 'STATUS 200' },
    { icon: Activity, text: 'PACKET SNIFFER: CAPTURING (SCAPY_V3)', color: 'text-cyan-400', badge: '0 FLOD' },
    { icon: AlertTriangle, text: 'ZERO-DAY FEED: CVE-2026-2189 PATCH VERIFIED', color: 'text-amber-400', badge: 'CVSS 9.8' },
    { icon: Lock, text: 'CIPHER SUITE: AES-256-GCM / TLS 1.3 STRICT', color: 'text-emerald-400', badge: 'ENCRYPTED' },
    { icon: Radio, text: 'TARGET AUDIT: UPES_LAB // 0 DETECTED INTRUSIONS', color: 'text-cyan-400', badge: '100% HEALTH' },
    { icon: Cpu, text: 'SYS_LOAD: 3.4% // MEMORY ALLOCATION: 184MB', color: 'text-slate-400', badge: 'OPTIMAL' },
    { icon: Shield, text: 'FIREWALL HEURISTICS: REJECT WILD-CARDS (DROP)', color: 'text-purple-400', badge: 'RULE_SET_v4' },
    { icon: Activity, text: 'AVAILABILITY: OPEN TO CYBERSECURITY INTERNSHIPS & ROLES', color: 'text-emerald-300', badge: 'HIRE_ME' },
  ];

  return (
    <div className="w-full bg-[#050814]/90 border-y border-cyan-500/20 py-2 overflow-hidden flex items-center relative z-20 backdrop-blur-md">
      {/* Left indicator label */}
      <div className="hidden sm:flex items-center gap-2 pl-4 pr-3 py-0.5 bg-cyan-950/80 border-r border-cyan-500/30 text-[10px] font-mono font-bold text-cyan-300 shrink-0 uppercase tracking-widest z-10 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
        <span>TELEMETRY_RADAR</span>
      </div>

      {/* Ticker marquee container */}
      <div className="flex whitespace-nowrap overflow-hidden flex-1 select-none">
        <div className="flex items-center gap-8 animate-ticker">
          {telemetryItems.concat(telemetryItems).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2 font-mono text-xs">
                <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                <span className="text-slate-300 tracking-wide font-medium">{item.text}</span>
                <span className="px-1.5 py-0.2 rounded bg-slate-900 border border-slate-700/80 text-[10px] font-mono text-slate-400">
                  {item.badge}
                </span>
                <span className="text-slate-700 ml-4 font-bold">///</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
