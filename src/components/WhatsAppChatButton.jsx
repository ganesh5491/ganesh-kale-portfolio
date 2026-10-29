import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function WhatsAppChatButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = personalInfo.phone || '9028441589';
  const defaultMessage = encodeURIComponent(
    "Hi Ganesh, I saw your portfolio and would like to discuss a project."
  );
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
      {/* Speech bubble / Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-xs font-semibold text-[var(--text-heading)] animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ml-1 text-sm font-bold leading-none cursor-pointer"
            aria-label="Close tooltip"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Ganesh Kale"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Glow / Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 blur-xs animate-pulse pointer-events-none"></span>

        <WhatsAppIcon size={28} className="relative z-10" />
      </a>
    </div>
  );
}

