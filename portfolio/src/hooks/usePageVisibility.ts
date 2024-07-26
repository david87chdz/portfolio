import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const usePageVisibility = () => {
  const { t } = useTranslation(); 

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = t('goodbyeMessage'); 
      } else {
        document.title = t('welcomeBackMessage'); 
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);


    handleVisibilityChange();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [t]); 

};

export default usePageVisibility;
