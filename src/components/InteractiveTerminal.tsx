'use client';

import { useState, useRef, useEffect } from 'react';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';
import { Terminal, RotateCcw, Sparkles, Shield, Play } from 'lucide-react';

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
  time: string;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  const initialHistory: HistoryEntry[] = [
    {
      command: 'kali-sec-env --load',
      output: (
        <div className="space-y-1 text-slate-300 font-mono text-xs">
          <p className="text-cyan-400 font-bold tracking-wider">
            ANKUSH GREWAL // KALI LINUX CYBER-CONSOLE v3.8.1
          </p>
          <p className="text-slate-400">
            Defense Node: <span className="text-emerald-400">ACTIVE</span> | Cipher: <span className="text-cyan-300">TLS 1.3 / AES-256-GCM</span>
          </p>
          <p className="text-slate-500">
            Type <span className="text-cyan-400 font-bold underline">help</span> or click the tactical command chips above to launch security modules.
          </p>
        </div>
      ),
      time: '00:00:01',
    },
  ];

  const [history, setHistory] = useState<HistoryEntry[]>(initialHistory);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const timeStr = new Date().toLocaleTimeString();

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputNode: React.ReactNode;

    if (trimmed === 'help') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono text-slate-300">
          <p className="text-cyan-400 font-semibold">[SUPPORTED CONSOLE DIRECTIVES]</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1 text-[11px]">
            <div><span className="text-cyan-300 font-bold">scan</span> - Execute automated vulnerability scan</div>
            <div><span className="text-cyan-300 font-bold">cve</span> - Pull live threat advisory feed</div>
            <div><span className="text-cyan-300 font-bold">decrypt</span> - Derive AES-256 session token</div>
            <div><span className="text-cyan-300 font-bold">whoami</span> - Identity &amp; security credentials</div>
            <div><span className="text-cyan-300 font-bold">skills</span> - Dump tool competencies</div>
            <div><span className="text-cyan-300 font-bold">projects</span> - View developed security tools</div>
            <div><span className="text-cyan-300 font-bold">clear</span> - Purge screen memory</div>
          </div>
        </div>
      );
    } else if (trimmed.startsWith('scan')) {
      outputNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-cyan-300">[*] Launching multi-threaded socket reconnaissance engine...</p>
          <div className="space-y-0.5 text-slate-400 text-[11px]">
            <p>[1/4] Probing TCP ports 80, 443, 8080, 8443... <span className="text-emerald-400">OPEN</span></p>
            <p>[2/4] Auditing HTTP response headers (CSP, HSTS, X-Frame)... <span className="text-emerald-400">ENFORCED</span></p>
            <p>[3/4] Fuzzing for OWASP SQLi / Reflected XSS patterns... <span className="text-emerald-400">0 DETECTIONS</span></p>
            <p>[4/4] Verifying TLS 1.3 curve X25519 handshake... <span className="text-emerald-400">SECURE</span></p>
          </div>
          <div className="p-2 bg-emerald-950/60 border border-emerald-500/40 rounded text-emerald-300 text-[11px] mt-1">
            [+] AUDIT VERDICT: 0 Critical, 0 High. Target hardened against automated exploit payloads.
          </div>
        </div>
      );
    } else if (trimmed === 'cve') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-amber-400 font-bold">[ACTIVE ZERO-DAY &amp; CVE FEED]</p>
          <div className="space-y-1 text-[11px] text-slate-300">
            <p className="text-rose-400">CVE-2026-2189 // CVSS 9.8 (Critical) - Cloud Gateway Auth Bypass</p>
            <p className="text-amber-400">CVE-2026-1044 // CVSS 7.5 (High) - Async Python Deserialization RCE</p>
            <p className="text-cyan-300">CVE-2026-0812 // CVSS 5.3 (Medium) - WebSocket Handshake Reflection</p>
          </div>
        </div>
      );
    } else if (trimmed === 'decrypt') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-cyan-300">[*] Computing PBKDF2-HMAC-SHA256 derived keys (100,000 iterations)...</p>
          <p className="text-slate-400 text-[11px]">Salt: 9f8a2b3c4d5e6f7a8b9c0d1e2f3a4b5c</p>
          <div className="p-2 rounded bg-slate-900 border border-cyan-400/40 text-cyan-200 text-[11px]">
            KEY: 0x4A7F92C8...6E1B // [AUTHENTICATED &amp; DECRYPTED]
          </div>
        </div>
      );
    } else if (trimmed === 'whoami') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono">
          <p><strong className="text-cyan-400">OPERATOR:</strong> {personalInfo.fullName} ({personalInfo.terminalUser})</p>
          <p><strong className="text-cyan-400">ACADEMICS:</strong> BCA Cybersecurity Track @ UPES Dehradun</p>
          <p><strong className="text-cyan-400">FOCUS:</strong> Web Security, Socket Tools, Vulnerability Auditing, Unix Hardening</p>
        </div>
      );
    } else if (trimmed === 'skills') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-cyan-400 font-bold">TECHNICAL INVENTORY:</p>
          <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300">
            {skillsData.map((s) => (
              <div key={s.id}>• {s.title} ({s.level}%)</div>
            ))}
          </div>
        </div>
      );
    } else if (trimmed === 'projects') {
      outputNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-cyan-400 font-bold">FEATURED TOOLS:</p>
          {projectsData.slice(0, 3).map((p) => (
            <div key={p.id} className="text-[11px]">
              <span className="text-emerald-400">▸ {p.title}</span> - {p.metrics}
            </div>
          ))}
        </div>
      );
    } else {
      outputNode = (
        <div className="text-xs font-mono text-rose-400">
          bash: directive not recognized: &quot;{trimmed}&quot;. Type <span className="text-cyan-300 font-bold">help</span> to view directives.
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      { command: cmdStr, output: outputNode, time: timeStr },
    ]);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-12 border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>LIVE INTERACTION CONSOLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Kali Security Sandbox
            </h2>
          </div>

          {/* Quick Click Directives */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <span className="text-slate-500 text-[10px]">CLICK_TO_EXECUTE:</span>
            {['help', 'scan', 'cve', 'decrypt', 'whoami', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-[#060914] border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-[11px] transition-colors"
              >
                $ {cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Container */}
        <div className="cyber-card rounded-xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 relative">
          <div className="hud-bracket-tl"></div>
          <div className="hud-bracket-tr"></div>
          <div className="hud-bracket-bl"></div>
          <div className="hud-bracket-br"></div>

          {/* Top Bar */}
          <div className="bg-[#04060f] px-4 py-2.5 border-b border-cyan-500/20 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-slate-400 text-[11px] ml-2">ankush@kali-rolling:~ (zsh)</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <span className="text-cyan-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                ACTIVE
              </span>
              <button
                onClick={() => setHistory([])}
                title="Clear terminal"
                className="hover:text-cyan-300 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Screen */}
          <div className="p-4 sm:p-5 space-y-3.5 max-h-[360px] overflow-y-auto leading-relaxed bg-[#03050c]/95">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1 font-mono">
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <span className="text-cyan-400 font-bold">ankush@kali</span>:
                  <span className="text-emerald-400">~</span>$
                  <span className="text-white font-medium">{item.command}</span>
                  <span className="text-slate-600 ml-auto text-[10px]">{item.time}</span>
                </div>
                <div className="pl-3 border-l-2 border-cyan-500/30">{item.output}</div>
              </div>
            ))}
            <div ref={terminalBottomRef} />
          </div>

          {/* Input Prompt */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }}
            className="p-3 bg-[#050814] border-t border-cyan-500/20 flex items-center gap-2 font-mono text-xs"
          >
            <span className="text-cyan-400 font-bold">ankush@kali</span>:
            <span className="text-emerald-400">~</span>$
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'scan', 'cve', or 'decrypt'..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-slate-600 text-xs"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="px-3.5 py-1 rounded bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold text-[11px] transition-all shadow-md"
            >
              EXECUTE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
