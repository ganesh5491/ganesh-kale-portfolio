import React, { useState } from 'react';
import { X, Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              GK
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--text-heading)]">Let's Talk</h3>
              <p className="text-[11px] text-[var(--text-body)]">Start a project with Ganesh</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 size={44} className="text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-[var(--text-heading)]">Message Sent!</h4>
            <p className="text-xs text-[var(--text-body)] max-w-xs mx-auto">
              Thank you for reaching out. Ganesh will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-heading)] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 focus:outline-none focus:border-blue-600 text-xs sm:text-sm text-[var(--text-heading)]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-heading)] mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 focus:outline-none focus:border-blue-600 text-xs sm:text-sm text-[var(--text-heading)]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-heading)] mb-1">
                Project Details or Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell me about your project, timeline, or goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 focus:outline-none focus:border-blue-600 text-xs sm:text-sm text-[var(--text-heading)] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-[var(--text-body)]">
          <span className="flex items-center gap-1.5">
            <Mail size={13} className="text-blue-600" /> {personalInfo.email}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-blue-600" /> {personalInfo.location}
          </span>
        </div>

      </div>
    </div>
  );
}

