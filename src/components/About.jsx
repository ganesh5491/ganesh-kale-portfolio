import React from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  Rocket, 
  Users, 
  Target,
  Sparkles,
  Code2,
  Mail,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import RevealOnScroll from './common/RevealOnScroll';

export default function About({ onOpenResume }) {
  const statCards = [
    {
      value: personalInfo.yearsExperience,
      label: 'Years Experience',
      icon: Briefcase,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/40',
      borderColor: 'border-blue-100 dark:border-blue-900/40',
    },
    {
      value: '10+',
      label: 'Projects Completed',
      icon: Rocket,
      iconColor: 'text-rose-600',
      bgColor: 'bg-rose-50 dark:bg-rose-950/40',
      borderColor: 'border-rose-100 dark:border-rose-900/40',
    },
    {
      value: personalInfo.happyClients,
      label: 'Happy Clients',
      icon: Users,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/40',
      borderColor: 'border-purple-100 dark:border-purple-900/40',
    },
    {
      value: personalInfo.clientSatisfaction,
      label: 'Client Satisfaction',
      icon: Target,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/40',
      borderColor: 'border-amber-100 dark:border-amber-900/40',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      
      {/* Soft Pastel Aura Blurs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Unique Architectural Silhouette Portrait Frame (No Popups) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <RevealOnScroll direction="left">
              <div className="relative group">
                
                {/* Vibrant Ambient Glow behind frame */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-amber-400/20 rounded-[3rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 -z-20"></div>

                {/* Offset Geometric Accent Ring (Rotated Architectural Layer) */}
                <div className="absolute -inset-3 rounded-[2.8rem] rounded-tr-[5.5rem] rounded-bl-[5.5rem] border-2 border-dashed border-blue-400/40 dark:border-blue-400/25 rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out -z-10"></div>

                {/* Decorative Tech Matrix Dots (Top-Left) */}
                <div className="absolute -top-4 -left-4 w-12 h-12 grid grid-cols-3 gap-1.5 opacity-40 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                </div>

                {/* Decorative Corner Viewfinder Accent (Bottom-Right) */}
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400/60 rounded-br-2xl pointer-events-none"></div>

                {/* Unique Asymmetric Gradient Border Frame */}
                <div className="w-68 h-80 sm:w-76 sm:h-92 p-[3px] bg-gradient-to-tr from-blue-600 via-indigo-500 to-amber-400 rounded-[2.6rem] rounded-tr-[5.2rem] rounded-bl-[5.2rem] shadow-2xl shadow-blue-500/15 transition-transform duration-500 group-hover:-translate-y-1">
                  
                  {/* Inner Bezel */}
                  <div className="w-full h-full bg-white dark:bg-slate-900 p-2.5 rounded-[2.4rem] rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden relative">
                    
                    {/* Portrait Image with Smooth Hover Zoom & Lazy Loading */}
                    <img
                      src={profileImg}
                      alt="Ganesh Kale - Full Stack Developer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top rounded-[2rem] rounded-tr-[4.6rem] rounded-bl-[4.6rem] transition-all duration-700 ease-out group-hover:scale-105 group-hover:filter group-hover:contrast-[1.03]"
                    />

                    {/* Subtle Elegant Glass Gradient Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10 dark:to-transparent rounded-[2rem] rounded-tr-[4.6rem] rounded-bl-[4.6rem] pointer-events-none"></div>
                  </div>

                </div>

              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Text & 4 Stat Cards */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <RevealOnScroll direction="right" delay={150}>
              
              {/* Pill */}
              <div className="theme-pill mb-4">
                <span className="font-bold tracking-wider uppercase text-[11px]">About Me</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] leading-tight mb-5">
                Web Developer who turns<br />
                ideas into <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">digital experiences.</span>
              </h2>

              {/* Paragraph */}
              <p className="text-base text-[var(--text-body)] leading-relaxed mb-5 max-w-xl">
                {personalInfo.aboutBio}
              </p>

              {/* Direct Email & Contact Number */}
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60 text-xs sm:text-sm font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-xs group"
                >
                  <Mail size={15} className="text-blue-500 group-hover:text-white transition-colors" />
                  <span>{personalInfo.email}</span>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/60 text-xs sm:text-sm font-semibold hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all shadow-xs group"
                >
                  <Phone size={15} className="text-emerald-500 group-hover:text-white transition-colors" />
                  <span>{personalInfo.phoneFormatted || personalInfo.phone}</span>
                </a>
              </div>

              {/* 4 Stat Cards Matching the exact reference cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full">
                {statCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border ${card.borderColor} shadow-xs hover:shadow-md transition-all flex flex-col`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`w-8 h-8 rounded-xl ${card.bgColor} ${card.iconColor} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={16} />
                        </div>
                        <span className="text-lg sm:text-xl font-extrabold text-[var(--text-heading)]">
                          {card.value}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-[var(--text-body)] leading-snug">
                        {card.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
