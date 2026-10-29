import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  Info 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import { playPop } from '../utils/soundEffects';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI & Cloud'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--glass-card-bg)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)] mb-3">
            <Sparkles size={12} />
            <span>04 // PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            Selected work
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            A showcase of independent web platforms and enterprise client solutions — click any card to inspect architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playPop();
                setActiveCategory(cat);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-[var(--glass-card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-light)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => {
                playPop();
                onSelectProject(project);
              }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer border border-[var(--border-color)] hover:border-cyan-400/50"
            >
              <div>
                {/* Visual Header / Mockup Preview */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle simulated browser chrome */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/40"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-white/40"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-white/40"></span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Centered Graphic Badge */}
                  <div className="text-center my-auto transition-transform group-hover:scale-105 duration-300">
                    <h4 className="text-xl font-black text-white drop-shadow-md">
                      {project.title}
                    </h4>
                    <p className="text-xs text-white/80 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Bottom Stats Banner */}
                  <div className="flex items-center justify-between text-[11px] text-white/70 font-mono z-10 pt-2 border-t border-white/10">
                    <span>Performance</span>
                    <span className="text-white font-bold">99 / 100</span>
                  </div>

                  {/* Ambient glowing orb inside card */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight size={18} className="text-[var(--text-muted)] group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-3 mb-5 leading-relaxed font-normal">
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-[var(--bg-primary)] border border-[var(--border-color)] text-[11px] font-medium text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] text-[var(--text-muted)] font-mono">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-semibold">
                <span className="text-cyan-400 flex items-center gap-1 group-hover:underline">
                  <Info size={13} /> View Architecture
                </span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                    onClick={() => playPop()}
                    className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors"
                  >
                    <GithubIcon size={15} />
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    onClick={() => playPop()}
                    className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-cyan-400 hover:bg-[var(--border-color)] transition-colors"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
