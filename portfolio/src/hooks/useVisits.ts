import { useState, useEffect } from 'react';

export function useVisits() {
  const currentVisits = localStorage.getItem('visits') || 0;
  const [, setVisits] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (currentVisits === 0) {
      localStorage.setItem('visits', '1');
      setVisits(1);
      setMessage('Bienvenid@ a mi portfolio!');
    } else {
      const newCount = parseInt(currentVisits) + 1;
      localStorage.setItem('visits', newCount.toString());
      setVisits(newCount);
      setMessage('¡Me alegra volver a verte!');
    }
  }, []);
  
  return { message };
}
