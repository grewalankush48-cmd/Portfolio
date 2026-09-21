'use client';

import { useState, useRef, useEffect } from 'react';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';
import { Terminal, Shield, Play, RotateCcw, Copy, Check } from 'lucide-react';

interface HistoryEntry {
  command: string;
  output: string | React.ReactNode;
  time: string;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [scanning, setScanning] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  const initialHistory: HistoryEntry[] = [
    {
      command: 'init --sec-profile',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">ANKUSH GREWAL // CYBERSECURITY LAB TERMINAL v2.6.4</p>
          <p className="text-slate-400">Type <span className="text-cyan-400">help</span> to view available interactive security commands.</p>
          <p className="text-slate-500">Security Sandbox: ACTIVE | Policy: STRICT | Host: Kali-Linux-Rolling</p>
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
        <div className="space-y-1 text-xs text-slate-300">
          <p className="text-emerald-400 font-semibold">Available Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1 font-mono text-[11px]">
            <div><span className="text-cyan-300">help</span> - Display this reference manual</div>
            <div><span className="text-cyan-300">whoami</span> - Identity &amp; security credentials</div>
            <div><span className="text-cyan-300">skills</span> - Dump technical capabilities matrix</div>
            <div><span className="text-cyan-300">projects</span> - List security tools &amp; repositories</div>
            <div><span className="text-cyan-300">scan target</span> - Run simulated web vulnerability audit</div>
            <div><span className="text-cyan-300">cve-feed</span> - Display recent CVE telemetry advisories</div>
            <div><span className="text-cyan-300">education</span> - UPES curriculum &amp; practical labs</div>
            <div><span className="text-cyan-300">contact</span> - Retrieve email, github, and linkedin</div>
            <div><span className="text-cyan-300">clear</span> - Clear terminal session logs</div>
          </div>
        </div>
      );
    } else if (trimmed === 'whoami') {
      outputNode = (
        <div className="space-y-1 text-xs">
          <p><strong className="text-emerald-400">User:</strong> {personalInfo.fullName} ({personalInfo.terminalUser})</p>
          <p><strong className="text-emerald-400">Discipline:</strong> {personalInfo.headlineCategory}</p>
          <p><strong className="text-emerald-400">Academics:</strong> BCA (Cybersecurity Track) @ UPES, Dehradun</p>
          <p><strong className="text-emerald-400">Status:</strong> {personalInfo.availability}</p>
        </div>
      );
    } else if (trimmed === 'skills') {
      outputNode = (
        <div className="space-y-1.5 text-xs">
          <p className="text-emerald-400 font-semibold">Primary Skill Competencies:</p>
          <ul className="list-disc list-inside space-y-0.5 text-slate-300">
            {skillsData.map((s) => (
              <li key={s.id}>
                <span className="text-white font-medium">{s.title}:</span> {s.tools.join(', ')} ({s.level}%)
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (trimmed === 'projects') {
      outputNode = (
        <div className="space-y-1.5 text-xs">
          <p className="text-emerald-400 font-semibold">Security Projects:</p>
          <div className="space-y-1 text-slate-300">
            {projectsData.map((p) => (
              <div key={p.id} className="border-b border-slate-800 pb-1">
                <p className="text-cyan-300 font-medium">▸ {p.title} <span className="text-slate-500">[{p.category}]</span></p>
                <p className="text-slate-400 text-[11px]">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (trimmed.startsWith('scan')) {
      setScanning(true);
      outputNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-cyan-300">[*] Launching multi-threaded vulnerability scanner...</p>
          <p className="text-slate-400">[1/4] Probing HTTP/1.1 and HTTP/2 endpoints...</p>
          <p className="text-slate-400">[2/4] Testing Content-Security-Policy, HSTS, X-Frame-Options...</p>
          <p className="text-slate-400">[3/4] Checking CORS Access-Control-Allow-Origin wildcard reflection...</p>
          <p className="text-slate-400">[4/4] Evaluating TLS 1.3 cipher suites and certificate validity...</p>
          <div className="p-2 bg-slate-950 rounded border border-emerald-500/30 text-emerald-400 mt-2">
            [+] AUDIT COMPLETE: 0 Critical, 0 High. Security Headers Enforced. TLS 1.3 Compliant.
          </div>
        </div>
      );
      setTimeout(() => setScanning(false), 800);
    } else if (trimmed === 'cve-feed') {
      outputNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-emerald-400 font-semibold">[LIVE INTEL FEED: RECENT ZERO-DAYS &amp; ADVISORIES]</p>
          <div className="space-y-1 text-slate-300">
            <p className="text-rose-400">CVE-2026-2189 // CVSS 9.8 - Authentication Bypass in Enterprise Gateway</p>
            <p className="text-amber-400">CVE-2026-1044 // CVSS 7.5 - Remote Code Execution in Python Async Lib</p>
            <p className="text-cyan-400">CVE-2026-0812 // CVSS 5.3 - Cross-Site WebSocket Hijacking Mitigation</p>
          </div>
        </div>
      );
    } else if (trimmed === 'contact') {
      outputNode = (
        <div className="space-y-1 text-xs">
          <p><span className="text-emerald-400">Email:</span> <a href={`mailto:${personalInfo.email}`} className="text-cyan-300 underline">{personalInfo.email}</a></p>
          <p><span className="text-emerald-400">GitHub:</span> <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{personalInfo.githubUrl}</a></p>
          <p><span className="text-emerald-400">LinkedIn:</span> <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{personalInfo.linkedinUrl}</a></p>
        </div>
      );
    } else if (trimmed === 'education') {
      outputNode = (
        <div className="space-y-1 text-xs">
          <p className="text-emerald-400 font-semibold">Academic &amp; Practical Training:</p>
          <p>• Bachelor of Computer Applications (BCA) - UPES Dehradun (2024–2027)</p>
          <p>• TryHackMe Offensive &amp; Defensive Lab CTFs</p>
          <p>• PortSwigger Web Security Academy</p>
        </div>
      );
    } else {
      outputNode = (
        <div className="text-xs text-rose-400">
          zsh: command not found: {trimmed}. Type <span className="text-cyan-300 font-semibold">help</span> for supported commands.
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      { command: cmdStr, output: outputNode, time: timeStr },
    ]);
    setInputVal('');
  };

  const executeShortcut = (cmd: string) => {
    handleCommand(cmd);
  };

  return (
    <section id="terminal" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>INTERACTIVE SECURITY CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Security Sandbox &amp; Audit Console
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            Test real commands or simulate vulnerability discovery tools directly inside this live terminal replica.
          </p>
        </div>

        {/* Shortcut Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-xs">
          <span className="text-slate-500 text-[11px] mr-1">TRY COMMANDS:</span>
          {['help', 'scan target', 'whoami', 'skills', 'projects', 'cve-feed', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeShortcut(cmd)}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              $ {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Container */}
        <div className="rounded-lg border border-slate-800 bg-slate-950 shadow-2xl shadow-black overflow-hidden font-mono text-xs">
          {/* Top Bar */}
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-slate-400 text-[11px] ml-2 font-mono">ankush@security-lab:~ (zsh)</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE
              </span>
              <button
                onClick={() => setHistory([])}
                title="Clear terminal"
                className="hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Screen */}
          <div className="p-4 sm:p-6 space-y-4 max-h-[420px] overflow-y-auto leading-relaxed">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <span className="text-emerald-400 font-bold">ankush@security-lab</span>:
                  <span className="text-cyan-400">~</span>$
                  <span className="text-white font-medium">{item.command}</span>
                  <span className="text-slate-600 ml-auto text-[10px]">{item.time}</span>
                </div>
                <div className="pl-3 border-l-2 border-slate-800">{item.output}</div>
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
            className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center gap-2 text-xs"
          >
            <span className="text-emerald-400 font-bold">ankush@security-lab</span>:
            <span className="text-cyan-400 font-medium">~</span>$
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'scan target', or 'projects'..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-slate-600 font-mono text-xs"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              disabled={scanning}
              className="px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] transition-colors"
            >
              RUN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
