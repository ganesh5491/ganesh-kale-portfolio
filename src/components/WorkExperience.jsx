import React from 'react';
import { ArrowRight, Laptop, CheckCircle2, Download, Sparkles, Code2 } from 'lucide-react';
import { experienceSummary } from '../data/portfolioData';
import RevealOnScroll from './common/RevealOnScroll';

export default function WorkExperience({ onOpenResume }) {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <RevealOnScroll direction="left">
              <div className="theme-pill mb-4">
                <span className="font-bold tracking-wider uppercase text-[11px]">Work Experience</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight leading-tight mb-4">
                My 
                <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent'> Professional </span> <br /> <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent'> journey </span> so far.
              </h2>

              <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-6 max-w-md">
                A concise overview of my 2+ years of hands-on experience in building scalable websites, business portals, and full-stack software applications.
              </p>

  
            </RevealOnScroll>
          </div>

          {/* Right Column: Combined Experience Card */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="right" delay={150}>
              <div className="theme-card p-6 sm:p-8 bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all rounded-3xl">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100 dark:border-slate-700/80">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Code2 size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] leading-snug">
                        {experienceSummary.title}
                      </h3>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {experienceSummary.badge}
                      </span>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60 text-xs font-semibold whitespace-nowrap">
                    {experienceSummary.period}
                  </span>
                </div>

                {/* Combined Narrative Paragraph */}
                <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-5 font-normal">
                  {experienceSummary.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {experienceSummary.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-sub)]">
                      <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider block mb-2.5">
                    Core Technologies & Architecture:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {experienceSummary.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-[11px] font-medium text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600/50 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
