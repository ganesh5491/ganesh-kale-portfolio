import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectCategories, projectsList } from '../data/portfolioData';
import RevealOnScroll from './common/RevealOnScroll';

/**
 * LazyVideo: Defers mounting and playing video until within viewport.
 * Automatically pauses when scrolled away to save CPU and RAM.
 */
function LazyVideo({ src, poster, badgeText, className = '' }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: '250px 0px 250px 0px', threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative bg-slate-950 overflow-hidden ${className}`}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onPlaying={() => setIsPlaying(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isPlaying ? 'opacity-100' : 'opacity-80'
          }`}
        />
      ) : (
        <div className="w-full h-full bg-slate-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-blue-500/40 border-t-blue-500 animate-spin"></div>
        </div>
      )}

      {badgeText && (
        <div className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-xs text-[10px] font-semibold text-white flex items-center gap-1.5 shadow-sm z-10 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{badgeText}</span>
        </div>
      )}
    </div>
  );
}

/**
 * LazyImage: Smooth skeleton placeholder with fade-in on load
 */
function LazyImage({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-100 dark:bg-slate-800">
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200/70 dark:bg-slate-800/80 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProjectSlide, setActiveProjectSlide] = useState(0);
  const projectSliderRef = useRef(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  const topProjects = projectsList.filter(p => p.featured);
  const remainingProjects = projectsList.filter(p => !p.featured);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveProjectSlide(0);
    if (projectSliderRef.current) {
      projectSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handleProjectScroll = (e) => {
    const el = e.currentTarget;
    const card = el.firstElementChild;
    if (!card) return;
    const cardWidth = card.clientWidth + 16;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveProjectSlide(Math.min(filteredProjects.length - 1, Math.max(0, index)));
  };

  const scrollToProjectSlide = (index) => {
    if (!projectSliderRef.current) return;
    const card = projectSliderRef.current.children[index];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
    setActiveProjectSlide(index);
  };

  const scrollProjectPrev = () => {
    scrollToProjectSlide(Math.max(0, activeProjectSlide - 1));
  };

  const scrollProjectNext = () => {
    scrollToProjectSlide(Math.min(filteredProjects.length - 1, activeProjectSlide + 1));
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with Pill, Title, Subtitle, and View All Button */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="theme-pill mb-3">
                <span className="font-bold tracking-wider uppercase text-[11px]">Featured Projects</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight mb-2">
                Some of my <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent'>website projects
                  </span> 
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-body)]">
                A showcase of websites and web applications I have built for clients, businesses, and during my experience.
              </p>
            </div>

            <a
              href="#projects"
              onClick={() => handleCategoryChange('All')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>View All ({projectsList.length} Projects)</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </RevealOnScroll>

        {/* Filter Categories Row */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="flex items-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-none">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0c1222] text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Mobile View: Smooth Swipeable Project Slider (visible on mobile < sm) */}
        <div className="sm:hidden mb-6">
          <div
            ref={projectSliderRef}
            onScroll={handleProjectScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 scrollbar-none"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center"
              >
                <div className="theme-card p-5 flex flex-col justify-between bg-white dark:bg-slate-800 h-full rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-md">
                  <div>
                    {/* Media Container */}
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-slate-900 border border-slate-100 dark:border-slate-700">
                      {proj.video ? (
                        <LazyVideo
                          src={proj.video}
                          poster={proj.image}
                          badgeText="Video Walkthrough"
                          className="w-full h-full"
                        />
                      ) : (
                        <LazyImage
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide backdrop-blur-sm z-10 ${proj.badgeColor}`}>
                        {proj.badge}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-heading)] mb-1">
                      {proj.title}
                    </h3>

                    {proj.subtitle && (
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {proj.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-[var(--text-body)] mb-4 line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/80">
                    <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                      {proj.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs"
                    >
                      <span>Live</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider Controls: Indicator Dots + Arrow Buttons */}
          <div className="flex items-center justify-between pt-3 px-1">
            {/* Dots */}
            <div className="flex items-center gap-1.5 max-w-[55%] overflow-hidden">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToProjectSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeProjectSlide === idx 
                      ? 'w-6 bg-blue-600 dark:bg-blue-500' 
                      : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to project slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mr-1">
                {activeProjectSlide + 1} / {filteredProjects.length}
              </span>
              <button
                onClick={scrollProjectPrev}
                disabled={activeProjectSlide === 0}
                className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Previous project"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={scrollProjectNext}
                disabled={activeProjectSlide === filteredProjects.length - 1}
                className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Next project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop / Tablet View: Multi-column Grid (hidden on mobile, visible on sm and up) */}
        <div className="hidden sm:block">
          {activeCategory === 'All' ? (
          <div className="space-y-6">
            
            {/* Row 1: 2 Standout Featured Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topProjects.map((proj, idx) => (
                <RevealOnScroll key={proj.id} delay={idx * 120} direction="up">
                  <div className="theme-card p-6 flex flex-col justify-between group bg-white dark:bg-slate-800 h-full">
                    <div>
                      {/* Media Preview Container */}
                      <div className="relative rounded-2xl overflow-hidden mb-5 border border-slate-100 dark:border-slate-700 bg-slate-900 group-hover:scale-[1.01] transition-transform duration-300">
                        {proj.video ? (
                          <LazyVideo
                            src={proj.video}
                            poster={proj.image}
                            badgeText="Live Video Walkthrough"
                            className="w-full h-60 sm:h-72"
                          />
                        ) : (
                          <div className="w-full h-56 sm:h-64">
                            <LazyImage
                              src={proj.image}
                              alt={proj.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide backdrop-blur-sm z-10 ${proj.badgeColor}`}>
                          {proj.badge}
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-xl font-bold text-[var(--text-heading)] group-hover:text-blue-600 transition-colors">
                          {proj.title}
                        </h3>
                      </div>

                      {proj.subtitle && (
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {proj.subtitle}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-[var(--text-body)] mb-4 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/80">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-transform group-hover:scale-105"
                      >
                        <span>Visit Website</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Remaining Projects in a 3-column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {remainingProjects.map((proj, idx) => (
                <RevealOnScroll key={proj.id} delay={idx * 80} direction="up">
                  <div className="theme-card p-5 flex flex-col justify-between group bg-white dark:bg-slate-800 h-full">
                    <div>
                      {/* Thumbnail */}
                      <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 mb-4 bg-slate-900">
                        {proj.video ? (
                          <LazyVideo
                            src={proj.video}
                            poster={proj.image}
                            badgeText="Video Tour"
                            className="w-full h-full"
                          />
                        ) : (
                          <LazyImage
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide backdrop-blur-sm z-10 ${proj.badgeColor}`}>
                          {proj.badge}
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-[var(--text-heading)] mb-1 group-hover:text-blue-600 transition-colors">
                        {proj.title}
                      </h4>

                      {proj.subtitle && (
                        <p className="text-[11px] font-medium text-blue-600 dark:text-blue-400 mb-1.5">
                          {proj.subtitle}
                        </p>
                      )}

                      <p className="text-xs text-[var(--text-body)] mb-4 line-clamp-2 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/80">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.slice(0, 3).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-transform group-hover:scale-105"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

          </div>
        ) : (
          /* Filtered View Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj, idx) => (
              <RevealOnScroll key={proj.id} delay={idx * 60} direction="up">
                <div className="theme-card p-5 flex flex-col justify-between group bg-white dark:bg-slate-800 h-full">
                  <div>
                    <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 mb-4 bg-slate-900">
                      {proj.video ? (
                        <LazyVideo
                          src={proj.video}
                          poster={proj.image}
                          badgeText="Video Tour"
                          className="w-full h-full"
                        />
                      ) : (
                        <LazyImage
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide backdrop-blur-sm z-10 ${proj.badgeColor}`}>
                        {proj.badge}
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-[var(--text-heading)] mb-1 group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h4>
                    {proj.subtitle && (
                      <p className="text-[11px] font-medium text-blue-600 dark:text-blue-400 mb-1.5">
                        {proj.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-[var(--text-body)] mb-4 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/80">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-transform group-hover:scale-105"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}
        </div>

      </div>
    </section>
  );
}
