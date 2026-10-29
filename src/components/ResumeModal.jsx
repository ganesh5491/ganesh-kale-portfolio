import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  CheckCircle2 
} from 'lucide-react';
import { personalInfo, experiences, resumeDetails, skillCategories } from '../data/portfolioData';
import { playPop, playSuccess } from '../utils/soundEffects';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    playPop();
    window.print();
  };

  const handleDownload = () => {
    playSuccess();
    // Generate styled markdown or text blob download
    const content = `========================================================================
GANESH KALE - FULL STACK DEVELOPER
========================================================================
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.socialLinks.linkedin} | GitHub: ${personalInfo.socialLinks.github}

SUMMARY:
${resumeDetails.summary}

------------------------------------------------------------------------
WORK EXPERIENCE
------------------------------------------------------------------------
${experiences.map(exp => `
${exp.role.toUpperCase()} - ${exp.company}
${exp.period} | ${exp.location}
Key Achievements:
${exp.highlights.map(h => `• ${h}`).join('\n')}
Core Stack: ${exp.skills.join(', ')}
`).join('\n')}

------------------------------------------------------------------------
EDUCATION
------------------------------------------------------------------------
${resumeDetails.education.map(edu => `
• ${edu.degree}
  ${edu.institution} (${edu.period}) - ${edu.grade}
`).join('\n')}

------------------------------------------------------------------------
CERTIFICATIONS
------------------------------------------------------------------------
${resumeDetails.certifications.map(c => `• ${c}`).join('\n')}

------------------------------------------------------------------------
TECHNICAL SKILLS
------------------------------------------------------------------------
${skillCategories.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}
========================================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ganesh_Kale_Resume_FullStack.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => {
          playPop();
          onClose();
        }}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-light)] shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-6 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--glass-bg)]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              Curriculum Vitae
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              Ganesh Kale • Full Stack
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--glass-card-bg)] hover:bg-[var(--glass-bg)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)] transition-colors"
              title="Print Resume"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Download size={14} />
              <span>Download</span>
            </button>

            <button
              onClick={() => {
                playPop();
                onClose();
              }}
              className="p-1.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors ml-2"
              aria-label="Close resume"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[var(--bg-primary)]">
          
          {/* Header Banner */}
          <div className="border-b border-[var(--border-color)] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-[var(--text-primary)] mb-1">
                Ganesh Kale
              </h1>
              <p className="text-base font-semibold text-cyan-400">
                Full Stack Developer & Systems Engineer
              </p>
            </div>

            <div className="space-y-1 text-xs text-[var(--text-secondary)] font-medium">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-cyan-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-cyan-400" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {resumeDetails.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4 flex items-center gap-2">
              <Briefcase size={14} className="text-cyan-400" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map(exp => (
                <div key={exp.id} className="p-4 rounded-2xl bg-[var(--glass-card-bg)] border border-[var(--border-color)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
                    </h4>
                    <span className="text-xs text-[var(--text-muted)] font-mono">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 mb-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-[var(--bg-primary)] text-[var(--text-muted)] font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3 flex items-center gap-2">
                <GraduationCap size={14} className="text-cyan-400" />
                Education
              </h3>
              {resumeDetails.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[var(--glass-card-bg)] border border-[var(--border-color)]">
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">{edu.degree}</h4>
                  <p className="text-xs text-cyan-400 mt-0.5">{edu.institution}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{edu.period} • {edu.grade}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3 flex items-center gap-2">
                <Award size={14} className="text-cyan-400" />
                Certifications
              </h3>
              <div className="p-4 rounded-2xl bg-[var(--glass-card-bg)] border border-[var(--border-color)] space-y-2">
                {resumeDetails.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

