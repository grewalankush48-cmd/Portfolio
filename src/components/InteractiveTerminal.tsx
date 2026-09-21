'use client';

import { useState, useRef, useEffect } from 'react';
import { personalInfo, projectsData, skillsData } from '../data/portfolioData';
import { Terminal as TerminalIcon, Sparkles, XCircle, Minimize2, Maximize2, ShieldAlert } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialLines: TerminalLine[] = [
    { id: '1', type: 'system', content: 'KALI RED OPS LINUX 6.6.9-kali1-amd64 #1 SMP PREEMPT' },
    { id: '2', type: 'system', content: 'SYSTEM READY // ALL OFFENSIVE MODULES COMPILED' },
    { id: '3', type: 'system', content: 'Type "help" to display available cyber commands.' },
  ];

  const [lines, setLines] = useState<TerminalLine[]>(initialLines);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    // Add command to history
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    // Append input line
    const userLine: TerminalLine = {
      id: Date.now().toString(),
      type: 'input',
      content: cmd,
    };

    const cmdLower = cmd.toLowerCase();
    const newOutputs: TerminalLine[] = [];

    if (cmdLower === 'help') {
      newOutputs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `AVAILABLE RED TEAM COMMANDS:
  help       - List terminal commands
  whoami     - Display security researcher profile
  tools      - Enumerate compiled security repositories
  skills     - Inspect offensive & defensive competencies
  scan       - Execute simulated port and vulnerability sweep
  cve        - Check monitored vulnerability zero-days
  decrypt    - Run cryptographic decipher routine
  contact    - Retrieve direct transmission channels
  clear      - Clear terminal screen`,
      });
    } else if (cmdLower === 'whoami') {
      newOutputs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `OPERATOR: ${personalInfo.name} ${personalInfo.lastName}
ROLE: ${personalInfo.role}
INSTITUTION: ${personalInfo.education}
FOCUS: Penetration Testing, OWASP Top 10, Raw Sockets, Python Tooling
STATUS: ${personalInfo.availability}`,
      });
    } else if (cmdLower === 'tools' || cmdLower === 'projects') {
      const toolList = projectsData
        .map((p, i) => `[0${i + 1}] ${p.title} (${p.category}) -> ${p.githubUrl}`)
        .join('\n');
      newOutputs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `COMPILED REPOSITORIES:\n${toolList}`,
      });
    } else if (cmdLower === 'skills') {
      const skillsStr = skillsData
        .map((s) => `• ${s.title} [${s.level}%] - ${s.tools.join(', ')}`)
        .join('\n');
      newOutputs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `ARSENAL CAPABILITIES:\n${skillsStr}`,
      });
    } else if (cmdLower === 'scan') {
      newOutputs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `[+] Initializing Nmap SYN Stealth Scan ( -sS -T4 -A )
[+] Targeting localhost / subnet 192.168.1.0/24...
[+] PORT 22/tcp   OPEN  OpenSSH 9.6p1 (Debian)
[+] PORT 80/tcp   OPEN  nginx/1.24.0 (Reverse Proxy)
[+] PORT 443/tcp  OPEN  TLS 1.3 (ChaCha20-Poly1305)
[+] PORT 3000/tcp OPEN  Node.js / Next.js Production Engine
[*] HEURISTICS: 0 vulnerabilities found. System defense intact.`,
      });
    } else if (cmdLower === 'cve') {
      newOutputs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `[CVE-2026-0041] SQLi Filter Bypass - RESOLVED (Prepared Statements)
[CVE-2025-4819] Path Traversal in File Server - PATCHED (Canonical Sanitization)
[CVE-2025-3312] JWT Weak Algorithm Confusion - HARDENED (RS256 Signature Verification)`,
      });
    } else if (cmdLower === 'decrypt') {
      newOutputs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `[!] INITIALIZING QUANTUM DECIPHER ENGINE...
[*] CIPHER: 53 65 63 75 72 69 74 79 20 69 73 20 61 20 70 72 6f 63 65 73 73
[✓] PLAINTEXT: "Security is a process, not a product." - Bruce Schneier`,
      });
    } else if (cmdLower === 'contact') {
      newOutputs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `EMAIL: ${personalInfo.email}
GITHUB: ${personalInfo.githubUrl}
LINKEDIN: ${personalInfo.linkedinUrl}`,
      });
    } else if (cmdLower === 'clear') {
      setLines([]);
      setInputVal('');
      return;
    } else {
      newOutputs.push({
        id: (Date.now() + 1).toString(),
        type: 'error',
        content: `command not found: "${cmd}". Type "help" for a list of valid commands.`,
      });
    }

    setLines((prev) => [...prev, userLine, ...newOutputs]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <section id="terminal" className="py-12 border-b border-red-500/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-semibold">INTERACTIVE CLI SIMULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-orbitron">
              KALI RED CONSOLE
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Interactive shell · Type <code className="text-red-400 font-bold bg-red-950/80 px-1.5 py-0.5 rounded border border-red-500/40">help</code>
          </span>
        </div>

        {/* Terminal Window */}
        <div className="cyber-card-blood rounded-xl overflow-hidden border border-red-500/40 shadow-2xl">
          {/* Top Titlebar */}
          <div className="bg-[#0e0205] px-4 py-2.5 border-b border-red-500/30 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-600/90 border border-red-400/50 block shadow-[0_0_8px_#ff0033]"></span>
                <span className="w-3 h-3 rounded-full bg-amber-600/90 border border-amber-400/50 block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-600/90 border border-emerald-400/50 block"></span>
              </div>
              <span className="text-slate-400 ml-2">root@kali-blood:~#</span>
            </div>
            <div className="flex items-center gap-2 text-red-400/80 text-[11px]">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>TLS 1.3 // SESSION ACTIVE</span>
            </div>
          </div>

          {/* Terminal Screen & Logs */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 bg-[#070103]/95 font-code text-xs sm:text-sm min-h-[300px] max-h-[460px] overflow-y-auto space-y-2 cursor-text"
          >
            {lines.map((line) => (
              <div key={line.id} className="leading-relaxed whitespace-pre-wrap">
                {line.type === 'input' && (
                  <div className="flex items-start gap-2 text-white">
                    <span className="text-red-500 font-bold select-none">root@kali-blood:~#</span>
                    <span>{line.content}</span>
                  </div>
                )}
                {line.type === 'system' && (
                  <div className="text-red-400/90 select-none">
                    [SYS] {line.content}
                  </div>
                )}
                {line.type === 'output' && (
                  <div className="text-slate-300 pl-4 border-l-2 border-red-500/40 my-1 font-mono">
                    {line.content}
                  </div>
                )}
                {line.type === 'error' && (
                  <div className="text-rose-400 pl-4 border-l-2 border-rose-600 my-1 font-mono">
                    [ERR] {line.content}
                  </div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 text-white pt-1">
              <span className="text-red-500 font-bold select-none">root@kali-blood:~#</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                className="flex-1 bg-transparent border-none outline-none text-white font-code text-xs sm:text-sm"
                placeholder="type a command (e.g. scan, whoami, tools, cve)..."
              />
            </form>
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Footer Quick Buttons */}
          <div className="p-2.5 bg-[#0d0205] border-t border-red-500/20 flex flex-wrap gap-2 text-[11px] font-mono">
            <span className="text-red-500 text-[10px] self-center mr-1">QUICK INJECT:</span>
            {['help', 'whoami', 'scan', 'cve', 'tools', 'skills', 'decrypt', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInputVal(cmd);
                  inputRef.current?.focus();
                }}
                className="px-2 py-0.5 rounded bg-[#150207] hover:bg-red-950 border border-red-900/60 hover:border-red-500 text-slate-300 hover:text-white transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
