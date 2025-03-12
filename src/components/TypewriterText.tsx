'use client';

import { useEffect, useState } from 'react';

export default function TypewriterText() {
  const [text, setText] = useState('');
  const fullText = "Hi, I am a 3rd-year undergrad major in Math-CS and minor in ICAM at UC San Diego. I am actively looking for various internship positions about SWE/MLE/Data Analysis/Web Development this summer 2025. Nice to meet U";

  useEffect(() => {
    let index = 0;
    let timer: NodeJS.Timeout;

    const typeWriter = () => {
      if (index < fullText.length) {
        setText(prev => prev + fullText.charAt(index));
        index++;
        timer = setTimeout(typeWriter, 50);
      }
    };

    typeWriter();
    return () => clearTimeout(timer);
  }, []);

  return <p>{text}</p>;
} 