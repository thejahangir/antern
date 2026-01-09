
import React, { useState, useEffect } from 'react';

export const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentProgress = (window.scrollY / scrollHeight) * 100;
        setProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none bg-transparent">
      <div 
        className="h-full bg-[#70e000] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(112,224,0,0.5)]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
