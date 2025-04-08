"use client"

import { useState, useEffect } from 'react';

// Define props interface
interface IntroAnimationProps {
  onComplete?: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [textVisible, setTextVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  
  useEffect(() => {
    // Start text animation after component mounts
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 300);
    
    // Start line animation after text appears
    const lineTimer = setTimeout(() => {
      setLineVisible(true);
    }, 1300); // 300ms initial delay + 1000ms for text animation
    
    // Call onComplete when animation finishes
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000); // Adjust timing as needed
    
    return () => {
      clearTimeout(textTimer);
      clearTimeout(lineTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);
  
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Text container - animated from bottom */}
        <div 
          className={`transition-all duration-1000 transform ${
            textVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
          }`}
        >
          <span className="text-6xl font-bold font-heading">
            <span className="text-primary">DIGITAL</span><span className="text-foreground">CRASH</span>
          </span>
        </div>
        
        {/* Line container - only appears after text is visible */}
        <div className={`h-1 mt-4 relative overflow-hidden w-full mx-auto transition-opacity duration-300 ${
          textVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Line background */}
          <div className="h-full w-full bg-gray-700"></div>
          
          {/* Animated line - starts animation after text is visible */}
          <div 
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out"
            style={{ 
              width: lineVisible ? '100%' : '0%',
              transitionDelay: '200ms'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}