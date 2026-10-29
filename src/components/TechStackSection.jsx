import React, { useState } from 'react';
import { allTechnologies, techStackCategories } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import RevealOnScroll from './common/RevealOnScroll';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTech = activeCategory === 'All'
    ? allTechnologies
    : allTechnologies.filter(t => t.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="theme-pill mb-3">
              <span className="font-bold tracking-wider uppercase text-[11px]">Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight mb-3">
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent'>Technologies</span> I work with
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-body)]">
              A curated set of tools and technologies I use to build scalable websites and web applications.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Categories */}
        <RevealOnScroll direction="up" delay={80}>
          <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
            {techStackCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Technologies Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 max-w-5xl mx-auto">
          {filteredTech.map((tech, idx) => (
            <RevealOnScroll key={tech.name + idx} delay={idx * 35} direction="up">
              <div
                className="w-20 h-22 sm:w-24 sm:h-24 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-md hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                  <TechIcon name={tech.name} size={30} />
                </div>
                <span className="text-[11px] font-semibold text-[var(--text-sub)] group-hover:text-blue-600 transition-colors truncate max-w-full">
                  {tech.name}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}

