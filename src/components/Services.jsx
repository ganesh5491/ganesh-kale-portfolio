import React from 'react';
import { 
  Globe, 
  Layers, 
  Database, 
  Sparkles,
  Check
} from 'lucide-react';
import { servicesList } from '../data/portfolioData';
import RevealOnScroll from './common/RevealOnScroll';

export default function Services({ onSelectService }) {
  const iconMap = {
    globe: Globe,
    layers: Layers,
    database: Database,
    wand: Sparkles,
  };

  // Distinct vibrant color theme and highlight tags for each service card
  const serviceThemes = [
    {
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25',
      accentBar: 'bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600',
      hoverBorder: 'hover:border-blue-400/80 dark:hover:border-blue-500',
      hoverShadow: 'hover:shadow-xl hover:shadow-blue-500/15',
      hoverBg: 'hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-white dark:hover:from-blue-950/20 dark:hover:to-slate-800',
      tagBg: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60',
      titleHover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
      features: ['SEO Optimized', 'Responsive Design', 'Fast Loading']
    },
    {
      gradient: 'from-indigo-500 to-purple-600',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/25',
      accentBar: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
      hoverBorder: 'hover:border-purple-400/80 dark:hover:border-purple-500',
      hoverShadow: 'hover:shadow-xl hover:shadow-purple-500/15',
      hoverBg: 'hover:bg-gradient-to-b hover:from-purple-50/50 hover:to-white dark:hover:from-purple-950/20 dark:hover:to-slate-800',
      tagBg: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-900/60',
      titleHover: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
      features: ['Full Stack Apps', 'Scalable REST APIs', 'Secure Architecture']
    },
    {
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25',
      accentBar: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600',
      hoverBorder: 'hover:border-emerald-400/80 dark:hover:border-emerald-500',
      hoverShadow: 'hover:shadow-xl hover:shadow-emerald-500/15',
      hoverBg: 'hover:bg-gradient-to-b hover:from-emerald-50/50 hover:to-white dark:hover:from-emerald-950/20 dark:hover:to-slate-800',
      tagBg: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/60',
      titleHover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
      features: ['Workflow Automation', 'Lead & Pipeline Tracking', 'Role-Based Access (RBAC)']
    },
    {
      gradient: 'from-rose-500 via-pink-500 to-amber-500',
      iconBg: 'bg-gradient-to-br from-rose-500 via-pink-500 to-amber-500 text-white shadow-lg shadow-rose-500/25',
      accentBar: 'bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400',
      hoverBorder: 'hover:border-rose-400/80 dark:hover:border-rose-500',
      hoverShadow: 'hover:shadow-xl hover:shadow-rose-500/15',
      hoverBg: 'hover:bg-gradient-to-b hover:from-rose-50/50 hover:to-white dark:hover:from-rose-950/20 dark:hover:to-slate-800',
      tagBg: 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/60',
      titleHover: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
      features: ['Figma to React', 'Modern UI Animation', 'Pixel-Perfect CSS']
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800/80">
      
      {/* Vibrant Ambient Gradient Background Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-emerald-400/12 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="theme-pill mb-3">
              <span className="font-bold tracking-wider uppercase text-[11px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                My Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight mb-3">
              Website Development{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-body)]">
              End-to-end web development services to turn your ideas into powerful, colorful digital products.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Vibrant, Colorful Cards (Bottom arrows removed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => {
            const Icon = iconMap[service.icon] || Globe;
            const theme = serviceThemes[idx % serviceThemes.length];

            return (
              <RevealOnScroll key={service.id} delay={idx * 100} direction="up" className="h-full">
                <div
                  className={`theme-card relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between group bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 ${theme.hoverBorder} ${theme.hoverShadow} ${theme.hoverBg} hover:-translate-y-1.5 transition-all duration-300 h-full overflow-hidden`}
                >
                  {/* Top Colorful Accent Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.accentBar}`}></div>

                  <div>
                    {/* Glowing Colorful Icon Container */}
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${theme.iconBg}`}
                    >
                      <Icon size={24} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold text-[var(--text-heading)] mb-2.5 transition-colors duration-200 ${theme.titleHover}`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Tags (Replaces the bottom arrow for a richer, more colorful design) */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
                    <div className="flex flex-wrap gap-1.5">
                      {theme.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wide ${theme.tagBg}`}
                        >
                          <Check size={10} className="stroke-[2.5]" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
