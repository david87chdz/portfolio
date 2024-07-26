import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, speed: number) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return;

    let index = -1; // Inicializamos en 0
    setDisplayedText(''); // Reiniciamos el texto mostrado

    // Usamos una función que actualiza el texto mostrado
    const updateText = () => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index >= text.length-1) {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(updateText, speed);

    return () => clearInterval(intervalId); // Limpiamos el intervalo al desmontar el componente
  }, [text, speed]);

  return displayedText;
}
