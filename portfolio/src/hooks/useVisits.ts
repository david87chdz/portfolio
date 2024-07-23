import { useEffect, useState } from 'react';

// To do:
// Change the localStorage for a cookie or a field in a database
export function useVisits() {   
 const currentVisits = localStorage.getItem('visits') || 0;
  const [visits, setVisits] = useState(0);
  
  useEffect(() => {
    if (currentVisits === 0) {
      localStorage.setItem('visits', '1');
      setVisits(1);
    } else {
      const newCount = parseInt(currentVisits) + 1;
      localStorage.setItem('visits', newCount.toString());
      setVisits(newCount);
    }
   }, []);
    
  return { visits };
}