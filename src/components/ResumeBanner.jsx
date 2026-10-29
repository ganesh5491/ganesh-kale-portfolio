import React from 'react';
import { 
  Download, 
  Eye, 
  Sparkles, 
  FileCheck, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';
import { playPop, playSuccess } from '../utils/soundEffects';

export default function ResumeBanner({ onOpenResume }) {
  const handleQuickDownload = () => {
    playSuccess();
    // trigger resume modal or direct download
    onOpenResume();
  };

  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Futuristic 3D Glass Card Container */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-indigo-950/60 border border-[var(--border-light)] p-8 sm:p-12 md:p-14 overflow-hidden shadow-2xl backdrop-blur-2xl">
          
          {/* Subtle background glow circles */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                <FileCheck size={13} />
                <span>RESUME // VERIFIED CV</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Download My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400">Resume</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                Looking for a concise overview of my hands-on experience, academic credentials, and software engineering capabilities? Grab a downloadable copy or inspect the interactive digital version.
              </p>

             \

              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck size={14} /> Updated for 2025/2026
                </span>
                <span>•</span>
                <span>PDF & Text Format</span>
              </div>
            </div>

            {/* Right 3D Holographic Card Illustration */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/10 border border-white/30 p-5 shadow-2xl backdrop-blur-xl rotate-3 hover:rotate-0 transition-transform duration-500 group flex flex-col justify-between">
                
                {/* Holographic Header */}
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                      GK
                    </div>
                    <span className="text-[11px] font-mono font-bold text-white tracking-wider">DEV // PASS</span>
                  </div>
                  <Cpu size={16} className="text-cyan-300 animate-pulse" />
                </div>

                {/* Holographic Chip & Info */}
                <div className="my-auto space-y-3">
                  <div className="w-10 h-7 rounded-md bg-gradient-to-tr from-amber-300 to-amber-600 border border-amber-200 shadow-sm opacity-90"></div>
                  
                  <div className="text-left font-mono">
                    <span className="text-[10px] text-cyan-300 block">SOFTWARE ENGINEER</span>
                    <h4 className="text-base font-black text-white tracking-wider">GANESH KALE</h4>
                    <span className="text-[10px] text-slate-300">PUNE, IN • FULL STACK</span>
                  </div>
                </div>

                {/* Holographic Card Footer */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[10px] text-slate-300 font-mono">
                  <span>ID: GK-2026-CS</span>
                  <span className="text-emerald-400">AUTHENTICATED</span>
                </div>

                {/* Shimmer light sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl pointer-events-none"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

