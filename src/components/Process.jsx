import React from 'react';
import { 
  ClipboardList, 
  Layout, 
  Code, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';
import { processSteps } from '../data/portfolioData';
import RevealOnScroll from './common/RevealOnScroll';

export default function Process() {
  const iconMap = {
    'clipboard-list': ClipboardList,
    layout: Layout,
    code: Code,
    rocket: Rocket,
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="theme-pill mb-3">
              <span className="font-bold tracking-wider uppercase text-[11px]">My Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight mb-3">
              How I build a <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent'>website</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-body)]">
              A simple and transparent process to deliver high-quality websites.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Code;
            return (
              <RevealOnScroll key={idx} delay={idx * 100} direction="up" className="h-full">
                <div className="relative flex flex-col h-full">
                  <div className="theme-card p-6 flex-1 flex flex-col justify-between bg-white dark:bg-slate-800 hover:-translate-y-1 transition-transform h-full">
                    <div>
                      {/* Number Badge and Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-black text-blue-600 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900">
                          {step.step}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 flex items-center justify-center">
                          <Icon size={18} />
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-[var(--text-heading)] mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs text-[var(--text-body)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting arrow for desktop (not on last item) */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-400 items-center justify-center shadow-xs">
                      <ArrowRight size={12} />
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}

