import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import heroHeaderImg from '../assets/hero-header.png';

export default function Hero({ onOpenResume }) {
  const stats = [
    { value: personalInfo.yearsExperience, label: 'Years Experience' },
    { value: personalInfo.websitesDelivered, label: 'Websites Delivered' },
    { value: personalInfo.happyClients, label: 'Happy Clients' },
    { value: personalInfo.clientSatisfaction, label: 'Client Satisfaction' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      
      {/* Soft Ambient Pastel Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-32 right-10 w-[450px] h-[450px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-64 left-10 w-[400px] h-[400px] bg-amber-100/40 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Side: Hero 3D Graphic (Laptop, Mobile & 3D Spheres) */}


          {/* Top Pill */}
          <div className="theme-pill mb-6">
            <Sparkles size={13} className="text-blue-600 animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-[11px]">Full Stack Web Developer</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-heading)] leading-[1.12] mb-6">
            I build modern websites that{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              create real impact.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[var(--text-body)] leading-relaxed max-w-2xl mb-8 font-normal">
            {personalInfo.heroSubtitle}
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            <a
              href="#projects"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0c1222] dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>View My Work</span>
              <ArrowRight size={15} />
            </a>

         
          </div>

          {/* Four Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-slate-100 dark:border-slate-800/80 w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 tracking-tight leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-[var(--text-body)] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
