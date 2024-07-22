import { EligiendoUnFuturo } from "./projects/EligiendoUnFuturo";
import { Cvitae } from "./projects/Cvitae";
import { Countries } from "./projects/Countries";

export function Proyects() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">💻 Proyectos</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <EligiendoUnFuturo />
          <Cvitae />
          <Countries />
        </div>
      </div>
    </section>
  );
}
