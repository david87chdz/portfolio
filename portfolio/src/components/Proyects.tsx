import { EligiendoUnFuturo } from "./projects/EligiendoUnFuturo";
import { Cvitae } from "./projects/Cvitae";
import { Countries } from "./projects/Countries";
import { useTranslation } from 'react-i18next'; 

export function Proyects() {
  const { t } = useTranslation(); 

  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          {t('projects_title')} 
        </h2>
        <div className="flex flex-wrap justify-center gap-20"> 
          <EligiendoUnFuturo />
          <Cvitae />
          <Countries />
        </div>
      </div>
    </div>
  );
}
