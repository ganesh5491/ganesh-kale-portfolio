import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import FeaturedProjects from './components/FeaturedProjects';
import Services from './components/Services';
import TechStackSection from './components/TechStackSection';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import WhatsAppChatButton from './components/WhatsAppChatButton';

// Lazy-load modals only when clicked
const ContactModal = lazy(() => import('./components/ContactModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-heading)] transition-colors duration-300 relative selection:bg-blue-600 selection:text-white">
      
      {/* Top Floating Navbar */}
      <Navbar
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections with Stable DOM IDs for Instant Navigation */}
      <main>
        {/* 1. Home / Hero Section (#home) */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me Section (#about) */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Work Experience Section (#experience) */}
        <WorkExperience onOpenResume={() => setIsResumeOpen(true)} />

        {/* 4. Featured Projects Section (#projects) */}
        <FeaturedProjects />

        {/* 5. Services Section (#services) */}
        <Services onSelectService={() => setIsContactOpen(true)} />

        {/* 6. Tech Stack Section (#skills) */}
        <TechStackSection />

        {/* 7. How I Build a Website (Process) */}
        <Process />

        {/* 8. Client Testimonials */}
        <Testimonials />

        {/* 9. Bottom CTA & Contact Section (#contact) */}
        <CtaBanner
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Chat Button */}
      <WhatsAppChatButton />

      {/* Interactive Contact & Resume Modals (Lazy Loaded on Demand) */}
      {isContactOpen && (
        <Suspense fallback={null}>
          <ContactModal onClose={() => setIsContactOpen(false)} />
        </Suspense>
      )}

      {isResumeOpen && (
        <Suspense fallback={null}>
          <ResumeModal onClose={() => setIsResumeOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
