import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Sparkles, 
  Server, 
  ShieldCheck 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { playPop } from '../utils/soundEffects';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={() => {
          playPop();
          onClose();
        }}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-light)] shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--glass-bg)]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              {project.category}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              Featured Case Study
            </span>
          </div>

          <button
            onClick={() => {
              playPop();
              onClose();
            }}
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Header Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-2">
              {project.title}
            </h2>
            <p className="text-base text-cyan-400 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Simulated Interactive Mockup Screen */}
          <div className={`w-full rounded-2xl bg-gradient-to-br ${project.gradient} border border-[var(--border-light)] p-6 sm:p-8 relative overflow-hidden shadow-inner`}>
            {/* Top Mac browser dots */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-3 text-xs text-white/50 font-mono truncate">{project.liveUrl}</span>
            </div>

            <div className="py-8 text-center max-w-lg mx-auto">
              <Sparkles className="w-12 h-12 text-cyan-300 mx-auto mb-3 animate-bounce" />
              <h4 className="text-xl font-bold text-white mb-2">{project.title} Interface</h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">{project.summary}</p>
              
              {/* Quick Performance metrics */}
              <div className="grid grid-cols-3 gap-3">
                {project.stats && Object.entries(project.stats).map(([k, v], idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 text-center">
                    <span className="block text-xs sm:text-sm font-bold text-white">{v}</span>
                    <span className="block text-[10px] text-slate-300 capitalize">{k}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              Key Capabilities & Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--glass-card-bg)] border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Notes */}
          <div className="p-5 rounded-2xl bg-[var(--glass-card-bg)] border border-[var(--border-color)]">
            <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Server size={16} className="text-indigo-400" />
              Technical Architecture & Stack
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              {project.architecture}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-semibold text-cyan-400">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3 bg-[var(--glass-bg)]">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Tested & Production Ready</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playPop()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--glass-card-bg)] hover:bg-[var(--glass-bg)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-primary)] transition-colors"
            >
              <GithubIcon size={15} />
              <span>GitHub Repo</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playPop()}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
            >
              <span>Live Demonstration</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
