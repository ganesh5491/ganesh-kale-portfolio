import React, { useState, useEffect } from 'react';

/**
 * Floating Capsule Navbar Matching the Exact Design Reference
 * Features:
 * - Pure floating island pill container
 * - Active state in vibrant electric vermilion (#F53D08)
 * - Exact navigation items: Home, About, Stack, Services, Projects, Contact
 * - Reliable smooth scrolling with dynamic offset
 * - Automatic active section detection on scroll
 */
export default function Navbar({ onContactClick }) {
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Tech Stack', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Scrollspy: update active pill when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 160;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop - 90;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.name);
            break;
          }
        }
      }

      if (window.scrollY < 120) {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bullet-proof navigation redirect with precise offset calculation
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveSection(link.name);

    const target = document.getElementById(link.id);
    if (target) {
      const navOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', link.href);
      }
    } else if (link.id === 'contact' && onContactClick) {
      onContactClick();
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex items-center justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
      
      {/* Floating White Pill Island matching the exact screenshot */}
      <nav
        className={`pointer-events-auto inline-flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-white/95 dark:bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-black/5 transition-all duration-300 max-w-full overflow-x-auto scrollbar-none ${
          isScrolled ? 'shadow-xl border-slate-300/80 scale-[0.98]' : ''
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.name;
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ease-out cursor-pointer ${
                isActive
                  ? 'bg-[#000000] text-white shadow-md shadow-[#000000]/30 font-bold scale-[1.02]'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

    </header>
  );
}
