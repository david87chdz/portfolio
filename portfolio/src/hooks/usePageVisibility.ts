import { useEffect } from 'react';

const usePageVisibility = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = '¡Vuelve pronto 🥺!'; 
      } else {
        document.title = '!Bienvenido de nuevo 😊!'; 
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};

export default usePageVisibility;
