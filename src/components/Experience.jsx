import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  ChevronRight, 
  Sparkles, 
  Building2 
} from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { playPop } from '../utils/soundEffects';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--glass-card-bg)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)] mb-3">
            <Sparkles size={12} />
            <span>02 // CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            Where I've worked
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            Delivering measurable business value through high-performance code and modern software engineering.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Subtle vertical spine line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent opacity-30"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isSelected = activeExp === exp.id;
              return (
                <div 
                  key={exp.id}
                  onClick={() => {
                    playPop();
                    setActiveExp(exp.id);
                  }}
                  className={`relative md:pl-20 transition-all duration-300 cursor-pointer ${
                    isSelected ? 'scale-[1.01]' : 'opacity-90 hover:opacity-100'
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="hidden md:flex absolute left-5 top-7 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-cyan-400 items-center justify-center shadow-md shadow-cyan-500/20 z-10">
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400 animate-ping' : 'bg-slate-400'}`}></span>
                  </div>

                  {/* Card Container */}
                  <div 
                    className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[var(--glass-card-bg)] border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/10' 
                        : 'bg-[var(--glass-card-bg)] border border-[var(--border-color)] hover:border-[var(--border-light)]'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--border-color)]">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 size={18} className="text-cyan-400" />
                          <h3 className="text-xl font-bold text-[var(--text-primary)]">
                            {exp.company}
                          </h3>
                          {index === 0 && (
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                              Present Role
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-[var(--accent-primary)]">
                          {exp.role}
                        </p>
                      </div>

                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-[var(--text-muted)] font-medium">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location} • {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] mb-5 font-normal">
                      {exp.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          <ChevronRight size={15} className="text-cyan-400 mt-1 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap gap-1.5 items-center">
                      <span className="text-[11px] font-semibold text-[var(--text-muted)] mr-2">
                        Technologies:
                      </span>
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[11px] font-medium text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

