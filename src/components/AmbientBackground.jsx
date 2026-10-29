import React, { useEffect, useState } from 'react';

export default function AmbientBackground({ theme }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // throttle mouse move calculation
      const xPercent = Math.round((e.clientX / window.innerWidth) * 100);
      const yPercent = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x: xPercent, y: yPercent });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Ambient Follower */}
      <div
        className="absolute rounded-full blur-[140px] opacity-25 transition-all duration-700 ease-out"
        style={{
          width: '500px',
          height: '500px',
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background:
            theme === 'frost'
              ? 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(99,102,241,0.05) 70%, transparent 100%)'
              : theme === 'emerald'
              ? 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(5,150,105,0.08) 70%, transparent 100%)'
              : 'radial-gradient(circle, rgba(56,189,248,0.25) 0%, rgba(129,140,248,0.12) 70%, transparent 100%)',
        }}
      />

      {/* Primary Top Aurora Orb */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full blur-[120px] opacity-40 animate-pulse"
        style={{
          background:
            theme === 'frost'
              ? 'radial-gradient(circle, rgba(147,197,253,0.5) 0%, rgba(199,210,254,0.3) 60%, transparent 100%)'
              : theme === 'emerald'
              ? 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(6,78,59,0.2) 60%, transparent 100%)'
              : 'radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(99,102,241,0.25) 60%, transparent 100%)',
        }}
      />

      {/* Mid Left Orb */}
      <div
        className="absolute top-1/3 -left-48 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
        style={{
          background:
            theme === 'frost'
              ? 'radial-gradient(circle, rgba(196,181,253,0.4) 0%, transparent 70%)'
              : theme === 'emerald'
              ? 'radial-gradient(circle, rgba(52,211,153,0.25) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
        }}
      />

      {/* Lower Right Orb */}
      <div
        className="absolute bottom-1/4 -right-48 w-[650px] h-[650px] rounded-full blur-[150px] opacity-20"
        style={{
          background:
            theme === 'frost'
              ? 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)'
              : theme === 'emerald'
              ? 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)',
        }}
      />

      {/* Geometric Ambient Grid / Starfield pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}

