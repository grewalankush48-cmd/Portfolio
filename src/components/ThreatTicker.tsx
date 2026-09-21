'use client';

import { ShieldAlert, AlertOctagon, Radio, Activity, Cpu, Lock, Flame } from 'lucide-react';

export default function ThreatTicker() {
  const telemetryItems = [
    { icon: AlertOctagon, text: 'DEFCON 1: HIGHEST READINESS', color: 'text-red-500', badge: 'CRITICAL_WATCH' },
    { icon: ShieldAlert, text: 'RED TEAM BREACH DETECTOR: ARMED', color: 'text-rose-400', badge: 'ZERO_LEAKS' },
    { icon: Activity, text: 'PACKET INTERCEPTOR: SCAPY SNIFFER v3.8 ACTIVE', color: 'text-red-400', badge: 'PROMISCUOUS' },
    { icon: Flame, text: 'CVE-2026-2189 ZERO-DAY: REMEDIATION DEPLOYED', color: 'text-amber-500', badge: 'CVSS 9.8' },
    { icon: Lock, text: 'CIPHER PROTOCOL: HARDENED TLS 1.3 / AES-256-GCM', color: 'text-red-400', badge: 'SEALED' },
    { icon: Radio, text: 'UPES CYBER LAB: TARGET AIR-GAPPED // NO CVEs DETECTED', color: 'text-rose-300', badge: '100% HEALTH' },
    { icon: Cpu, text: 'NEURAL SYSTEM LOAD: 4.2% // MEM_STABILITY: MAXIMUM', color: 'text-slate-400', badge: 'OPTIMAL' },
    { icon: ShieldAlert, text: 'FIREWALL HEURISTICS: DROP ALL FORGED SYN-FLOODS', color: 'text-red-500', badge: 'IPTABLES_ARMED' },
    { icon: Activity, text: 'SPECIALIZATION: OPEN TO SECURITY ANALYST & DEV ROLES', color: 'text-red-300', badge: 'HIRING_READY' },
  ];

  return (
    <div className="w-full bg-[#0d0104]/95 border-y border-red-500/30 py-2 overflow-hidden flex items-center relative z-20 backdrop-blur-md">
      {/* Left DEFCON alert badge */}
      <div className="hidden sm:flex items-center gap-2 pl-4 pr-3 py-0.5 bg-red-950/90 border-r border-red-500/40 text-[11px] font-mono font-bold text-red-300 shrink-0 uppercase tracking-widest z-10 shadow-[0_0_15px_rgba(255,0,51,0.3)]">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
        <span className="font-orbitron text-red-400">RED_RADAR</span>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="flex whitespace-nowrap overflow-hidden flex-1 select-none">
        <div className="flex items-center gap-8 animate-ticker">
          {telemetryItems.concat(telemetryItems).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2 font-mono text-xs">
                <Icon className={`w-3.5 h-3.5 ${item.color} animate-pulse`} />
                <span className="text-slate-200 tracking-wide font-medium">{item.text}</span>
                <span className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-[10px] font-mono text-red-300">
                  {item.badge}
                </span>
                <span className="text-red-900 ml-4 font-bold">///</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
