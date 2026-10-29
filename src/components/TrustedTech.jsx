import React from 'react';
import { trustedTechnologies } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export default function TrustedTech() {
  return (
    <section id="skills" className="py-14 border-y border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="flex items-center justify-center mb-8">
          <div className="theme-pill">
            <span className="font-bold tracking-wider uppercase text-[11px]">Trusted Technologies</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300">
              Tools and technologies I use to build websites and web applications.
            </span>
          </div>
        </div>

        {/* 11 Horizontal Tech Items */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3 sm:gap-4 items-center justify-center">
          {trustedTechnologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-md hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-200 group cursor-default"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                <TechIcon name={tech.name} size={30} />
              </div>
              <span className="text-[11px] font-semibold text-[var(--text-sub)] group-hover:text-blue-600 transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

