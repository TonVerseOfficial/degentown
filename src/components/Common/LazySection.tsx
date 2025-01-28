import React, { Suspense, useEffect, useRef, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazySectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const LazySection: React.FC<LazySectionProps> = ({ children, id, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // 100px önce yüklemeye başla
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id={id} className={className}>
      {isVisible ? (
        <Suspense fallback={
          <div className="w-full h-32 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }>
          {children}
        </Suspense>
      ) : (
        <div className="w-full h-32 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default LazySection; 