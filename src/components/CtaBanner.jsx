import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ctaLaptopImg from '../assets/cta.png';
import RevealOnScroll from './common/RevealOnScroll';

export default function CtaBanner({ onOpenContact }) {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      
      {/* Background Pastel Blurs */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll direction="up">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-50/80 via-white to-purple-50/50 dark:from-slate-800/80 dark:via-slate-900 dark:to-slate-800/60 border border-blue-100 dark:border-slate-700/80 p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                
                {/* Pill */}
                <div className="theme-pill mb-4">
                  <span className="font-bold tracking-wider uppercase text-[11px]">Let's Work Together</span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-heading)] tracking-tight leading-[1.15] mb-5">
                  Have a website idea?<br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Let’s bring it to life.
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-[var(--text-body)] leading-relaxed max-w-lg mb-8">
                  I'm open to freelance projects, full-time opportunities, or just a friendly chat about website development.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={onOpenContact}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>

              {/* Right Graphic: Laptop on Desk + Handwritten Style Note */}
              <div className="lg:col-span-6 relative flex flex-col items-center justify-center pt-6 lg:pt-0">
                
                {/* Laptop Graphic with Increased Size and Lazy Loading */}
                <div className="relative w-full max-w-lg lg:max-w-xl">
                  <img
                    src={ctaLaptopImg}
                    alt="Modern Laptop Workspace"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl scale-105 sm:scale-110 lg:scale-120 transition-transform duration-300"
                  />

                  {/* Handwritten Doodle Note */}
                  <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 px-4 py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-700 shadow-lg transform rotate-6 z-10 pointer-events-none">
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      Ideas <span className="text-blue-500">➔</span> Websites <span className="text-purple-500">➔</span> Growth
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
