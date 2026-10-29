import React, { useEffect, useRef, useState } from 'react';

/**
 * High-performance lightweight scroll reveal wrapper
 * Uses IntersectionObserver to smoothly fade and slide in elements when scrolled into view
 */
export default function RevealOnScroll({
  children,
  className = '',
  threshold = 0.08,
  delay = 0,
  direction = 'up'
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If IntersectionObserver is not supported (e.g. legacy fallback), show immediately
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransformStyle = () => {
    if (isVisible) return 'opacity-100 translate-y-0 translate-x-0 scale-100';
    switch (direction) {
      case 'left':
        return 'opacity-0 -translate-x-8';
      case 'right':
        return 'opacity-0 translate-x-8';
      case 'none':
        return 'opacity-0 scale-98';
      case 'up':
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: '650ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform'
      }}
      className={`transition-all ${getTransformStyle()} ${className}`}
    >
      {children}
    </div>
  );
}

