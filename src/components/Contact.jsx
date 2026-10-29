import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { playPop, playSuccess } from '../utils/soundEffects';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    playPop();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playPop();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playSuccess();
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--glass-card-bg)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)] mb-3">
            <Sparkles size={12} />
            <span>06 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            Let's build something great
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            Have an exciting product idea, an open engineering position, or need consulting? My inbox is always open.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Get in touch
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-8">
                Reach out directly via email, phone, or connected social networks.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] mb-4 group hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] text-[var(--text-muted)] font-medium block">
                        Email Address
                      </span>
                      <a 
                        href={personalInfo.socialLinks.email} 
                        className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:text-cyan-400 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2 rounded-lg bg-[var(--glass-card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] mb-4 group hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--text-muted)] font-medium block">
                      Phone / WhatsApp
                    </span>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:text-indigo-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] group hover:border-rose-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--text-muted)] font-medium block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links Ribbon */}
            <div className="pt-8 mt-6 border-t border-[var(--border-color)]">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider block mb-3">
                Connect Online:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPop()}
                  className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPop()}
                  className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-blue-600 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPop()}
                  className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-sky-500 transition-all"
                  aria-label="Twitter / X Profile"
                >
                  <TwitterIcon size={18} />
                </a>

                <a
                  href={personalInfo.socialLinks.email}
                  onClick={() => playPop()}
                  className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-emerald-600 transition-all"
                  aria-label="Send direct email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
              Fill in your details and I'll get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in duration-300">
                <CheckCircle2 size={40} className="text-emerald-400 mx-auto mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                  Thank you for reaching out, Ganesh will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-cyan-400 focus:outline-none text-xs sm:text-sm text-[var(--text-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-cyan-400 focus:outline-none text-xs sm:text-sm text-[var(--text-primary)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-cyan-400 focus:outline-none text-xs sm:text-sm text-[var(--text-primary)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-cyan-400 focus:outline-none text-xs sm:text-sm text-[var(--text-primary)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
