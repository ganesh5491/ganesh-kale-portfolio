import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    'Business Websites',
    'Web Applications',
    'CRM & ERP Solutions',
    'UI/UX Implementation',
    'Consultation'
  ];

  return (
    <footer className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100 dark:border-slate-800">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-base shadow-sm">
                GK
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-[var(--text-heading)] leading-none">
                  Ganesh Kale
                </span>
                <span className="text-[11px] font-medium text-[var(--text-body)] mt-0.5">
                  Full Stack Developer
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-5 max-w-sm">
              Building modern websites and web applications that create real impact.
            </p>

            {/* Direct Email & Contact Number */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start gap-2.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60 text-xs font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-xs"
              >
                <Mail size={13} />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/60 text-xs font-semibold hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all shadow-xs"
              >
                <Phone size={13} />
                <span>{personalInfo.phoneFormatted || personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-heading)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[var(--text-body)] hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-heading)] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((srv, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-xs text-[var(--text-body)] hover:text-blue-600 transition-colors font-medium"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-heading)] mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-xs text-[var(--text-body)] hover:text-blue-600 transition-colors"
              >
                <Mail size={14} className="text-blue-600 flex-shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2.5 text-xs text-[var(--text-body)] hover:text-emerald-600 transition-colors"
              >
                <Phone size={14} className="text-emerald-600 flex-shrink-0" />
                <span>{personalInfo.phoneFormatted || personalInfo.phone}</span>
              </a>

              <div className="flex items-center gap-2.5 text-xs text-[var(--text-body)]">
                <MapPin size={14} className="text-blue-600 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-body)]">
          <p>© {new Date().getFullYear()} Ganesh Kale. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Developed with <Heart size={13} className="text-rose-500 fill-rose-500" /> by Ganesh Kale
          </p>
        </div>

      </div>
    </footer>
  );
}
