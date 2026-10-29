import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';
import RevealOnScroll from './common/RevealOnScroll';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50/40 dark:bg-slate-900/20">
      
      {/* Soft Pastel Ambient Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-100/40 dark:bg-orange-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="theme-pill mb-3">
              <span className="font-bold tracking-wider uppercase text-[11px]">Client Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight mb-3">
              What clients say about <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent'>my work</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-body)]">
              Real feedback from businesses and individuals I have worked with.
            </p>
          </div>
        </RevealOnScroll>

        {/* Floating Avatars around the Card (as seen in the design) */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="relative max-w-3xl mx-auto">
            
            {/* Surrounding Client Avatars */}
            <div className="hidden md:flex absolute -left-12 -top-6 w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden bg-gradient-to-tr from-blue-400 to-indigo-500 items-center justify-center text-white font-bold text-xs">
              JD
            </div>
            <div className="hidden md:flex absolute -left-16 top-1/2 w-14 h-14 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden bg-gradient-to-tr from-amber-400 to-orange-500 items-center justify-center text-white font-bold text-sm">
              TI
            </div>
            <div className="hidden md:flex absolute -left-10 -bottom-4 w-11 h-11 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden bg-gradient-to-tr from-purple-400 to-pink-500 items-center justify-center text-white font-bold text-xs">
              SK
            </div>

            <div className="hidden md:flex absolute -right-12 -top-6 w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden bg-gradient-to-tr from-emerald-400 to-teal-500 items-center justify-center text-white font-bold text-xs">
              RM
            </div>
            <div className="hidden md:flex absolute -right-14 top-1/2 w-13 h-13 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden bg-gradient-to-tr from-cyan-400 to-blue-500 items-center justify-center text-white font-bold text-xs">
              LN
            </div>
            <div className="hidden md:flex absolute -right-8 -bottom-4 w-11 h-11 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden bg-gradient-to-tr from-rose-400 to-red-500 items-center justify-center text-white font-bold text-xs">
              AK
            </div>

            {/* Central Testimonial Card */}
            <div className="theme-card p-8 sm:p-12 bg-white dark:bg-slate-800 text-center relative shadow-lg">
              
              {/* Quotation Icon */}
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <Quote size={20} className="rotate-180" />
              </div>

              {/* Quote Body */}
              <p className="text-base sm:text-lg text-[var(--text-heading)] font-medium leading-relaxed max-w-xl mx-auto mb-8 transition-opacity duration-300">
                "{current.quote}"
              </p>

              {/* Author info & Rating */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-700/80">
                <div className="text-left">
                  <h4 className="text-sm font-bold text-[var(--text-heading)]">
                    {current.author}
                  </h4>
                  <span className="text-xs text-[var(--text-body)]">
                    {current.company}
                  </span>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>

              {/* Prev / Next Circular Arrows */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
              </div>

              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

            </div>

          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

