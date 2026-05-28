import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.05,
  className = '',
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // Triggers slightly before element is fully in view
      }
    );

    observer.observe(currentRef);

    return () => {
      try {
        observer.unobserve(currentRef);
      } catch {
        // Safe fallback in case element was already unobserved or unmounted
      }
    };
  }, [threshold]);

  const animationClass = `reveal-${animation}`;

  return (
    <div
      ref={elementRef}
      className={`reveal-element ${animationClass} ${
        isRevealed ? 'revealed' : ''
      } ${className}`}
      style={{
        transitionDelay: isRevealed ? `${delay}ms` : '0ms',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}
