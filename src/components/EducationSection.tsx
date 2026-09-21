import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, Clock } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>ACADEMICS &amp; CERTIFICATION PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Formal Education &amp; Hands-on Labs
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            Rigorous university foundation in computer applications paired with continuous ethical hacking CTFs and defensive security certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/50 border border-slate-800 hover:border-slate-700 p-6 rounded-lg space-y-3 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cyan-300 font-mono">
                    {item.institution}
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
