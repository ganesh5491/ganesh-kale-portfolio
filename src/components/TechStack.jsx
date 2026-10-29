import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Search, 
  SlidersHorizontal 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { playPop } from '../utils/soundEffects';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Server: Server,
    Database: Database,
    Cpu: Cpu,
    Wrench: Wrench,
    Sparkles: Sparkles,
  };

  // Filter skills based on search and category
  const filteredCategories = skillCategories.map(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery && matchingSkills.length === 0) return null;
    return {
      ...cat,
      skills: searchQuery ? matchingSkills : cat.skills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--glass-card-bg)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)] mb-3">
            <Sparkles size={12} />
            <span>03 // EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            Tech stack & toolkit
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            Production-tested languages, frameworks, cloud services, and tools I leverage to engineer robust digital solutions.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--glass-card-bg)] border border-[var(--border-color)] focus:border-cyan-400 focus:outline-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors"
            />
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => {
                playPop();
                setActiveCategory('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'bg-[var(--glass-card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Tech
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playPop();
                  setActiveCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-[var(--glass-card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <div
                key={cat.id}
                className="p-6 rounded-3xl bg-[var(--glass-card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--text-primary)]">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] text-[var(--text-muted)] font-medium">
                        {cat.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        onMouseEnter={() => playPop()}
                        className="group/skill flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all text-xs"
                      >
                        <span className="font-medium text-[var(--text-primary)] group-hover/skill:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)]">
                          {skill.level}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress bar preview */}
                <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                  <span>Proficiency</span>
                  <span className="text-emerald-400 font-semibold">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-[var(--text-muted)] text-sm">
            No matching technologies found for "{searchQuery}". Try clearing search.
          </div>
        )}

      </div>
    </section>
  );
}

