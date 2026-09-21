'use client';

import { useState, useEffect } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

const GLYPHS = '01#$<>[]*!?_~XYZABCDEF789';

export default function DecryptedText({
  text,
  speed = 40,
  className = '',
  delay = 0,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let iteration = 0;

    timeoutId = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === ' ') return ' ';
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          setIsDone(true);
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return (
    <span className={`inline-block tracking-wider font-code ${className}`}>
      {displayText || text}
      {!isDone && <span className="text-red-500 animate-cursor ml-0.5">_</span>}
    </span>
  );
}
