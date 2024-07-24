import { useTranslation } from 'react-i18next';
import { Countries } from "../components/projects/Countries";
import { Cvitae } from "../components/projects/Cvitae";
import { EligiendoUnFuturo } from "../components/projects/EligiendoUnFuturo";

export function Projects() {
  const { t } = useTranslation();

  return (
    <div className="py-16 px-8 bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center justify-center projects">
      <div className="container mx-auto p-8 bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          💻 {t('projectsTitle')}
        </h2>
        <div className="flex flex-col items-center gap-12">
          <EligiendoUnFuturo />
          <Cvitae />
          <Countries />
        </div>
      </div>
    </div>
  );
}
