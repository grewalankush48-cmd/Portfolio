'use client';

import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Linkedin, FileText, Copy, Check, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connect &amp; Collaborate
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            Interested in security tool development, vulnerability audits, or internship opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Contact Methods */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 space-y-5">
              <h3 className="text-base font-semibold text-white">
                Direct Channels
              </h3>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">PRIMARY INBOX</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  title="Copy email address"
                  className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded bg-slate-950/80 border border-slate-800 hover:border-slate-700 flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="block text-[10px] text-slate-500">GITHUB REPOS</span>
                    <span>/{personalInfo.githubUser}</span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded bg-slate-950/80 border border-slate-800 hover:border-slate-700 flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="block text-[10px] text-slate-500">LINKEDIN</span>
                    <span>Ankush Grewal</span>
                  </div>
                </a>
              </div>

              {/* Resume Card */}
              <div className="p-4 rounded bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">RESUME / CV</div>
                    <div className="text-sm font-medium text-white">Ankush_Grewal_Resume.pdf</div>
                  </div>
                </div>
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                >
                  VIEW PDF
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 space-y-4">
              <h3 className="text-base font-semibold text-white">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-white">Message Transmitted!</div>
                  <div className="text-xs text-slate-400">
                    Thank you for reaching out. I will reply to you as soon as possible.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="space-y-1.5">
                    <label className="text-slate-400">YOUR NAME / ORGANIZATION</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex (Security Recruiter)"
                      className="w-full px-3 py-2.5 rounded bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3 py-2.5 rounded bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400">TRANSMISSION MESSAGE</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your inquiry, project scope, or opportunity..."
                      className="w-full px-3 py-2.5 rounded bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans text-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT MESSAGE</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
