import React, { useState } from 'react';
import { X, Send, Mail, MapPin, CheckCircle2, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { WhatsAppIcon } from './Icons';

export default function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setLoading(true);

    const phoneTarget = '919028441589';
    const text = `*New Portfolio Inquiry*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `💬 *Message:* ${formData.message || 'I am interested in discussing a project.'}`;

    const whatsappUrl = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        onClose();
      }, 3500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
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
            <h4 className="text-lg font-bold text-[var(--text-heading)]">Message Sent to WhatsApp!</h4>
            <p className="text-xs text-[var(--text-body)] max-w-xs mx-auto">
              Thank you for reaching out. Opening WhatsApp chat with Ganesh (+91 9028441589)...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-heading)] mb-1">
                Your Name *
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-heading)] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 90284 41589"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 focus:outline-none focus:border-blue-600 text-xs sm:text-sm text-[var(--text-heading)]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-heading)] mb-1">
                  Your Email *
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
              className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <WhatsAppIcon size={16} />
                  <span>Send to WhatsApp</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-[var(--text-body)]">
              Directly connects to Ganesh at +91 9028441589
            </p>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-[var(--text-body)]">
          <span className="flex items-center gap-1.5">
            <Mail size={13} className="text-blue-600" /> {personalInfo.email}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={13} className="text-emerald-600" /> {personalInfo.phoneFormatted || personalInfo.phone}
          </span>
        </div>

      </div>
    </div>
  );
}

