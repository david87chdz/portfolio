import { useTranslation } from "react-i18next";
import { MoreProjects } from "../components/projects/MoreProjects";
import { Cvitae } from "../components/projects/Cvitae";
import { EligiendoUnFuturo } from "../components/projects/EligiendoUnFuturo";

export function Projects() {
  const { t } = useTranslation();

  return (
    <main className="w-full flex flex-col items-center bg-gray-200 dark:bg-gray-800 shadow-lg dark:shadow-5xl rounded-2xl">
      <section className="w-full flex flex-col items-center py-8 px-4">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="my-6 w-full max-w-4xl flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100 md:text-4xl">
            💻 {t("projectsTitle")}
          </h2>
          <div className="flex flex-col items-center gap-12">
            <EligiendoUnFuturo />
            <Cvitae />
            <MoreProjects />
          </div>
        </div>
      </section>
    </main>
  );
}
