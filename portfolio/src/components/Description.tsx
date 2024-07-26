import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTypingEffect } from '../hooks/useTyppingEffect'; // Asegúrate de que el nombre del hook sea correcto
import reactImage from './../assets/fotoCv.jpeg';

export function Description() {
  const { t, i18n } = useTranslation();
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [joke, setJoke] = useState('');

  const displayedName = useTypingEffect(name, 43);
  const displayedText = useTypingEffect(text, 40);
  const displayedJoke = useTypingEffect(joke, 50);

  useEffect(() => {
    const descriptionName = t('description_name', { defaultValue: '' });
    const descriptionJoke = t('description_joke', { defaultValue: '' });
    const descriptionText = t('description_text', { defaultValue: '' });

    setName(descriptionName);
    setJoke(descriptionJoke);
    setText(descriptionText);
  }, [t, i18n.language]);

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-md p-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-start w-full max-w-6xl">
        <img
          src={reactImage}
          alt="David Cerezo"
          className="w-48 h-auto border-4 border-gray-300 dark:border-gray-600 shadow-xl rounded-lg mb-4 lg:mb-0 lg:mr-8 float-left"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:text-4xl lg:text-5xl text-left">
            &lt;{displayedName} /&gt;
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-4 italic text-left">
            &lt;{displayedJoke} /&gt;
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto text-justify">
            &lt;{displayedText} /&gt;
          </p>
        </div>
      </div>
    </div>
  );
}
