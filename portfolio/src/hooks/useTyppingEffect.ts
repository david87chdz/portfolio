import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, speed: number) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return; 

    let index = -1;
    setDisplayedText(''); 

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index >= text.length-1) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
}
